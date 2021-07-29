# Generated by Django 3.2.5 on 2021-07-29 20:53

from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('username', models.CharField(blank=True, max_length=255, null=True)),
                ('email', models.EmailField(blank=True, max_length=255, unique=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Employees',
            fields=[
                ('employee_id', models.IntegerField(primary_key=True, serialize=False)),
                ('employee_firstname', models.CharField(max_length=255)),
                ('employee_lastname', models.CharField(max_length=255)),
                ('employee_dob', models.DateField()),
                ('employee_department', models.CharField(max_length=255)),
                ('employee_unit', models.CharField(max_length=255)),
                ('employee_rate', models.IntegerField(default=0)),
                ('employee_baseSalary', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=5)),
                ('date_of_birth', models.DateField()),
                ('address', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('zip', models.CharField(max_length=5)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Salary',
            fields=[
                ('salary_id', models.IntegerField(primary_key=True, serialize=False)),
                ('salary_amount', models.IntegerField(default=0)),
                ('amount_paid', models.IntegerField(default=0)),
                ('due_date', models.IntegerField()),
                ('date_paid', models.IntegerField()),
                ('employee_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='payroll.employees')),
            ],
        ),
        migrations.CreateModel(
            name='Payroll',
            fields=[
                ('payroll_id', models.IntegerField(primary_key=True, serialize=False)),
                ('comphourlyRate', models.IntegerField(default=0)),
                ('daysClocked', models.IntegerField(default=0)),
                ('salary', models.IntegerField(default=0)),
                ('employee_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='payroll.employees')),
            ],
        ),
    ]
