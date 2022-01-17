# from django.http.response import HttpResponse
# from django.shortcuts import render
# from django.http import HttpResponse
# from django.http import JsonResponse
# from rest_framework.views import APIView
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.response import Response


# from .serializers import UserSerializer


# class RegisterView(APIView):
#     def post(self, request):
#         serializer = UserSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)
