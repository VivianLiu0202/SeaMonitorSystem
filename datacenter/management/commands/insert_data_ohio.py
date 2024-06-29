# coding=utf-8
from django.core.management.base import BaseCommand
import pandas as pd
from datacenter.models import Ohio


class Command(BaseCommand):
    help = 'Import data for Ohio from an Excel file'

    def handle(self, *args, **options):
        file_path = '/Users/hubocheng/coding/pycoding/ruangong_2/SeaMonitorSystem/datacenter/data/ORSANCO-Fish-Population-Data-2010-2023.xlsx'  # 确保文件路径正确
        df = pd.read_excel(file_path)
        # 修改列名映射
        df.rename(columns={'3cm_Size_Class': '_3cm_Size_Class'}, inplace=True)

        # 预处理数据，填充缺失值
        df.fillna({
            'Date': '1900-01-01',  # 用非真实日期表示缺失
            'Temp_C': 0,
            'River': '',
            'Conductivity': 0,
            'Common_Name': '',
            'Latin_Name': '',
            'PhyloNum': 0,
            'Count': 0,
            '_3cm_Size_Class': '',
            'Length_cm': 0.0,
            'Weight_kg': 0.0
        }, inplace=True)

        self.stdout.write(f"Rows to import: {len(df)}")

        for index, row in df.iterrows():
            try:
                Ohio.objects.create(
                    date=pd.to_datetime(row['Date'], errors='coerce'),  # 将字符串转换为日期，错误转换为NaT
                    temp_c=row['Temp_C'],
                    river=row['River'],
                    conductivity=row['Conductivity'],
                    common_name=row['Common_Name'],
                    latin_name=row['Latin_Name'],
                    phylo_num=int(row['PhyloNum']),
                    count=int(row['Count']),
                    _3cm_size_class=row['_3cm_Size_Class'],
                    length_cm=row['Length_cm'],
                    weight_kg=row['Weight_kg']
                )
            except Exception as e:
                self.stdout.write(self.style.ERROR(f'Error importing row {index + 2}: {e}'))  # Excel行号通常从1开始，标题行为1

        self.stdout.write(self.style.SUCCESS('Successfully imported Ohio data'))
