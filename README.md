# Payroll_Plus
Employee payroll web app; Based off React's framework Next JS and Python's web framework Django


# Backend Application
The backend api or application is built using Python's Web framework Django. Which provides developers with rich
set of tools to use in the development of web applications.

- Official website(s) and more:
                                https://www.djangoproject.com/
                                https://www.django-rest-framework.org/

# Frontend Application
The frontend application, built using JavaScript; Is based on Vercel's Next JS. A framework based of facebook's React.
This provides frontenders with rich tools such as Fast refresh among others.

- Official website(s) and more:
                                https://nextjs.org/

# Testing:

Testing and Quality Assurance for the frontend application is achieved using jest-enzyme, an npm package making testing easier 
and convenient for developers.

- Official website(s) and more:
                                https://www.npmjs.com/package/jest-enzyme#jest-enzyme-environment
                                
#Running the application

Frontend Local Instance
-----------------------
1.	Download and Install Node.JS: https://nodejs.org/en/
a.	Choose the windows msi LTS installer
2.	Download and install Yarn: https://yarnpkg.com/getting-started/install.
b.	You need to get through with the Node installation before installing the Yarn Package Manager. You need to be connected to the internet while observing this step
3.	In the root folder where you have the package.json (Access the root folder via cmd) – run _yarn install_. You must be connected to the internet while doing this.
4.	After the above step, run _yarn dev_ in the root folder where you have the package.json.
5.	After running _yarn dev_ in the command prompt, the app will be served on http://localhost:3000.
6.	Open the link in your browser and you will be served the landing/home page of the application.

Backend Local Instance
------------------------
1.	Install Python and all of its dependencies https://www.python.org/downloads/ .
2.	If you already have python and its dependencies installed, then skip the above step.
3.	Create a virtual environment for the backend service using help form this link https://uoa-eresearch.github.io/eresearch-cookbook/recipe/2014/11/26/python-virtual-env/ . Run _python manage.py runserver_ in your terminal; This should be done in the root folder where you have _manage.py_.
4.	The backend apis will be served on http://localhost:8000.
