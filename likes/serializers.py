# from rest_framework import serializers
# from django.contrib.auth import get_user_model

# from .models import Like
# User = get_user_model()

# class UserSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = User
#         fields = ('id', 'username')

# class LikeSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Like
#         fields = '__all__'

# class PopulatedLikeSerializer(LikeSerializer):
#     owner = UserSerializer()