from rest_framework import serializers
from djoser.serializers import UserCreateSerializer, UserSerializer

from .models import *


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            "email",
            "username",
            "password",
            "id",
            "first_name",
            "last_name",
            "cash",
        )


class UserSerializer(UserSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            "email",
            "username",
            "password",
            "id",
            "first_name",
            "last_name",
            "cash",
        )


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ["user", "symbol", "timestamp", "price", "qty", "type"]
