from django.contrib import admin
from indoor_positioning.models import *

# Register your models here.
@admin.register(Data)
class DataAdmin(admin.ModelAdmin):
    list_display = ['id', 'time', 'json_data']
    list_filter = ['time']
    search_fields = ['id']
    date_hierarchy = 'time'


@admin.register(WifiData)
class WifiDataAdmin(admin.ModelAdmin):
    list_display = ['id', 'mobile_id', 'mobile_mac', 'send_rate', 'time']
    list_filter = ['mobile_id', 'mobile_mac', 'time']
    search_fields = ['id', 'mobile_id']
    date_hierarchy = 'time'


@admin.register(SensedDevice)
class SensedDeviceAdmin(admin.ModelAdmin):
    list_display = [
        'id', 
        admin.display(lambda x: x.sensor.mobile_id, description='嗅探器ID'),
        admin.display(lambda x: x.sensor.mobile_mac, description='嗅探器MAC'),
        'mac', 'rssi', 'range',
        admin.display(lambda x: x.sensor.time, description='发送时间'),
    ]
    list_filter = ['sensor__mobile_id', 'mac']
    search_fields = ['sensor__mobile_id', 'mac']


@admin.register(SensedRouter)
class SensedRouterAdmin(admin.ModelAdmin):
    list_display = (
        SensedDeviceAdmin.list_display[:2]
        + ['device_name']
        + SensedDeviceAdmin.list_display[3:]
    )
    list_filter = ['is_sensor', 'device_name'] + SensedDeviceAdmin.list_filter
    search_fields = SensedDeviceAdmin.search_fields + ['device_name']


@admin.register(SensedMobile)
class SensedMobileAdmin(admin.ModelAdmin):
    list_display = (
        SensedDeviceAdmin.list_display[:2]
        + SensedDeviceAdmin.list_display[3:-1]
        + ['status', 'connected_ssid', 'connected_mac']
        + SensedDeviceAdmin.list_display[-1:]
    )
    list_filter = ['status', 'connected_ssid'] + SensedDeviceAdmin.list_filter
    search_fields = SensedDeviceAdmin.search_fields + ['connected_ssid']
