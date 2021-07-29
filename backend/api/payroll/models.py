from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.

# #Users Model
# class Users:
#     user_firstname =
#     user_lastname =



#Employee Model
class Employees(models.Model):
    employee_id = models.IntegerField(primary_key=True, null=False)
    employee_firstname = models.CharField(max_length=255, null=False)
    employee_lastname = models.CharField(max_length=255, null=False)
    employee_gender = models.Choices("Male", "Female")
    employee_dob = models.DateField(null=False)
    employee_department = models.CharField(max_length=255, null=False)
    employee_unit = models.CharField(max_length=255, null=False)
    employee_rate = models.IntegerField(max_length=255, null=False, default=0)
    employee_baseSalary = models.IntegerField(max_length=None, null=False)

#Salary Model
class Salary(models.Model):
    employee_id = models.ForeignKey(Employees, on_delete=models.CASCADE)
    salary_amount = models.IntegerField(max_length=None, null=False, default=0)
    amount_paid = models.IntegerField(max_length=None, null=False, default=0)
    due_date = models.IntegerField(max_length=None, null=False)
    date_paid = models.IntegerField(max_length=None, null=False)

#Payroll Model

class Payroll(models.Model):
    employee_id = models.ForeignKey(Employees, on_delete=models.CASCADE)
    comphourlyRate = models.IntegerField(max_length=255, null=False, default=0)
    daysClocked = models.IntegerField(max_length=255, null=False, default=0)
    salary = models.IntegerField(max_length=255, null=False, default=0)
