from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer

@api_view(['POST'])
def submit_contact_form(request):
    print("DATA RECEIVED:", request.data) 
    serializer = ContactSubmissionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print("SAVED!") 
        return Response({'message': 'Contact form submitted successfully!'}, status=201)
    print("SERIALIZER ERRORS:", serializer.errors)  
    return Response(serializer.errors, status=400)
