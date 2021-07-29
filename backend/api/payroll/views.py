from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

# Create your views here.
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world. You're at the payroll index.")

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer