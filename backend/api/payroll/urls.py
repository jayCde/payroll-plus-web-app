from django.db import router
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from .views import UserViewSet

from . import views

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', views.index, name='index'),
    url(r'^', include(router.urls)),

]