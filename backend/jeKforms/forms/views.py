from django.shortcuts import render

#usar só enquanto não temos mais nada
#from django.http import HttpResponse

from .models import Post

def home_page(request):
    context = {
        'posts': Post.objects.all()
    } 
    return render(request, 'forms/home.html', context)
