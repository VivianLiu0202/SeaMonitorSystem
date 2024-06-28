from django.core.management.base import BaseCommand
import pandas as pd
from datacenter.models import Ohio
from django.db import models
from django.db.models import Count
class OhioManager(models.Manager):
    def get_top_8_size_classes(self):
        # 使用 ORM 查询获取前8个数量最多的 _3cm_Size_Class 及其数量
        result = self.values('_3cm_Size_Class').annotate(count=Count('_3cm_Size_Class')).order_by('-count')[:8]
        return result
    def get_6_latin(self):
        # 使用 ORM 查询获取前8个数量最多的 Latin_Name 及其数量
        result = self.values('Latin_Name').annotate(count=Count('Latin_Name')).order_by('-count')[:6]
        return result

class Command(BaseCommand):
    help = 'Import data for ohio from xlsx file'

    def handle(self, *args, **options):
        file_path = 'datacenter/data/ORSANCO-Fish-Population-Data-2010-2023.xlsx'  # 更新为实际的 CSV 文件路径
        df = pd.read_excel(file_path)
        df.dropna(inplace=True)

        # 遍历 DataFrame 的每一行
        for index, row in df.iterrows():
            # 检查是否有空值
            if row.isnull().any():
                # 删除包含空值的整行
                df.drop(index, inplace=True)

            Ohio.objects.create(
                _3cm_Size_Class=row['3cm_Size_Class'],  # 根据 CSV 列名和模型字段名调整
                weight_kg=row['Weight_kg'],
                latin_name=row['Latin_Name']
            )

        self.stdout.write(self.style.SUCCESS('Successfully imported ohio data'))


