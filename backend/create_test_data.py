#!/usr/bin/env python
import os
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from portfolio.models import Portfolio

def create_test_data():
    # Check if we already have portfolio items
    if Portfolio.objects.count() > 0:
        print(f"Found {Portfolio.objects.count()} existing portfolio items")
        return
    
    # Create some test portfolio items
    test_items = [
        {
            'title': 'E-commerce Website',
            'description': 'A modern e-commerce platform built with React and Django. Features include user authentication, product catalog, shopping cart, and payment integration.',
        },
        {
            'title': 'Task Management App',
            'description': 'A collaborative task management application with real-time updates, user roles, and project organization features.',
        },
        {
            'title': 'Portfolio Website',
            'description': 'A responsive portfolio website showcasing projects and skills with modern design and smooth animations.',
        },
        {
            'title': 'Weather Dashboard',
            'description': 'A weather application that displays current weather conditions and forecasts using external APIs and interactive charts.',
        },
        {
            'title': 'Blog Platform',
            'description': 'A full-featured blog platform with content management, user comments, and SEO optimization.',
        }
    ]
    
    for item in test_items:
        Portfolio.objects.create(
            title=item['title'],
            description=item['description']
        )
        print(f"Created portfolio item: {item['title']}")
    
    print(f"Successfully created {len(test_items)} portfolio items")

if __name__ == '__main__':
    create_test_data() 