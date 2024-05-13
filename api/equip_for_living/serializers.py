from datetime import datetime

from django.urls import reverse

from .models import Registration, EventDate
from rest_framework import serializers


class EventDateSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventDate
        fields = ['date',]


class RegistrationListSerializer(serializers.ModelSerializer):
    attendance_dates = EventDateSerializer(many=True, read_only=True)
    url = serializers.SerializerMethodField()

    class Meta:
        model = Registration
        fields = ('__all__')

    def get_url(self, obj):
        request = self.context.get('request')
        if request is not None and obj.id:
            return reverse('registration_detail', kwargs={'pk': obj.id})
        return None


class RegistrationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Registration
        exclude = ('id', 'attendance_dates')


class EventDatesSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField()

    class Meta:
        model = EventDate
        fields = ('id', 'date', 'url')

    def get_url(self, obj):
        request = self.context.get('request')
        if request is not None and obj.date:
            return reverse('event_details', kwargs={'date': obj.date})
        return None


class EventDateDetailSerializer(serializers.ModelSerializer):
    surfer_registrations = serializers.SerializerMethodField()
    volunteer_registrations = serializers.SerializerMethodField()

    class Meta:
        model = EventDate
        fields = ('id', 'date', 'surfer_registrations', 'volunteer_registrations')

    def get_surfer_registrations(self, obj):
        surfer_registrations = obj.registration_set.filter(registration_type='Surfer')
        serializer = RegistrationListSerializer(surfer_registrations, many=True)
        return serializer.data

    def get_volunteer_registrations(self, obj):
        volunteer_registrations = obj.registration_set.filter(registration_type='Volunteer')
        serializer = RegistrationListSerializer(volunteer_registrations, many=True)
        return serializer.data
