from rest_framework import serializers
from django.contrib.auth import get_user_model

from wines.models import Wine
from .models import Review
# from wines.serializers import WineSerializer
User = get_user_model()

class WineSerializer(serializers.ModelSerializer):

    class Meta:
        model = Wine
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username')

class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'

class PopulatedReviewSerializer(ReviewSerializer):
    owner = UserSerializer()
    wine = WineSerializer()
    