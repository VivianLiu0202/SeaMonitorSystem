# coding=utf-8
import os
import csv
from django.core.management.base import BaseCommand
from django.utils.dateparse import parse_datetime
from maininfo.models import WaterQuality
from datetime import datetime


class Command(BaseCommand):
    help = '导入水质数据到数据库'

    def add_arguments(self, parser):
         parser.add_argument('data_directory', type=str, help='CSV 数据文件所在目录')
        # 接受一个单个文件的路径
        # parser.add_argument('csv_file_path', type=str, help='CSV文件的完整路径')

    def handle(self, *args, **kwargs):
        data_directory = kwargs['data_directory']
        # csv_file_path = kwargs['csv_file_path']
        # 遍历指定目录下的所有CSV文件
        for root, dirs, files in os.walk(data_directory):
            for file in files:
                if file.endswith('.csv'):
                    self.import_csv(os.path.join(root, file))
        # if os.path.exists(csv_file_path) and csv_file_path.endswith('.csv'):
        #     self.import_csv(csv_file_path)
        # else:
        #     self.stdout.write(self.style.ERROR(f'File {csv_file_path} does not exist or is not a CSV file.'))

    def safe_float(self, value):
        if value in ('*', '-', '--', ''):
            return None
        try:
            return float(value)
        except ValueError as e:
            self.stdout.write(self.style.ERROR(f'Failed to convert value: {value} - {str(e)}'))
            return None

    def safe_str(self, value):
        return value if value not in ('*', '-', '--', '') else None

    def parse_custom_datetime(self, date_str):
        # 去除可能的空白字符
        date_str = date_str.strip()
        default_year = "2024"  # 将年份作为字符串处理以便于后续拼接

        # 定义可能的日期格式
        date_formats = [
            '%Y/%m/%d %H:%M:%S',  # 完整格式
            '%Y/%m/%d %H:%M',  # 没有秒
            '%Y-%m-%d %H:%M:%S',  # 使用破折号
            '%Y-%m-%d %H:%M'
        ]

        # 首先尝试解析完整的日期时间字符串
        for fmt in date_formats:
            try:
                return datetime.strptime(date_str, fmt)
            except ValueError:
                continue  # 如果不匹配，继续尝试下一个格式

        # 处理没有年份的情况
        try:
            if '-' in date_str:
                date_str = f"{default_year}-{date_str}"  # 补全年份
            elif '/' in date_str:
                date_str = date_str.replace('/', '-')  # 替换分隔符
                date_str = f"{default_year}-{date_str}"

            # 重新尝试解析补全年份后的日期
            return datetime.strptime(date_str, '%Y-%m-%d %H:%M')
        except ValueError as e:
            # 如果解析失败，打印错误并返回None
            print(f"Error parsing date with default year: {date_str} - {e}")
            return None

    def import_csv(self, file_path):
        with open(file_path, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                # 使用自定义解析方法处理时间字段
                monitoring_time = self.parse_custom_datetime(row['监测时间']) if '监测时间' in row else None
                # 根据数据字段创建或更新数据库记录
                WaterQuality.objects.update_or_create(
                    province=self.safe_str(row.get('省份')),
                    watershed=self.safe_str(row.get('流域')),
                    section_name=self.safe_str(row.get('断面名称')),
                    monitoring_time=monitoring_time,
                    water_quality_category=self.safe_str(row.get('水质类别')),
                    defaults={
                        'water_temperature': self.safe_float(row.get('水温(℃)')),
                        'ph': self.safe_float(row.get('pH(无量纲)')),
                        'dissolved_oxygen': self.safe_float(row.get('溶解氧(mg/L)')),
                        'conductivity': self.safe_float(row.get('电导率(μS/cm)')),
                        'turbidity': self.safe_float(row.get('浊度(NTU)')),
                        'permanganate_index': self.safe_float(row.get('高锰酸盐指数(mg/L)')),
                        'ammonium_nitrogen': self.safe_float(row.get('氨氮(mg/L)')),
                        'total_phosphorus': self.safe_float(row.get('总磷(mg/L)')),
                        'total_nitrogen': self.safe_float(row.get('总氮(mg/L)')),
                        'chlorophyll': self.safe_float(row.get('叶绿素α(mg/L)')),
                        'algae_density': self.safe_float(row.get('藻密度(cells/L)')),
                        'station_condition': self.safe_str(row.get('站点情况'))
                    }
                )
            self.stdout.write(self.style.SUCCESS(f'Successfully imported {file_path}'))
