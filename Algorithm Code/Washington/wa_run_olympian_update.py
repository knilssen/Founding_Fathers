'''

Just to TEst!! FInd a way to keep this situated in the Washington directory

'''

'''
Python script that is to grab articles and run them into article_NERT_parser.py.

Author: Founding Fathers, Kristian Nilssen
Date: 12/16/2017

Usage:

    python database_placement_wa.py
'''

import sys
# import article_NERT_parser
import os
import time
# import threading
# from Queue import Queue
# from threading import Thread
from timeit import default_timer as timer
import mysql.connector
from mysql.connector import errorcode
from article_downloaders import pytext_update

# from /Washington/ import Washington.article_grabbers
# from article_grabbers import grabber_seattle_times
# from article_grabbers import grabber_olympian
# from article_grabbers import grabber_washington_state_wire
# from article_grabbers import grabber_king_5
# from article_grabbers import grabber_news_tribune
# from article_grabbers import grabber_washington_state_republican_party
# from article_grabbers import grabber_washington_state_democrats
# from article_grabbers import grabber_kuow
# from article_grabbers import grabber_public_news_service
# from article_grabbers import grabber_crosscut
# from article_grabbers import grabber_spokesman_review
# from article_grabbers import grabber_washington_education_association
# from article_grabbers import grabber_capitol_record
# from article_grabbers import grabber_q13_fox
# from article_grabbers import grabber_nw_news_network
# import multiprocessing

# sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
# path now set to directory: Algorithm Code
# import petext


# maxthreads = multiprocessing.cpu_count()
# print "\n"
# print "Maximun number of threads on current machine:", maxthreads
# print "\n"
# print "\n"
# sema = threading.Semaphore(value=maxthreads)
# thread = list()
# threads = list()
#
#
# class grabber_worker(Thread):
#    def __init__(self, queue, source_dic):
#        Thread.__init__(self)
#        self.queue = queue
#        self.source_dic = source_dic
#
#    def run(self):
#        while True:
#            # Get the work from the queue and expand the tuple
#            source_name, source, currentTime = self.queue.get()
#
#            article_source = source
#            article_source_name = source_name
#            source_output = article_source_name
#            try:
#                art = article_source.main(currentTime)
#                if len(art) != 0:
#                    self.source_dic[article_source_name] = art
#                art_len = len(art)
#             #    total_article_count += art_len
#            except:
#                art_len = "Error              !!! An Error Occured While Grabbing For Articles From this Source !!!"
#            finally:
#                source_length = len(article_source_name)
#                max_source_length = 43
#                for x in range(0, max_source_length - source_length):
#                    source_output = source_output + " "
#
#                print " ", source_output, art_len
#
#
#            self.queue.task_done()





# def article_worker(article, pub_time, source, allkeywords, DiffName):
#     # thread worker function
#     sema.acquire()
#     t = threading.currentThread()
#     # print t, article
#     pt = ""
#     try:
#         article_NERT_parser.main(article, pub_time, source, allkeywords, DiffName,  "PERSON")
#     except:
#         print "\n"
#         print "ERROR:       An error occured while running NERT on article: ", article, "\n       from source: ", source
#         print "\n"
#
#     finally:
#         sema.release()

# def grabber_worker(source_name, source, currentTime, allkeywords, DiffName):
#     source_dic = {}
#     total_article_count = 0
#     for y in range(0, len(source_name)):
#         article_source = source[y]
#         article_source_name = source_name[y]
#         source_output = article_source_name
#         try:
#             art = article_source.main(currentTime)
#             if len(art) != 0:
#                 source_dic[article_source_name] = art
#             art_len = len(art)
#             total_article_count += art_len
#         except:
#             art_len = "Error              !!! An Error Occured While Grabbing For Articles From this Source !!!"
#         finally:
#             source_length = len(article_source_name)
#             max_source_length = 43
#             for x in range(0, max_source_length - source_length):
#                 source_output = source_output + " "
#
#             print " ", source_output, art_len
#     print "\n"
#     total_output = "Total Articles Found"
#     for x in range(0, max_source_length - len(total_output)):
#         total_output = total_output + " "
#     print " ", total_output, total_article_count
#     print "\n"
#     return source_dic


def main():
    start_grabbing = timer()
    config = {
        'user': 'root',
        'password': 'password',
        'host': '127.0.0.1',
        'database': 'cyp',
        'raise_on_warnings': True,
    }

    try:
        cnx = mysql.connector.connect(**config)

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    else:

        cursor = cnx.cursor()


        cursor.execute(("SELECT id, url FROM News_articles WHERE source= 'The Olympian'"))
        social_data = cursor.fetchall()
        # for olym in social_data:
        #     print olym[0]
        # print social_data, "\n"
        cursor.close()
    cnx.close()

    HouseRep = {}
    HouseReps = [u'Sherry Appleton', u'Andrew Barkis', u'Steve Bergquist', u'Brian Blake', u'Vincent Buys',
                u'Michelle Caldier', u'Bruce Chandler', u'Mike Chapman', u'Frank Chopp', u'Judy Clibborn',
                u'Eileen Cody', u'Cary Condotta', u'Richard DeBolt', u'Tom Dent', u'Beth Doglio', u'Laurie Dolan',
                u'Mary Dye', u'Carolyn Eslick', u'Jake Fey', u'Joe Fitzgibbon', u'Noel Frame', u'Roger Goodman',
                u'Paul Graves', u'Mia Gregerson', u'Dan Griffey', u'Larry Haler', u'Drew Hansen', u'Mark Hargrove',
                u'Mark Harmsworth', u'Paul Harris', u'Dave Hayes', u'Jeff Holy', u'Zack Hudgins',
                u'Morgan Irwin', u'Bill Jenkin', u'Laurie Jinkins', u'Norm Johnson', u'Ruth Kagi',
                u'Christine Kilduff', u'Steve Kirby', u'Brad Klippert', u'Shelley Kloba', u'Vicki Kraft',
                u'Joel Kretz', u'Dan Kristiansen', u'John Lovick', u'Kristine Lytton', u'Drew MacEwen',
                u'Nicole Macri', u'Matt Manweller', u'Jacquelin Maycumber', u'Joan McBride', u'Gina McCabe',
                u'Bob McCaslin', u'Joyce McDonald', u'Jeff Morris', u'Dick Muri', u'Terry Nealey', u'Ed Orcutt',
                u'Timm Ormsby', u'Lillian Ortiz-Self', u'Tina Orwall', u'Mike Pellicciotti', u'Strom Peterson',
                u'Eric Pettigrew', u'Liz Pike', u'Gerry Pollet', u'Kristine Reeves', u'Marcus Riccelli', u'June Robinson',
                u'Jay Rodne', u'Cindy Ryu', u'Sharon Tomiko Santos', u'David Sawyer', u'Joe Schmick', u'Mike Sells',
                u'Tana Senn', u'Matt Shea', u'Vandana Slatter', u'Norma Smith', u'Larry Springer', u'Melanie Stambaugh',
                u'Derek Stanford', u'Mike Steele', u'Drew Stokesbary', u'Monica Jurado Stonier', u'Pat Sullivan',
                u'Gael Tarleton', u'David Taylor', u'Steve Tharinger', u'Javier Valdez', u'Luanne Van Werven',
                u'Brandon Vick', u'Mike Volz', u'Jim Walsh', u'J.T. Wilcox', u'Sharon Wylie', u'Jesse Young']

    senator = {}
    senators = [u'Jan Angel', u'Barbara Bailey', u'Michael Baumgartner', u'Randi Becker', u'Andy Billig',
                u'John Braun', u'Sharon Brown', u'Reuven Carlyle', u'Maralyn Chase', u'Annette Cleveland',
                u'Steve Conway', u'Jeannie Darneille', u'Manka Dhingra', u'Doug Ericksen', u'Joe Fain',
                u'Phil Fortunato', u'David Frockt', u'Bob Hasegawa', u'Brad Hawkins', u'Steve Hobbs',
                u'Jim Honeyford', u'Sam Hunt', u'Karen Keiser', u'Curtis King',u'Patty Kuderer',
                u'Marko Liias', u'John McCoy', u'Mark Miloscia', u'Mark Mullet', u'Sharon Nelson',
                u"Steve O'Ban", u'Mike Padden', u'Guy Palumbo', u'Kirk Pearson', u'Jamie Pedersen',
                u'Kevin Ranker', u'Ann Rivers', u'Christine Rolfes', u'Rebecca Salda\xc3a', u'Mark Schoesler',
                u'Tim Sheldon', u'Shelly Short', u'Dean Takko', u'Kevin Van De Wege', u'Maureen Walsh',
                u'Judy Warnick', u'Lisa Wellman', u'Lynda Wilson', u'Hans Zeiger']

    Governer = {}
    Governers = [u'Jay Inslee']


    DiffName_longLName = {'Sharon Santos':'Sharon Tomiko Santos','Monica Stonier':'Monica Jurado Stonier','Luanne Werven':'Luanne Van Werven','Kevin Wege':'Kevin Van De Wege'}
    DiffName = {'Governor Inslee':'Jay Inslee', 'Dave Reichert':'David Reichert', 'Sharon Santos':'Sharon Tomiko Santos', 'Monica Stonier':'Monica Jurado Stonier', 'Luanne Werven':'Luanne Van Werven', 'Kevin Wege':'Kevin Van De Wege'}

    washington_senators_us = {}
    utah_senators_us = [u'Patty Murray', u'Maria Cantwell']

    washington_reps_us = {}
    utah_reps_us = [u'Adam Smith', u'Cathy McMorris Rodgers', u'Dan Newhouse', u'Dave Reichert', u'Denny Heck', u'Derek Kilmer',
                    u'Jaime Herrera Beutler', u'Pramila Jayapal', u'Rick Larsen', u'Suzan DelBene']


    for HP in HouseReps:
        hps = HP.split()
        HouseRep[" ".join(hps[1:])] = hps[0]

    senators += utah_senators_us
    for sen in senators:
        sens = sen.split()
        senator[" ".join(sens[1:])] = sens[0]

    for gov in Governers:
        govs = gov.split()
        Governer[" ".join(govs[1:])] = govs[0]


    for urep in utah_reps_us:
        ureps = urep.split()
        washington_reps_us[" ".join(ureps[1:])] = ureps[0]

    names = {"represenative": HouseRep, "senator": senator, "governor": Governer, "washington_senators_us": washington_senators_us, "washington_reps_us": washington_reps_us}

    currentTime = []
    urls = {}
    # allkeywords = str(Governer) + "," + str(senators) + "," + str(HouseReps) + "," + str(utah_senators_us) + "," + str(utah_reps_us)
    # allkeywords = allkeywords.replace("'", "")
    # allkeywords = allkeywords.replace("]", "")
    # allkeywords = allkeywords.replace("[", "")
    currentTime.append((time.strftime("%x").replace("/", " ")).split())
    currentTime.append((time.strftime("%X").replace(":", " ")).split())

    # Shorter Lists to test to save time while testing
    # grabberlist = [grabber_ksl]
    # source_name = ["KSL"]

    # grabberlist = [grabber_seattle_times,grabber_olympian,grabber_washington_state_wire,grabber_king_5,grabber_news_tribune,
    #                 grabber_washington_state_republican_party,grabber_washington_state_democrats,grabber_kuow,grabber_public_news_service,grabber_crosscut,
    #                 grabber_spokesman_review,grabber_washington_education_association,grabber_capitol_record,grabber_q13_fox,grabber_nw_news_network]

    source_name = ["Seattle Times","The Olympian","Washington State Wire","King 5","The News Tribune","Washington State Republican Party",
                    "Washington Democrats","KOUW","Public News Service","Crosscut","The Spokesman-Review","Washington Education Association",
                    "The Capitol Record","Q13 Fox","NW News Network"]

    # grabber_deseret_news, grabber_senate_site, grabber_stgeorge, "Deseret News", "Senate Site", "St George"

    # print "\n"
    print " *** Article Finding in Progress *** "
    print "\n"
    # print "  ____________________"
    # print " | Found Article Data: |"
    # print "  ____________________"
    print "\n"
    print "       Source                         Articles Found"
    print "______________________________________________________"


    # ts = time()
    # Create a queue to communicate with the worker threads
    # queue = Queue()
    # source_dic = {}
    # # Create 4 worker threads
    # for x in range(4):
    #     worker = grabber_worker(queue,source_dic)
    #     # Setting daemon to True will let the main thread exit even though the workers are blocking
    #     worker.daemon = True
    #     worker.start()
    #
    # # Put the tasks into the queue as a tuple
    # for x in range(0,len(source_name)-1):
    # # for source in source_name:
    #     # logger.info('Queueing {}'.format(source_name[x]))
    #     queue.put((source_name[x], grabberlist[x], currentTime))
    # # Causes the main thread to wait for the queue to finish processing all the tasks
    # queue.join()
    # # print('Took {}'.format(time() - ts))
    # # print source_dic
    #
    # # article_dic = grabber_worker(source_name, grabberlist, currentTime, names, DiffName)
    # total_article_count = 0
    # for arts in source_dic:
    total_article_count = len(social_data)


    print "\n"
    total_output = "Total Articles Found" + " (" + str(timer() - start_grabbing)[:5] + " Seconds)"
    for x in range(0, 45 - len(total_output)):
        total_output = total_output + " "
    print total_output, total_article_count
    # print "\n"

    # nert_start = timer()
    pytext_update.main(social_data, names, DiffName, total_article_count)

    # print str(time.time() - start_grabbing)[:5], "Seconds"

    # # for duh in article_dic:
    # #     for hud in article_dic[duh]:
    # #         print hud, article_dic[duh][hud]
    #
    # for i in article_dic:
    #     for art in article_dic[i]:
    #         # print art
    #         # print art, article_dic[i][art], i
    #         t = threading.Thread(target=article_worker, args=(art, article_dic[i][art], i, names, DiffName))
    #         thread.append(t)
    #         t.start()

    # personOfInterestWeightWithInputs.main('http://www.ksl.com/?sid=43580434&nid=148&title=utah-restaurant-associations-ask-governor-to-veto-05-dui-law', allkeywords, DiffName,  "PERSON")



if __name__ == "__main__":

    # some preliminary error checking

    # if len(sys.argv) != 1:
    #     print 'python keywordMatchWeight [Url to article to be weighted] [keywords] [keyword type <PERSON|LOCATION|ORGANIZATION>]'
    # else:
    main()
