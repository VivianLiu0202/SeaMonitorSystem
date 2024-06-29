import re
import json
import os
from datetime import datetime
from django.core.management.base import BaseCommand
from underwater.models import WaterQualityDetail  # Ensure this import matches the actual path

def clean_html(raw_html):
    cleanr = re.compile('<.*?>')  # Regex to identify HTML tags
    cleantext = re.sub(cleanr, '', raw_html)  # Removing HTML tags
    return cleantext.strip()

def safe_float_conversion(value):
    try:
        return float(value)
    except ValueError:
        return None  # Return None if the conversion fails

class Command(BaseCommand):
    help = 'Imports water quality data from JSON files into the database'

    def add_arguments(self, parser):
        parser.add_argument('directory', type=str, help='Directory containing JSON files to import')

    def handle(self, *args, **options):
        directory = options['directory']
        if not os.path.isdir(directory):
            self.stdout.write(self.style.ERROR(f"The provided path {directory} is not a directory"))
            return

        total_imported = 0

        # Walk through the directory
        for subdir, dirs, files in os.walk(directory):
            for file in files:
                if file.endswith('.json'):
                    file_path = os.path.join(subdir, file)
                    year, month, day = file.split('/')[-1].split('-')
                    year = year.split('/')[-1]  # Extract year from path

                    self.stdout.write(self.style.SUCCESS(f'Processing file: {file_path}'))
                    try:
                        with open(file_path, 'r', encoding='utf-8') as file:
                            data = json.load(file)
                            tbody = data.get('tbody', [])
                            for item in tbody:
                                time_part = item[3] if item[3] else "00:00"  # Default to midnight if no time provided
                                full_date_str = f"{year}-{month}-{day[:2]} {time_part.split(' ')[-1]}"  # Extract only time from 'MM-DD HH:MM'
                                try:
                                    monitoring_time = datetime.strptime(full_date_str, "%Y-%m-%d %H:%M")
                                except ValueError as ve:
                                    self.stdout.write(
                                        self.style.ERROR(f"Error processing date and time for file {file}: {ve}"))
                                    continue

                                section_name = clean_html(item[2])

                                water_quality_detail, created = WaterQualityDetail.objects.update_or_create(
                                    section_name=section_name,
                                    monitoring_time=monitoring_time,
                                    defaults={
                                        'province': clean_html(item[0]),
                                        'river_basin': clean_html(item[1]),
                                        'water_quality_category': clean_html(item[4]),
                                        'water_temperature': safe_float_conversion(clean_html(item[5])),
                                        'pH': safe_float_conversion(clean_html(item[6])),
                                        'dissolved_oxygen': safe_float_conversion(clean_html(item[7])),
                                        'conductivity': safe_float_conversion(clean_html(item[8])),
                                        'turbidity': safe_float_conversion(clean_html(item[9])),
                                        'permanganate_index': safe_float_conversion(clean_html(item[10])),
                                        'ammonia_nitrogen': safe_float_conversion(clean_html(item[11])),
                                        'total_phosphorus': safe_float_conversion(clean_html(item[12])),
                                        'total_nitrogen': safe_float_conversion(clean_html(item[13])),
                                        'chlorophyll_a': safe_float_conversion(clean_html(item[14].replace('*', '0'))),
                                        'algae_density': safe_float_conversion(clean_html(item[15].replace('*', '0'))),
                                        'site_status': clean_html(item[16])
                                    }
                                )
                                if created:
                                    self.stdout.write(self.style.SUCCESS(
                                        f'Successfully created record for {section_name} at {monitoring_time}.'))
                                else:
                                    self.stdout.write(self.style.NOTICE(
                                        f'Updated existing record for {section_name} at {monitoring_time}.'))
                                total_imported += 1
                    except Exception as e:
                        self.stdout.write(self.style.ERROR(f'Error processing file {file_path}: {str(e)}'))

        self.stdout.write(self.style.SUCCESS(f'Finished processing. Total records processed: {total_imported}'))