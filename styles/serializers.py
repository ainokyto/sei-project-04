# pre-populate with a serializer

from rest_framework import serializers
from .models import Style

class StyleSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Style
        fields = '__all__'