from django.contrib import admin

# Register your models here.
from .models import Employees, Salary, Payroll

admin.site.register(Employees)
admin.site.register(Salary)
admin.site.register(Payroll)
