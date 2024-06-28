from django.contrib import admin

# Register your models here.
from django.contrib import admin
from underwater.models import Fish, WaterQuality, Sensor

@admin.register(Fish)
class FishAdmin(admin.ModelAdmin):
    list_display = ('id', 'species', 'weight', 'length1', 'length2', 'length3', 'height', 'width')
    search_fields = ('species',)
    list_filter = ('species',)

@admin.register(WaterQuality)
class WaterQualityAdmin(admin.ModelAdmin):
    list_display = ('section_name', 'monitoring_time', 'water_quality_category', 'water_temperature', 'pH', 'dissolved_oxygen', 'conductivity', 'turbidity', 'permanganate_index', 'ammonia_nitrogen', 'total_phosphorus', 'total_nitrogen', 'site_status')
    search_fields = ('section_name', 'water_quality_category', 'site_status')
    list_filter = ('water_quality_category', 'site_status', 'monitoring_time')

@admin.register(Sensor)
class SensorAdmin(admin.ModelAdmin):
    list_display = ('sensor_id', 'type', 'battery_level', 'next_maintenance_date', 'warranty_expiration_date', 'start_date')
    search_fields = ('sensor_id', 'type')
    list_filter = ('type', 'next_maintenance_date', 'warranty_expiration_date', 'start_date')