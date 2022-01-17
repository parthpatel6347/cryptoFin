from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(verbose_name="email", max_length=255, unique=True)
    cash = models.FloatField(default=10000)

    REQUIRED_FIELDS = ["username", "first_name", "last_name"]
    USERNAME_FIELD = "email"

    def get_username(self):
        return self.email


class Transaction(models.Model):

    TRANSACTION_CHOICES = [("sell", "sell"), ("buy", "buy")]

    user = models.ForeignKey(
        "User", on_delete=models.CASCADE, related_name="transactions"
    )
    symbol = models.CharField(max_length=10)
    timestamp = models.DateTimeField(auto_now_add=True)
    qty = models.FloatField()
    price = models.FloatField()
    type = models.CharField(max_length=4, choices=TRANSACTION_CHOICES)
