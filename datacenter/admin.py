from django.contrib import admin
from datacenter.models import Ohio


@admin.register(Ohio)
class OhioAdmin(admin.ModelAdmin):
    list_display = ('id', '_3cm_size_class', 'weight_kg', 'latin_name')
    search_fields = ('_3cm_size_class', 'latin_name')
    list_filter = ('_3cm_size_class', 'latin_name')
