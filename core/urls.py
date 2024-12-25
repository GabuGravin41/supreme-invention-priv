from django.urls import path
from . import views


app_name = "core"
urlpatterns = [
    path("", views.home, name="home"),
    path("disease/", views.disease, name="disease"),
    path("crop-recommendation/", views.crop_recommendation, name="crop_recommendation"),
    path("pest/", views.pest, name="pest_identification"),
    path("sensor-data/", views.sensor_data, name="sensor_data"),
]
