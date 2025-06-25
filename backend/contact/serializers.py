from rest_framework import serializers
from .models import ContactSubmission

class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ['id', 'name', 'phone_number', 'email', 'service_type', 'project_description', 'created_at']
        read_only_fields = ['id', 'created_at']
