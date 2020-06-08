from rest_framework import serializers
from django.contrib.auth import get_user_model, password_validation as validations
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from reviews.serializers import ReviewSerializer
# from likes.serializers import LikeSerializer

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation= serializers.CharField(write_only=True)
    reviews = ReviewSerializer(many=True, required=False)
    # likes = LikeSerializer(many=True, required=False)

    def validate(self, data):
        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')
        if password != password_confirmation:
            raise ValidationError({'password_confirmation': 'Does Not Match'})
        # try:
        #     validations.validate_password(password=password)
        # except ValidationError as err:
        #     raise serializers.ValidationError({'password': err.messages}) #* will raise an error if that password is not strong enough, commenting out for development
        data['password'] = make_password(password)
        return data

    class Meta:
        model = User
        fields = '__all__'