# Generated by Django 4.2.13 on 2024-08-21 03:42

from django.db import migrations
import wagtail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_homepage_heading'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='introduction',
            field=wagtail.fields.RichTextField(blank=True),
        ),
    ]
