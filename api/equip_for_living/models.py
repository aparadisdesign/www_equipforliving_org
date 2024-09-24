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