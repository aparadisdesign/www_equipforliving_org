from datetime import datetime
from .models import Registration, EventDate
from rest_framework import serializers


class EventDateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventDate
        fields = ('id', 'date')


class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Registration
        exclude = ('id', 'attendance_dates')

