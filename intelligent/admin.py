from django.contrib import admin

# Register your models here.
from intelligent.models import WaterQualityPredict

@admin.register(WaterQualityPredict)
class WaterQualityPredictAdmin(admin.ModelAdmin):
    list_display = ('id', 'TEMP', 'PH', 'DO', 'Cond', 'NTU', 'Mn', 'NH3')
    search_fields = ('TEMP', 'PH', 'DO', 'Cond', 'NTU', 'Mn', 'NH3')
    list_filter = ('TEMP', 'PH', 'DO', 'Cond', 'NTU', 'Mn', 'NH3')