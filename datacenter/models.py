from django.db import models
from django.db.models import Count

class OhioManager(models.Manager):
    def get_top_8_size_classes(self):
        # 使用 ORM 查询获取前8个数量最多的 _3cm_Size_Class 及其数量
        result = self.values('_3cm_Size_Class').annotate(count=Count('_3cm_Size_Class')).order_by('-count')[:8]
        return result
    def get_6_latin(self):
        # 使用 ORM 查询获取前8个数量最多的 Latin_Name 及其数量
        result = self.values('latin_name').annotate(count=Count('latin_name')).order_by('-count')[:6]
        return result


# Create your models here.
class Ohio(models.Model):
    _3cm_Size_Class = models.CharField(max_length=50)
    weight_kg = models.FloatField()
    latin_name = models.CharField(max_length=50)
    # width = models.FloatField()
    objects = OhioManager()

    def __str__(self):
        return self._3cm_Size_Class
    
