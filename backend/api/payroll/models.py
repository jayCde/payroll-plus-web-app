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
    
