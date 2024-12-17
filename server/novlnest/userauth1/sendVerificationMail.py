from django.core.mail import send_mail
import os
from dotenv import load_dotenv

def send_verification_mail (user_email, otp):
    load_dotenv()
    subject = "Verify Your Email ID on NovlNest!"
    message = f"Your 6-digit One Time Password is {otp}"
    to_email = [user_email]
    print(to_email)
    send_mail (subject, message, os.getenv("EMAIL_HOST_USER"), to_email, fail_silently=False)