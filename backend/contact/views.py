from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer
import traceback

@api_view(['POST'])
def submit_contact_form(request):
    try:
        print("DATA RECEIVED:", request.data) 
        serializer = ContactSubmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print("SAVED!") 
            return Response({'message': 'Contact form submitted successfully!'}, status=201)
        print("SERIALIZER ERRORS:", serializer.errors)  
        return Response(serializer.errors, status=400)
    except Exception as e:
        print("CONTACT FORM ERROR:", e)
        traceback.print_exc()
        return Response({'error': str(e)}, status=500)
