#!/usr/bin/env python
import os
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from resume.models import Resume

def fix_resume():
    # Get the active resume
    resume = Resume.objects.filter(is_active=True).first()
    
    if resume:
        # Update the file path to match the actual file
        resume.resume_file = 'resumes/DinuRobinResumefinal2025.pdf'
        resume.save()
        print(f"Updated resume file path to: {resume.resume_file}")
        
        # Verify the file exists
        file_path = resume.resume_file.path
        print(f"File path: {file_path}")
        print(f"File exists: {os.path.exists(file_path)}")
    else:
        print("No active resume found")

if __name__ == '__main__':
    fix_resume() 