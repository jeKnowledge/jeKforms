from django.urls import path

from . import views 

urlpatterns = [
    path('', views.home_page, name='forms-home'),
    path('forms/', views.all_forms, name='all-forms'),
    path('forms/<str:id>',views.forms_detail)
]