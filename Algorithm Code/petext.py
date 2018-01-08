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




'''

import sys
import string
import re
import nltk
import newspaper
from timeit import default_timer as timer
from collections import defaultdict
from nltk import FreqDist
from nltk import word_tokenize
from nltk import FreqDist
import warnings
from nltk.tag import StanfordNERTagger
from newspaper import Article

import threading
import thread
from Queue import Queue
from threading import Thread
import multiprocessing

maxthreads = multiprocessing.cpu_count()
sema = threading.Semaphore(value=maxthreads)
thread = list()
threads = list()

class article_worker(Thread):
   def __init__(self, queue, article_dict):
       Thread.__init__(self)
       self.queue = queue
       self.article_dict = article_dict
    #    self.source_dic = source_dic

   def run(self):
       while True:
           # Get the work from the queue and expand the tuple
           Url, Source, date = self.queue.get()

           # thread worker function
        #    sema.acquire()
        #    t = threading.currentThread()
        #    Type = "PERSON"
           # print t, article

           # print Url
           try:
               article = Article(Url)
               article.download()

            #    if article.is_downloaded:
            #        article.parse()
            #     #    if article.is_parsed:
            #     #        # print "parsed"
            #     #        article.nlp()
            #    else:
            #     #    print "failed download"
            #        article = urllib.urlopen(Url).read()
            #        article.download()
            #        article.parse()
                #    if article.is_parsed:
                #        # print "parsed"
                #        article.nlp()
           except:
               print "ERROR WITH DOWNLOADING ARTICLE TEXT FROM:", Url
               article.text = "ERROR WITH DOWNLOADING ARTICLE TEXT"
           finally:
               self.article_dict[Url] = [Source, article, date]

           self.queue.task_done()



# def article_worker(Url, Source, Keywords, otherNames, st, jar, classifier):

def article_processor(stuff):
    sema.acquire()
    t = threading.currentThread()
    # print t, article

    Url = stuff[0]
    Source = stuff[1]
    articleText = stuff[2]
    pub_time = stuff[3]
    Keywords = stuff[4]
    otherNames = stuff[5]
    found_article_number = stuff[6]

    if articleText == "ERROR WITH DOWNLOADING ARTICLE TEXT":
        print "ERROR WITH DOWNLOADING ARTICLE TEXT FOR ARTICLE:", Url
    else:

        if 0 == 0:
            articleText.parse()
            articleText = articleText.text

            # Uses unicode() to change text from article to unicode
            articleText = unicode(articleText)

            Type = "PERSON"
            classifier = 'stanford-ner/classifiers/english.all.3class.distsim.crf.ser.gz'
            jar = 'stanford-ner/stanford-ner-3.4.jar'
            st = StanfordNERTagger(classifier,jar)
            sentence = word_tokenize(articleText)
            taged = st.tag(sentence)
            realtypefind = {}
            keywordtotalcount = {}
            article_people = {}
            found_people_by_last_name = {}
            people_by_last_name = {}
            otherPositionTitles = []
            positionTitles = ['governor', 'senator', 'represenative']
            # categories = {}
            categories = defaultdict(list)
            totalcount = 0

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

            for itemPosition in range(0,len(taged)-1):
                item = taged[itemPosition]
                firstItem = item[0].strip("\)(?.,:`")
                if firstItem:
                    if item[1] not in categories:
                        categories[item[1]].append(firstItem)
                    else:
                        categories[item[1]].append(firstItem)
                    if item[1] == Type:
                        totoltypecount += 1
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

                                # If our last name is in their respected title, then we have found their first name and concluded they are of value and interest
                                if temp_realtypefind in Keywords[title_tag]:
                                    found_real_type_find = (Keywords[(taged[itemPosition - 1][0]).lower()][temp_realtypefind]).lower() + " " + temp_realtypefind

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

                                otherPositionTitles.append(taged[itemPosition - 1])

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
                            # If the person has not already occured in the acticle so far
                            # Add full name to realtypefind so it can be increment later if we come across it agian
                            # Split up name to be added into found_people_by_last_name so they are searchable in case 2.1
                            if found_real_type_find not in realtypefind:
                                realtypefind[found_real_type_find] = 1
                                found_real_type_find = found_real_type_find.split()
                                found_people_by_last_name[found_real_type_find[0]] = " ".join(found_real_type_find[1:])
                            # If the person has already been found in the acticle, increment their occurance count
                            else:
                                realtypefind[found_real_type_find] += 1


            #Creats full name list, is checked against to make sure a article with mike newton is not counting mike johnson or sam newton
            #as people who are mentioned in the article.
            for key in realtypefind:
                if key in keywordtotalcount:
                    (keywordtotalcount[key]) += realtypefind[key]


            # Small print statement to show all the counts in keywordtotalcount
            #
            # print "\n"
            # print "Counts:"
            # for key in keywordtotalcount:
            #     print key, keywordtotalcount[key]
            # print "\n"

            for person in keywordtotalcount:
                person = unicode(person)
                totalcountofperson = 0
                if person in realtypefind:
                    if person in otherNames and otherNames[person] in realtypefind:
                        article_people[person] = (keywordtotalcount[person] + keywordtotalcount[otherNames[person]])
                    else:
                        article_people[person] = keywordtotalcount[person]
                else:
                    if person in otherNames and otherNames[person] in realtypefind:
                        article_people[person] = keywordtotalcount[person]

            # Create a better output of people
            output_people = []
            for people in article_people:
                output_people.append(people)


            if len(article_people) >= 1:
                print "  ", found_article_number, (3-len(str(found_article_number))) * " " + "                  ", output_people
        # except:
        #     print "\n"
        #     print "ERROR:       An error occured while running petext on article from source: \n", Source + ":  ", Url, "\n"
        #     # print "TEXT LENGTH:                                                   ", len(sentence)
        #     print "\n"
        #
        # finally:


        sema.release()
        return article_people


def main(Urls, Keywords, otherNames, total_article_count):
    nert_start = timer()
    Type = "PERSON"
    total_people = {}
    queue = Queue()
    article_dict = {}

    # Create 4 worker threads
    for x in range(maxthreads):
        worker = article_worker(queue, article_dict)
        # Setting daemon to True will let the main thread exit even though the workers are blocking
        worker.daemon = True
        worker.start()

    # Put the tasks into the queue as a tuple
    for source in Urls:
        for x, Url in enumerate(Urls[source]):
    # for source in source_name:
            queue.put((Url, source, Urls[source][Url]))
    # Causes the main thread to wait for the queue to finish processing all the tasks
    queue.join()


    download_total_output = "Total Articles Downloaded" + " (" + str(timer() - nert_start)[:5] + " Seconds)"
    for x in range(0, 45 - len(download_total_output)):
        download_total_output += " "
    print download_total_output, len(article_dict)


    print "\n"
    print " Found Article Number                People Found"
    print "______________________________________________________"

    people_queue = Queue()

    for y, Url in enumerate(article_dict):
        t = threading.Thread(target=lambda q, arg1: q.put(article_processor(arg1)),  args=(people_queue, [Url, article_dict[Url][0], article_dict[Url][1], article_dict[Url][2], Keywords, otherNames, y]))
        thread.append(t)
        t.start()

    for t in thread:
        t.join()

    # Check thread's return value
    while not people_queue.empty():
        people_with_count = people_queue.get()
        for person_with_count in people_with_count:
            if person_with_count in total_people:
                total_people[person_with_count] += people_with_count[person_with_count]
            else:
                total_people[person_with_count] = people_with_count[person_with_count]


    #
    # Print out and display the people we found and how many times we found them
    #
    print "\n"
    print " Person                              Times Found"
    print "______________________________________________________"

    for found_person in total_people:
        source_output = found_person
        for x in range(0, 43 - len(found_person)):
            source_output = source_output + " "

        print " ", source_output, total_people[found_person]


    #
    # Prints out the people not found
    # Adds time but is valuable to see when looking at the accuracy and reliability, comment out when looking for maximum efficiancy
    #
    print "\n"
    print " Person Not Found"
    print "______________________________________________________"

    for not_found_person in keywordtotalcount:
        if not_found_person not in total_people:
            print " ", not_found_person





if __name__ == "__main__":

    # some preliminary error checking

    if len(sys.argv) != 6:
        print len(sys.argv), 'python article_NERT_parser [Url to article to be weighted] [ pub_time ] [ Source ] [ Keywords ] [ otherNames ] [ Type ]'
    elif sys.argv[3] == 'PERSON' or sys.argv[3] == 'LOCATION' or sys.argv[3] == 'ORGANIZATION':
        main(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6])
    else:
        print 'Invalid keyword type: Must be [PERSON | LOCATION | ORGANIZATION]'
