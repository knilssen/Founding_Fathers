'''
Python script that reads in text from an article, and either finds people in the text or it returns an accurate
count for the people asked for it to find

Author: Kristian Nilssen
Date: 01/02/2018

Usage:

    python Petext [ Urls ] [ Sources ] [ Keywords ] [ otherNames ]




Run times on my machine:

    Date: 1/6/2018
    Info: 148 articles found
                                real	5m35.457s
                                user	18m40.407s
                                sys	    1m13.281s

    Date: 1/10/2018
    Info: 151 articles found
                                real	5m52.206s
                                user	19m4.489s
                                sys	    1m16.485s


    Date: 1/12/2018
    Info: 150 articles found
                                real	3m15.318s
                                user	10m5.275s
                                sys	    0m42.121s


    Date: 1/14/2018
    Info: 152 articles found
                                real	3m36.252s
                                user	10m44.466s
                                sys	    0m43.800s

    Date: 1/25/2018
    Info: 135 articles found
                                real	4m11.020s
                                user	11m24.280s
                                sys	    0m53.232s


'''

import os
import sys
import string
import time
import re
import nltk
import newspaper
from timeit import default_timer as timer
from collections import defaultdict
from nltk import FreqDist
from nltk import word_tokenize
from nltk import FreqDist
import warnings
# from nltk.tag import StanfordNERTagger
from newspaper import Article



# sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
# # path now set to root, use From database_interactors to emulate:    from ../database_interactors/ import _____
# from database_interactors import mysql_article_entry
# from database_interactors import mysql_article_person_link
# from database_interactors import mysql_article_based_weights
# from database_interactors import mysql_social_media_entry
# from database_interactors import mysql_check_duplicate
from nltk.tag import StanfordNERTagger

def main(articleText, Keywords, otherNames, found_article_number):

    Type = "PERSON"
    classifier = '../stanford-ner/classifiers/english.all.3class.distsim.crf.ser.gz'
    jar = '../stanford-ner/stanford-ner.jar'
    st = StanfordNERTagger(classifier,jar)
    sentence = word_tokenize(articleText)
    taged = st.tag(sentence)
    realtypefind = {}
    keywordtotalcount = {}
    found_people_by_last_name = {}
    people_by_last_name = {}
    otherPositionTitles = []
    positionTitles = ['governor', 'senator', 'represenative', 'rep.', 'sen.']
    alt_position_titles = {'rep.':'represenative', 'sen.': 'senator'}
    categories = defaultdict(list)
    keywords_database = 'null'
    totalcount = 0
    article_people = {}

    for position_key in Keywords:
        for name_value in Keywords[position_key]:
            keywordtotalcount[(Keywords[position_key][name_value] + " " + name_value).lower()] = 0
            people_by_last_name[name_value] = Keywords[position_key][name_value]

    totoltypecount = 0


    # Prints out the article after Stanfords Named Entity Reconization Tagger has been ran, showing its text
    # and its named entities that have been matched, used mostly for debuging and seeing the article if need-be.
    #
    # print taged
    # print "\n"
    # print taged

    for itemPosition in range(0,len(taged)-1):
        item = taged[itemPosition]
        firstItem = item[0].strip("\)(?.,:`")
        if firstItem:
            if item[1] not in categories:
                categories[item[1]].append(firstItem)
            else:
                categories[item[1]].append(firstItem)
            if item[1] == Type:
                # print item[0]
                # totoltypecount += 1
                found_real_type_find = ""

                #Creats full name list, is checked against to make sure a article with mike newton is counting mike johnson or sam newton
                #as people who are mentioned in the article.

                # Case:1
                # Full, normal name is used in text
                # Solve by looking for PERSON tag, if found, if the next position is also a PERSON tag
                # SubCase: if person has multiple last or first names, keep on checking for more name tags, if two are found.
                if taged[itemPosition + 1][1] == Type:
                    temp_realtypefind = [item[0].lower().encode("utf-8")]
                    while itemPosition < len(taged) - 1 and taged[itemPosition + 1][1] == Type:
                        temp_realtypefind.append(((taged[itemPosition + 1][0]).lower()).encode("utf-8"))
                        itemPosition += 1
                    found_real_type_find = " ".join(temp_realtypefind)

                # Case:2
                # If persons full name is not used and is originally called by a title like senaotor __name___ or representative __name___
                # Solve by looking for PERSON tag, if found, if not case1 then if the previous position in Senator or Rep, or ect.....
                # SubCase: if person has multiple last or first names, keep on checking for more name tags.
                elif taged[itemPosition - 1][1] != Type:
                    if taged[itemPosition -1][0].lower() in positionTitles:
                        title_tag = taged[itemPosition -1][0].lower()
                        temp_realtypefind = [item[0].lower().encode("utf-8")]
                        # If the person has a multi named last name, make sure to find and use their whole last name.
                        while itemPosition < len(taged) - 1 and taged[itemPosition + 1][1] == Type:
                            temp_realtypefind.append(((taged[itemPosition + 1][0]).lower()).encode("utf-8"))
                            itemPosition += 1

                        temp_realtypefind = " ".join(temp_realtypefind)
                        print 'temp_realtypefind: ', title_tag, temp_realtypefind

                        # If our found title is a nickname such as rep. for represenative, then change the nickname to its respected title.
                        # If not, continue
                        if title_tag in alt_position_titles:
                            # print "title"
                            title_tag = alt_position_titles[title_tag]

                        # If our last name is in their respected title, then we have found their first name and concluded they are of value and interest
                        if temp_realtypefind.title() in Keywords[title_tag]:
                            found_real_type_find = (Keywords[title_tag.lower()][temp_realtypefind.title()]).lower() + " " + temp_realtypefind


                    # If the persons title is not in our list of approved titles then add that title so we can check later if we are skipping something that
                    # matters. Also check if a person is mentioned but has no title reference, this could be extreamly complex or basicly simple, all depends on
                    # how much we want to spend on this and the accuracy we achieve but putting more time and resources into it.
                    else:
                        # Case:2.1
                        # Person is mentioned by only their last name, with previous word in article not PERSON but also not in the list of approved titles.
                        # This can be unaccurate if its mentioning someone who's not of importance but also has the last name of someone that does. Even though
                        # that would be an extreamly rare occurance, it has the possibility of happening. Maybe create a log system of people that are found using
                        # this method so we can check it periodically for inconsistencies and solve/create fixes and checks.
                        temp_realtypefind = [item[0].lower().encode("utf-8")]
                        while itemPosition < len(taged) - 1 and taged[itemPosition + 1][1] == Type:
                            temp_realtypefind.append(((taged[itemPosition + 1][0]).lower()).encode("utf-8"))
                            itemPosition += 1
                        temp_realtypefind = " ".join(temp_realtypefind)

                        # Append to otherPositionTitles for accuracy checking later
                        otherPositionTitles.append(taged[itemPosition - 1][0])

                        # If the last name has already been found before, associate that last name with that found first name
                        if temp_realtypefind in found_people_by_last_name:
                            found_real_type_find = found_people_by_last_name[temp_realtypefind] + " " + temp_realtypefind

                        # If the last name has not been found already at this stage, look into last name dict, and if last name of importance found that matches,
                        # associate the found last name that name
                        else:
                            if temp_realtypefind in people_by_last_name:
                                found_real_type_find = people_by_last_name[temp_realtypefind] + " " + temp_realtypefind


                # Case:3
                #
                #



                # Post Case:
                # If we find a persons name
                if found_real_type_find != "":
                    # We found a persons name so we increment the total amount of names we have found by one
                    totoltypecount += 1

                    # If the person has not already occured in the acticle so far
                    # Add full name to realtypefind so it can be increment later if we come across it agian
                    # Split up name to be added into found_people_by_last_name so they are searchable in case 2.1
                    if found_real_type_find not in realtypefind:
                        realtypefind[found_real_type_find] = 1
                        found_real_type_find = found_real_type_find.split()
                        found_people_by_last_name[" ".join(found_real_type_find[1:])] = found_real_type_find[0]

                    # If the person has already been found in the acticle, increment their occurance count
                    else:
                        realtypefind[found_real_type_find] += 1


    #Creats full name list, is checked against to make sure a article with mike newton is not counting mike johnson or sam newton
    #as people who are mentioned in the article.
    real_people_not_found = {}
    real_people_found = []
    for key in realtypefind:
        # If persons name is noraml and of interest
        if key in keywordtotalcount:
            # If person is not already found, say they are found
            if key not in article_people:
                article_people[key] = realtypefind[key]
            else:
                article_people[key] += realtypefind[key]

            # (keywordtotalcount[key]) += realtypefind[key]
        else:
            # If persons name is not normal and of interest
            if key in otherNames:
                # If person is not already found, say they are found
                if otherNames[key] not in article_people:
                    article_people[otherNames[key]] = otherNames[key]
                else:
                    article_people[otherNames[key]] += otherNames[key]

                # keywordtotalcount[otherNames[key]] += realtypefind[key]
            else:
                # Person is not of interest, save to be looked at later to determine the accuracy of petext
                if key not in real_people_not_found:
                    real_people_not_found[key] = realtypefind[key]
                else:
                    real_people_not_found[key] += realtypefind[key]


    print "\n"
    print article_people

    # Create a better output of people
    output_people = []
    for people in article_people:
        output_people.append(people)

    print output_people
