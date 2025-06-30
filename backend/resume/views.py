from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.shortcuts import get_object_or_404
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .models import Resume
import os
import mimetypes
from django.conf import settings
# import requests

@method_decorator(csrf_exempt, name='dispatch')
class ResumeDownloadView(View):
    def get(self, request, *args, **kwargs):
        try:
            # Get the active resume (you can modify this logic based on your needs)
            resume = Resume.objects.filter(is_active=True).first()
            
            if not resume or not resume.resume_file:
                raise Http404("Resume not found")
            
            # Get the file path
            file_path = resume.resume_file.path
            
            if not os.path.exists(file_path):
                # If file doesn't exist locally, try to serve from URL
                if resume.resume_file.url:
                    return HttpResponseRedirect(resume.resume_file.url)
                else:
                    # Fallback: try to serve from a known location in MEDIA_ROOT
                    try:
                        fallback_filename = '  DinuRobinResumeFINALjune2025.pdf'  # Use the correct filename
                        default_path = os.path.join(settings.MEDIA_ROOT, 'resumes', fallback_filename)
                        if os.path.exists(default_path):
                            with open(default_path, 'rb') as file:
                                response = HttpResponse(
                                    file.read(),
                                    content_type='application/pdf'
                                )
                                response['Content-Disposition'] = 'attachment; filename="Dinu_Robin_Resume.pdf"'
                                response['Access-Control-Allow-Origin'] = '*'
                                return response
                        else:
                            raise Http404("Resume file not found on server")
                    except Exception as e:
                        print(f"Error serving default file: {str(e)}")
                        raise Http404("Resume file not found on server")
            
            # Determine the content type
            content_type, _ = mimetypes.guess_type(file_path)
            if not content_type:
                content_type = 'application/pdf'
            
            # Get file extension for filename
            file_extension = os.path.splitext(resume.resume_file.name)[1]
            filename = f"Dinu_Robin_Resume{file_extension}"
            
            # Open and read the file
            with open(file_path, 'rb') as file:
                response = HttpResponse(
                    file.read(),
                    content_type=content_type
                )
                response['Content-Disposition'] = f'attachment; filename="{filename}"'
                response['Access-Control-Allow-Origin'] = '*'
                return response
                
        except Exception as e:
            print(f"Error downloading resume: {str(e)}")
            raise Http404("Error downloading resume")
