from rest_framework import serializers

from .models import Wine
from winemakers.models import Winemaker 
from styles.serializers import StyleSerializer
from reviews.serializers import PopulatedReviewSerializer
# from likes.serializers import LikeSerializer


class WineSerializer(serializers.ModelSerializer):

    class Meta:
        model = Wine
        fields = '__all__'

class ProducerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Winemaker
        fields = ('id', 'name')

class PopulatedWineSerializer(WineSerializer):
    producer = ProducerSerializer()
    style = StyleSerializer(many=True)
    reviews = PopulatedReviewSerializer(many=True)
    # wine = PopulatedReviewSerializer(many=True)
    # likes = LikeSerializer()