from django.core.management.base import BaseCommand
import pandas as pd
from maininfo.models import DataModel

class Command(BaseCommand):
    help = 'Import data from a csv file'

    def handle(self, *args, **options):
        df = pd.read_csv('path/to/your/file.csv')
        for index, row in df.iterrows():
            # 在这里你可能需要清洗或转换数据
            DataModel.objects.create(
                field1=row['column1'],
                field2=row['column2'],
                # 添加更多字段
            )
        self.stdout.write(self.style.SUCCESS('Successfully imported data'))