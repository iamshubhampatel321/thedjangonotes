// Additional topics (7-19) for Django Academy

export const additionalTopics: Record<string, any> = {
  '7': {
    title: 'Django Admin Panel',
    subtitle: 'Your website\'s super control center!',
    emoji: '👑',
    realWorldExample: 'The admin panel is like the cockpit of a spaceship! 🚀 Astronauts have all the controls in one place to manage everything. Django admin gives you a beautiful interface to manage all your data without writing any code! 🎮',
    quickTip: 'The admin panel comes FREE with Django - other frameworks make you build this yourself! It saves hundreds of hours! ⏰',
    sections: [
      {
        heading: '👤 Creating a Superuser',
        content: 'First, you need an admin account - this is like becoming the captain of your ship!',
        code: `# Run this command in your terminal
python manage.py createsuperuser

# Django will ask you:
# Username: admin (or whatever you like)
# Email: your@email.com
# Password: ******** (type a strong password)
# Password (again): ********

# Success! Now you can log in! 🎉`,
        language: 'bash',
        note: 'Remember your password! Write it down somewhere safe! 📝'
      },
      {
        heading: '🌐 Accessing the Admin Panel',
        content: 'Let\'s visit your new control center!',
        code: `# Make sure your server is running
python manage.py runserver

# Open your browser and go to:
http://127.0.0.1:8000/admin/

# You'll see a beautiful login page!
# Enter your superuser username and password

# Welcome to your admin panel! 🎊`,
        language: 'bash',
        note: 'The admin URL is /admin/ - keep it secret, keep it safe! 🔒'
      },
      {
        heading: '📝 Registering Models',
        content: 'To manage your models in the admin, you need to register them!',
        code: `# File: blog/admin.py

from django.contrib import admin
from .models import Post, Author, Category

# Simple registration
admin.site.register(Post)
admin.site.register(Author)

# Now you can see and edit these in the admin! 🎉`,
        language: 'python'
      },
      {
        heading: '✨ Customizing the Admin Display',
        content: 'Make your admin panel look awesome with custom displays!',
        code: `# File: blog/admin.py

from django.contrib import admin
from .models import Post

class PostAdmin(admin.ModelAdmin):
    # What columns to show in the list
    list_display = ['title', 'author', 'created_at', 'is_published']
    
    # Add filters on the side
    list_filter = ['is_published', 'created_at', 'author']
    
    # Add search box
    search_fields = ['title', 'content', 'author']
    
    # Make some fields clickable
    list_display_links = ['title']
    
    # Edit directly in the list
    list_editable = ['is_published']
    
    # How many items per page
    list_per_page = 25
    
    # Order by newest first
    ordering = ['-created_at']
    
    # Read-only fields
    readonly_fields = ['created_at', 'updated_at']

# Register with customization
admin.site.register(Post, PostAdmin)`,
        language: 'python',
        note: 'list_display is like choosing which columns to show in Excel! 📊'
      },
      {
        heading: '🔍 Adding Search and Filters',
        content: 'Help yourself find things quickly with search and filters!',
        code: `class PostAdmin(admin.ModelAdmin):
    # Search by these fields
    search_fields = ['title', 'content', 'author__name']
    # author__name searches in related Author model!
    
    # Filter sidebar options
    list_filter = [
        'is_published',
        'created_at',
        'category',
    ]
    
    # Date hierarchy navigation
    date_hierarchy = 'created_at'
    # Adds cool date navigation at top! 📅

admin.site.register(Post, PostAdmin)`,
        language: 'python'
      },
      {
        heading: '📦 Organizing Form Fields',
        content: 'Make your edit forms beautiful and organized!',
        code: `class PostAdmin(admin.ModelAdmin):
    # Group fields in the form
    fieldsets = [
        ('Post Information', {
            'fields': ['title', 'slug', 'content']
        }),
        ('Metadata', {
            'fields': ['author', 'category', 'tags']
        }),
        ('Publishing', {
            'fields': ['is_published', 'publish_date'],
            'classes': ['collapse']  # Make this section collapsible!
        }),
    ]
    
    # Or simple list
    fields = ['title', 'content', 'author', 'is_published']

admin.site.register(Post, PostAdmin)`,
        language: 'python',
        note: 'Fieldsets are like organizing your desk into sections - much neater! 🗂️'
      },
      {
        heading: '🎨 Inline Admin',
        content: 'Edit related objects on the same page - super convenient!',
        code: `# File: blog/admin.py

from django.contrib import admin
from .models import Author, Post

# Inline for editing posts within author page
class PostInline(admin.TabularInline):  # or StackedInline
    model = Post
    extra = 1  # Number of empty forms to show
    fields = ['title', 'is_published']

class AuthorAdmin(admin.ModelAdmin):
    list_display = ['name', 'email']
    inlines = [PostInline]  # Add the inline!

admin.site.register(Author, AuthorAdmin)

# Now when you edit an author, you can add/edit their posts too! 🎉`,
        language: 'python'
      },
      {
        heading: '🎭 Custom Actions',
        content: 'Add custom buttons to perform bulk actions!',
        code: `class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_published']
    actions = ['make_published', 'make_draft']
    
    def make_published(self, request, queryset):
        # Publish selected posts
        count = queryset.update(is_published=True)
        self.message_user(request, f'{count} posts published! 🎉')
    make_published.short_description = 'Publish selected posts'
    
    def make_draft(self, request, queryset):
        count = queryset.update(is_published=False)
        self.message_user(request, f'{count} posts unpublished')
    make_draft.short_description = 'Unpublish selected posts'

admin.site.register(Post, PostAdmin)

# Select multiple posts and use the action dropdown! 🔽`,
        language: 'python'
      },
      {
        heading: '🌈 Customizing Admin Site',
        content: 'Make the admin panel truly yours!',
        code: `# File: mysite/urls.py

from django.contrib import admin

# Customize the admin site
admin.site.site_header = 'My Awesome Blog Admin 🎨'
admin.site.site_title = 'Blog Admin Portal'
admin.site.index_title = 'Welcome to Blog Administration'

urlpatterns = [
    path('admin/', admin.site.urls),
]

# Now your admin has a custom title and header! ✨`,
        language: 'python',
        note: 'Make it fun and personal - you\'ll see this page a lot! 🎨'
      }
    ],
    challenge: 'Register a model and customize it with list_display, search, and filters! Make it look amazing! 🌟'
  },
  '8': {
    title: 'Django Forms',
    subtitle: 'Collect information from your users!',
    emoji: '📝',
    realWorldExample: 'Forms are like order forms at a restaurant! 🍔 The waiter (form) asks you questions (fields), you fill them out, and your order goes to the kitchen (database). Django forms help you collect and validate information from users!',
    quickTip: 'Django forms automatically prevent bad data and protect against attacks - like having a bouncer for your data! 🛡️',
    sections: [
      {
        heading: '📋 HTML Forms in Django',
        content: 'Let\'s start with a simple HTML form and see how Django handles it!',
        code: `<!-- File: templates/contact.html -->
<form method="POST">
    {% csrf_token %}  <!-- SUPER IMPORTANT! Protects from attacks -->
    
    <label>Your Name:</label>
    <input type="text" name="name" required>
    
    <label>Your Email:</label>
    <input type="email" name="email" required>
    
    <label>Message:</label>
    <textarea name="message" required></textarea>
    
    <button type="submit">Send Message 📨</button>
</form>

# File: views.py
def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        print(f"Message from {name}: {message}")
        return HttpResponse("Thank you! 🎉")
    return render(request, 'contact.html')`,
        language: 'django',
        note: 'Never forget {% csrf_token %} in forms! It protects your site from bad guys! 🔒'
      },
      {
        heading: '🎨 Django Forms Class',
        content: 'Django Forms classes make forms easier and safer!',
        code: `# File: blog/forms.py (create this file)

from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(
        max_length=100,
        label='Your Name',
        widget=forms.TextInput(attrs={'placeholder': 'John Doe'})
    )
    email = forms.EmailField(
        label='Your Email',
        widget=forms.EmailInput(attrs={'placeholder': 'john@example.com'})
    )
    subject = forms.CharField(max_length=200)
    message = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 5})
    )
    agree = forms.BooleanField(label='I agree to terms')

# File: views.py
from .forms import ContactForm

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():  # Validates everything!
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            # Process the data
            return HttpResponse("Success! 🎉")
    else:
        form = ContactForm()
    
    return render(request, 'contact.html', {'form': form})`,
        language: 'python'
      },
      {
        heading: '🎯 Rendering Forms in Templates',
        content: 'Django can render your forms automatically in different ways!',
        code: `<!-- File: templates/contact.html -->

<form method="POST">
    {% csrf_token %}
    
    <!-- Method 1: Quick and easy -->
    {{ form.as_p }}  <!-- Each field in <p> tags -->
    
    <!-- Method 2: Table format -->
    <table>
    {{ form.as_table }}
    </table>
    
    <!-- Method 3: List format -->
    <ul>
    {{ form.as_ul }}
    </ul>
    
    <!-- Method 4: Manual (most control!) -->
    <div>
        {{ form.name.label_tag }}
        {{ form.name }}
        {% if form.name.errors %}
            <span class="error">{{ form.name.errors }}</span>
        {% endif %}
    </div>
    
    <div>
        {{ form.email.label_tag }}
        {{ form.email }}
        {{ form.email.errors }}
    </div>
    
    <button type="submit">Submit 🚀</button>
</form>

<!-- Show all errors at top -->
{% if form.errors %}
    <div class="errors">
        <p>Please fix the following errors:</p>
        {{ form.errors }}
    </div>
{% endif %}`,
        language: 'django',
        note: 'form.as_p is the quickest way to render a form! Perfect for prototyping! ⚡'
      },
      {
        heading: '💾 ModelForms',
        content: 'ModelForms automatically create forms from your models - super convenient!',
        code: `# File: blog/forms.py

from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post  # Which model to use
        fields = ['title', 'content', 'category', 'is_published']
        # Or use: fields = '__all__'  # All fields
        # Or use: exclude = ['author']  # All except author
        
        # Custom labels
        labels = {
            'title': 'Post Title',
            'is_published': 'Publish Now?'
        }
        
        # Custom widgets (form controls)
        widgets = {
            'content': forms.Textarea(attrs={'rows': 10}),
            'title': forms.TextInput(attrs={
                'placeholder': 'Enter amazing title...',
                'class': 'fancy-input'
            })
        }
        
        # Help text
        help_texts = {
            'title': 'Keep it short and catchy! 🎯'
        }

# File: views.py
from .forms import PostForm

def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save()  # Saves to database automatically!
            return redirect('post-detail', id=post.id)
    else:
        form = PostForm()
    
    return render(request, 'create_post.html', {'form': form})`,
        language: 'python'
      },
      {
        heading: '✅ Form Validation',
        content: 'Make sure users enter the right information!',
        code: `# File: forms.py

from django import forms

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'email']
    
    # Validate specific field
    def clean_title(self):
        title = self.cleaned_data['title']
        
        # Check if title is too short
        if len(title) < 5:
            raise forms.ValidationError('Title must be at least 5 characters! ❌')
        
        # Check if title contains bad words
        bad_words = ['spam', 'fake']
        if any(word in title.lower() for word in bad_words):
            raise forms.ValidationError('Please use appropriate language! 🚫')
        
        return title
    
    # Validate multiple fields together
    def clean(self):
        cleaned_data = super().clean()
        title = cleaned_data.get('title')
        content = cleaned_data.get('content')
        
        # Make sure content is longer than title
        if title and content:
            if len(content) < len(title):
                raise forms.ValidationError(
                    'Content should be longer than title! 📝'
                )
        
        return cleaned_data`,
        language: 'python',
        note: 'clean_<fieldname> validates one field, clean() validates the whole form! 🎯'
      },
      {
        heading: '🎨 Custom Widgets',
        content: 'Change how form fields look and work!',
        code: `# File: forms.py

from django import forms

class ArticleForm(forms.Form):
    # Text input with custom attributes
    title = forms.CharField(
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter title',
            'style': 'border: 2px solid blue;'
        })
    )
    
    # Textarea with custom size
    content = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 15, 'cols': 80})
    )
    
    # Dropdown select
    category = forms.ChoiceField(
        choices=[
            ('tech', 'Technology'),
            ('sport', 'Sports'),
            ('food', 'Food & Cooking'),
        ],
        widget=forms.Select(attrs={'class': 'dropdown'})
    )
    
    # Radio buttons
    status = forms.ChoiceField(
        choices=[('draft', 'Draft'), ('published', 'Published')],
        widget=forms.RadioSelect()
    )
    
    # Checkboxes
    tags = forms.MultipleChoiceField(
        choices=[('python', 'Python'), ('django', 'Django'), ('web', 'Web')],
        widget=forms.CheckboxSelectMultiple()
    )
    
    # Hidden field
    user_id = forms.IntegerField(widget=forms.HiddenInput())
    
    # Date picker
    publish_date = forms.DateField(
        widget=forms.DateInput(attrs={'type': 'date'})
    )`,
        language: 'python'
      },
      {
        heading: '🔄 Updating with ModelForms',
        content: 'Use ModelForms to edit existing data!',
        code: `# File: views.py

from .models import Post
from .forms import PostForm

def edit_post(request, post_id):
    # Get the post to edit
    post = Post.objects.get(id=post_id)
    
    if request.method == 'POST':
        # Pass existing post to form
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            form.save()  # Updates the existing post!
            return redirect('post-detail', id=post.id)
    else:
        # Pre-fill form with existing data
        form = PostForm(instance=post)
    
    return render(request, 'edit_post.html', {'form': form, 'post': post})

# File: templates/edit_post.html
"""
<h1>Edit Post: {{ post.title }}</h1>

<form method="POST">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Update Post ✏️</button>
</form>
"""`,
        language: 'python',
        note: 'instance=post tells the form to update that specific post instead of creating new! 🔄'
      }
    ],
    challenge: 'Create a form for adding your favorite books with title, author, and rating! Add validation! 📚'
  },
  '9': {
    title: 'Authentication & Authorization',
    subtitle: 'User accounts, login, and permissions!',
    emoji: '🔐',
    realWorldExample: 'Authentication is like showing your ID card! 🪪 Just like you need to prove who you are to enter certain places, users need to log in to access their accounts. Django makes this super easy!',
    quickTip: 'Django has built-in user authentication - no need to build it from scratch! 🎁',
    sections: [
      {
        heading: '👤 Django User Model',
        content: 'Django comes with a built-in User model that handles everything about users!',
        code: `# Django's User model has these fields automatically:
# - username
# - password (automatically encrypted!)
# - email
# - first_name
# - last_name
# - is_active (can this user log in?)
# - is_staff (can access admin?)
# - is_superuser (has all permissions?)
# - date_joined
# - last_login

# Import the User model
from django.contrib.auth.models import User

# Create a new user
user = User.objects.create_user(
    username='coolgamer123',
    email='gamer@example.com',
    password='secretpassword123',  # Django encrypts this automatically!
    first_name='Alex',
    last_name='Smith'
)

# Check if user exists
user_exists = User.objects.filter(username='coolgamer123').exists()

# Get a user
user = User.objects.get(username='coolgamer123')`,
        language: 'python',
        note: 'Never store passwords as plain text! Django automatically hashes them for security! 🔒'
      },
      {
        heading: '🚪 Login System',
        content: 'Let users log in to your website!',
        code: `# File: views.py

from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        
        # Check if username and password are correct
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            # Password is correct! Log them in
            login(request, user)
            return redirect('home')
        else:
            # Wrong username or password
            return render(request, 'login.html', {
                'error': 'Invalid username or password! ❌'
            })
    
    return render(request, 'login.html')

# File: templates/login.html
"""
<form method="POST">
    {% csrf_token %}
    
    {% if error %}
        <p style="color: red;">{{ error }}</p>
    {% endif %}
    
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <button type="submit">Login 🔓</button>
</form>
"""`,
        language: 'python'
      },
      {
        heading: '🚪 Logout System',
        content: 'Let users log out when they\'re done!',
        code: `# File: views.py

from django.contrib.auth import logout
from django.shortcuts import redirect

def logout_view(request):
    logout(request)  # Logs out the current user
    return redirect('home')

# In your template:
"""
{% if request.user.is_authenticated %}
    <p>Welcome, {{ request.user.username }}! 👋</p>
    <a href="{% url 'logout' %}">Logout</a>
{% else %}
    <a href="{% url 'login' %}">Login</a>
{% endif %}
"""`,
        language: 'python',
        note: 'request.user is available in ALL templates and views - super convenient! 🎯'
      },
      {
        heading: '📝 Registration System',
        content: 'Let new users create accounts!',
        code: `# File: views.py

from django.contrib.auth.models import User
from django.contrib.auth import login
from django.shortcuts import render, redirect

def register_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        
        # Check if passwords match
        if password1 != password2:
            return render(request, 'register.html', {
                'error': 'Passwords do not match! ❌'
            })
        
        # Check if username already exists
        if User.objects.filter(username=username).exists():
            return render(request, 'register.html', {
                'error': 'Username already taken! 😔'
            })
        
        # Create the user
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password1
        )
        
        # Log them in automatically
        login(request, user)
        return redirect('home')
    
    return render(request, 'register.html')

# File: templates/register.html
"""
<form method="POST">
    {% csrf_token %}
    
    {% if error %}
        <p style="color: red;">{{ error }}</p>
    {% endif %}
    
    <input type="text" name="username" placeholder="Username" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password1" placeholder="Password" required>
    <input type="password" name="password2" placeholder="Confirm Password" required>
    <button type="submit">Register 🎉</button>
</form>
"""`,
        language: 'python'
      },
      {
        heading: '🔒 Using Django Forms for Auth',
        content: 'Django provides ready-made forms for authentication!',
        code: `# File: views.py

from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login

# Registration with Django's form
def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()  # Creates the user
            login(request, user)  # Log them in
            return redirect('home')
    else:
        form = UserCreationForm()
    
    return render(request, 'register.html', {'form': form})

# Login with Django's form
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')
    else:
        form = AuthenticationForm()
    
    return render(request, 'login.html', {'form': form})

# Template:
"""
<form method="POST">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Submit</button>
</form>
"""`,
        language: 'python',
        note: 'Django forms handle validation automatically - much safer! 🛡️'
      },
      {
        heading: '🚧 login_required Decorator',
        content: 'Protect views so only logged-in users can access them!',
        code: `# File: views.py

from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required  # Only logged-in users can see this!
def profile_view(request):
    return render(request, 'profile.html', {
        'user': request.user
    })

@login_required(login_url='/login/')  # Redirect to custom login page
def secret_page(request):
    return render(request, 'secret.html')

# If user is not logged in, they get redirected to login page!`,
        language: 'python',
        note: '@login_required is like a bouncer at a club - no login, no entry! 🚫'
      },
      {
        heading: '👥 Permissions & Groups',
        content: 'Control what different users can do!',
        code: `# File: views.py

from django.contrib.auth.decorators import permission_required, user_passes_test

# Only users with specific permission can access
@permission_required('blog.add_post')
def create_post_view(request):
    # Only users who can add posts see this
    return render(request, 'create_post.html')

# Check if user is staff
@user_passes_test(lambda u: u.is_staff)
def admin_dashboard(request):
    # Only staff members can access
    return render(request, 'admin_dashboard.html')

# In views, check permissions manually
def some_view(request):
    if request.user.has_perm('blog.delete_post'):
        # User can delete posts
        pass

# Working with groups
from django.contrib.auth.models import Group

# Create a group
editors = Group.objects.create(name='Editors')

# Add user to group
user.groups.add(editors)

# Check if user is in group
if user.groups.filter(name='Editors').exists():
    print("User is an editor! ✏️")`,
        language: 'python'
      },
      {
        heading: '🔑 Password Management',
        content: 'Help users change and reset their passwords!',
        code: `# File: views.py

from django.contrib.auth import update_session_auth_hash

@login_required
def change_password(request):
    if request.method == 'POST':
        old_password = request.POST['old_password']
        new_password = request.POST['new_password']
        
        user = request.user
        
        # Check if old password is correct
        if user.check_password(old_password):
            user.set_password(new_password)  # Hash and set new password
            user.save()
            
            # Keep user logged in after password change
            update_session_auth_hash(request, user)
            
            return redirect('profile')
        else:
            return render(request, 'change_password.html', {
                'error': 'Old password is incorrect! ❌'
            })
    
    return render(request, 'change_password.html')

# Django also has built-in password reset views!
# Just add to urls.py:
"""
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('password-reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
]
"""`,
        language: 'python',
        note: 'Always use set_password() - it automatically hashes the password! Never save raw passwords! 🔐'
      },
      {
        heading: '🎯 Checking Authentication in Templates',
        content: 'Show different content to logged-in vs logged-out users!',
        code: `<!-- File: templates/base.html -->

<!-- Check if user is logged in -->
{% if user.is_authenticated %}
    <p>Welcome back, {{ user.username }}! 👋</p>
    <p>Email: {{ user.email }}</p>
    <a href="{% url 'profile' %}">My Profile</a>
    <a href="{% url 'logout' %}">Logout</a>
{% else %}
    <a href="{% url 'login' %}">Login</a>
    <a href="{% url 'register' %}">Register</a>
{% endif %}

<!-- Check if user is staff -->
{% if user.is_staff %}
    <a href="{% url 'admin:index' %}">Admin Panel 👑</a>
{% endif %}

<!-- Check permissions -->
{% if perms.blog.add_post %}
    <a href="{% url 'create_post' %}">Write New Post ✏️</a>
{% endif %}`,
        language: 'django'
      }
    ],
    challenge: 'Create a complete login, logout, and registration system for your website! Add a profile page too! 🎯'
  },
  '10': {
    title: 'Sessions & Messages',
    subtitle: 'Remember users and show them messages!',
    emoji: '💬',
    realWorldExample: 'Sessions are like a shopping cart that remembers what you added! 🛒 Messages are like sticky notes that show up once and disappear - perfect for "Success!" notifications!',
    quickTip: 'Django sessions work automatically - just use request.session like a dictionary! 📦',
    sections: [
      {
        heading: '🍪 What are Sessions?',
        content: 'Sessions store information about each user as they browse your website. It\'s like giving each visitor their own backpack to carry stuff!',
        points: [
          'Sessions remember users between page loads',
          'Each user gets their own session (like their own locker)',
          'Sessions work automatically in Django - no setup needed!',
          'Data is stored on the server (safe!)',
          'Cookies are used to remember which session belongs to who'
        ],
        code: `# Sessions are enabled by default in Django!
# Check settings.py for:

MIDDLEWARE = [
    'django.contrib.sessions.middleware.SessionMiddleware',  # ✅
]

INSTALLED_APPS = [
    'django.contrib.sessions',  # ✅
]`,
        language: 'python'
      },
      {
        heading: '💾 Using Sessions',
        content: 'Store and retrieve data in sessions - super easy!',
        code: `# File: views.py

def add_to_cart(request, product_id):
    # Get or create cart in session
    cart = request.session.get('cart', {})
    
    # Add product to cart
    if product_id in cart:
        cart[product_id] += 1  # Increase quantity
    else:
        cart[product_id] = 1  # Add new item
    
    # Save back to session
    request.session['cart'] = cart
    
    return HttpResponse("Added to cart! 🛒")

def view_cart(request):
    # Get cart from session (empty dict if doesn't exist)
    cart = request.session.get('cart', {})
    
    return render(request, 'cart.html', {'cart': cart})

def clear_cart(request):
    # Delete cart from session
    if 'cart' in request.session:
        del request.session['cart']
    
    return redirect('home')

# Other session operations:

# Set a value
request.session['favorite_color'] = 'blue'
request.session['visit_count'] = 5

# Get a value
color = request.session.get('favorite_color', 'red')  # Default: red

# Check if key exists
if 'cart' in request.session:
    print("User has a cart!")

# Delete a key
del request.session['favorite_color']

# Clear all session data
request.session.flush()`,
        language: 'python',
        note: 'Changes to session are saved automatically - no need to call save()! 🎉'
      },
      {
        heading: '⏱️ Session Settings',
        content: 'Customize how sessions work!',
        code: `# File: settings.py

# How long sessions last (in seconds)
SESSION_COOKIE_AGE = 1209600  # 2 weeks (default)

# Expire session when browser closes?
SESSION_EXPIRE_AT_BROWSER_CLOSE = False  # Default: False

# Session cookie name
SESSION_COOKIE_NAME = 'sessionid'

# Save session on every request?
SESSION_SAVE_EVERY_REQUEST = False  # Default: False

# Where to store sessions
SESSION_ENGINE = 'django.contrib.sessions.backends.db'  # In database (default)
# Other options:
# 'django.contrib.sessions.backends.cache'  # In cache (faster!)
# 'django.contrib.sessions.backends.file'   # In files`,
        language: 'python'
      },
      {
        heading: '✉️ Django Messages Framework',
        content: 'Show temporary messages to users - perfect for notifications!',
        code: `# File: views.py

from django.contrib import messages
from django.shortcuts import redirect

def create_post(request):
    if request.method == 'POST':
        # ... save post ...
        
        # Add success message
        messages.success(request, 'Post created successfully! 🎉')
        return redirect('home')

def delete_post(request, post_id):
    # ... delete post ...
    
    messages.warning(request, 'Post deleted! 🗑️')
    return redirect('home')

def login_view(request):
    # ... login logic ...
    
    if user is None:
        messages.error(request, 'Invalid username or password! ❌')
    else:
        messages.info(request, f'Welcome back, {user.username}! 👋')
        return redirect('home')
    
    return render(request, 'login.html')

# Message levels:
messages.debug(request, 'Debug info')      # For developers
messages.info(request, 'FYI message')      # Blue
messages.success(request, 'It worked!')    # Green
messages.warning(request, 'Be careful')    # Yellow
messages.error(request, 'Something broke') # Red`,
        language: 'python',
        note: 'Messages appear once and then disappear - perfect for status updates! 💬'
      },
      {
        heading: '📺 Displaying Messages in Templates',
        content: 'Show messages to your users!',
        code: `<!-- File: templates/base.html -->

<!-- Simple message display -->
{% if messages %}
    {% for message in messages %}
        <div class="alert alert-{{ message.tags }}">
            {{ message }}
        </div>
    {% endfor %}
{% endif %}

<!-- Styled message display -->
{% if messages %}
    <div class="messages">
        {% for message in messages %}
            <div class="message 
                {% if message.tags == 'success' %}success
                {% elif message.tags == 'error' %}error
                {% elif message.tags == 'warning' %}warning
                {% else %}info{% endif %}">
                {{ message }}
                <button onclick="this.parentElement.remove()">×</button>
            </div>
        {% endfor %}
    </div>
{% endif %}

<!-- CSS for messages -->
<style>
.message {
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
}

.message.success {
    background: #d4edda;
    color: #155724;
}

.message.error {
    background: #f8d7da;
    color: #721c24;
}

.message.warning {
    background: #fff3cd;
    color: #856404;
}

.message.info {
    background: #d1ecf1;
    color: #0c5460;
}
</style>`,
        language: 'django'
      },
      {
        heading: '🎯 Practical Session Examples',
        content: 'Real-world uses for sessions!',
        code: `# Example 1: Page view counter
def home(request):
    # Count how many times user visited
    visits = request.session.get('visits', 0)
    request.session['visits'] = visits + 1
    
    return render(request, 'home.html', {
        'visits': request.session['visits']
    })

# Example 2: Remember user preferences
def set_theme(request):
    theme = request.POST.get('theme', 'light')
    request.session['theme'] = theme
    messages.success(request, f'Theme changed to {theme}! 🎨')
    return redirect('home')

def get_theme(request):
    return request.session.get('theme', 'light')  # Default: light

# Example 3: Multi-step form
def step1(request):
    if request.method == 'POST':
        request.session['step1_data'] = {
            'name': request.POST['name'],
            'email': request.POST['email']
        }
        return redirect('step2')
    return render(request, 'step1.html')

def step2(request):
    if request.method == 'POST':
        # Get data from step 1
        step1_data = request.session.get('step1_data', {})
        
        # Combine with step 2 data
        full_data = {
            **step1_data,
            'address': request.POST['address'],
            'phone': request.POST['phone']
        }
        
        # Save to database
        # ... save full_data ...
        
        # Clear session
        del request.session['step1_data']
        
        messages.success(request, 'Registration complete! 🎉')
        return redirect('home')
    
    return render(request, 'step2.html')

# Example 4: Recently viewed items
def view_product(request, product_id):
    # Get recently viewed list
    recent = request.session.get('recent_products', [])
    
    # Add this product (avoid duplicates)
    if product_id in recent:
        recent.remove(product_id)
    recent.insert(0, product_id)  # Add to front
    
    # Keep only last 5
    recent = recent[:5]
    
    request.session['recent_products'] = recent
    
    return render(request, 'product.html')`,
        language: 'python'
      },
      {
        heading: '🔔 Custom Message Tags',
        content: 'Add extra CSS classes to messages!',
        code: `# File: views.py

from django.contrib import messages

def some_view(request):
    # Add custom tags (for CSS styling)
    messages.success(
        request, 
        'Profile updated!', 
        extra_tags='custom-success animated'
    )
    
    return redirect('profile')

# In template:
"""
{% for message in messages %}
    <div class="alert {{ message.tags }}">
        {{ message }}
    </div>
{% endfor %}
"""

# Results in:
# <div class="alert success custom-success animated">Profile updated!</div>`,
        language: 'python'
      }
    ],
    challenge: 'Create a shopping cart using sessions and show success messages when items are added! 🛒'
  },
  '11': {
    title: 'File & Image Handling',
    subtitle: 'Upload and manage files and images!',
    emoji: '📷',
    realWorldExample: 'File uploads are like putting photos in a photo album! 📸 Django helps you save user-uploaded images and files safely on your server!',
    quickTip: 'Use ImageField for pictures and FileField for any file type! 🖼️',
    sections: [
      {
        heading: '⚙️ Media Settings',
        content: 'First, configure Django to handle uploaded files!',
        code: `# File: settings.py

# Where uploaded files are stored
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# BASE_DIR is defined at top of settings.py
# This creates a 'media' folder in your project

# File: mysite/urls.py (main urls.py)

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # ... your other URL patterns ...
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)`,
        language: 'python',
        note: 'MEDIA_ROOT is where files are saved. MEDIA_URL is the URL to access them! 📁'
      },
      {
        heading: '🖼️ Creating Model with ImageField',
        content: 'Add image fields to your models!',
        code: `# File: models.py

from django.db import models

class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    # Image field!
    profile_picture = models.ImageField(upload_to='profiles/')
    # Files go to: media/profiles/
    
    bio = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    # Allow blank (optional image)
    featured_image = models.ImageField(
        upload_to='post_images/',
        blank=True,
        null=True
    )

class Document(models.Model):
    title = models.CharField(max_length=200)
    # Any file type!
    file = models.FileField(upload_to='documents/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

# Install Pillow for image handling:
# pip install Pillow`,
        language: 'python'
      },
      {
        heading: '📤 Upload Form with Files',
        content: 'Create a form to upload files!',
        code: `# File: forms.py

from django import forms
from .models import UserProfile

class ProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['name', 'profile_picture', 'bio']

# File: views.py

from .forms import ProfileForm

def create_profile(request):
    if request.method == 'POST':
        # IMPORTANT: include request.FILES for file uploads!
        form = ProfileForm(request.POST, request.FILES)
        
        if form.is_valid():
            profile = form.save()
            messages.success(request, 'Profile created! 🎉')
            return redirect('profile', id=profile.id)
    else:
        form = ProfileForm()
    
    return render(request, 'create_profile.html', {'form': form})

# File: templates/create_profile.html
"""
<form method="POST" enctype="multipart/form-data">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Create Profile 📸</button>
</form>
"""`,
        language: 'python',
        note: 'Never forget enctype="multipart/form-data" in forms with file uploads! 🎯'
      },
      {
        heading: '🎨 Displaying Uploaded Images',
        content: 'Show uploaded images in your templates!',
        code: `<!-- File: templates/profile.html -->

<div class="profile">
    <h2>{{ profile.name }}</h2>
    
    <!-- Check if image exists -->
    {% if profile.profile_picture %}
        <img src="{{ profile.profile_picture.url }}" 
             alt="{{ profile.name }}'s picture"
             style="width: 200px; height: 200px; border-radius: 50%;">
    {% else %}
        <img src="/static/images/default-avatar.png" alt="Default avatar">
    {% endif %}
    
    <p>{{ profile.bio }}</p>
</div>

<!-- For files (documents, PDFs, etc.) -->
{% if document.file %}
    <a href="{{ document.file.url }}" download>
        Download {{ document.title }} 📄
    </a>
{% endif %}`,
        language: 'django'
      },
      {
        heading: '✏️ Updating Files',
        content: 'Let users change their uploaded files!',
        code: `# File: views.py

def edit_profile(request, profile_id):
    profile = UserProfile.objects.get(id=profile_id)
    
    if request.method == 'POST':
        form = ProfileForm(
            request.POST,
            request.FILES,  # Don't forget this!
            instance=profile
        )
        
        if form.is_valid():
            form.save()
            messages.success(request, 'Profile updated! ✅')
            return redirect('profile', id=profile.id)
    else:
        form = ProfileForm(instance=profile)
    
    return render(request, 'edit_profile.html', {
        'form': form,
        'profile': profile
    })

# File: templates/edit_profile.html
"""
<form method="POST" enctype="multipart/form-data">
    {% csrf_token %}
    
    <!-- Show current image -->
    {% if profile.profile_picture %}
        <p>Current picture:</p>
        <img src="{{ profile.profile_picture.url }}" width="100">
    {% endif %}
    
    {{ form.as_p }}
    <button type="submit">Update Profile ✏️</button>
</form>
"""`,
        language: 'python'
      },
      {
        heading: '🗑️ Deleting Files',
        content: 'Remove files from storage when deleting objects!',
        code: `# File: views.py

import os
from django.conf import settings

def delete_profile(request, profile_id):
    profile = UserProfile.objects.get(id=profile_id)
    
    # Delete the image file from storage
    if profile.profile_picture:
        if os.path.isfile(profile.profile_picture.path):
            os.remove(profile.profile_picture.path)
    
    # Delete the database entry
    profile.delete()
    
    messages.success(request, 'Profile deleted! 🗑️')
    return redirect('home')

# Or use Django signals to auto-delete files:
# File: signals.py

from django.db.models.signals import post_delete
from django.dispatch import receiver
from .models import UserProfile

@receiver(post_delete, sender=UserProfile)
def delete_profile_picture(sender, instance, **kwargs):
    # Delete image file when profile is deleted
    if instance.profile_picture:
        if os.path.isfile(instance.profile_picture.path):
            os.remove(instance.profile_picture.path)`,
        language: 'python',
        note: 'Files don\'t auto-delete when you delete the model - you need to do it manually! 🧹'
      },
      {
        heading: '📏 File Validation',
        content: 'Make sure users upload the right types and sizes of files!',
        code: `# File: forms.py

from django import forms
from django.core.exceptions import ValidationError

class ProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['name', 'profile_picture', 'bio']
    
    def clean_profile_picture(self):
        image = self.cleaned_data.get('profile_picture')
        
        if image:
            # Check file size (5MB max)
            if image.size > 5 * 1024 * 1024:  # 5MB in bytes
                raise ValidationError('Image file too large! Max 5MB 📦')
            
            # Check file extension
            valid_extensions = ['.jpg', '.jpeg', '.png', '.gif']
            ext = os.path.splitext(image.name)[1].lower()
            if ext not in valid_extensions:
                raise ValidationError('Only JPG, PNG, and GIF allowed! 🖼️')
        
        return image

# Or use a custom validator:
from django.core.validators import FileExtensionValidator

class Post(models.Model):
    image = models.ImageField(
        upload_to='posts/',
        validators=[
            FileExtensionValidator(
                allowed_extensions=['jpg', 'jpeg', 'png']
            )
        ]
    )`,
        language: 'python'
      },
      {
        heading: '📁 Dynamic Upload Paths',
        content: 'Organize uploads into folders automatically!',
        code: `# File: models.py

def user_directory_path(instance, filename):
    # Files saved to: media/user_<id>/<filename>
    return f'user_{instance.user.id}/{filename}'

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to=user_directory_path)

# Or by date:
def date_directory_path(instance, filename):
    # Files saved to: media/2025/12/27/<filename>
    from datetime import date
    today = date.today()
    return f'{today.year}/{today.month}/{today.day}/{filename}'

class Post(models.Model):
    image = models.ImageField(upload_to=date_directory_path)

# Or rename files:
import uuid

def rename_image(instance, filename):
    ext = filename.split('.')[-1]
    new_filename = f'{uuid.uuid4()}.{ext}'
    return f'uploads/{new_filename}'

class Photo(models.Model):
    image = models.ImageField(upload_to=rename_image)`,
        language: 'python'
      }
    ],
    challenge: 'Create a photo gallery where users can upload and view images! Add validation! 📸'
  },
  '12': {
    title: 'Class Based Views (CBV)',
    subtitle: 'More powerful views with less code!',
    emoji: '🏗️',
    realWorldExample: 'Class Based Views are like using power tools instead of hand tools! 🔧 They do common tasks automatically so you write less code!',
    quickTip: 'Use ListView for lists, DetailView for single items, CreateView for forms! ⚡',
    sections: [
      {
        heading: '🤔 CBV vs FBV',
        content: 'Function Based Views vs Class Based Views - what\'s the difference?',
        points: [
          '📝 FBV: Simple functions, easy to understand',
          '🏗️ CBV: Reusable classes, less code for common patterns',
          '✅ FBV: Better for unique, custom logic',
          '⚡ CBV: Better for standard CRUD operations',
          '🎯 Both are valid - use what fits best!'
        ],
        code: `# Function Based View (FBV)
def post_list(request):
    posts = Post.objects.all()
    return render(request, 'post_list.html', {'posts': posts})

# Class Based View (CBV) - same result!
from django.views.generic import ListView

class PostListView(ListView):
    model = Post
    template_name = 'post_list.html'
    context_object_name = 'posts'

# URLs for CBV:
path('posts/', PostListView.as_view(), name='post-list')`,
        language: 'python'
      },
      {
        heading: '📋 ListView - Display List of Items',
        content: 'Show a list of objects from your database!',
        code: `# File: views.py

from django.views.generic import ListView
from .models import Post

class PostListView(ListView):
    model = Post
    template_name = 'post_list.html'
    context_object_name = 'posts'  # Name in template
    paginate_by = 10  # Show 10 per page
    ordering = ['-created_at']  # Newest first

# File: urls.py
path('posts/', PostListView.as_view(), name='post-list')

# File: templates/post_list.html
"""
<h1>All Posts</h1>

{% for post in posts %}
    <div class="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
    </div>
{% endfor %}

<!-- Pagination -->
{% if is_paginated %}
    <div class="pagination">
        {% if page_obj.has_previous %}
            <a href="?page=1">First</a>
            <a href="?page={{ page_obj.previous_page_number }}">Previous</a>
        {% endif %}
        
        Page {{ page_obj.number }} of {{ page_obj.paginator.num_pages }}
        
        {% if page_obj.has_next %}
            <a href="?page={{ page_obj.next_page_number }}">Next</a>
            <a href="?page={{ page_obj.paginator.num_pages }}">Last</a>
        {% endif %}
    </div>
{% endif %}
"""`,
        language: 'python',
        note: 'ListView automatically handles pagination - super convenient! 📄'
      },
      {
        heading: '🔍 DetailView - Display Single Item',
        content: 'Show details of one specific object!',
        code: `# File: views.py

from django.views.generic import DetailView
from .models import Post

class PostDetailView(DetailView):
    model = Post
    template_name = 'post_detail.html'
    context_object_name = 'post'

# File: urls.py
path('post/<int:pk>/', PostDetailView.as_view(), name='post-detail')
# pk = primary key (ID)

# File: templates/post_detail.html
"""
<article>
    <h1>{{ post.title }}</h1>
    <p class="meta">By {{ post.author }} on {{ post.created_at }}</p>
    <div class="content">
        {{ post.content }}
    </div>
</article>

<a href="{% url 'post-list' %}">Back to all posts</a>
"""

# Customizing:
class PostDetailView(DetailView):
    model = Post
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Add extra data
        context['related_posts'] = Post.objects.all()[:5]
        return context`,
        language: 'python'
      },
      {
        heading: '➕ CreateView - Add New Items',
        content: 'Create forms to add new database entries!',
        code: `# File: views.py

from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
from .models import Post

class PostCreateView(CreateView):
    model = Post
    fields = ['title', 'content', 'category']
    template_name = 'post_form.html'
    success_url = reverse_lazy('post-list')  # Redirect after save

# Or use a form class:
from .forms import PostForm

class PostCreateView(CreateView):
    model = Post
    form_class = PostForm
    template_name = 'post_form.html'
    
    def form_valid(self, form):
        # Set author to current user
        form.instance.author = self.request.user
        return super().form_valid(form)
    
    def get_success_url(self):
        # Redirect to the created post
        return reverse_lazy('post-detail', kwargs={'pk': self.object.pk})

# File: urls.py
path('post/new/', PostCreateView.as_view(), name='post-create')

# File: templates/post_form.html
"""
<h1>Create New Post</h1>

<form method="POST">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Create Post ✨</button>
</form>
"""`,
        language: 'python'
      },
      {
        heading: '✏️ UpdateView - Edit Existing Items',
        content: 'Let users edit their data!',
        code: `# File: views.py

from django.views.generic.edit import UpdateView

class PostUpdateView(UpdateView):
    model = Post
    fields = ['title', 'content', 'category']
    template_name = 'post_form.html'
    
    def get_success_url(self):
        return reverse_lazy('post-detail', kwargs={'pk': self.object.pk})

# File: urls.py
path('post/<int:pk>/edit/', PostUpdateView.as_view(), name='post-edit')

# Same template as CreateView!
# It automatically pre-fills the form with existing data! 🎉

# Restrict to author only:
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin

class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    fields = ['title', 'content']
    
    def test_func(self):
        # Only author can edit
        post = self.get_object()
        return self.request.user == post.author`,
        language: 'python'
      },
      {
        heading: '🗑️ DeleteView - Remove Items',
        content: 'Delete objects with confirmation!',
        code: `# File: views.py

from django.views.generic.edit import DeleteView

class PostDeleteView(DeleteView):
    model = Post
    template_name = 'post_confirm_delete.html'
    success_url = reverse_lazy('post-list')

# File: urls.py
path('post/<int:pk>/delete/', PostDeleteView.as_view(), name='post-delete')

# File: templates/post_confirm_delete.html
"""
<h1>Delete Post</h1>

<p>Are you sure you want to delete "{{ post.title }}"? 🗑️</p>

<form method="POST">
    {% csrf_token %}
    <button type="submit" class="btn-danger">Yes, Delete</button>
    <a href="{% url 'post-detail' post.pk %}">Cancel</a>
</form>
"""

# Restrict to author:
class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    success_url = reverse_lazy('post-list')
    
    def test_func(self):
        post = self.get_object()
        return self.request.user == post.author`,
        language: 'python',
        note: 'DeleteView shows a confirmation page by default - safety first! 🛡️'
      },
      {
        heading: '🔐 Mixins - Add Superpowers to CBVs',
        content: 'Mixins add extra functionality to your class-based views!',
        code: `from django.contrib.auth.mixins import (
    LoginRequiredMixin,
    PermissionRequiredMixin,
    UserPassesTestMixin
)

# Only logged-in users can access
class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['title', 'content']
    login_url = '/login/'  # Where to redirect if not logged in

# Only users with specific permission
class PostCreateView(PermissionRequiredMixin, CreateView):
    model = Post
    fields = ['title', 'content']
    permission_required = 'blog.add_post'

# Custom test (only staff)
class StaffOnlyView(UserPassesTestMixin, ListView):
    model = Post
    
    def test_func(self):
        return self.request.user.is_staff

# Combine multiple mixins!
class PostUpdateView(
    LoginRequiredMixin,
    UserPassesTestMixin,
    UpdateView
):
    model = Post
    fields = ['title', 'content']
    
    def test_func(self):
        # Only author can edit
        post = self.get_object()
        return self.request.user == post.author`,
        language: 'python'
      },
      {
        heading: '🎯 Customizing CBVs',
        content: 'Override methods to customize behavior!',
        code: `class PostListView(ListView):
    model = Post
    
    # Filter which objects to show
    def get_queryset(self):
        # Only published posts
        return Post.objects.filter(is_published=True)
    
    # Add extra context
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['total_posts'] = Post.objects.count()
        context['categories'] = Category.objects.all()
        return context

class PostCreateView(CreateView):
    model = Post
    fields = ['title', 'content']
    
    # Before saving
    def form_valid(self, form):
        # Add author automatically
        form.instance.author = self.request.user
        messages.success(self.request, 'Post created! 🎉')
        return super().form_valid(form)
    
    # If form has errors
    def form_invalid(self, form):
        messages.error(self.request, 'Please fix the errors! ❌')
        return super().form_invalid(form)
    
    # Change template based on condition
    def get_template_names(self):
        if self.request.user.is_staff:
            return ['admin_post_form.html']
        return ['post_form.html']`,
        language: 'python'
      }
    ],
    challenge: 'Convert one of your function-based views to a class-based view! See how much shorter it gets! 🚀'
  }
};

export default additionalTopics;