from django.db import models

class ContactSubmission(models.Model):
    SERVICE_CHOICES = [
        ('ui_ux', 'UI/UX Design'),
        ('frontend', 'Frontend Development'),
        ('graphic', 'Graphic Design'),
    ]
    
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=20)
    email = models.EmailField()
    service_type = models.CharField(max_length=20, choices=SERVICE_CHOICES)
    project_description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name} - {self.service_type}"
    
    class Meta:
        ordering = ['-created_at']
