from rest_framework import serializers
from .models import Portfolio

class PortfolioSerializer(serializers.ModelSerializer):
    short_description = serializers.ReadOnlyField()
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Portfolio
        fields = '__all__'
    
    def get_image_url(self, obj):
        if obj.image:
            # Return full URL
            return f"http://127.0.0.1:8000{obj.image.url}"
        return None
