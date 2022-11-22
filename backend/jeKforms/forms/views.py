from django.shortcuts import render

#usar só enquanto não temos mais nada
#from django.http import HttpResponse

from .models import Forms_Bio

def home_page(request):
    context = {
        'forms': Forms_Bio.objects.all()
    } 
    return render(request, 'forms/home.html', context)
