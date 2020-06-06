from rest_framework import serializers

from styles.serializers import StyleSerializer
from .models import Wine

class WineSerializer(serializers.ModelSerializer):

    class Meta:
        model = Wine
        fields = '__all__'

class PopulatedWineSerializer(WineSerializer):
    style = StyleSerializer(many=True)