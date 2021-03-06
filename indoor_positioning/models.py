import json
from datetime import datetime
from typing import List, Callable, Optional, Union

from django.db import models

__all__ = [
    'Data',
    'WifiData',
    'SensedDevice',
    'SensedRouter',
    'SensedMobile',
]


class Data(models.Model):
    class Meta:
        verbose_name = '原始数据'
        verbose_name_plural = verbose_name
        ordering = ['-time']

    id = models.BigAutoField(primary_key=True)
    json_data = models.TextField('原数据')
    time = models.DateTimeField('创建时间', auto_now_add=True)

    @property
    def raw_data(self) -> dict:
        return json.loads(self.json_data, strict=False)

    @raw_data.setter
    def raw_data(self, val):
        self.json_data = json.dumps(val)


class WifiData(Data):
    class Meta:
        verbose_name = 'WiFi数据'
        verbose_name_plural = verbose_name

    mobile_id = models.CharField('嗅探器ID', max_length=15)
    mobile_mac = models.CharField('嗅探器MAC地址', max_length=20)
    send_rate = models.IntegerField('发送频率')
    latitude = models.FloatField('维度', blank=True, null=True)
    longitude = models.FloatField('精度', blank=True, null=True)

    @property
    def data(self) -> List[dict]:
        return self.raw_data['data']

    def set_default(self, **field_values):
        raw_data = None
        for field, from_field in field_values.items():
            if getattr(self, field) in [None, '']:
                if raw_data is None:
                    # lazy load
                    raw_data = self.raw_data or {}
                try:
                    if isinstance(from_field, (list, tuple)):
                        from_field, cast = from_field
                        setattr(self, field, cast(raw_data.get(from_field)))
                    else:
                        setattr(self, field, raw_data[from_field])
                except:
                    pass

    def save(self, *args, **kwargs) -> None:
        self.set_default(
            mobile_id='id',
            mobile_mac='mmac',
            send_rate='rate',
            latitude=['lat', float],
            longitude=['lon', float],
        )
        super().save(*args, **kwargs)
        # 设备时间有误，使用服务器时间统一
        # if kwargs.get('force_insert', False):
        #     try:
        #         self.time = datetime.strptime(self.raw_data['time'], '%c')
        #     except:
        #         pass
        #     super().save(update_fields=['time'])


class SensedDevice(models.Model):
    '''
    被嗅探的设备信息

    每条记录对应原始WiFi嗅探数据data部分的一条信息
    '''
    class Meta:
        verbose_name = '设备'
        verbose_name_plural = verbose_name

    id = models.BigAutoField(primary_key=True)
    sensor: WifiData = models.ForeignKey(
        WifiData, on_delete=models.CASCADE,
        related_name='datas',
        verbose_name='嗅探器信息',
    )

    mac: str = models.CharField('MAC地址', max_length=20)
    rssi: float = models.FloatField('信号强度')
    range: float = models.FloatField('距离')
    rssi1: float = models.FloatField('rssi1', blank=True, null=True)
    rssi2: float = models.FloatField('rssi2', blank=True, null=True)
    rssi3: float = models.FloatField('rssi3', blank=True, null=True)
    rssi4: float = models.FloatField('rssi4', blank=True, null=True)


class SensedRouter(SensedDevice):
    '''被嗅探的路由器设备'''
    class Meta:
        verbose_name = '路由器设备'
        verbose_name_plural = verbose_name

    device_name: str = models.CharField('路由器名称', max_length=50)
    is_sensor: bool = models.BooleanField('嗅探器', default=False)
    # Omits other information (e.g. tmc) for simplicity.
    # connected_mac: str = None


class SensedMobile(SensedDevice):
    '''
    被嗅探的移动设备
    '''
    class Meta:
        verbose_name = '移动设备'
        verbose_name_plural = verbose_name

    class Status(models.TextChoices):
        CONNECTED = 'connected', '已连接'
        CONNECTING = 'connecting', '连接中'
        NOTCONNECTED = 'not connected', '未连接'

    status = models.CharField(
        'WIFI连接状态', max_length=20, choices=Status.choices)
    connected_ssid: str = models.CharField(
        '所连接WIFI ssid', max_length=50, blank=True, null=True)
    connected_mac: str = models.CharField(
        "所连接WIFI MAC地址", max_length=20, blank=True, null=True)

    # TODO: Adds essid and sleeping if necessary.
    # sleeping: bool = models.BooleanField('已休眠', default=False)
    # essid0-6: str = NotImplemented, maybe foreignkey
    # class EarlyWifiConnection: ForeignKey to SensedMobile
