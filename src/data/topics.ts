interface Section {
  heading: string;
  content: string;
  points?: string[];
  code?: string;
  language?: string;
  note?: string;
}

interface TopicData {
  title: string;
  subtitle: string;
  emoji: string;
  realWorldExample?: string;
  quickTip?: string;
  sections: Section[];
  challenge?: string;
}

export const topicsData: Record<string, TopicData> = {
  '1': {
    title: 'Introduction to Django',
    subtitle: 'Meet your new best friend for building websites!',
    emoji: '🎯',
    realWorldExample: 'Think of Django like LEGO blocks for websites! Just like you use LEGO to build amazing castles and spaceships, Django helps programmers build cool websites like Instagram, YouTube, and Pinterest! 🏰🚀',
    quickTip: 'Django is written in Python - a language that reads almost like English! If you can read, you can learn Django! 🐍',
    sections: [
      {
        heading: '🤔 What is Django?',
        content: 'Django is a free and super powerful tool that helps people build websites really fast! It\'s like a magical toolbox full of ready-made pieces that work together perfectly.',
        points: [
          'Created by awesome developers who wanted to make web development easier',
          'Used by big companies like Instagram, Spotify, and NASA!',
          'It\'s completely FREE and anyone can use it',
          'Has a huge community of friendly developers ready to help'
        ]
      },
      {
        heading: '🌟 Why Django is Awesome!',
        content: 'Imagine you want to build a treehouse. You could cut down trees, make planks, and build everything from scratch... OR you could use a kit with pre-made walls, floors, and a roof! Django is like that kit but for websites!',
        points: [
          '⚡ Super Fast: Build websites in days, not months!',
          '🔒 Extra Safe: Django protects your website from bad guys automatically',
          '📦 Batteries Included: Comes with everything you need built-in',
          '🌍 Works Everywhere: From small blogs to giant social networks',
          '🎓 Easy to Learn: Perfect for beginners and loved by experts'
        ]
      },
      {
        heading: '🎁 Django Features (Cool Stuff Inside!)',
        content: 'Django comes with so many helpful features, it\'s like getting a Swiss Army knife for coding!',
        points: [
          '🎨 Admin Panel: A ready-made control center for your website',
          '🔐 User Accounts: Login, logout, and password features built-in',
          '💾 Database Magic: Store information without learning complicated database stuff',
          '🛡️ Security Shield: Keeps hackers away automatically',
          '📱 URL Routing: Helps people navigate your website smoothly',
          '🖼️ Template System: Make beautiful pages easily'
        ]
      },
      {
        heading: '🏗️ MVT Architecture (How Django Thinks)',
        content: 'Django organizes websites using a pattern called MVT. Think of it like organizing your bedroom into three zones:',
        points: [
          '📊 M = Models (The Toy Box): Where you keep all your data stored neatly',
          '👀 V = Views (The Play Area): Where the action happens - this is your brain!',
          '🎨 T = Templates (The Decorations): How everything looks on your walls'
        ],
        code: `# Think of MVT like making a sandwich!

# MODEL (Ingredients) 🥪
class Sandwich:
    bread = "Wheat"
    cheese = "Cheddar"
    veggies = ["Lettuce", "Tomato"]

# VIEW (Recipe/Instructions) 👨‍🍳
def make_sandwich(request):
    ingredients = Sandwich()
    return show_sandwich(ingredients)

# TEMPLATE (How it looks on the plate) 🍽️
# Shows the beautiful sandwich to eat!`,
        language: 'python',
        note: 'Every Django website uses this MVT pattern. Once you understand it, you can build ANYTHING!'
      },
      {
        heading: '🆚 Django vs Other Frameworks',
        content: 'How does Django compare to other website-building tools?',
        points: [
          '🐍 Django (Python): Like a complete LEGO set with instructions - everything included!',
          '🟢 Node.js/Express: Like loose LEGO bricks - more freedom but you build more yourself',
          '💎 Ruby on Rails: Django\'s cousin - similar but uses Ruby language instead',
          '⚛️ React/Vue: These are just for the front (what you see), Django does everything!'
        ],
        note: 'Django is perfect for beginners because it makes decisions for you, so you can focus on being creative! 🎨'
      }
    ],
    challenge: 'Name 3 famous websites that use Django. (Hint: One rhymes with "Insta-jam"! 📸)'
  },
  '2': {
    title: 'Environment Setup',
    subtitle: 'Let\'s prepare your coding playground!',
    emoji: '🛠️',
    realWorldExample: 'Setting up Django is like preparing your art studio before painting. You need your easel (computer), paints (Python), brushes (Django), and a canvas (project folder). Once everything is ready, you can create masterpieces! 🎨',
    quickTip: 'Always use a virtual environment - it\'s like having a separate backpack for each project so things don\'t get mixed up! 🎒',
    sections: [
      {
        heading: '1️⃣ Installing Python',
        content: 'Before Django, we need Python! Python is the language Django speaks.',
        points: [
          'Visit python.org and download Python (version 3.8 or newer)',
          'During installation, CHECK the box that says "Add Python to PATH"',
          'This is super important - like telling your computer where Python lives!'
        ],
        code: `# After installing, test if Python works:
# Open Terminal (Mac/Linux) or Command Prompt (Windows)

python --version
# Should show: Python 3.x.x

# or try:
python3 --version`,
        language: 'bash'
      },
      {
        heading: '2️⃣ Creating a Virtual Environment',
        content: 'A virtual environment is like a bubble for your project - it keeps all your tools separate and organized!',
        code: `# Step 1: Create a new folder for your project
mkdir my_awesome_project
cd my_awesome_project

# Step 2: Create a virtual environment named 'venv'
python -m venv venv

# What just happened? 🤔
# Python created a special folder with its own copy of tools!`,
        language: 'bash',
        note: 'The first "venv" is the command, the second "venv" is the name. You can name it anything like "myenv" or "django_env"!'
      },
      {
        heading: '3️⃣ Activating Your Virtual Environment',
        content: 'Now we need to "turn on" our virtual environment. It\'s like flipping a light switch! 💡',
        code: `# On Windows:
venv\\Scripts\\activate

# On Mac/Linux:
source venv/bin/activate

# You'll see (venv) appear at the start of your command line
# That means it's working! 🎉

# Like this:
# (venv) C:\\Users\\YourName\\my_awesome_project>`,
        language: 'bash',
        note: 'If you see (venv) at the beginning of your terminal, you\'re inside the bubble! If not, activation didn\'t work.'
      },
      {
        heading: '4️⃣ Installing Django',
        content: 'Now for the exciting part - let\'s install Django! This is like downloading a video game! 🎮',
        code: `# Make sure your virtual environment is activated first!
# You should see (venv) in your terminal

pip install django

# Wait a few seconds... Django is downloading!

# Check if Django installed correctly:
django-admin --version

# Should show something like: 5.0.0`,
        language: 'bash',
        note: '"pip" is Python\'s app store! It downloads and installs Python tools for you automatically.'
      },
      {
        heading: '5️⃣ Creating Your First Django Project',
        content: 'Time to create your very first Django project! This is like creating a new Minecraft world! 🌍',
        code: `# Create a new Django project named 'mysite'
django-admin startproject mysite

# This creates a folder called 'mysite' with magic files inside!

# Go inside your new project:
cd mysite

# Look at what's inside:
# On Windows: dir
# On Mac/Linux: ls`,
        language: 'bash'
      },
      {
        heading: '6️⃣ Running the Development Server',
        content: 'Let\'s start your website and see it in action! This is the moment you\'ve been waiting for! 🚀',
        code: `# Make sure you're in the mysite folder
# (The one with manage.py inside)

python manage.py runserver

# You should see:
# Starting development server at http://127.0.0.1:8000/
# Quit the server with CTRL-BREAK (Windows) or CONTROL-C (Mac/Linux)`,
        language: 'bash',
        note: 'Open your web browser and go to http://127.0.0.1:8000/ - You should see a Django welcome page with a rocket! 🚀'
      },
      {
        heading: '7️⃣ Django Project Structure',
        content: 'Let\'s explore the files Django created for you! Each file has a special job:',
        points: [
          '📁 mysite/ (outer folder): Your project\'s home - everything lives here',
          '🐍 manage.py: Your magic wand! Use this to control Django',
          '📁 mysite/ (inner folder): Your project\'s brain - important settings',
          '⚙️ settings.py: All the settings and configurations',
          '🌐 urls.py: The map of your website (where pages live)',
          '🚀 wsgi.py & asgi.py: Help launch your website to the world',
          '💾 db.sqlite3: Your database (appears after first run)'
        ],
        code: `mysite/                   # Your project folder
├── manage.py            # Django's control panel
├── mysite/              # Project configuration
│   ├── __init__.py      # Makes this a Python package
│   ├── settings.py      # All project settings
│   ├── urls.py          # URL routes (like a map)
│   ├── asgi.py          # For advanced deployment
│   └── wsgi.py          # For advanced deployment
└── db.sqlite3           # Your database`,
        language: 'text'
      }
    ],
    challenge: 'Can you start your Django server and find the rocket? 🚀 Take a screenshot and show someone!'
  },
  '3': {
    title: 'Django Project & App Structure',
    subtitle: 'Understanding how Django organizes everything!',
    emoji: '📁',
    realWorldExample: 'Think of a Django project like a school 🏫. The school (project) has many classrooms (apps). Each classroom teaches something different - math, science, art. Similarly, a Django project has different apps for different features like users, blog posts, or shopping cart! 📚',
    quickTip: 'One project, many apps! Keep each app focused on one thing - just like each classroom focuses on one subject! 🎯',
    sections: [
      {
        heading: '🏫 Project vs App - What\'s the Difference?',
        content: 'This is super important to understand! Let\'s break it down:',
        points: [
          '🏢 PROJECT = The entire website (like YouTube itself)',
          '📦 APP = One feature of the website (like Comments, Videos, Users)',
          'One project can have MANY apps working together',
          'Apps are reusable - you can use them in different projects!',
          'Think: Project = Pizza, Apps = Toppings! 🍕'
        ],
        code: `# Real Example: Instagram
instagram_project/              # The whole Instagram
├── users/                      # App for user profiles
├── photos/                     # App for photo uploads
├── messages/                   # App for direct messages
├── stories/                    # App for stories
└── likes/                      # App for likes & comments

# Each app does ONE thing really well!`,
        language: 'text'
      },
      {
        heading: '🎨 Creating Your First App',
        content: 'Let\'s create an app! Remember: make sure your server is stopped first (Press Ctrl+C)',
        code: `# Stop the server first (Ctrl+C)
# Make sure you're in the project folder (where manage.py is)

python manage.py startapp blog

# This creates a new folder called 'blog' with files inside!

# Now let's see what it created:`,
        language: 'bash'
      },
      {
        heading: '📂 Understanding App Structure',
        content: 'Django created several files in your app folder. Let\'s learn what each one does!',
        points: [
          '📄 __init__.py: Tells Python this is a package (leave it empty)',
          '🎮 admin.py: Controls your admin panel (like a control room)',
          '📱 apps.py: App configuration (settings for this app)',
          '💾 models.py: Database tables (where you store data)',
          '🧪 tests.py: For testing your code (make sure it works)',
          '👁️ views.py: The brain - handles requests and responses',
          '📁 migrations/: Tracks database changes (auto-generated)'
        ],
        code: `blog/                        # Your new app!
├── __init__.py             # Makes it a Python package
├── admin.py                # Register models for admin panel
├── apps.py                 # App configuration
├── models.py               # Database models (tables)
├── tests.py                # Write tests here
├── views.py                # Your functions/logic
└── migrations/             # Database history
    └── __init__.py`,
        language: 'text'
      },
      {
        heading: '🔧 Understanding settings.py',
        content: 'The settings.py file is like your project\'s control panel! Let\'s look at important parts:',
        code: `# File: mysite/settings.py

# Super secret key - keeps your site safe! 🔐
SECRET_KEY = 'django-insecure-xyz123...'

# Is this in testing mode? (True) or live on internet? (False)
DEBUG = True  # Shows detailed errors - helpful for learning!

# Who can visit your site?
ALLOWED_HOSTS = []  # Empty = only you on your computer

# All the apps in your project (built-in + yours)
INSTALLED_APPS = [
    'django.contrib.admin',      # Admin panel
    'django.contrib.auth',       # User accounts
    'django.contrib.contenttypes',
    'django.contrib.sessions',   # Remember logged in users
    'django.contrib.messages',   # Flash messages
    'django.contrib.staticfiles', # CSS, JavaScript, images
    # Your apps go here! 👇
    'blog',  # Add your app!
]

# Database settings
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',  # Database file
    }
}

# Language and timezone
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'  # Can change to 'America/New_York', etc.`,
        language: 'python',
        note: 'After creating an app, you MUST add it to INSTALLED_APPS in settings.py! Otherwise Django won\'t know it exists! 🎯'
      },
      {
        heading: '🗺️ Understanding urls.py',
        content: 'The urls.py file is like a map of your website! It tells Django which page to show for each URL.',
        code: `# File: mysite/urls.py

from django.contrib import admin
from django.urls import path

# URL patterns - like a map 🗺️
urlpatterns = [
    # When someone visits /admin/, show the admin page
    path('admin/', admin.site.urls),
    
    # We'll add more paths here later!
    # path('blog/', include('blog.urls')),  # Blog pages
    # path('about/', about_view),            # About page
]

# How it works:
# User types: yoursite.com/admin/
# Django looks at urls.py
# Finds matching path
# Shows the right page! 🎉`,
        language: 'python'
      },
      {
        heading: '👁️ Understanding views.py',
        content: 'Views are functions that handle what happens when someone visits a page. They\'re like the chef in a restaurant! 👨‍🍳',
        code: `# File: blog/views.py

from django.http import HttpResponse

# A simple view - like a recipe!
def home(request):
    # Someone asked for the home page
    # Let's give them something back!
    return HttpResponse("Hello! Welcome to my blog! 🎉")

# 'request' = what the visitor asked for
# 'HttpResponse' = your answer back to them

def about(request):
    return HttpResponse("This is the about page! 📝")

# Each view is like a different recipe
# Different page = different view function`,
        language: 'python',
        note: 'Views are the brain of your app! They decide what to show to visitors. 🧠'
      },
      {
        heading: '💾 Understanding models.py',
        content: 'Models define your database tables. Think of them like Excel spreadsheets! 📊',
        code: `# File: blog/models.py

from django.db import models

# A model for blog posts
class Post(models.Model):
    title = models.CharField(max_length=200)  # Post title
    content = models.TextField()              # Post content
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title  # Shows title in admin

# This creates a table with columns:
# - id (automatic)
# - title (text, max 200 characters)
# - content (long text)
# - created_at (date and time)`,
        language: 'python'
      },
      {
        heading: '🎛️ Understanding admin.py',
        content: 'The admin.py file lets you control your models from Django\'s built-in admin panel! It\'s like a control room! 🎮',
        code: `# File: blog/admin.py

from django.contrib import admin
from .models import Post

# Register your model to see it in admin panel
admin.site.register(Post)

# Now you can:
# - Add new blog posts
# - Edit existing posts  
# - Delete posts
# All from a beautiful interface! 🎨`,
        language: 'python',
        note: 'The admin panel is one of Django\'s superpowers! Most other frameworks make you build this yourself! 💪'
      },
      {
        heading: '⚙️ App Configuration (apps.py)',
        content: 'Each app has a configuration file. Usually you don\'t need to change it, but it\'s good to know!',
        code: `# File: blog/apps.py

from django.apps import AppConfig

class BlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'blog'  # App name
    verbose_name = 'My Awesome Blog'  # Friendly name in admin
    
# This file helps Django understand your app's settings`,
        language: 'python'
      }
    ],
    challenge: 'Create an app called "portfolio" that could show your artwork or projects! What models would you need? 🎨'
  },
  '4': {
    title: 'URL Configuration & Views',
    subtitle: 'Building the roads and destinations of your website!',
    emoji: '🌐',
    realWorldExample: 'URLs are like street addresses 🏠 and views are like the houses at those addresses! When you type "www.youtube.com/watch", the URL leads you to a view (function) that shows you a video. It\'s like following a map to find treasure! 🗺️💎',
    quickTip: 'Think: URL = Address, View = What happens when you visit that address! 🎯',
    sections: [
      {
        heading: '🚦 What is URL Routing?',
        content: 'URL routing is like being a traffic controller! You tell Django: "When someone visits THIS address, show them THAT page"',
        points: [
          'User types a URL in their browser',
          'Django checks its urls.py file (the map)',
          'Finds the matching pattern',
          'Calls the right view function',
          'View sends back a page to show!'
        ],
        code: `# Think of it like a pizza delivery!

# 1. Customer calls: "123 Main Street" (URL)
# 2. You check your map (urls.py)
# 3. Find the address
# 4. Send the driver (view) with pizza (response)
# 5. Customer gets pizza! 🍕

# Same with websites:
www.mysite.com/home  →  calls home_view()  →  shows home page`,
        language: 'text'
      },
      {
        heading: '🛤️ Creating URL Patterns with path()',
        content: 'The path() function is how we create URL routes. Let\'s learn how to use it!',
        code: `# File: mysite/urls.py

from django.contrib import admin
from django.urls import path
from blog import views  # Import views from blog app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home),              # Home page (empty = root)
    path('about/', views.about),       # About page
    path('contact/', views.contact),   # Contact page
]

# How path() works:
# path('URL-pattern/', function_to_call, name='optional_name')

# Examples:
# User visits: yoursite.com/        → calls views.home
# User visits: yoursite.com/about/  → calls views.about`,
        language: 'python',
        note: 'Always end your URL patterns with a slash (/) - it\'s a Django best practice! 🎯'
      },
      {
        heading: '📦 Using include() for App URLs',
        content: 'include() helps you organize URLs by app. Instead of putting all URLs in one file, each app gets its own!',
        code: `# File: mysite/urls.py (main URLs)

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls')),  # All blog URLs
    path('shop/', include('shop.urls')),  # All shop URLs
]

# Now create a urls.py file inside your blog app:
# File: blog/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.blog_home),           # blog/
    path('post/<int:id>/', views.post),  # blog/post/1/
    path('about/', views.blog_about),    # blog/about/
]

# This keeps things organized! Each app controls its own URLs! 🗂️`,
        language: 'python'
      },
      {
        heading: '👨‍💻 Function Based Views (FBV)',
        content: 'Function Based Views are Python functions that handle web requests. They\'re the easiest to learn!',
        code: `# File: blog/views.py

from django.http import HttpResponse

# A simple view function
def home(request):
    """
    This function runs when someone visits the home page
    'request' contains info about the visitor
    """
    return HttpResponse("Welcome to my website! 🏠")

# View with HTML
def about(request):
    html = """
    <html>
        <head><title>About Me</title></head>
        <body>
            <h1>About Me! 😊</h1>
            <p>I love coding with Django!</p>
        </body>
    </html>
    """
    return HttpResponse(html)

# Every view must:
# 1. Take 'request' as first parameter
# 2. Return an HttpResponse (or similar)`,
        language: 'python',
        note: 'The "request" parameter contains everything about the visitor - what they clicked, their browser, and more! 🔍'
      },
      {
        heading: '📄 Using render() for Templates',
        content: 'render() is a shortcut to show HTML templates. It\'s much better than writing HTML in views!',
        code: `# File: blog/views.py

from django.shortcuts import render

def home(request):
    # render(request, 'template_name.html', context_dictionary)
    context = {
        'title': 'Home Page',
        'message': 'Welcome to my awesome blog!',
        'user_name': 'Cool Coder',
    }
    return render(request, 'home.html', context)

# Create: blog/templates/home.html
"""
<html>
    <head><title>{{ title }}</title></head>
    <body>
        <h1>{{ message }}</h1>
        <p>Hello, {{ user_name }}! 👋</p>
    </body>
</html>
"""

# The context dictionary passes data to the template!
# {{ variable }} in template gets replaced with actual values`,
        language: 'python'
      },
      {
        heading: '🔀 Redirects - Sending Users to Different Pages',
        content: 'Sometimes you want to send visitors to a different page. That\'s called a redirect!',
        code: `# File: blog/views.py

from django.shortcuts import redirect

def old_page(request):
    # Redirect to new page!
    return redirect('/new-page/')

def after_login(request):
    # Redirect to home after someone logs in
    return redirect('home')  # Using URL name

# Another way - using reverse:
from django.urls import reverse

def profile_redirect(request):
    url = reverse('user-profile', args=[123])  # Build URL
    return redirect(url)

# Common redirect scenarios:
# - After form submission → redirect to success page
# - After login → redirect to dashboard  
# - Old URL → redirect to new URL`,
        language: 'python',
        note: 'Redirects are like signs that say "Go this way instead!" 👉 They help guide your users!'
      },
      {
        heading: '🔢 URL Parameters - Dynamic URLs',
        content: 'URL parameters let you capture values from the URL. Like having variables in your addresses!',
        code: `# File: blog/urls.py

from django.urls import path
from . import views

urlpatterns = [
    # Capture a number (post ID)
    path('post/<int:post_id>/', views.post_detail),
    
    # Capture text (username)
    path('user/<str:username>/', views.user_profile),
    
    # Capture any slug (URL-friendly text)
    path('article/<slug:slug>/', views.article),
]

# File: blog/views.py

def post_detail(request, post_id):
    # post_id comes from URL!
    return HttpResponse(f"You're viewing post #{post_id}")

def user_profile(request, username):
    return HttpResponse(f"Profile of {username}")

# URL Types:
# <int:name> = numbers only (1, 2, 100)
# <str:name> = any text
# <slug:name> = letters, numbers, hyphens, underscores`,
        language: 'python'
      },
      {
        heading: '❌ Handling 404 & 500 Errors',
        content: '404 = Page not found. 500 = Server error. Let\'s create custom error pages!',
        code: `# File: blog/views.py

from django.shortcuts import render

def custom_404(request, exception):
    """Shows when page doesn't exist"""
    return render(request, '404.html', status=404)

def custom_500(request):
    """Shows when server has problems"""
    return render(request, '500.html', status=500)

# File: mysite/urls.py
# Add these at the bottom:

handler404 = 'blog.views.custom_404'
handler500 = 'blog.views.custom_500'

# Create templates: 404.html and 500.html
"""
<!-- 404.html -->
<html>
    <body>
        <h1>Oops! Page not found! 🔍</h1>
        <p>Looks like this page went on vacation!</p>
    </body>
</html>
"""`,
        language: 'python',
        note: 'Custom error pages make your website look professional even when things go wrong! 🎨'
      },
      {
        heading: '🏷️ Naming URLs - Making Life Easier',
        content: 'You can give URLs names, then reference them by name instead of hardcoding paths!',
        code: `# File: blog/urls.py

from django.urls import path
from . import views

app_name = 'blog'  # Namespace for these URLs

urlpatterns = [
    path('', views.home, name='home'),
    path('post/<int:id>/', views.post, name='post-detail'),
    path('about/', views.about, name='about'),
]

# In views:
from django.urls import reverse

def some_view(request):
    url = reverse('blog:post-detail', args=[5])
    # Returns: '/blog/post/5/'
    return redirect(url)

# In templates:
"""
<a href="{% url 'blog:home' %}">Home</a>
<a href="{% url 'blog:post-detail' 123 %}">Post 123</a>
"""

# Benefits:
# ✓ Change URLs in one place
# ✓ No broken links
# ✓ Easier to remember`,
        language: 'python'
      }
    ],
    challenge: 'Create a URL that captures someone\'s favorite color and shows a page with that color! Example: /color/blue/ 🎨'
  },
  '5': {
    title: 'Django Templates (DTL)',
    subtitle: 'Make your pages beautiful and dynamic!',
    emoji: '🎨',
    realWorldExample: 'Templates are like Mad Libs! 📝 Remember those fun games where you fill in blanks? "The ___ cat jumped over the ___ moon!" Django templates work the same way - you create an HTML page with blanks, and Django fills them in with real data! 🌙✨',
    quickTip: 'Templates let you write HTML once and reuse it everywhere with different data - like a cookie cutter making different flavored cookies! 🍪',
    sections: [
      {
        heading: '📋 Template Basics',
        content: 'Django Template Language (DTL) lets you mix HTML with special Django code. It\'s like adding superpowers to HTML!',
        code: `<!-- File: blog/templates/hello.html -->

<html>
<head>
    <title>My First Template</title>
</head>
<body>
    <h1>Hello, World! 🌍</h1>
    
    <!-- This is regular HTML -->
    <p>This is a static paragraph.</p>
    
    <!-- This is Django template magic! -->
    <p>Today is {{ today }}</p>
    <p>You have {{ message_count }} messages!</p>
</body>
</html>

<!-- File: blog/views.py -->
from django.shortcuts import render
from datetime import date

def hello(request):
    context = {
        'today': date.today(),
        'message_count': 5,
    }
    return render(request, 'hello.html', context)`,
        language: 'django',
        note: 'Templates go in a "templates" folder inside your app! Django finds them automatically! 📁'
      },
      {
        heading: '📊 Template Variables',
        content: 'Variables let you display data from Python in your HTML. Use double curly braces: {{ variable }}',
        code: `<!-- Different types of variables -->

<!-- Simple variable -->
<p>Name: {{ user_name }}</p>

<!-- Dictionary access -->
<p>Age: {{ user.age }}</p>
<p>City: {{ user.city }}</p>

<!-- List access -->
<p>First item: {{ my_list.0 }}</p>
<p>Second item: {{ my_list.1 }}</p>

<!-- Object methods (no parentheses!) -->
<p>Upper: {{ name.upper }}</p>
<p>Length: {{ items.count }}</p>

<!-- The Python view: -->
def example(request):
    context = {
        'user_name': 'Alex',
        'user': {'age': 10, 'city': 'New York'},
        'my_list': ['apple', 'banana', 'orange'],
        'name': 'django',
        'items': [1, 2, 3, 4, 5],
    }
    return render(request, 'example.html', context)`,
        language: 'django'
      },
      {
        heading: '🎭 Template Filters',
        content: 'Filters modify variables. They\'re like Instagram filters but for data! Use the pipe symbol: |',
        code: `<!-- Common Filters -->

<!-- Make text uppercase -->
<p>{{ name|upper }}</p>
<!-- "django" becomes "DJANGO" -->

<!-- Make text lowercase -->  
<p>{{ name|lower }}</p>

<!-- Capitalize first letter -->
<p>{{ name|capfirst }}</p>
<!-- "django" becomes "Django" -->

<!-- Capitalize all words -->
<p>{{ sentence|title }}</p>

<!-- Show default if empty -->
<p>{{ value|default:"No value" }}</p>

<!-- Truncate text -->
<p>{{ long_text|truncatewords:5 }}</p>
<!-- Shows only first 5 words -->

<!-- Date formatting -->
<p>{{ today|date:"F d, Y" }}</p>
<!-- "December 25, 2025" -->

<!-- Numbers -->
<p>{{ price|floatformat:2 }}</p>
<!-- Shows 2 decimal places -->

<!-- Length -->
<p>Items: {{ my_list|length }}</p>

<!-- Chain filters! -->
<p>{{ name|upper|truncatechars:5 }}</p>`,
        language: 'django',
        note: 'You can chain multiple filters together - they apply from left to right! 🔗'
      },
      {
        heading: '🔀 If Statements',
        content: 'Use if statements to show different things based on conditions - like choosing your adventure! 🎮',
        code: `<!-- Basic if -->
{% if user_logged_in %}
    <p>Welcome back! 👋</p>
{% else %}
    <p>Please log in! 🔐</p>
{% endif %}

<!-- if with elif -->
{% if age < 13 %}
    <p>You're a kid! 🧒</p>
{% elif age < 20 %}
    <p>You're a teenager! 🎮</p>
{% else %}
    <p>You're an adult! 👨</p>
{% endif %}

<!-- Comparison operators -->
{% if score >= 90 %}
    <p>Grade: A+ 🌟</p>
{% elif score >= 80 %}
    <p>Grade: B 👍</p>
{% else %}
    <p>Keep trying! 💪</p>
{% endif %}

<!-- Logical operators -->
{% if user.is_active and user.is_verified %}
    <p>Full access granted! ✅</p>
{% endif %}

{% if is_weekend or is_holiday %}
    <p>Time to relax! 😎</p>
{% endif %}

<!-- Check if variable exists -->
{% if user_name %}
    <p>Hello, {{ user_name }}!</p>
{% endif %}`,
        language: 'django'
      },
      {
        heading: '🔁 For Loops',
        content: 'Loops repeat HTML for each item in a list - super useful for showing lists of things!',
        code: `<!-- Basic loop -->
<ul>
{% for fruit in fruits %}
    <li>{{ fruit }} 🍎</li>
{% endfor %}
</ul>

<!-- Loop with counter -->
{% for item in items %}
    <p>{{ forloop.counter }}. {{ item }}</p>
    <!-- Shows: 1. First, 2. Second, etc. -->
{% endfor %}

<!-- Loop with index (starts at 0) -->
{% for item in items %}
    <p>Index {{ forloop.counter0 }}: {{ item }}</p>
{% endfor %}

<!-- Check if first or last -->
{% for color in colors %}
    <span style="color: {{ color }};"
    {% if forloop.first %}
        class="first-item"
    {% endif %}
    {% if forloop.last %}
        class="last-item"
    {% endif %}
    >
    {{ color }}
    </span>
{% endfor %}

<!-- Empty list handling -->
{% for post in posts %}
    <h3>{{ post.title }}</h3>
{% empty %}
    <p>No posts yet! 📝</p>
{% endfor %}

<!-- Loop through dictionary -->
{% for key, value in user.items %}
    <p>{{ key }}: {{ value }}</p>
{% endfor %}`,
        language: 'django',
        note: 'forloop.counter, forloop.first, and forloop.last are special variables Django gives you! 🎁'
      },
      {
        heading: '🏗️ Template Inheritance',
        content: 'This is SUPER powerful! Create a base template and extend it - like building with LEGO using the same base! 🧱',
        code: `<!-- File: templates/base.html (The foundation) -->
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Website{% endblock %}</title>
</head>
<body>
    <!-- Header (same on every page) -->
    <header>
        <h1>My Awesome Website! 🌟</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about/">About</a>
        </nav>
    </header>
    
    <!-- Main content (different on each page) -->
    <main>
        {% block content %}
        {% endblock %}
    </main>
    
    <!-- Footer (same on every page) -->
    <footer>
        <p>&copy; 2025 My Website</p>
    </footer>
</body>
</html>

<!-- File: templates/home.html (Uses the foundation) -->
{% extends 'base.html' %}

{% block title %}Home - My Website{% endblock %}

{% block content %}
    <h2>Welcome Home! 🏠</h2>
    <p>This is the home page content!</p>
{% endblock %}

<!-- File: templates/about.html -->
{% extends 'base.html' %}

{% block title %}About Us{% endblock %}

{% block content %}
    <h2>About Us 📖</h2>
    <p>We love Django!</p>
{% endblock %}`,
        language: 'django'
      },
      {
        heading: '🎨 Static Files (CSS, JS, Images)',
        content: 'Static files make your site look pretty! They\'re files that don\'t change - like CSS, JavaScript, and images.',
        code: `<!-- File: mysite/settings.py -->
# Add this at the bottom:

STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']

<!-- Create folder structure: -->
mysite/
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       └── logo.png

<!-- File: templates/base.html -->
{% load static %}

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="{% static 'css/style.css' %}">
</head>
<body>
    <img src="{% static 'images/logo.png' %}" alt="Logo">
    
    <script src="{% static 'js/script.js' %}"></script>
</body>
</html>

<!-- File: static/css/style.css -->
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, #667eea, #764ba2);
    color: white;
    padding: 20px;
}

h1 {
    text-align: center;
    font-size: 3em;
}`,
        language: 'django',
        note: 'Always use {% load static %} at the top of templates that use static files! 📌'
      },
      {
        heading: '🔗 Template Tags',
        content: 'Special template tags that do powerful things! They use {% %} syntax.',
        code: `<!-- URL tag - create links safely -->
<a href="{% url 'home' %}">Home</a>
<a href="{% url 'post-detail' post.id %}">Read Post</a>

<!-- Include tag - include other templates -->
{% include 'navbar.html' %}
{% include 'components/card.html' with title="Hello" %}

<!-- With tag - create temporary variables -->
{% with total=items|length %}
    <p>Total items: {{ total }}</p>
{% endwith %}

<!-- Now tag - current date/time -->
<p>Today: {% now "F d, Y" %}</p>
<p>Time: {% now "H:i" %}</p>

<!-- Spaceless tag - remove whitespace -->
{% spaceless %}
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
{% endspaceless %}

<!-- Comment tag - won't show in HTML -->
{% comment %}
    This is a Django comment
    Won't appear in the page source
{% endcomment %}

<!-- Or single line: -->
{# This is also a comment #}

<!-- CSRF token - IMPORTANT for forms! -->
<form method="post">
    {% csrf_token %}
    <input type="text" name="username">
</form>`,
        language: 'django'
      },
      {
        heading: '🎯 Template Best Practices',
        content: 'Tips to make your templates awesome and organized!',
        points: [
          '📁 Keep templates organized in folders by app',
          '🏗️ Use base.html and extend it for consistency',
          '🧩 Create reusable components with {% include %}',
          '🎨 Keep logic simple - complex logic goes in views',
          '📝 Use meaningful variable names',
          '💬 Add comments to explain complex parts',
          '🔒 Always use {% csrf_token %} in forms',
          '🔗 Use {% url %} instead of hardcoding links',
          '✨ Keep HTML semantic and accessible'
        ],
        code: `<!-- Good template structure -->

templates/
├── base.html              # Main layout
├── components/            # Reusable pieces
│   ├── navbar.html
│   ├── footer.html
│   └── card.html
├── blog/                  # Blog templates
│   ├── home.html
│   ├── post_detail.html
│   └── post_list.html
└── users/                 # User templates
    ├── login.html
    └── profile.html`,
        language: 'text'
      }
    ],
    challenge: 'Create a template that displays your favorite games in a list with colors! Use loops and if statements to make it interactive! 🎮'
  },
  '6': {
    title: 'Django Models & ORM',
    subtitle: 'Store and organize your data like a pro!',
    emoji: '💾',
    realWorldExample: 'Models are like organizing your toy collection! 🧸 Imagine you have a notebook where you write down each toy: its name, color, size, and where you keep it. Django models work the same way - they help you organize and store information in a database! 📔',
    quickTip: 'ORM means you can talk to your database using Python instead of complicated database language. It\'s like having a translator! 🗣️',
    sections: [
      {
        heading: '🗄️ What is ORM?',
        content: 'ORM stands for Object-Relational Mapping. It\'s Django\'s way of letting you work with databases using Python code instead of SQL!',
        points: [
          'Write Python code, Django handles the database',
          'No need to learn SQL (database language)',
          'Works with different databases (SQLite, PostgreSQL, MySQL)',
          'Safer and prevents common database errors',
          'Like having a super smart assistant! 🤖'
        ],
        code: `# Without ORM (SQL - complicated!)
SELECT * FROM users WHERE age > 10;

# With Django ORM (Python - easy!)
User.objects.filter(age__gt=10)

# See? Python is way easier to read! 🎉`,
        language: 'python'
      },
      {
        heading: '📝 Creating Your First Model',
        content: 'A model is a Python class that represents a database table. Each attribute is a column!',
        code: `# File: blog/models.py

from django.db import models

class BlogPost(models.Model):
    # Field types - different data types!
    title = models.CharField(max_length=200)  # Short text
    content = models.TextField()               # Long text
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    views = models.IntegerField(default=0)     # Numbers
    is_published = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-created_at']  # Newest first
        verbose_name = 'Blog Post'
        verbose_name_plural = 'Blog Posts'

# This creates a database table automatically! 🎉`,
        language: 'python',
        note: '__str__ method returns what you see when you print the object. Very helpful! 👀'
      },
      {
        heading: '🎨 Field Types',
        content: 'Django has many field types for different kinds of data. Choose the right one for your needs!',
        code: `# Common Field Types

# Text Fields
title = models.CharField(max_length=100)     # Short text (max length)
description = models.TextField()             # Long text (no limit)
slug = models.SlugField()                    # URL-friendly text

# Number Fields  
age = models.IntegerField()                  # Whole numbers
price = models.DecimalField(max_digits=10, decimal_places=2)
rating = models.FloatField()                 # Decimal numbers

# Date/Time Fields
birthday = models.DateField()                # Just date
event_time = models.DateTimeField()          # Date + time
duration = models.DurationField()            # Time period

# Boolean
is_active = models.BooleanField(default=True)

# Email and URL
email = models.EmailField()                  # Validates email
website = models.URLField()                  # Validates URL

# Files
profile_pic = models.ImageField(upload_to='profiles/')
document = models.FileField(upload_to='docs/')`,
        language: 'python'
      },
      {
        heading: '🔨 Making Migrations',
        content: 'After creating or changing models, you need to tell Django to update the database!',
        code: `# Step 1: Create migration files
python manage.py makemigrations

# Django says: "I found changes! Creating migration..."
# Creates a file in migrations/ folder

# Step 2: Apply migrations to database
python manage.py migrate

# Django says: "Applying changes to database..."
# Your database is now updated! ✅

# Check migration status
python manage.py showmigrations

# See migration SQL (optional)
python manage.py sqlmigrate blog 0001`,
        language: 'bash',
        note: 'Always run makemigrations then migrate after changing models! It\'s a two-step dance! 💃'
      },
      {
        heading: '✨ CRUD Operations',
        content: 'CRUD = Create, Read, Update, Delete. The four basic operations you do with data!',
        code: `# File: views.py or Django shell

# CREATE - Adding new data 📝
# Method 1
post = BlogPost(title="My First Post", content="Hello World!")
post.save()

# Method 2 (recommended)
post = BlogPost.objects.create(
    title="My Second Post",
    content="This is awesome!",
    author="Alex"
)

# READ - Getting data 📖
# Get all posts
all_posts = BlogPost.objects.all()

# Get one specific post
post = BlogPost.objects.get(id=1)

# Filter posts
published_posts = BlogPost.objects.filter(is_published=True)
recent_posts = BlogPost.objects.filter(created_at__year=2025)

# UPDATE - Changing data ✏️
post = BlogPost.objects.get(id=1)
post.title = "Updated Title"
post.save()

# Or update multiple at once
BlogPost.objects.filter(author="Alex").update(is_published=True)

# DELETE - Removing data 🗑️
post = BlogPost.objects.get(id=1)
post.delete()

# Delete multiple
BlogPost.objects.filter(views=0).delete()`,
        language: 'python'
      },
      {
        heading: '🔍 QuerySets & Filtering',
        content: 'QuerySets let you search and filter data like a detective! 🕵️',
        code: `# QuerySet methods - chain them together!

# Exact match
BlogPost.objects.filter(author="Alex")

# Contains
BlogPost.objects.filter(title__contains="Django")
BlogPost.objects.filter(title__icontains="django")  # Case-insensitive

# Starts with / Ends with
BlogPost.objects.filter(title__startswith="How")
BlogPost.objects.filter(title__endswith="?")

# Greater than / Less than
BlogPost.objects.filter(views__gt=100)    # Greater than
BlogPost.objects.filter(views__gte=100)   # Greater than or equal
BlogPost.objects.filter(views__lt=50)     # Less than

# Range
BlogPost.objects.filter(views__range=(10, 100))

# Multiple conditions (AND)
BlogPost.objects.filter(author="Alex", is_published=True)

# OR conditions
from django.db.models import Q
BlogPost.objects.filter(Q(author="Alex") | Q(author="Sam"))

# Ordering
BlogPost.objects.order_by('-created_at')  # Newest first
BlogPost.objects.order_by('title')        # A to Z

# Limit results
BlogPost.objects.all()[:5]  # First 5 posts

# Count
BlogPost.objects.filter(is_published=True).count()

# Check if exists
exists = BlogPost.objects.filter(title="Test").exists()`,
        language: 'python'
      },
      {
        heading: '🔗 Model Relationships',
        content: 'Relationships connect models together, like friends holding hands! 🤝',
        code: `# File: models.py

# ONE TO MANY (ForeignKey)
# One author can have many posts
class Author(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

class Post(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    # If author is deleted, delete their posts too

# Usage:
author = Author.objects.create(name="Alex")
post = Post.objects.create(title="Hello", author=author)
# Get all posts by an author
alex_posts = author.post_set.all()

# ONE TO ONE
# Each user has one profile
class User(models.Model):
    username = models.CharField(max_length=50)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField()
    avatar = models.ImageField()

# MANY TO MANY
# Posts can have many tags, tags can be on many posts
class Tag(models.Model):
    name = models.CharField(max_length=50)

class Article(models.Model):
    title = models.CharField(max_length=200)
    tags = models.ManyToManyField(Tag)

# Usage:
article = Article.objects.create(title="Django Tips")
tag1 = Tag.objects.create(name="Python")
tag2 = Tag.objects.create(name="Web")
article.tags.add(tag1, tag2)`,
        language: 'python',
        note: 'on_delete=models.CASCADE means "if parent is deleted, delete children too!" 🗑️'
      }
    ],
    challenge: 'Create a model for your favorite video games with fields: name, genre, rating, and release_year! 🎮'
  }
};

export default topicsData;