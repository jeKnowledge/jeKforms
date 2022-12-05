from rest_framework import serializers
from .models import Forms_Bio

class FormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Forms_Bio
        fields = "__all__"