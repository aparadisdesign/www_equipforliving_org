from django.db import models


class EventDate(models.Model):
    date = models.DateField()

    def __str__(self):
        return self.date.strftime("%B %d, %Y")

    class Meta:
        ordering = ['date']


# Create your models here.
class Registration(models.Model):
    REGISTRATION_TYPE_CHOICES = [
        ("Volunteer", "Volunteer"),
        ("Surfer", "Surfer"),
    ]
    VOLUNTEER_PREFERENCE = [
        ("In Water", "In Water"),
        ("Out of Water", "Out of Water"),
        ("On Land", "On Land"),
        ("Wherever", "Wherever"),
    ]
    # NEED TO ADDRESS DATETIMES
    attendance_dates = models.ManyToManyField(EventDate)
    registration_type = models.CharField(max_length=10, blank=False, null=False, choices=REGISTRATION_TYPE_CHOICES)
    first_name = models.CharField(max_length=100, blank=False, null=False)
    last_name = models.CharField(max_length=100, blank=False, null=False)
    email = models.EmailField(blank=False, null=False)
    phone_number = models.CharField(max_length=19, blank=True, null=True)
    first_time_surfing = models.BooleanField(default=None, null=True, blank=True)
    height = models.CharField(max_length=20, blank=True, null=True)
    weight = models.CharField(max_length=20, blank=True, null=True)
    disability_background = models.TextField(blank=True, null=True)
    volunteer_preference = models.CharField(max_length=12, blank=True, null=True, choices=VOLUNTEER_PREFERENCE)
    comment = models.TextField(blank=True, null=True)
    emergency_contact_relationship = models.CharField(max_length=255, blank=True, null=True)
    emergency_contact_name = models.CharField(max_length=255, blank=True, null=True)
    emergency_contact_phone = models.CharField(max_length=255, blank=True, null=True)
    release_role = models.CharField(max_length=255, blank=True, null=True)
    signature = models.CharField(max_length=255, blank=True, null=True)
    date = models.DateField(blank=False, null=False)
    how_heard = models.TextField(blank=True, null=True)
    wetsuit = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"{self.last_name}, {self.first_name}"

    class Meta:
        ordering = ["last_name", "first_name"]

class GrantApplication(models.Model):

    APPLICATION_REASON_CHOICES = [
        ("Medical Equipment", "Medical Equipment"),
        ("Home Modification", "Home Modification"),
        ("Vehicle Modification", "Vehicle Modification"),
        ("Other", "Other"),
    ]

    first_name = models.CharField(max_length=100, blank=False, null=False)
    last_name = models.CharField(max_length=100, blank=False, null=False)
    date_of_birth = models.DateField(blank=False, null=False)
    phone_number = models.CharField(max_length=19, blank=True, null=True)
    email = models.EmailField(blank=False, null=False)
    home_address = models.TextField(blank=False, null=False)
    home_city = models.CharField(max_length=100, blank=False, null=False)
    home_state = models.CharField(max_length=2, blank=False, null=False)
    home_zip = models.CharField(max_length=10, blank=False, null=False)
    mailing_address = models.TextField(blank=True, null=True)
    mailing_city = models.CharField(max_length=100, blank=True, null=True)
    mailing_state = models.CharField(max_length=2, blank=True, null=True)
    mailing_zip = models.CharField(max_length=10, blank=True, null=True)
    diagnosis = models.TextField(blank=False, null=False)
    application_reason = models.CharField(max_length=255, blank=False, null=False, choices=APPLICATION_REASON_CHOICES)
    vendor_name = models.CharField(max_length=255, blank=True, null=True)
    total_cost = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    amount_requested = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    other_funding_sources = models.TextField(blank=True, null=True)
    other_funding_amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    application_letter = models.TextField(blank=False, null=False)
    mainecare_denial_upload = models.FileField(upload_to="mainecare_denial", blank=True, null=True)
    vendor_quote_upload = models.FileField(upload_to="vendor_quote", blank=True, null=True)
    letter_of_recommendation_upload = models.FileField(upload_to="letter_of_recommendation", blank=True, null=True)
    refuse_to_disclose = models.CharField(max_length=255, blank=False, null=False)
    signature = models.CharField(max_length=255, blank=False, null=False)
    date = models.DateField(blank=False, null=False)
    how_heard = models.TextField(blank=True, null=True)
