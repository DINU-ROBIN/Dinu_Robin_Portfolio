

# Create your models here.
from django.db import models

class Portfolio(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='portfolio/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title
    
    def short_description(self):
        """Return first 30 words of description"""
        words = self.description.split()
        return ' '.join(words[:30]) + ('...' if len(words) > 30 else '')
