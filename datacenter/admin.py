from django.contrib import admin

# Register your models here.
from datacenter.models import Ohio

@admin.register(Ohio)
class OhioAdmin(admin.ModelAdmin):
    list_display = ('id', '_3cm_Size_Class', 'weight_kg', 'latin_name')
    search_fields = ('_3cm_Size_Class', 'latin_name')
    list_filter = ('_3cm_Size_Class', 'latin_name')