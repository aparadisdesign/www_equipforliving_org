# Generated by Django 5.0.4 on 2024-06-30 22:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('equip_for_living', '0005_registration_how_heard'),
    ]

    operations = [
        migrations.AddField(
            model_name='registration',
            name='wetsuit',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]