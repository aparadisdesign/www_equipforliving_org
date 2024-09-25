from datetime import datetime
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from .serializers import RegistrationListSerializer, EventDatesSerializer, EventDateDetailSerializer, RegistrationSerializer, GrantApplicationSerializer
from .models import Registration, EventDate, GrantApplication
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated


# Create your views here.
class RegistrationCreateAPIView(CreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Extract attendance_dates from request data
        dates_data = request.data.get('attendance_dates', [])
        attendance_date_objs = []

        # Iterate over each date and create or retrieve EventDate objects
        for date_str in dates_data:
            try:
                date_obj = datetime.strptime(str(date_str), "%Y-%m-%d").date()
            except ValueError:
                # Handle invalid date format here
                continue

            event_date_obj, _ = EventDate.objects.get_or_create(date=date_obj)
            attendance_date_objs.append(event_date_obj)

        # Create the Registration object
        registration = Registration.objects.create(**serializer.validated_data)

        # Add the related EventDate objects to the registration
        registration.attendance_dates.set(attendance_date_objs)

        # Optionally, you can customize the response data
        response_data = {
            'registration': RegistrationListSerializer(registration).data,
            'message': 'Registration created successfully'
        }

        return Response(response_data, status=status.HTTP_201_CREATED)


class RegistrationListAPIView(ListAPIView):
    queryset = Registration.objects.all().order_by('last_name')
    serializer_class = RegistrationListSerializer
    permission_classes = (IsAuthenticated,)


class RegistrationDetailAPIView(RetrieveAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationListSerializer
    permission_classes = (IsAuthenticated,)


class GrantCreateAPIView(CreateAPIView):
    queryset = GrantApplication.objects.all()
    serializer_class = GrantApplicationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        grant = GrantApplication.objects.create(**serializer.validated_data)

        response_data = {
            'grant': GrantApplicationSerializer(grant).data,
            'message': 'Grant application created successfully'
        }

        return Response(response_data, status=status.HTTP_201_CREATED)
    