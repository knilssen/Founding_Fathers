from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Articles(models.Model):
    id = models.AutoField(primary_key=True)
    url = models.URLField(max_length = 45)
    source = models.CharField()
    post_date = models.DateTimeField()
    found_date = models.DateTimeField()
    title = models.CharField()
    aurthor = models.CharField(blank=True)
    keywords = models.CharField(blank=True)
    summary = models.CharField(blank=True)
    text = models.TextField()
    top_image = models.URLField(blank=True)
    video = models.URLField(blank=True)


class People(models.Model):
    id = models.AutoField(primary_key=True)
    last_name = models.CharField(max_length=45)
    first_name = models.CharField(max_length=45)
    party = models.CharField(max_length=45)
    role = models.CharField(max_length=45)
    legislative_since = models.CharField(max_length=45, blank=True)
    biography = models.CharField(max_length=45, blank=True)
    district = models.CharField(max_length=45, blank=True)
    phone_number = models.CharField(max_length=45)
    mailing_address = models.CharField(max_length=45)
    committies = models.CharField(max_length=45)
    social_media = models.CharField(max_length=45)

class Article_Person(models.Model):
    weight = models.IntegerField(blank=True)
    articles_id = models.ForeignKey(Articles, on_delete=models.CASCADE)
    people_id = models.ForeignKey(People, on_delete=models.CASCADE)

class Bills(models.Model):
    bill_name_id = models.IntegerField(primary_key=True)
    bill_type_choices = (
        ('HB','House Bill'),
        ('nHCR','House Concurrect Resolutions'),
        ('nHJR','House Joint Resolutions'),
        ('nHR','House Resolutions'),
        ('nSB','Senate Bills'),
        ('nSCR','Senate Concurrent'),
        ('nSJR','Senate Joint Resolutions'),
        ('nSR','Senate Resolutions')
        )
    bill_type = models.CharField(choices=bill_type_choices)
    sponser = models.CharField(max_length=45, blank=True)
    floor_sponser = models.CharField(max_length=45, blank=True)
    substitute_sponser = models.CharField(max_length=45, blank=True)
    last_action = models.CharField(max_length=45, blank=True)
    last_location = models.CharField(max_length=45, blank=True)
    text = models.CharField(max_length=45, blank=True)

class Bill_Status(models.Model):
    bill_name_id = models.ForeignKey(Bills)
    date = models.DateTimeField()
    action = models.CharField(max_length=45)
    location = models.CharField(max_length=45)
    vote = models.CharField(max_legnth=45,blank=True)
    who_acted_choices = (
        'Senate Actions',
        'House Actions',
        'Fiscal Actions',
        'Other Actions'
        )
    who_acted = models.CharField(choices=who_acted_choices)

class Article_Bill(models.Model):
    articles_id = models.ForeignKey(Articles)
    bill_name_id = models.ForeignKey(Bills)
    weight = models.IntegerField()

class Person_Bill(models.Model):
    people_id = models.ForeignKey(People)
    bill_name_id = models.ForeignKey(Bills)

class Location(models.Model):
    idlocations = models.IntegerField(primary_key=True)

class Articles_Bills(models.Model):
    article_id = models.ForeignKey(Articles)
    location_id = models.ForeignKey(Location)
    weight = models.IntegerField(blank=True)

class Article_Based_Weights(models.Model):
    articles_id = models.ForeignKey(Articles)
    name_mentions_total = models.CharField(max_length=45, blank=True)
    place_mention_total = models.CharField(max_length=45, blank=True)
    length = models.CharField(max_length = 45, blank=True)
    source_size_ration = models.CharField(max_length=45, blank=True)
    is_local = models.CharField(max_length=45, blank=True)

class Committies(models.Model):
    idcommitties = models.AutoField(primary_key=True)
    committie = models.CharField(max_length=45)
    overview = models.CharField(max_length=45, blank=True)

class Person_Committies(models.Model):
    people_id = models.ForeignKey(People)
    idcommitties = models.ForeignKey(Committies)

class Person_Weight(models.Model):
    person_article_id = models.ForeignKey(Person_Article)
    people_id = models.ForeignKey(Person_Article)
    name_mentions = models.CharField(max_length=45, blank=True)
    mention_percentage = models.CharField(max_length=45, blank=True)

class Location_Weight(models.Model):
    articles_id = models.ForeignKey(Article_Location)
    idlocations = models.ForeignKey(Article_Location)
    location_mentions = models.CharField(max_length=45, blank=True)
    mention_percentage = models.CharField(max_length=45, blank=True)

class Bill_Weight(models.Model):
    articles_id = models.ForeignKey(Articles)
    bill_name_id = models.ForeignKey(Bill)
    location_mentions = models.CharField(max_length=45, blank=True)
    mention_percentage = models.CharField(max_length=45, blank=True)

class Social_Media(models.Model):
    articles_id = models.ForeignKey(Article_Based_Weights)
    facebook_share = models.CharField(max_length=45, blank=True)
    reddit = models.CharField(max_length=45, blank=True)
    total_count = models.CharField(max_length=45, blank=True)
