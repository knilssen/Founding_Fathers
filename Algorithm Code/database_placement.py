'''
Python script that is to place articles into senators/house members/bills/governer/judicial database tables from article_grabber.py

Author: Founding Fathers, Kristian Nilssen
Date: 2/25/2017

Usage:

    python database_placement.py
'''

import sys
import article_NERT_parser
import time
import threading
import article_grabbers/grabber_ksl
import article_grabbers/grabber_deseret_news
import article_grabbers/grabber_fox13
import article_grabbers/grabber_slt
import article_grabbers/grabber_utah_policy
import article_grabbers/grabber_upc_legislative
import article_grabbers/grabber_upc_judicial
import article_grabbers/grabber_upc_flagged_bill_status
import article_grabbers/grabber_upc_executive
import multiprocessing

maxthreads = multiprocessing.cpu_count()
print maxthreads
sema = threading.Semaphore(value=maxthreads)
thread = list()
threads = list()

def article_worker(article, pub_time, source, allkeywords, DiffName):
    # thread worker function
    sema.acquire()
    t = threading.currentThread()
    article_NERT_parser.main(article, pub_time, source, allkeywords, DiffName,  "PERSON")
    sema.release()


def grabber_worker(source_name, source, currentTime, allkeywords, DiffName):
    # thread worker function
    sema.acquire()
    t = threading.currentThread()
    art = source.main(currentTime)
    for url in art:
        print (url)
        a = threading.Thread(target=article_worker, args=(url, art[url], source_name, allkeywords, DiffName))
        thread.append(a)
        a.start()
    sema.release()


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
    currentTime = []
    urls = {}

    allkeywords = str(Governer) + "," + str(senators) + "," + str(HouseReps)
    allkeywords = allkeywords.replace("'", "")
    allkeywords = allkeywords.replace("]", "")
    allkeywords = allkeywords.replace("[", "")

    currentTime.append((time.strftime("%x").replace("/", " ")).split())
    currentTime.append((time.strftime("%X").replace(":", " ")).split())

    # print currentTime

    grabberlist = [grabber_ksl, grabber_deseret_news, grabber_fox13, grabber_slt, grabber_utah_policy, grabber_upc_legislative,
                    grabber_upc_judicial, grabber_upc_flagged_bill_status, grabber_upc_executive]
    source_name = ["KSL", "Deseret News", "Fox 13", "Salt Lake Tribune", "Utah Policy", "Utah Political Capitol Legislative",
                    "Utah Political Capitol J", "Utah Political Capitol Flagged Bill Status", "Utah Political Capitol Executive"]


    for i in range(len(grabberlist)):
        t = threading.Thread(target=grabber_worker, args=(source_name[i], grabberlist[i], currentTime, allkeywords, DiffName))
        threads.append(t)
        t.start()

    # article_NERT_parser.main('http://www.ksl.com/?sid=43580434&nid=148&title=utah-restaurant-associations-ask-governor-to-veto-05-dui-law', allkeywords, DiffName,  "PERSON")



if __name__ == "__main__":

    # some preliminary error checking

    # if len(sys.argv) != 1:
    #     print 'python database_placement [Url to article to be weighted] [keywords] [keyword type <PERSON|LOCATION|ORGANIZATION>]'
    # else:
    main()
