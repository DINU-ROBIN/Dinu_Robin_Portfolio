from django.contrib import admin
from .models import Resume

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ['user', 'title', 'uploaded_at', 'is_active']
    list_filter = ['is_active', 'uploaded_at']
    search_fields = ['title', 'user__username']
    list_editable = ['is_active']
    
    def save_model(self, request, obj, form, change):
        if not change:  # If creating new resume
            obj.user = request.user
        super().save_model(request, obj, form, change)

# Register your models here.
