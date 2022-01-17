from rest_framework import serializers
from djoser.serializers import UserCreateSerializer, UserSerializer

from .models import *


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ("email", "username", "password", "id", "first_name", "last_name")
