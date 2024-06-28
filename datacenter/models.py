# coding=utf-8
from django.db import models
from django.db.models import Count


class OhioManager(models.Manager):
    def get_top_8_size_classes(self):
        # 使用 ORM 查询获取前8个数量最多的 _3cm_Size_Class 及其数量
        result = self.values('_3cm_size_class').annotate(count=Count('_3cm_size_class')).order_by('-count')[:8]
        return result

    def get_6_latin(self):
        # 使用 ORM 查询获取前8个数量最多的 Latin_Name 及其数量
        result = self.values('latin_name').annotate(count=Count('latin_name')).order_by('-count')[:6]
        return result



class Ohio(models.Model):
    date = models.DateField(null=True, blank=True)
    temp_c = models.FloatField(null=True, blank=True)
    river = models.CharField(max_length=100, blank=True, default="")
    conductivity = models.FloatField(null=True, blank=True)
    common_name = models.CharField(max_length=100, blank=True, default="")
    latin_name = models.CharField(max_length=100, blank=True, default="")
    phylo_num = models.IntegerField(null=True, blank=True)
    count = models.IntegerField(null=True, blank=True)
    _3cm_size_class = models.CharField(max_length=50, blank=True, default="")
    length_cm = models.FloatField(null=True, blank=True)
    weight_kg = models.FloatField(null=True, blank=True)

    # 使用自定义 Manager
    objects = OhioManager()

    def __str__(self):
        return f"{self.common_name} ({self.latin_name}) - {self._3cm_size_class}"
