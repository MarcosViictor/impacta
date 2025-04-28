SECRET_KEY = 'test'
INSTALLED_APPS = [
    'usuarios',
]
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': ':memory:',
    }
}