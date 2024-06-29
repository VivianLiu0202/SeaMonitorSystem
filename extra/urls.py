from django.urls import path
from .views import chat_api, detect_image, my_protected_view

urlpatterns = [
    path("send-message/", chat_api, name='send-message'),
    path('detect-image/', detect_image, name='detect_image'),
    path('protected/', my_protected_view, name='protected_view'),
]
