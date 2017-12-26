'''
Python script that reads in text from an article, keywords, and the type of matching to be done.

The objective is to match keywords with text and the type of marching to be done such as people,
places, and orginizations. It does this by using Standfords Named Entity Reconization Tagger software
to give text from the article a classification such as a person, place, orginization, or other. This uses
those tags to search and compare the amount of times our keywords appear and how they compare with other
person, places, or orginaztions tagged through this proccess. This also posts:
    The article and its data to the articles table in our database
    The link data between the article and the person, place, or orginizations thats being tested agianst
    The static weighting objects assoiciated with that article
    The social media weighting objects associated with that article

Invokes the following database publishers from the database_interactors directory:
    mysql_article_entry
    mysql_article_person_link
    mysql_article_based_weights
    mysql_social_media_entry

Author: Founding Fathers, Kristian Nilssen
Date: 2/4/2017

Usage:

    python article_NERT_parser [Url to article to be weighted] [ pub_time ] [ Source ] [ Keywords ] [ otherNames ] [ keyword type <PERSON | LOCATION | ORGANIZATION> ]

'''

import sys
import string
import re
import nltk
import newspaper
import time
from database_interactors import mysql_article_entry
from database_interactors import mysql_article_person_link
from database_interactors import mysql_article_based_weights
from database_interactors import mysql_social_media_entry
from database_interactors import mysql_check_duplicate
from collections import defaultdict
from nltk import FreqDist
from nltk import word_tokenize
from nltk import FreqDist
from nltk.tag.stanford import StanfordNERTagger
from newspaper import Article


def main(Url, pub_time, Source, Keywords, otherNames, Type):
    print Url
    Keywords = Keywords.lower()
    article = Article(Url)
    article.download()
    if article.is_downloaded:
        article.parse()
        if article.is_parsed:
            print "parsed"
            article.nlp()
    else:
        print "failed download"
        article = urllib.urlopen(Url).read()
        article.download()
        article.parse()
    articleText = (article.text)

    # Change the .encode('ascii', 'replace')  to something like utf-8 and look into the replace thing.
    # Could be the root of your text problems replace things like ', -, and : into the ? mark
    articleText = articleText.encode('ascii', 'replace').replace(u"\u0029", "").replace(u"\u0028", "")
    dateTime = time.strftime("%Y-%m-%d %I:%M:%S")

    if len(str(pub_time[0][2])) < 3:
        pub_time[0][2] = int("20" + str(pub_time[0][2]))
    if len(str(pub_time[0][0])) < 2:
        pub_time[0][0] = int("0" + str(pub_time[0][0]))
    if len(str(pub_time[0][1])) < 2:
        pub_time[0][1] = int("0" + str(pub_time[0][1]))
    post_date = (str(pub_time[0][2]) + "-" + str(pub_time[0][0]) + "-" + str(pub_time[0][1]) + " " +
                str(pub_time[1][0]) + ":" + str(pub_time[1][1]) + ":" + str(pub_time[1][2]))

    Keywords = Keywords.split(",")
    classifier = 'stanford-ner/classifiers/english.all.3class.distsim.crf.ser.gz'
    jar = 'stanford-ner/stanford-ner-3.4.jar'
    st = StanfordNERTagger(classifier,jar,encoding='utf-8')
    sentence = word_tokenize(articleText)
    output = []
    realtypefind = []
    keywordtotalcount = {}
    count = {}
    categories = defaultdict(list)
    totalcount = 0

    for key in Keywords:
        keywordtotalcount[key] = 0
        for key2 in key.split():
            count[key2] = 0

    itemposition = 0
    totoltypecount = 0
    taged = st.tag(sentence)
    for item in taged:
        firstItem = item[0].encode('utf-8').strip("\)(?.,:`")
        if firstItem:
            if item[1] not in categories:
                categories[item[1]].append(firstItem)
            else:
                categories[item[1]].append(firstItem)
            if item[1] == Type:
                totoltypecount = totoltypecount + 1
                #Creats full name list, is checked against to make sure a article with mike newton is counting mike johnson or sam newton
                #as people who are mentioned in the article.
                if itemposition != (len(taged) -1):
                    if taged[itemposition + 1][1] == Type:
                        realtypefind.append(" " + (item[0].lower() + " " + (taged[itemposition + 1][0]).lower()).encode('utf-8'))
                output.append(item[0])
                if item[0].lower() in count:
                    count[item[0].lower()] = count[item[0].lower()] + 1
        itemposition = itemposition + 1

    #Creats full name list, is checked against to make sure a article with mike newton is counting mike johnson or sam newton
    #as people who are mentioned in the article.

    for key in keywordtotalcount:
        for T in range(0, len(key.split())):
            (keywordtotalcount[key]) = (keywordtotalcount[key]) + count[(key.split())[T]]

    frequency = (FreqDist(output)).most_common(5)

    for freq in frequency:
        totalcount = totalcount + freq[1]

    article.nlp()
    keywords_database = ' '.join(article.keywords)

    article_people = []

    for person in keywordtotalcount:
        if person in realtypefind:
            if person in otherNames and otherNames[person] in realtypefind:
                article_people.append(person)
                totalcountofperson = (keywordtotalcount[person] + keywordtotalcount[otherNames[person]])
            else:
                article_people.append(person)
                totalcountofperson = keywordtotalcount[person]
        else:
            if person in otherNames and otherNames[person] in realtypefind:
                article_people.append(person)
                totalcountofperson = keywordtotalcount[person]



    if len(article_people) >= 1:
        if mysql_check_duplicate.main(Url) == 0:
            # print Url
            article_id = mysql_article_entry.main(Url, Source, post_date, dateTime, article.title, str(article.authors), str(keywords_database), article.summary, articleText, article.top_image)
            mysql_article_person_link.main(article_id, article_people, totalcountofperson, (round((totalcountofperson/float(totoltypecount)), 4) * 100), totoltypecount)
            mysql_article_based_weights.main(article_id, len(articleText), "yes")
            mysql_social_media_entry.main(article_id, Url)

if __name__ == "__main__":

    # some preliminary error checking

    if len(sys.argv) != 4:
        print 'python article_NERT_parser [Url to article to be weighted] [ pub_time ] [ Source ] [ Keywords ] [ otherNames ] [ Type ]'
    elif sys.argv[3] == 'PERSON' or sys.argv[3] == 'LOCATION' or sys.argv[3] == 'ORGANIZATION':
        print main(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6])
    else:
        print 'Invalid keyword type: Must be [PERSON | LOCATION | ORGANIZATION]'
