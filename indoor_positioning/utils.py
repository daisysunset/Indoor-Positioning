from indoor_positioning.models import *
from django.db.models import QuerySet
from typing import List, TypedDict, Tuple, Dict, Optional, Union
import math
import numpy as np

__all__ = [
    'get_sensors',
    'cal_A_and_N',
    'fetch_sense_datas',
    'get_distances',
    'get_positions',
]

SensorData = TypedDict('dict', id=str, A=float, N=float, x=float, y=float)
Sensors = Dict[str, SensorData]
SenseData = QuerySet[SensedMobile]
Distance = Tuple[str, float]
Distances = List[Distance]
Point = Tuple[float, float]

def get_sensors(option: str='json') -> Sensors:
    '''获取id升序的嗅探器配置，option决定从何处获取值，可选值暂时只用json'''
    sensor_ids = WifiData.objects.order_by(
        'mobile_id').values_list('mobile_id', flat=True).distinct()
    sensors = {sensor_id: dict(
            id=sensor_id,
        ) for sensor_id in sensor_ids}
    # 填补位置信息
    positions = [[0.0, 0.0], [0.0, 10.2], [6.47, 10.2]]
    # 暂用别组的参数
    # A = 51.345
    # N = 2.001
    # A = 54.44
    # N = 1.98
    As = [54.44, 62.78, 51.15]
    Ns = [1.98, 0.93, 2.69]
    for sensor, position, A, N in zip(sensors.values(), positions, As, Ns):
        sensor.update(
            A=A,
            N=N,
            x=position[0],
            y=position[1],
        )
    return sensors


def cal_A_and_N(rssis: List[float]=None) -> Tuple[float, float]:
    '''
    线性回归计算嗅探器的参数A和N
    传入距离为1，2，3，4，5m时的rssi数据
    rssi = -10*n*log_{10}(d) - A
    '''
    import numpy as np
    from sklearn.linear_model import LinearRegression
    distances = [1.0, 2.0, 3.0, 4.0, 5.0]
    if rssis == None:
        tA = 51.345
        tN = 2.001
        rssis = [(-10 * tN * np.log10(dis) - tA) for dis in distances]
    dataX = np.log10(distances)
    dataY = rssis
    model = LinearRegression()
    model.fit(dataX.reshape(-1, 1), dataY)

    a = model.coef_  #斜率/回归系数
    b = model.intercept_  #截距
    N = -a / 10
    A = -b
    return A, N[0]


def fetch_sense_datas(mobile_mac: str, sensors: Sensors,
                      max_count=1) -> List[Tuple[str, SenseData]]:
    '''获取指定设备最近的至多max_count条嗅探信息，更新到sensors中并返回列表'''
    sense_datas = []
    for sensor_id, sensor in sensors.items():
        sense_data = SensedMobile.objects.filter(
            sensor__mobile_id=sensor_id,
            mac=mobile_mac,
        ).order_by('-sensor__time')[:max_count]
        sensor.update(sense_data=sense_data)
        sense_datas.append((
            sensor_id,
            sense_data
        ))
    return sense_datas

def average_distance(distances_across_time:List[Distances]) -> List[Distances]:
    '''
    平均多个时刻的Distances为一个时刻的Distances
    '''
    # 保证多于2个时刻（后续会删除最大最小值）
    if len(distances_across_time) <= 2:
        return distances_across_time
    distance_zip = zip(*[i for i in distances_across_time])
    distance_average = []
    for distance_  in distance_zip:
        tmp = [distance[1] for distance in distance_] # List[float]
        tmp.remove(max(tmp))
        tmp.remove(min(tmp))
        tmp_average = sum(tmp) / len(tmp)
        distance_average.append ([(distance_[0][0],tmp_average)])
    return distance_average
    
def average_position(points:List[Point]) -> List[Point]:
    '''
    平均多个时刻的Point为一个时刻的Point
    '''
    x = 0
    y = 0
    length = len(points)
    for p in points:
        x += p[0]
        y += p[1]
    return [(x/length,y/length)]
    

def calculate_distance(sense_data: SensedMobile, sensor: SensorData,
                       option: str='rssi-mixed', **configs) -> float:
    if option == 'rssi-mixed':
        return pow(10, float((abs(sense_data.rssi) - sensor['A']) / (10 * sensor['N'])))
    else:
        return sense_data.range


def get_distances(sensors: Sensors,
                  sense_datas: List[Tuple[str, SenseData]]=None,
                  average: bool = True,
                  **cal_kws) -> List[Distances]:
    '''
    计算每个时刻，目标点与每个嗅探器的距离。

    average表示是否在计算距离时平均，默认进行平均
    cal_kws被传递给calculate_distance
    当sense_datas为空时，使用sensors中的数据
    '''
    if sense_datas is None:
        sense_datas = [(k, v.get('sense_data', [])) for k, v in sensors.items()]
    sensors_list = [sensors[sd[0]] for sd in sense_datas]
    sense_datas_zip = zip(*[sd[1] for sd in sense_datas])

    # 计算距离
    distances_across_time = []
    for sense_data_zip in sense_datas_zip:
        # 每个时刻
        distances = []
        for sensor, sense_data in zip(sensors_list, sense_data_zip):
            # 每一个嗅探设备
            distance = calculate_distance(sense_data, sensor, **cal_kws)
            distances.append((sensor['id'], distance))
        distances_across_time.append(distances)
    if average:
        return average_distance(distances_across_time)
    return distances_across_time


def calculate_position(distances: Distances,
                       sensors: Sensors) -> Point:
    '''根据距离和嗅探器位置，计算某一时刻的坐标
    
    返回值:point是最终的定位点
    如果两个圆有交点，验证第三个圆的半径和这个交点到圆心的距离是否相等，后者允许一定误差，若相等，算出近似交点；
    如果没有近似交点，返回三个模拟交点（每个模拟交点这样计算：相切就是切点，相离按比例取圆心连线上某点，相交取两个交点的中点）的平均。
    '''
    point = [0, 0]
    points = []  # 某两个圆的交点-可用于debug
    dis = []  # dis是测得的距离数组
    rs = []  # rs是路由器位置（二维数组）
    for distance in distances:  # 每个嗅探设备
        dis.append(distance[1])
        rs.append([sensors[distance[0]]['x'], sensors[distance[0]]['y']])
    assert (len(dis) == 3)
    assert (len(rs) == 3 and len(rs[0]) == 2)
    e = 0.2  # 允许的误差范围
    found = False  # 是否已经找到近似交点
    tmpx, tmpy = 0, 0
    tmpx1, tmpy1 = 0, 0
    tmpx2, tmpy2 = 0, 0
    for i in range(3):
        assert (dis[i] >= 0)
        if found:
            break
        for j in range(i + 1, 3):
            # 路由器间的距离
            p2p = math.sqrt((rs[i][0] - rs[j][0]) * (rs[i][0] - rs[j][0]) +
                            (rs[i][1] - rs[j][1]) * (rs[i][1] - rs[j][1]))
            if dis[i] + dis[j] >= p2p:  # 两圆有交点
                dr = p2p / 2 + (dis[i] * dis[i] - dis[j] * dis[j]) / (2 * p2p)
                ddr = math.sqrt(abs(dis[i] * dis[i] - dr * dr))
                # 两个交点的中点
                tmpx = rs[i][0] + (rs[j][0] - rs[i][0]) * dr / p2p
                tmpy = rs[i][1] + (rs[j][1] - rs[i][1]) * dr / p2p
                cos = -(rs[j][1] - rs[i][1]) / p2p
                sin = (rs[j][0] - rs[i][0]) / p2p
                # 两个or一个交点
                tmpx1 = tmpx + ddr * cos
                tmpx2 = tmpx - ddr * cos
                tmpy1 = tmpy + ddr * sin
                tmpy2 = tmpy - ddr * sin
                points.append([tmpx1, tmpy1])
                points.append([tmpx2, tmpy2])
            else:  # 两圆不相交 - 按比例模拟的交点
                tmpx = rs[i][0] + (rs[j][0] - rs[i][0]) * dis[i] / (dis[i] + dis[j])
                tmpy = rs[i][1] + (rs[j][1] - rs[i][1]) * dis[i] / (dis[i] + dis[j])

            # 两个圆有交点，看第三个圆的情况
            if dis[i] + dis[j] >= p2p:
                k = 3 - i - j
                dev1 = math.sqrt((tmpx1 - rs[k][0]) * (tmpx1 - rs[k][0]) +
                                 (tmpy1 - rs[k][1]) * (tmpy1 - rs[k][1]))
                if dev1 <= dis[k] + e and dev1 >= dis[k] - e:
                    point[0] = tmpx1 + (rs[k][0] - tmpx1) * (1 / 2 - dis[k] / (2 * dev1))
                    point[1] = tmpy1 + (rs[k][1] - tmpx1) * (1 / 2 - dis[k] / (2 * dev1))
                    found = True
                    break
                dev2 = math.sqrt((tmpx2 - rs[k][0]) * (tmpx2 - rs[k][0]) +
                                 (tmpy2 - rs[k][1]) * (tmpy2 - rs[k][1]))
                if dev2 <= dis[k] + e and dev2 >= dis[k] - e:
                    point[0] = tmpx2 + (rs[k][0] - tmpx2) * (1 / 2 - dis[k] / (2 * dev2))
                    point[1] = tmpy2 + (rs[k][1] - tmpx2) * (1 / 2 - dis[k] / (2 * dev2))
                    found = True
                    break
            # 没有近似交点
            point[0] += tmpx
            point[1] += tmpy

    if not found:
        point[0] /= 3
        point[1] /= 3

    return point

def cal_position_LSM(distances: Distances,
                       sensors: Sensors) -> Point:
    '''
    最小二乘法计算定位点
    最小化 $\Sigma( (x-x_i)^2 + (y - y_i)^2 - di^2 )$ 即|AX-B|
    '''
    dis = []    #dis是测得的距离数组
    rs = []     #rs是路由器位置（二维数组）
    for distance in distances:#每个嗅探设备
        dis.append(distance[1])
        rs.append([sensors[distance[0]]['x'],sensors[distance[0]]['y']])
    assert(len(dis) == 3)
    assert(len(rs) == 3 and len(rs[0]) == 2) 
    rs = np.array(rs)                
    A = np.array([2*(rs[1]- rs[0]),2*(rs[2]-rs[1])]) 
    B = np.array([[pow(dis[0],2) - pow(dis[1],2) - pow(rs[0][0],2) - pow(rs[0][1],2) + pow(rs[1][0],2) + pow(rs[1][1],2)],\
                  [pow(dis[1],2) - pow(dis[2],2) - pow(rs[1][0],2) - pow(rs[1][1],2) + pow(rs[2][0],2) + pow(rs[2][1],2)]])
    X = np.dot(np.linalg.inv(np.dot(A.T,A)),np.dot(A.T,B))
    return [X[0],X[1]]

def get_positions(distances_across_time: List[Distances],
                  sensors: Sensors,
                  average: bool = False,
                  way:str ='LSM') -> List[Point]:
    '''计算每个时刻，根据距离计算出的坐标
    average表示是否在计算坐标时进行平均，默认不进行平均
    way表示用什么方法计算坐标点，'LSM'表示用最小二乘法计算，否则用之前的算法，默认用最小二乘法
    '''
    if way == 'LSM':
        positions = [cal_position_LSM(distances, sensors) for distances in distances_across_time]
    else:
        positions = [calculate_position(distances, sensors) for distances in distances_across_time]
    if average:
        return average_position(positions)
    return positions
