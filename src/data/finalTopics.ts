// Final topics (13-18) for Django Academy

export const finalTopics: Record<string, any> = {
  '13': {
    title: 'Middleware',
    subtitle: 'Process requests before they reach views!',
    emoji: '⚙️',
    realWorldExample: 'Middleware is like a security checkpoint at an airport! ✈️ Every request passes through it before reaching your views - perfect for logging, authentication checks, and more!',
    quickTip: 'Middleware runs on EVERY request - use it wisely! ⚡',
    sections: [
      {
        heading: '🤔 What is Middleware?',
        content: 'Middleware is code that runs before AND after every view! Think of it as a processing pipeline!',
        points: [
          'Runs on EVERY request automatically',
          'Can modify requests before they reach views',
          'Can modify responses after views finish',
          'Perfect for cross-cutting concerns (auth, logging, etc.)',
          'Django comes with built-in middleware!'
        ],
        code: `# Request → Middleware → View → Middleware → Response

# File: settings.py
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Order matters! Top to bottom on request, bottom to top on response!`,
        language: 'python'
      },
      {
        heading: '🏗️ Creating Custom Middleware',
        content: 'Build your own middleware to add custom processing!',
        code: `# File: myapp/middleware.py

class SimpleMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        # One-time configuration
        print("Middleware initialized!")
    
    def __call__(self, request):
        # Code that runs BEFORE the view
        print(f"Request to: {request.path}")
        
        # Call the view
        response = self.get_response(request)
        
        # Code that runs AFTER the view
        print(f"Response status: {response.status_code}")
        
        return response

# Add to settings.py:
MIDDLEWARE = [
    # ... other middleware ...
    'myapp.middleware.SimpleMiddleware',
]`,
        language: 'python'
      },
      {
        heading: '📊 Logging Middleware Example',
        content: 'Log every request to your website!',
        code: `# File: myapp/middleware.py

import time
import logging

logger = logging.getLogger(__name__)

class RequestLoggingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        # Start timer
        start_time = time.time()
        
        # Log request
        logger.info(f"🌐 {request.method} {request.path}")
        
        # Process request
        response = self.get_response(request)
        
        # Calculate time taken
        duration = time.time() - start_time
        
        # Log response
        logger.info(
            f"✅ {response.status_code} | "
            f"{request.path} | "
            f"{duration:.2f}s"
        )
        
        return response`,
        language: 'python',
        note: 'Great for debugging - see exactly what\'s happening on your server! 🔍'
      },
      {
        heading: '👤 User Activity Middleware',
        content: 'Track what users are doing!',
        code: `# File: myapp/middleware.py

class UserActivityMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        # Check if user is logged in
        if request.user.is_authenticated:
            # Update last activity
            from django.utils import timezone
            request.user.last_activity = timezone.now()
            request.user.save(update_fields=['last_activity'])
        
        response = self.get_response(request)
        return response

# Need to add last_activity field to User model first!
# Or create a UserProfile model with this field`,
        language: 'python'
      },
      {
        heading: '🚫 Blocking Middleware',
        content: 'Block certain requests before they reach views!',
        code: `# File: myapp/middleware.py

from django.http import HttpResponseForbidden

class BlockIPMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.blocked_ips = ['192.168.1.100', '10.0.0.5']
    
    def __call__(self, request):
        # Get user's IP
        ip = self.get_client_ip(request)
        
        # Block if in blocked list
        if ip in self.blocked_ips:
            return HttpResponseForbidden("You are blocked! 🚫")
        
        response = self.get_response(request)
        return response
    
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip`,
        language: 'python'
      },
      {
        heading: '🎯 Adding Custom Headers',
        content: 'Add headers to all responses!',
        code: `# File: myapp/middleware.py

class CustomHeaderMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        response = self.get_response(request)
        
        # Add custom headers
        response['X-Powered-By'] = 'Django 🐍'
        response['X-Developer'] = 'Cool Coder'
        response['X-Response-Time'] = 'Fast ⚡'
        
        return response

# Now all responses have these headers!`,
        language: 'python'
      },
      {
        heading: '⚠️ Exception Handling Middleware',
        content: 'Catch errors before they crash your site!',
        code: `# File: myapp/middleware.py

import logging

logger = logging.getLogger(__name__)

class ErrorHandlingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        return self.get_response(request)
    
    def process_exception(self, request, exception):
        # Log the error
        logger.error(
            f"❌ Error at {request.path}: {str(exception)}",
            exc_info=True
        )
        
        # You could send an email, save to database, etc.
        
        # Return None to let Django handle it normally
        # Or return a custom response
        return None`,
        language: 'python'
      },
      {
        heading: '🔄 Request/Response Processing Methods',
        content: 'Special methods you can add to middleware!',
        code: `class AdvancedMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    
    def __call__(self, request):
        # Before view
        response = self.get_response(request)
        # After view
        return response
    
    def process_view(self, request, view_func, view_args, view_kwargs):
        # Called just before Django calls the view
        print(f"About to call view: {view_func.__name__}")
        return None  # or return HttpResponse to stop
    
    def process_exception(self, request, exception):
        # Called if view raises an exception
        logger.error(f"Error: {exception}")
        return None
    
    def process_template_response(self, request, response):
        # Called if response has render() method
        # Modify context or template here
        return response`,
        language: 'python',
        note: 'These special methods give you even more control! 🎛️'
      }
    ],
    challenge: 'Create a middleware that counts how many people visit your site and displays it! 📊'
  },
  '14': {
    title: 'Signals',
    subtitle: 'Make things happen automatically!',
    emoji: '📡',
    realWorldExample: 'Signals are like setting up dominoes! 🎲 When one thing happens (a user signs up), Django can automatically trigger another thing (send welcome email)!',
    quickTip: 'Use signals to keep your code organized and automatic! 🎯',
    sections: [
      {
        heading: '📻 What are Signals?',
        content: 'Signals let you run code automatically when certain events happen!',
        points: [
          'Signals are notifications sent when actions occur',
          'Like event listeners in JavaScript!',
          'Django has built-in signals for common actions',
          'You can create custom signals too',
          'Great for keeping code decoupled and organized'
        ],
        code: `# Example: When a user signs up...
# Signal: "Hey! A new user was created!"
# Your code: "Cool! Let's send them a welcome email!"

# Benefits:
# ✓ Keeps code organized
# ✓ Separates concerns
# ✓ Easy to add new actions
# ✓ Don't need to modify existing code`,
        language: 'python'
      },
      {
        heading: '🎯 Built-in Django Signals',
        content: 'Django comes with useful signals ready to use!',
        code: `# Model Signals (from django.db.models.signals):

pre_save        # Before model.save()
post_save       # After model.save()
pre_delete      # Before model.delete()
post_delete     # After model.delete()
m2m_changed     # When ManyToMany field changes

# Request/Response Signals (from django.core.signals):

request_started   # When HTTP request starts
request_finished  # When HTTP request ends

# User Signals (from django.contrib.auth.signals):

user_logged_in    # When user logs in
user_logged_out   # When user logs out
user_login_failed # When login fails`,
        language: 'python'
      },
      {
        heading: '✨ Using post_save Signal',
        content: 'Run code after saving a model!',
        code: `# File: myapp/signals.py (create this file)

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import UserProfile

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    """
    Automatically create a profile when user is created
    """
    if created:  # Only for new users
        UserProfile.objects.create(user=instance)
        print(f"✅ Profile created for {instance.username}!")

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    """
    Save profile when user is saved
    """
    instance.userprofile.save()

# File: myapp/apps.py
class MyappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'myapp'
    
    def ready(self):
        import myapp.signals  # Import signals`,
        language: 'python',
        note: 'Now every new user automatically gets a profile! No code needed in views! 🎉'
      },
      {
        heading: '📧 Sending Email on User Registration',
        content: 'Welcome new users automatically!',
        code: `# File: myapp/signals.py

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.core.mail import send_mail

@receiver(post_save, sender=User)
def send_welcome_email(sender, instance, created, **kwargs):
    if created:
        send_mail(
            subject='Welcome to our site! 🎉',
            message=f'Hi {instance.username}! Thanks for joining!',
            from_email='noreply@mysite.com',
            recipient_list=[instance.email],
            fail_silently=True,
        )
        print(f"📧 Welcome email sent to {instance.email}")

# Now every new user gets a welcome email automatically!`,
        language: 'python'
      },
      {
        heading: '🗑️ Using pre_delete Signal',
        content: 'Do something before an object is deleted!',
        code: `# File: myapp/signals.py

from django.db.models.signals import pre_delete, post_delete
from django.dispatch import receiver
from .models import Post
import logging

logger = logging.getLogger(__name__)

@receiver(pre_delete, sender=Post)
def log_post_deletion(sender, instance, **kwargs):
    """
    Log before deleting a post
    """
    logger.warning(
        f"🗑️ About to delete post: {instance.title} by {instance.author}"
    )

@receiver(post_delete, sender=Post)
def delete_post_files(sender, instance, **kwargs):
    """
    Delete associated files after post is deleted
    """
    if instance.image:
        # Delete the image file
        import os
        if os.path.isfile(instance.image.path):
            os.remove(instance.image.path)
            print(f"🖼️ Deleted image: {instance.image.name}")`,
        language: 'python'
      },
      {
        heading: '🔑 User Login/Logout Signals',
        content: 'Track when users log in and out!',
        code: `# File: myapp/signals.py

from django.contrib.auth.signals import (
    user_logged_in,
    user_logged_out,
    user_login_failed
)
from django.dispatch import receiver
from django.utils import timezone

@receiver(user_logged_in)
def on_user_logged_in(sender, request, user, **kwargs):
    """
    Track when user logs in
    """
    print(f"👋 {user.username} logged in at {timezone.now()}")
    
    # Update last login
    user.last_login = timezone.now()
    user.save()
    
    # Or create a login history entry
    # LoginHistory.objects.create(user=user, ip=get_client_ip(request))

@receiver(user_logged_out)
def on_user_logged_out(sender, request, user, **kwargs):
    """
    Track when user logs out
    """
    if user:
        print(f"👋 {user.username} logged out")

@receiver(user_login_failed)
def on_user_login_failed(sender, credentials, request, **kwargs):
    """
    Track failed login attempts
    """
    username = credentials.get('username')
    print(f"❌ Failed login attempt for: {username}")`,
        language: 'python'
      },
      {
        heading: '🎨 Creating Custom Signals',
        content: 'Make your own signals for custom events!',
        code: `# File: myapp/signals.py

from django.dispatch import Signal, receiver

# Create custom signal
post_published = Signal()  # When a blog post is published

# File: myapp/views.py

from .signals import post_published

def publish_post(request, post_id):
    post = Post.objects.get(id=post_id)
    post.is_published = True
    post.save()
    
    # Send the signal!
    post_published.send(
        sender=Post,
        post=post,
        published_by=request.user
    )
    
    return redirect('post-detail', id=post.id)

# File: myapp/handlers.py

@receiver(post_published)
def notify_subscribers(sender, post, published_by, **kwargs):
    """
    Notify all subscribers when post is published
    """
    print(f"📢 Post published: {post.title}")
    # Send emails to subscribers
    subscribers = post.author.subscribers.all()
    for subscriber in subscribers:
        send_mail(
            subject=f'New post from {post.author}!',
            message=f'{post.title}\\n\\n{post.content[:100]}...',
            from_email='noreply@mysite.com',
            recipient_list=[subscriber.email],
        )

@receiver(post_published)
def create_notification(sender, post, published_by, **kwargs):
    """
    Create in-app notification
    """
    Notification.objects.create(
        user=post.author,
        message=f'Your post "{post.title}" is now live! 🎉'
    )`,
        language: 'python',
        note: 'Custom signals let you create your own events! Super powerful! 💪'
      },
      {
        heading: '⚡ Signal Best Practices',
        content: 'Tips for using signals effectively!',
        points: [
          '✓ Keep signal handlers simple and fast',
          '✓ Don\'t do heavy processing in signals',
          '✓ Use signals for side effects, not core logic',
          '✓ Be careful of infinite loops (signal triggering signal)',
          '✓ Document your signals well',
          '✓ Consider using Celery for slow tasks (emails, etc.)'
        ],
        code: `# Good: Simple, fast operations
@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)  # Fast! ✅

# Bad: Slow operations
@receiver(post_save, sender=User)
def slow_operation(sender, instance, created, **kwargs):
    if created:
        # This is too slow! ❌
        send_100_emails()
        resize_50_images()
        call_slow_api()

# Better: Use background tasks
@receiver(post_save, sender=User)
def trigger_background_task(sender, instance, created, **kwargs):
    if created:
        # Send to background queue
        send_welcome_email.delay(instance.id)  # Celery task`,
        language: 'python'
      }
    ],
    challenge: 'Create a signal that sends you a message every time someone creates a post! 📬'
  },
  '15': {
    title: 'Django REST Framework (DRF)',
    subtitle: 'Build powerful APIs!',
    emoji: '🚀',
    realWorldExample: 'APIs are like a waiter at a restaurant! 🍽️ Your app asks the API for data (order food), and the API brings it back in a format your app can use (delivers your meal)!',
    quickTip: 'REST APIs let mobile apps, other websites, and more talk to your Django backend! 📱',
    sections: [
      {
        heading: '🌐 What is a REST API?',
        content: 'REST APIs let different programs talk to your Django app!',
        points: [
          'API = Application Programming Interface',
          'REST = Representational State Transfer (a style)',
          'Send data as JSON (like a dictionary)',
          'Use HTTP methods: GET, POST, PUT, DELETE',
          'Perfect for mobile apps, JavaScript frontends',
          'Works with any programming language!'
        ],
        code: `# Example API Request:
GET /api/posts/

# Response (JSON):
[
    {"id": 1, "title": "Hello World", "author": "Alex"},
    {"id": 2, "title": "Django is Cool", "author": "Sam"}
]

# Your mobile app, website, or any program can use this!`,
        language: 'json'
      },
      {
        heading: '📦 Installing Django REST Framework',
        content: 'First, install DRF!',
        code: `# Install Django REST Framework
pip install djangorestframework

# File: settings.py

INSTALLED_APPS = [
    # ... other apps ...
    'rest_framework',
]

# Optional: Add settings
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}`,
        language: 'python',
        note: 'DRF is a separate package that adds API superpowers to Django! 🦸'
      },
      {
        heading: '📝 Creating a Serializer',
        content: 'Serializers convert Python objects to JSON and back!',
        code: `# File: myapp/serializers.py (create this file)

from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author', 'created_at']
        # Or use '__all__' for all fields

# What it does:
post = Post.objects.get(id=1)
serializer = PostSerializer(post)
print(serializer.data)
# Output: {'id': 1, 'title': 'Hello', 'content': '...', ...}

# Convert back:
serializer = PostSerializer(data={'title': 'New Post', 'content': '...'})
if serializer.is_valid():
    serializer.save()  # Creates a Post!`,
        language: 'python'
      },
      {
        heading: '🎯 Creating API Views',
        content: 'Build views that return JSON instead of HTML!',
        code: `# File: myapp/views.py

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post
from .serializers import PostSerializer

@api_view(['GET'])
def post_list(request):
    """
    List all posts
    """
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)  # many=True for lists
    return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def post_detail(request, pk):
    """
    Get, update, or delete a specific post
    """
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = PostSerializer(post)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# File: myapp/urls.py

urlpatterns = [
    path('api/posts/', post_list),
    path('api/posts/<int:pk>/', post_detail),
]`,
        language: 'python'
      },
      {
        heading: '🏗️ Using ViewSets (Easier!)',
        content: 'ViewSets make APIs even easier - all CRUD in one class!',
        code: `# File: myapp/views.py

from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    """
    Automatically provides:
    - list (GET /posts/)
    - create (POST /posts/)
    - retrieve (GET /posts/1/)
    - update (PUT /posts/1/)
    - destroy (DELETE /posts/1/)
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# File: myapp/urls.py

from rest_framework.routers import DefaultRouter
from .views import PostViewSet

router = DefaultRouter()
router.register(r'posts', PostViewSet)

urlpatterns = router.urls

# That's it! All CRUD operations work automatically! 🎉`,
        language: 'python',
        note: 'ViewSets are like magic - write 4 lines, get a complete API! ✨'
      },
      {
        heading: '🔐 API Authentication',
        content: 'Protect your API so only authorized users can access it!',
        code: `# File: settings.py

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
}

# Token Authentication:

# 1. Add to INSTALLED_APPS
INSTALLED_APPS = [
    # ...
    'rest_framework.authtoken',
]

# 2. Run migrations
python manage.py migrate

# 3. Create tokens for users
from rest_framework.authtoken.models import Token
token = Token.objects.create(user=user)
print(token.key)  # Give this to the client

# 4. Client sends token in header:
# Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b

# File: views.py
from rest_framework.permissions import IsAuthenticated

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]  # Must be logged in!`,
        language: 'python'
      },
      {
        heading: '🎨 Custom Serializer Fields',
        content: 'Control exactly what data is returned!',
        code: `# File: serializers.py

from rest_framework import serializers
from .models import Post, Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'text', 'author', 'created_at']

class PostSerializer(serializers.ModelSerializer):
    # Include related comments
    comments = CommentSerializer(many=True, read_only=True)
    
    # Custom field
    comment_count = serializers.SerializerMethodField()
    
    # Make author_name instead of just author ID
    author_name = serializers.CharField(source='author.username', read_only=True)
    
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author_name', 'comments', 'comment_count']
    
    def get_comment_count(self, obj):
        return obj.comments.count()

# Result:
{
    "id": 1,
    "title": "Hello",
    "content": "...",
    "author_name": "Alex",
    "comment_count": 5,
    "comments": [
        {"id": 1, "text": "Nice!", ...},
        {"id": 2, "text": "Cool!", ...}
    ]
}`,
        language: 'python'
      },
      {
        heading: '🔍 Filtering & Searching',
        content: 'Let users search and filter your API!',
        code: `# Install django-filter
pip install django-filter

# File: settings.py

INSTALLED_APPS = [
    # ...
    'django_filters',
]

REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ],
}

# File: views.py

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filterset_fields = ['author', 'category', 'is_published']
    search_fields = ['title', 'content']
    ordering_fields = ['created_at', 'title']

# Now you can use:
# /api/posts/?author=1              # Filter by author
# /api/posts/?search=django         # Search in title/content
# /api/posts/?ordering=-created_at  # Order by newest`,
        language: 'python'
      },
      {
        heading: '📱 Testing Your API',
        content: 'Use these tools to test your API!',
        code: `# 1. Django REST Framework Web Interface
# Just visit your API URL in a browser!
# http://localhost:8000/api/posts/
# You'll see a beautiful interface to test your API! 🎨

# 2. Using curl (command line)
curl http://localhost:8000/api/posts/

# 3. Using Python requests
import requests

# GET request
response = requests.get('http://localhost:8000/api/posts/')
print(response.json())

# POST request
data = {'title': 'New Post', 'content': 'Hello!'}
response = requests.post('http://localhost:8000/api/posts/', json=data)

# With authentication
headers = {'Authorization': 'Token YOUR_TOKEN_HERE'}
response = requests.get('http://localhost:8000/api/posts/', headers=headers)

# 4. Browser tools: Postman, Insomnia (free!)`,
        language: 'python',
        note: 'DRF\'s built-in interface makes testing super easy! Just use your browser! 🌐'
      }
    ],
    challenge: 'Create a simple API for your favorite books! Include title, author, and rating! 📚'
  },
  '16': {
    title: 'Security in Django',
    subtitle: 'Keep your website safe from bad guys!',
    emoji: '🛡️',
    realWorldExample: 'Security is like having locks on your doors and windows! 🔒 Django comes with built-in protection against common attacks - it\'s like having a security guard!',
    quickTip: 'Django protects you automatically from many attacks - but you still need to follow best practices! 🛡️',
    sections: [
      {
        heading: '🔐 Django\'s Built-in Security',
        content: 'Django protects you from common attacks automatically!',
        points: [
          '🛡️ CSRF Protection - Stops fake form submissions',
          '🚫 SQL Injection Protection - ORM prevents malicious database queries',
          '⚠️ XSS Protection - Auto-escapes HTML in templates',
          '🔒 Password Hashing - Never stores plain text passwords',
          '🎯 Clickjacking Protection - Prevents your site being framed',
          '✅ Security middleware enabled by default'
        ],
        code: `# Django does this automatically:

# 1. CSRF Protection
{% csrf_token %}  # In every form

# 2. SQL Injection Prevention
User.objects.filter(username=user_input)  # Safe! ✅
# vs raw SQL with user input (dangerous!) ❌

# 3. XSS Protection
{{ user_input }}  # Automatically escaped!
{{ user_input|safe }}  # Only if you trust it!

# 4. Password Hashing
user.set_password('plain_password')  # Automatically hashed!`,
        language: 'django',
        note: 'Django is secure by default - but you need to use it correctly! 🎯'
      },
      {
        heading: '🔑 Secure Password Storage',
        content: 'Django handles passwords safely!',
        code: `# ALWAYS use these methods:

from django.contrib.auth.models import User

# Create user (password auto-hashed)
user = User.objects.create_user(
    username='alex',
    password='secretpassword'
)

# Check password
if user.check_password('secretpassword'):
    print("Correct! ✅")

# Change password
user.set_password('newpassword')
user.save()

# NEVER do this:
user.password = 'plaintext'  # ❌ WRONG!

# Password is stored as:
# "pbkdf2_sha256$260000$..." (hashed and salted)`,
        language: 'python'
      },
      {
        heading: '🌐 HTTPS and Secure Settings',
        content: 'Important security settings for production!',
        code: `# File: settings.py (for production)

# Force HTTPS
SECURE_SSL_REDIRECT = True

# Secure cookies
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

# Prevent browsers from guessing content type
SECURE_CONTENT_TYPE_NOSNIFF = True

# Enable browser XSS protection
SECURE_BROWSER_XSS_FILTER = True

# Prevent clickjacking
X_FRAME_OPTIONS = 'DENY'

# HSTS - Force HTTPS for specified time
SECURE_HSTS_SECONDS = 31536000  # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

# Hide Django version
SECURE_REFERRER_POLICY = 'same-origin'`,
        language: 'python',
        note: 'Only enable these in production with HTTPS! 🔒'
      },
      {
        heading: '🚫 Protecting Against CSRF',
        content: 'CSRF = Cross-Site Request Forgery. Django stops it automatically!',
        code: `# Always include CSRF token in forms:

<!-- ✅ Safe Form -->
<form method="POST">
    {% csrf_token %}
    <input type="text" name="username">
    <button type="submit">Submit</button>
</form>

<!-- ❌ Unsafe Form - will be rejected! -->
<form method="POST">
    <input type="text" name="username">
    <button type="submit">Submit</button>
</form>

# In AJAX requests:
fetch('/api/endpoint/', {
    method: 'POST',
    headers: {
        'X-CSRFToken': getCookie('csrftoken'),
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
});`,
        language: 'django'
      },
      {
        heading: '✨ Preventing XSS Attacks',
        content: 'XSS = Cross-Site Scripting. Django escapes HTML automatically!',
        code: `# Django automatically escapes dangerous HTML:

# User enters: <script>alert('hacked!')</script>
{{ user_input }}
# Renders as: &lt;script&gt;alert('hacked!')&lt;/script&gt;
# Browser shows it as text, not code! ✅

# Only mark as safe if you trust the source:
{{ trusted_html|safe }}  # Use carefully!

# In Python code:
from django.utils.html import escape

safe_text = escape(user_input)  # Escapes HTML

# Allow specific HTML tags:
from django.utils.html import strip_tags

clean_text = strip_tags(user_input)  # Removes all HTML`,
        language: 'django',
        note: 'Never use |safe on user input unless you know it\'s safe! 🚨'
      },
      {
        heading: '🔐 Environment Variables for Secrets',
        content: 'Never hardcode secrets in code!',
        code: `# ❌ BAD - secrets in code:
SECRET_KEY = 'django-insecure-hardcoded-key-123'
DATABASE_PASSWORD = 'mypassword123'

# ✅ GOOD - use environment variables:

# 1. Install python-decouple
pip install python-decouple

# 2. Create .env file (add to .gitignore!)
# File: .env
SECRET_KEY=your-secret-key-here
DEBUG=False
DATABASE_URL=postgres://user:pass@localhost/dbname

# 3. Use in settings.py
from decouple import config

SECRET_KEY = config('SECRET_KEY')
DEBUG = config('DEBUG', default=False, cast=bool)
DATABASE_URL = config('DATABASE_URL')

# 4. Add .env to .gitignore
echo ".env" >> .gitignore

# Secrets never go to GitHub! 🎉`,
        language: 'python'
      },
      {
        heading: '👤 User Input Validation',
        content: 'Always validate and sanitize user input!',
        code: `# Use Django forms for validation:

from django import forms

class CommentForm(forms.Form):
    text = forms.CharField(
        max_length=500,
        min_length=1,
        strip=True  # Remove whitespace
    )
    email = forms.EmailField()  # Validates email format
    
    def clean_text(self):
        text = self.cleaned_data['text']
        
        # Check for spam keywords
        spam_words = ['spam', 'viagra', 'casino']
        if any(word in text.lower() for word in spam_words):
            raise forms.ValidationError('Spam detected! 🚫')
        
        return text

# Never trust user input:
# ❌ eval(user_input)  # VERY DANGEROUS!
# ❌ exec(user_input)  # VERY DANGEROUS!

# Always validate file uploads:
def clean_file(self):
    file = self.cleaned_data['file']
    if file.size > 5 * 1024 * 1024:  # 5MB
        raise forms.ValidationError('File too large!')
    return file`,
        language: 'python'
      },
      {
        heading: '🎯 Security Best Practices',
        content: 'Follow these tips to keep your site secure!',
        points: [
          '✓ Keep Django and packages updated',
          '✓ Use strong SECRET_KEY (long, random)',
          '✓ Set DEBUG = False in production',
          '✓ Use ALLOWED_HOSTS in production',
          '✓ Always use {% csrf_token %} in forms',
          '✓ Never store passwords in plain text',
          '✓ Use environment variables for secrets',
          '✓ Validate all user input',
          '✓ Use HTTPS in production',
          '✓ Regular security audits'
        ],
        code: `# File: settings.py (Production)

# ✅ Good production settings:
DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com', 'www.yourdomain.com']
SECRET_KEY = config('SECRET_KEY')  # From environment variable

# ✅ Keep packages updated:
pip install --upgrade django
pip list --outdated

# ✅ Security checklist:
python manage.py check --deploy`,
        language: 'python'
      }
    ],
    challenge: 'Run python manage.py check --deploy and fix any security warnings! 🔒'
  },
  '17': {
    title: 'Testing & Debugging',
    subtitle: 'Find and fix bugs like a detective!',
    emoji: '🐛',
    realWorldExample: 'Testing is like checking your homework before turning it in! ✅ You make sure everything works correctly so users don\'t find problems later!',
    quickTip: 'Write tests as you code - it saves time finding bugs later! 🎯',
    sections: [
      {
        heading: '🧪 Why Test?',
        content: 'Testing helps you find bugs before your users do!',
        points: [
          '✓ Catch bugs early',
          '✓ Make sure your code actually works',
          '✓ Prevent regressions (old bugs coming back)',
          '✓ Document how your code should work',
          '✓ Confidence to refactor code',
          '✓ Professional development practice'
        ],
        code: `# Without tests:
# 😰 "Did I break something?"
# 😱 "Users found a bug!"
# 😭 "I can't remember how this works!"

# With tests:
# 😊 "All tests pass - deploy with confidence!"
# 🎉 "Tests caught the bug before users saw it!"
# 💪 "Tests document how it works!"`,
        language: 'python'
      },
      {
        heading: '✅ Writing Your First Test',
        content: 'Django makes testing easy!',
        code: `# File: myapp/tests.py

from django.test import TestCase
from .models import Post

class PostModelTest(TestCase):
    def setUp(self):
        # Runs before each test
        Post.objects.create(
            title="Test Post",
            content="Test content"
        )
    
    def test_post_creation(self):
        """Test that post was created correctly"""
        post = Post.objects.get(title="Test Post")
        self.assertEqual(post.content, "Test content")
        self.assertIsNotNone(post.created_at)
    
    def test_post_str(self):
        """Test __str__ method"""
        post = Post.objects.get(title="Test Post")
        self.assertEqual(str(post), "Test Post")
    
    def test_post_count(self):
        """Test post count"""
        count = Post.objects.count()
        self.assertEqual(count, 1)

# Run tests:
python manage.py test`,
        language: 'python',
        note: 'Each test method must start with "test_" 🎯'
      },
      {
        heading: '🎯 Testing Views',
        content: 'Test that your views work correctly!',
        code: `# File: myapp/tests.py

from django.test import TestCase, Client
from django.urls import reverse
from .models import Post

class PostViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.post = Post.objects.create(
            title="Test Post",
            content="Test content"
        )
    
    def test_post_list_view(self):
        """Test post list view"""
        response = self.client.get(reverse('post-list'))
        
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Test Post")
        self.assertTemplateUsed(response, 'post_list.html')
    
    def test_post_detail_view(self):
        """Test post detail view"""
        url = reverse('post-detail', args=[self.post.id])
        response = self.client.get(url)
        
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Test content")
    
    def test_post_create_view(self):
        """Test creating a post"""
        response = self.client.post(reverse('post-create'), {
            'title': 'New Post',
            'content': 'New content'
        })
        
        self.assertEqual(response.status_code, 302)  # Redirect
        self.assertTrue(Post.objects.filter(title='New Post').exists())`,
        language: 'python'
      },
      {
        heading: '🔐 Testing Authentication',
        content: 'Test login, logout, and permissions!',
        code: `# File: myapp/tests.py

from django.test import TestCase
from django.contrib.auth.models import User

class AuthenticationTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass123'
        )
    
    def test_login(self):
        """Test user can log in"""
        logged_in = self.client.login(
            username='testuser',
            password='testpass123'
        )
        self.assertTrue(logged_in)
    
    def test_protected_view(self):
        """Test protected view requires login"""
        # Without login
        response = self.client.get(reverse('profile'))
        self.assertEqual(response.status_code, 302)  # Redirects to login
        
        # With login
        self.client.login(username='testuser', password='testpass123')
        response = self.client.get(reverse('profile'))
        self.assertEqual(response.status_code, 200)  # Success!`,
        language: 'python'
      },
      {
        heading: '📝 Testing Forms',
        content: 'Make sure your forms validate correctly!',
        code: `# File: myapp/tests.py

from django.test import TestCase
from .forms import PostForm

class PostFormTest(TestCase):
    def test_valid_form(self):
        """Test form with valid data"""
        form = PostForm(data={
            'title': 'Test Post',
            'content': 'Test content'
        })
        self.assertTrue(form.is_valid())
    
    def test_invalid_form_empty_title(self):
        """Test form rejects empty title"""
        form = PostForm(data={
            'title': '',
            'content': 'Test content'
        })
        self.assertFalse(form.is_valid())
        self.assertIn('title', form.errors)
    
    def test_title_too_short(self):
        """Test title minimum length"""
        form = PostForm(data={
            'title': 'Hi',  # Too short
            'content': 'Test content'
        })
        self.assertFalse(form.is_valid())`,
        language: 'python'
      },
      {
        heading: '🔍 Debugging with Print Statements',
        content: 'The simplest debugging technique!',
        code: `# File: views.py

def my_view(request):
    print("🔍 View called!")
    print(f"Method: {request.method}")
    print(f"User: {request.user}")
    
    posts = Post.objects.all()
    print(f"📊 Found {posts.count()} posts")
    
    for post in posts:
        print(f"  - {post.title}")
    
    return render(request, 'template.html', {'posts': posts})

# Check your terminal/console to see the output!`,
        language: 'python',
        note: 'Print statements are simple but effective! 🎯'
      },
      {
        heading: '🐛 Using Django Debug Toolbar',
        content: 'See exactly what\'s happening in your Django app!',
        code: `# Install:
pip install django-debug-toolbar

# File: settings.py

INSTALLED_APPS = [
    # ...
    'debug_toolbar',
]

MIDDLEWARE = [
    # ...
    'debug_toolbar.middleware.DebugToolbarMiddleware',
]

INTERNAL_IPS = [
    '127.0.0.1',
]

# File: urls.py

import debug_toolbar

urlpatterns = [
    # ...
    path('__debug__/', include(debug_toolbar.urls)),
]

# Now visit your site - you'll see a toolbar on the right!
# Shows: SQL queries, templates used, time taken, and more! 🎉`,
        language: 'python'
      },
      {
        heading: '📊 Test Coverage',
        content: 'See how much of your code is tested!',
        code: `# Install coverage:
pip install coverage

# Run tests with coverage:
coverage run --source='.' manage.py test

# See coverage report:
coverage report

# Results:
# Name                  Stmts   Miss  Cover
# -----------------------------------------
# myapp/models.py          20      2    90%
# myapp/views.py           30      5    83%
# myapp/forms.py           15      0   100%
# -----------------------------------------
# TOTAL                    65      7    89%

# Generate HTML report:
coverage html
# Open htmlcov/index.html in browser for detailed view

# Aim for 80%+ coverage! 🎯`,
        language: 'bash'
      },
      {
        heading: '💡 Debugging Tips',
        content: 'Become a debugging master!',
        points: [
          '🔍 Read error messages carefully - they tell you what\'s wrong!',
          '📍 Check the line number in the error',
          '🖨️ Use print() statements to see what\'s happening',
          '🐛 Use Django Debug Toolbar to see queries and timing',
          '📝 Add logging instead of print for production',
          '🧪 Write tests to catch bugs early',
          '🔄 Use git to see what changed recently',
          '💬 Ask for help - describe what you tried',
          '🎯 Break complex code into smaller functions',
          '☕ Take a break - fresh eyes find bugs faster!'
        ],
        code: `# Common debugging workflow:

# 1. Read the error message
# Traceback tells you EXACTLY where the error is!

# 2. Add print statements
print(f"🔍 Value of x: {x}")
print(f"🔍 Type of y: {type(y)}")

# 3. Check your logic
if condition:
    print("✅ Condition is True")
else:
    print("❌ Condition is False")

# 4. Test small pieces
# Instead of testing the whole view, test just the function

# 5. Use the Django shell
python manage.py shell
>>> from myapp.models import Post
>>> Post.objects.all()
# Try your code interactively!`,
        language: 'python'
      }
    ],
    challenge: 'Write tests for one of your models and one of your views! Aim for 100% coverage! 🎯'
  },
  '18': {
    title: 'Deployment',
    subtitle: 'Launch your website to the world!',
    emoji: '🌍',
    realWorldExample: 'Deployment is like opening your lemonade stand to customers! 🍋 You\'ve built everything, now it\'s time to let everyone visit your website on the internet!',
    quickTip: 'Start with easy platforms like Render or Railway - they\'re free and beginner-friendly! 🚀',
    sections: [
      {
        heading: '🎯 Development vs Production',
        content: 'Your local computer vs the real internet!',
        points: [
          '💻 Development: Your computer, DEBUG=True, small database',
          '🌍 Production: Server on internet, DEBUG=False, real users',
          '🔧 Development: Quick changes, errors are OK',
          '🛡️ Production: Stable, secure, fast, no errors!',
          '📊 Production needs: Database, static files, HTTPS, domain name'
        ],
        code: `# File: settings.py (before deployment)

# ❌ Development settings:
DEBUG = True
ALLOWED_HOSTS = []
SECRET_KEY = 'django-insecure-hardcoded...'

# ✅ Production settings:
DEBUG = False
ALLOWED_HOSTS = ['yourdomain.com', 'www.yourdomain.com']
SECRET_KEY = os.environ.get('SECRET_KEY')  # From environment variable`,
        language: 'python'
      },
      {
        heading: '📦 Preparing for Deployment',
        content: 'Get your project ready for the world!',
        code: `# 1. Create requirements.txt
pip freeze > requirements.txt

# 2. Create .env file for secrets
# File: .env (add to .gitignore!)
SECRET_KEY=your-secret-key-here
DEBUG=False
DATABASE_URL=postgres://...

# 3. Update settings.py
from decouple import config

SECRET_KEY = config('SECRET_KEY')
DEBUG = config('DEBUG', default=False, cast=bool)

# 4. Set ALLOWED_HOSTS
ALLOWED_HOSTS = ['yourdomain.com', '.herokuapp.com']

# 5. Configure static files
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATIC_URL = '/static/'

# 6. Create Procfile (for some platforms)
# File: Procfile
web: gunicorn myproject.wsgi

# 7. Install gunicorn
pip install gunicorn
pip freeze > requirements.txt`,
        language: 'python'
      },
      {
        heading: '🚀 Deploy to Render (Easy & Free!)',
        content: 'Render is beginner-friendly and has a free tier!',
        code: `# Step 1: Prepare your project
pip install gunicorn whitenoise
pip freeze > requirements.txt

# Step 2: Update settings.py
# Add whitenoise for static files
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # Add this!
    # ... other middleware ...
]

STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Step 3: Create build.sh
#!/usr/bin/env bash
set -o errexit

pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py migrate

# Step 4: Push to GitHub
git init
git add .
git commit -m "Ready for deployment"
git push

# Step 5: Go to render.com
# 1. Sign up with GitHub
# 2. Create new Web Service
# 3. Connect your repository
# 4. Set build command: ./build.sh
# 5. Set start command: gunicorn myproject.wsgi:application
# 6. Add environment variables (SECRET_KEY, etc.)
# 7. Click Deploy!

# Your site is live! 🎉`,
        language: 'bash',
        note: 'Render is super easy for beginners! Free tier available! 🎁'
      },
      {
        heading: '🎨 Collecting Static Files',
        content: 'Get your CSS, JS, and images ready for production!',
        code: `# File: settings.py

import os

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Media files (user uploads)
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Install whitenoise for serving static files
pip install whitenoise

# Add to MIDDLEWARE (settings.py)
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # Right after SecurityMiddleware
    # ...
]

# Collect static files
python manage.py collectstatic

# This copies all static files to STATIC_ROOT folder`,
        language: 'python'
      },
      {
        heading: '🗄️ Database for Production',
        content: 'Use a real database (not SQLite) for production!',
        code: `# For production, use PostgreSQL

# Install:
pip install psycopg2-binary dj-database-url

# File: settings.py

import dj_database_url

# Development database
if DEBUG:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
else:
    # Production database (from environment variable)
    DATABASES = {
        'default': dj_database_url.config(
            default=config('DATABASE_URL')
        )
    }

# Most hosting platforms provide DATABASE_URL automatically!`,
        language: 'python'
      },
      {
        heading: '✅ Pre-Deployment Checklist',
        content: 'Make sure everything is ready!',
        points: [
          '☑️ DEBUG = False in production',
          '☑️ SECRET_KEY in environment variable',
          '☑️ ALLOWED_HOSTS configured',
          '☑️ requirements.txt up to date',
          '☑️ Static files collected',
          '☑️ Database migrations run',
          '☑️ HTTPS enabled',
          '☑️ Environment variables set',
          '☑️ Tests passing',
          '☑️ Security check: python manage.py check --deploy'
        ],
        code: `# Run Django's deployment checklist:
python manage.py check --deploy

# Fix any warnings or errors!

# Test your production settings locally:
DEBUG=False python manage.py runserver

# Make sure everything still works!`,
        language: 'bash'
      },
      {
        heading: '🎓 After Deployment',
        content: 'Your site is live - now what?',
        points: [
          '🎉 Visit your live website!',
          '📊 Monitor for errors (check logs)',
          '🔄 Set up automatic deploys from GitHub',
          '🔒 Enable HTTPS/SSL certificate',
          '📧 Set up email (for password resets, etc.)',
          '🗄️ Set up database backups',
          '📈 Add analytics (optional)',
          '🐛 Monitor for bugs and fix them',
          '🚀 Keep improving your site!'
        ],
        code: `# Common post-deployment tasks:

# 1. Run migrations on production
python manage.py migrate

# 2. Create superuser on production
python manage.py createsuperuser

# 3. Collect static files
python manage.py collectstatic

# 4. Check logs
# Most platforms have a logs viewer

# 5. Set up custom domain (optional)
# Configure DNS to point to your hosting platform

# Congrats! Your site is live! 🎊`,
        language: 'bash'
      },
      {
        heading: '🆓 Free Hosting Options',
        content: 'Great platforms for beginners!',
        points: [
          '🟢 Render.com - Easy, free tier, great for Django',
          '🚂 Railway.app - Simple, modern, free tier',
          '🔷 PythonAnywhere - Django-friendly, free tier',
          '📦 Heroku - Classic choice (paid)',
          '☁️ Vercel/Netlify - For frontend (with DRF backend)',
          '💎 Choose based on your needs and comfort level!'
        ],
        code: `# Render.com (Recommended for beginners!)
# ✅ Pros: Easy, free tier, auto-deploy from GitHub
# ✅ Great documentation for Django

# Railway.app
# ✅ Pros: Modern UI, simple setup
# ✅ Easy environment variables

# PythonAnywhere
# ✅ Pros: Django-specific, web-based console
# ✅ Good for learners

# All have free tiers perfect for learning! 🎓`,
        language: 'text'
      }
    ],
    challenge: 'Deploy your Django project to Render or Railway! Share your live website URL! 🚀'
  }
};

export default finalTopics;