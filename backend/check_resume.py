#!/usr/bin/env python
import os
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from resume.models import Resume

def check_resume():
    resumes = Resume.objects.all()
    print(f"Found {resumes.count()} resume(s) in database")
    
    for resume in resumes:
        print(f"ID: {resume.id}")
        print(f"Title: {resume.title}")
        print(f"User: {resume.user.username}")
        print(f"File: {resume.resume_file}")
        print(f"Active: {resume.is_active}")
        print(f"Uploaded: {resume.uploaded_at}")
        
        if resume.resume_file:
            file_path = resume.resume_file.path
            print(f"File path: {file_path}")
            print(f"File exists: {os.path.exists(file_path)}")
        else:
            print("No file attached")
        print("-" * 50)

if __name__ == '__main__':
    check_resume() 