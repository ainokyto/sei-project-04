# pylint: disable=no-member, no-self-use
from rest_framework import serializers
from wines.serializers import PopulatedWineSerializer
from .models import Winemaker

class WinemakerSerializer(serializers.ModelSerializer): # WRITE serializer, used to create winemakers

    class Meta:
        model = Winemaker
        fields = '__all__'

class PopulatedWinemakerSerializer(WinemakerSerializer):
    wines = PopulatedWineSerializer(many=True)