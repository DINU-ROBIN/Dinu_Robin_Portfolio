from django.contrib import admin
from .models import ContactSubmission

@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'service_type', 'created_at']
    list_filter = ['service_type', 'created_at']
    search_fields = ['name', 'email']
    readonly_fields = ['created_at']
