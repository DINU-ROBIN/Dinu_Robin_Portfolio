#!/usr/bin/env python
import os
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from resume.models import Resume
from django.contrib.auth.models import User

def upload_resume():
    # Get or create user
    user, created = User.objects.get_or_create(
        username='robin',
        defaults={'email': 'dinurobin21@gmail.com'}
    )
    
    # Get or create resume
    resume, created = Resume.objects.get_or_create(
        user=user,
        defaults={
            'title': 'Resume',
            'is_active': True
        }
    )
    
    # Check if file already exists
    if resume.resume_file and os.path.exists(resume.resume_file.path):
        print(f"Resume file already exists: {resume.resume_file.path}")
        return
    
    # Path to your resume file
    resume_file_path = os.path.join(BASE_DIR, 'media', 'resumes', 'DinuRobinResumefinal2025.pdf')
    
    if os.path.exists(resume_file_path):
        # Update the resume with the file
        with open(resume_file_path, 'rb') as f:
            resume.resume_file.save('DinuRobinResumefinal2025.pdf', f, save=True)
        print(f"Resume uploaded successfully: {resume.resume_file.path}")
    else:
        print(f"Resume file not found at: {resume_file_path}")

if __name__ == '__main__':
    from pathlib import Path
    BASE_DIR = Path(__file__).resolve().parent
    upload_resume() 