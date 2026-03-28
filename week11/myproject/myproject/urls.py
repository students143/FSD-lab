from django.contrib import admin
from django.urls import path
from app import views

urlpatterns = [
    path('', views.home),
    path('about/', views.about),
    path('dashboard/', views.dashboard),
]