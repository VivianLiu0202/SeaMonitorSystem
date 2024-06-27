from django.shortcuts import render,redirect
from django.shortcuts import render
from datacenter.models import Ohio

# Create your views here.
def datacenter(request):
    top_8_size_classes = Ohio.objects.get_top_8_size_classes()
    size_class_names = [size_class['_3cm_Size_Class'] for size_class in top_8_size_classes]
    size_class_counts = [size_class['count'] for size_class in top_8_size_classes]
    latin_names_classes = Ohio.objects.get_6_latin()
    latin_names_names = [latin['latin_name'] for latin in latin_names_classes]
    latin_names_counts = [latin['count'] for latin in latin_names_classes]

    context = {
        'size_class_names': size_class_names,
        'size_class_counts': size_class_counts,
        'latin_names_names': latin_names_names,
        'latin_names_counts' : latin_names_counts,
    }

    return render(request, 'html/dash-DataCenter.html', context)

from django.http import HttpResponse
from datacenter.models import Ohio
import csv

def download_ohio_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="datacenter_ohio_data.csv"'
    writer = csv.writer(response)
    writer.writerow(['Ohio'])
    for ohio in Ohio.objects.all():
        writer.writerow([ohio._3cm_Size_Class, ohio.weight_kg, ohio.latin_name])
    return response

