# Generated by Django 5.0.4 on 2024-05-28 23:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('equip_for_living', '0004_alter_registration_volunteer_preference'),
    ]

    operations = [
        migrations.AddField(
            model_name='registration',
            name='how_heard',
            field=models.TextField(blank=True, null=True),
        ),
    ]
