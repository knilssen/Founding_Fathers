'''
Python script that is to grab articles and run them into article_NERT_parser.py.

Author: Founding Fathers, Kristian Nilssen
Date: 12/16/2017

Usage:

    python database_placement_wa.py
'''

import sys
# import article_NERT_parser
import time
import threading

from article_grabbers import grabber_seattle_times
from article_grabbers import grabber_olympian
from article_grabbers import grabber_washington_state_wire
from article_grabbers import grabber_king_5
from article_grabbers import grabber_news_tribune
from article_grabbers import grabber_washington_state_republican_party
from article_grabbers import grabber_washington_state_democrats
from article_grabbers import grabber_kuow
from article_grabbers import grabber_public_news_service
from article_grabbers import grabber_crosscut
from article_grabbers import grabber_spokesman_review
from article_grabbers import grabber_washington_education_association
from article_grabbers import grabber_capitol_record
from article_grabbers import grabber_q13_fox
from article_grabbers import grabber_nw_news_network

import multiprocessing

maxthreads = multiprocessing.cpu_count()
print "\n"
print "Maximun number of threads on current machine:", maxthreads
print "\n"
print "\n"
sema = threading.Semaphore(value=maxthreads)
thread = list()
threads = list()



def article_worker(article, pub_time, source, allkeywords, DiffName):
    # thread worker function
    sema.acquire()
    t = threading.currentThread()
    print t, article
    # article_NERT_parser.main(article, pub_time, source, allkeywords, DiffName,  "PERSON")
    sema.release()


def grabber_worker(source_name, source, currentTime, allkeywords, DiffName):
    source_dic = {}
    total_article_count = 0
    for y in range(0, len(source_name)):
        article_source = source[y]
        article_source_name = source_name[y]
        source_output = article_source_name
        art = article_source.main(currentTime)
        source_length = len(article_source_name)
        max_source_length = 43
        for x in range(0, max_source_length - source_length):
            source_output = source_output + " "
        if len(art) != 0:
            source_dic[article_source_name] = art
        print " ", source_output, len(art)
        total_article_count += len(art)
    print "\n"
    total_output = "Total Articles Found"
    for x in range(0, max_source_length - len(total_output)):
        total_output = total_output + " "
    print " ", total_output, total_article_count
    print "\n"
    return source_dic


def main():

    HouseReps = [" Scott Sandall","Jefferson Moss","Val Potter","Edward Redd","Curt Webb",
                "Cory Maloy","Justin Fawson","Gage Froerer","Jeremy Peterson","Dixon Pitcher",
                "Kelly Miles","Mike Schultz","Paul Ray","Karianne Lisonbee","Brad Wilson",
                "Stephen Handy","Stewart Barlow","Timothy Hawkes","Raymond Ward","Rebbeca Edwards",
                "Douglas Sagers","Susan Duckworth","Sandra Hollins","Rebbeca Chavez-Houck","Joel Briscoe",
                "Angela Romero","Michael Kennedy","Brian King","Lee Perry","Mike Winder",
                "Elizabeth Weight","LaVar Christensen","Craig Hall","Karen Kwan","Mark Wheatley",
                "Patrice Arent","Carol Moss","Eric Hutchings","James Dunnigan","Lynn Hemingway",
                "Daniel  McCay","Kim Coleman","Adam Gardiner","Bruce Cutler","Steve Eliason",
                "Marie Poulson","Ken Ivory","Kevin Stratton","Robert Spendlove","Susan Pulsipher",
                "Gregory Hughes","John Knotwell","Logan Wilde","Tim Quinn","Scott Chew",
                "Kay Christofferson","Brian Greene","Derrin Owens","Val Peterson","Brad Daw",
                "Keith Grover","Jon Stanard","Dean Sanpei","Norman Thurston","Francis Gibson",
                "Mike McKell","Marc Roberts","Merril Nelson","Christine Watkins","Carl Albrecht",
                "Bradley Last","John Westwood","Michael Noel","Lowry Snow","Walt Brooks"]
    senators = [" Luz Escamilla","Jim Dabakis","Gene Davis","Jani Iwamoto","Karen Mayne",
                "Wayne Harper","Deidre Henderson","Brian Shiozawa","Wayne Niederhauser",
                "Lincoln Fillmore","Howard Stephenson","Daniel Thatcher","Jacob Anderegg","Daniel Hemmert",
                "Margaret Dayton","Curtis Bramble","Peter Knudson","Ann Millner","Allen Christensen",
                "Gregg Buxton","Jerry Stevenson","Stuart Adams","Todd Weiler","Ralph Okerlund",
                "Lyle Hillyard","Kevin Van Tassell","David Hinkins","Evan Vickers","Don Ipson"]
    Governer = [" Gary Herbert"]
    DiffName = {' jacob anderegg' : ' jake anderegg', ' curtis bramble' : ' curt bramble', ' susan duckworth' : ' sue duckworth',
                ' james dunnigan' : ' jim dunnigan', ' rebbeca edwards' : ' becky edwards', ' stephen handy' : ' steve handy',
                ' daniel hemmert' : ' dan hemmert', ' gregory hughes' : ' greg hughes', ' michael kennedy' : ' mike kennedy',
                ' bradley last' : ' brad last', ' daniel  mccay' : ' dan mccay', ' michael noel' : ' mike noel', ' edward redd' : ' ed redd',
                ' daniel thatcher' : ' dan thatcher', ' norman thurston' : ' norm thurston', ' raymond ward' : ' ray ward'}
    utah_senators_us = [" Orrin Hatch","Mike Lee"]
    utah_reps_us = [" Rob Bishop","Chris Stewart","Jason Chaffetz","Mia Love"]
    currentTime = []
    urls = {}

    allkeywords = str(Governer) + "," + str(senators) + "," + str(HouseReps) + "," + str(utah_senators_us) + "," + str(utah_reps_us)
    allkeywords = allkeywords.replace("'", "")
    allkeywords = allkeywords.replace("]", "")
    allkeywords = allkeywords.replace("[", "")

    currentTime.append((time.strftime("%x").replace("/", " ")).split())
    currentTime.append((time.strftime("%X").replace(":", " ")).split())

    # Shorter Lists to test to save time while testing
    # grabberlist = [grabber_ksl]
    # source_name = ["KSL"]

    grabberlist = [grabber_seattle_times,grabber_olympian,grabber_washington_state_wire,grabber_king_5,grabber_news_tribune,
                    grabber_washington_state_republican_party,grabber_washington_state_democrats,grabber_kuow,grabber_public_news_service,grabber_crosscut,
                    grabber_spokesman_review,grabber_washington_education_association,grabber_capitol_record,grabber_q13_fox,grabber_nw_news_network]

    source_name = ["Seattle Times","The Olympian","Washington State Wire","King 5","The News Tribune","Washington State Republican Party",
                    "Washington Democrats","KOUW","Public News Service","Crosscut","The Spokesman-Review","Washington Education Association",
                    "The Capitol Record","Q13 Fox","NW News Network"]

    # grabber_deseret_news, grabber_senate_site, grabber_stgeorge, "Deseret News", "Senate Site", "St George"

    print "\n"
    print " *** Article Finding and Parsing in Progress *** "
    print "\n"
    print "  ____________________"
    print " | Found Article Data: |"
    print "  ____________________"
    print "\n"
    print "       Source                         Articles Found"
    print "______________________________________________________"

    article_dic = grabber_worker(source_name, grabberlist, currentTime, allkeywords, DiffName)

    # for duh in article_dic:
    #     for hud in article_dic[duh]:
    #         print hud, article_dic[duh][hud]

    for i in article_dic:
        for art in article_dic[i]:
            print art
            # print art, article_dic[i][art], i
            # t = threading.Thread(target=article_worker, args=(art, article_dic[i][art], i, allkeywords, DiffName))
            # thread.append(t)
            # t.start()

    # personOfInterestWeightWithInputs.main('http://www.ksl.com/?sid=43580434&nid=148&title=utah-restaurant-associations-ask-governor-to-veto-05-dui-law', allkeywords, DiffName,  "PERSON")



if __name__ == "__main__":

    # some preliminary error checking

    # if len(sys.argv) != 1:
    #     print 'python keywordMatchWeight [Url to article to be weighted] [keywords] [keyword type <PERSON|LOCATION|ORGANIZATION>]'
    # else:
    main()
