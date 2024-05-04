from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegistrationSerializer

# Create your views here.
@api_view(['POST'])
def handle_form_data(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            # Construct email body
            body = ""
            for key, value in request.data.items():
                body += f"{key}: {value}\n"

            # Send email
            subject = 'Registration Successful'
            message = body
            recipient_email = serializer.validated_data['email']  # Assuming email is a field in your serializer
            send_mail(subject, message, 'brandon.h.goding@gmail.com', [recipient_email], bcc=["brandon.h.goding@gmail.com", "aparadis.creative@gmail.com"])
            return Response({'message': 'Form data received successfully!'})
        else:
            return Response(serializer.errors, status=400)
