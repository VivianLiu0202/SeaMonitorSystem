from django.db import models

# Create your models here.
from django.db import models

class WaterQuality(models.Model):
    province = models.CharField(max_length=100, verbose_name="省份")
    watershed = models.CharField(max_length=100, verbose_name="流域")
    section_name = models.CharField(max_length=100, verbose_name="段面名称")
    monitoring_time = models.DateTimeField(verbose_name="监测时间", null=True)
    water_quality_category = models.CharField(max_length=50, verbose_name="水质类别",null=True)
    water_temperature = models.FloatField(verbose_name="水温(℃)", null=True)
    ph = models.FloatField(verbose_name="pH值", null=True)
    dissolved_oxygen = models.FloatField(verbose_name="溶解氧(mg/L)", null=True)
    conductivity = models.FloatField(verbose_name="电导率(μS/cm)", null=True)
    turbidity = models.FloatField(verbose_name="浊度(NTU)", null=True)
    permanganate_index = models.FloatField(verbose_name="高锰酸盐指数(mg/L)", null=True)
    ammonium_nitrogen = models.FloatField(verbose_name="氨氮(mg/L)", null=True)
    total_phosphorus = models.FloatField(verbose_name="总磷(mg/L)", null=True)
    total_nitrogen = models.FloatField(verbose_name="总氮(mg/L)", null=True)
    chlorophyll = models.FloatField(verbose_name="叶绿素(mg/L)", null=True)
    algae_density = models.FloatField(verbose_name="藻密度(cells/mL)", null=True)
    station_condition = models.CharField(max_length=200, verbose_name="站点情况", blank=True)

    class Meta:
        verbose_name = "水质监测数据"
        verbose_name_plural = "水质监测数据"

    def __str__(self):
        return "{self.section_name} - {self.monitoring_time.strftime('%Y-%m-%d %H:%M')}"



class WaterQualityRecordForMonth(models.Model):
    province = models.CharField(max_length=50)
    basin = models.CharField(max_length=50)
    section_name = models.CharField(max_length=100)
    monitoring_time = models.DateTimeField(null=True, blank=True)
    water_category = models.CharField(max_length=50, blank=True)
    water_temperature = models.CharField(max_length=50)
    ph = models.CharField(max_length=50)
    dissolved_oxygen = models.CharField(max_length=50)
    electrical_conductivity = models.CharField(max_length=50)
    turbidity = models.CharField(max_length=50)
    permanganate_index = models.CharField(max_length=50)
    ammonia_nitrogen = models.CharField(max_length=50)
    total_phosphorus = models.CharField(max_length=50)
    total_nitrogen = models.CharField(max_length=50)
    chlorophyll_a = models.CharField(max_length=50)
    algal_density = models.CharField(max_length=50)
    site_condition = models.CharField(max_length=100)