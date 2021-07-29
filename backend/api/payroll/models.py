from django.db import models
from django.db.models.deletion import CASCADE
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.utils.translation import ugettext_lazy as _





# Create your models here.

#Users Model
class User(AbstractUser):
    username = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255,blank=True,unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    def __str__(self):
        return "{}".format(self.email)

class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
    title = models.CharField(max_length=5)
    date_of_birth = models.DateField()
    address = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    zip = models.CharField(max_length=5)
    
    # user_firstname = models.CharField(max_length=255, blank=False)
    # user_lastname = models.CharField(max_length=255, blank=False)
    # user_phone = PhoneNumberField(blank=False, unique=True)
    # user_email = models.EmailField(max_length=70,blank=True,unique=True)
    # user_gender = models.CharField(max_length=255, blank=False)
    # user_password = models.CharField(max_length=255, blank=False)
    



#Employee Model
class Employees(models.Model):
    employee_id = models.IntegerField(primary_key=True, null=False)
    employee_firstname = models.CharField(max_length=255, null=False)
    employee_lastname = models.CharField(max_length=255, null=False)
    employee_gender = models.Choices("Male", "Female")
    employee_dob = models.DateField(null=False)
    employee_department = models.CharField(max_length=255, null=False)
    employee_unit = models.CharField(max_length=255, null=False)
    employee_rate = models.IntegerField(null=False, default=0)
    employee_baseSalary = models.IntegerField(null=False, default=0)

    #return full name from first and lastnames
    @property
    def employee_fullname(self):
        return "%s  %s" % ( self.employee_firstname, self.employee_lastname)

    def __str__(self):
        return self.employee_fullname
    

#Salary Model
class Salary(models.Model):
    salary_id = models.IntegerField(primary_key=True, null=False)
    employee_id = models.ForeignKey(Employees, on_delete=models.CASCADE)
    salary_amount = models.IntegerField(null=False, default=0)
    amount_paid = models.IntegerField(null=False, default=0)
    due_date = models.IntegerField(null=False)
    date_paid = models.IntegerField(null=False)

    #return a stringed type of the salary id
    @property
    def sal_id(self):
        return str(self.salary_id)

    def __str__(self):
        return self.sal_id
    

#Payroll Model

class Payroll(models.Model):
    payroll_id = models.IntegerField(primary_key=True, null=False)
    employee_id = models.ForeignKey(Employees, on_delete=models.CASCADE)
    comphourlyRate = models.IntegerField(null=False, default=0)
    daysClocked = models.IntegerField(null=False, default=0)
    salary = models.IntegerField(null=False, default=0)

#return a stringed type of the payroll id
    @property
    def emp_id(self):
        return str(self.payroll_id)

    def __str__(self):
        return self.emp_id
    
