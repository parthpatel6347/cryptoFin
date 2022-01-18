from django.urls import path, include

from core import views

urlpatterns = [
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
    path("wallet/", views.get_user_wallet),
]
