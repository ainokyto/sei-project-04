# pylint: disable=no-member, no-self-use

from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Winemaker
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username')

class WinemakerSerializer(serializers.ModelSerializer): # WRITE serializer, used to create winemakers

    class Meta:
        model = Winemaker
        fields = '__all__'