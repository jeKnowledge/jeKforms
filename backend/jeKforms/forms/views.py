from django.shortcuts import render
from django.http import JsonResponse
from .serializers import FormSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

#usar só enquanto não temos mais nada
#from django.http import HttpResponse

from .models import Forms_Bio

def home_page(request):
    context = {
        'forms': Forms_Bio.objects.all()
    } 
    return render(request, 'forms/home.html', context)

@api_view(['GET','POST'])
def all_forms(request,format=None):
    if request.method == 'GET':
        # get all forms
        all_forms = Forms_Bio.objects.all()
        # transform to json
        serializer = FormSerializer(all_forms, many=True)

        return Response(serializer.data)
    if request.method == 'POST':
        serializer = FormSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        else:
            return "Error"

@api_view(['GET', 'PUT', 'DELETE'])
def forms_detail(request, id, format=None):
    try:
        forms = Forms_Bio.objects.get(pk=id)
    except Forms_Bio.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FormSerializer(forms)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = FormSerializer(forms, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        forms.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)





#def add_form(request)