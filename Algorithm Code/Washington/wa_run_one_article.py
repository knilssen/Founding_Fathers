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
import threading
from Queue import Queue
from threading import Thread
from timeit import default_timer as timer

# from /Washington/ import Washington.article_grabbers
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

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
# path now set to directory: Algorithm Code
import petext_test





def main(url, source):
    start_grabbing = timer()
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
    # DiffName = DiffName.update(DiffName_longLName)
    # print "DiffName", DiffName

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

    # for usen in utah_senators_us:
    #     usens = usen.split()
    #     washington_senators_us[" ".join(usens[1:])] = usens[0]

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

    grabberlist = [grabber_seattle_times,grabber_olympian,grabber_washington_state_wire,grabber_king_5,grabber_news_tribune,
                    grabber_washington_state_republican_party,grabber_washington_state_democrats,grabber_kuow,grabber_public_news_service,grabber_crosscut,
                    grabber_spokesman_review,grabber_washington_education_association,grabber_capitol_record,grabber_q13_fox,grabber_nw_news_network]

    source_name = ["Seattle Times","The Olympian","Washington State Wire","King 5","The News Tribune","Washington State Republican Party",
                    "Washington Democrats","KOUW","Public News Service","Crosscut","The Spokesman-Review","Washington Education Association",
                    "The Capitol Record","Q13 Fox","NW News Network"]

    # grabber_deseret_news, grabber_senate_site, grabber_stgeorge, "Deseret News", "Senate Site", "St George"




    petext_test.main({source : {url : currentTime}}, names, DiffName, 1)




if __name__ == "__main__":

    # some preliminary error checking

    # if len(sys.argv) != 3:
    #     print 'python keywordMatchWeight [Url to article to be weighted] [keywords] [keyword type <PERSON|LOCATION|ORGANIZATION>]'
    # else:
    url = "https://washingtonstatewire.com/deadline-nears-flurry-bills-pass-house-senate/"
    source = "Washington State Wire"
    main(url, source)












    #
    # [(u'With', u'O'), (u'the', u'O'), (u'Wednesday', u'O'), (u'deadline', u'O'), (u'for', u'O'), (u'bills', u'O'), (u'to', u'O'), (u'pass', u'O'), (u'in', u'O'), (u'their', u'O'), (u'house', u'O'), (u'of', u'O'), (u'origin', u'O'), (u',', u'O'), (u'a', u'O'), (u'flood', u'O'), (u'of', u'O'), (u'bills', u'O'), (u'passed', u'O'), (u'out', u'O'), (u'of', u'O'), (u'the', u'O'), (u'House', u'ORGANIZATION'), (u'and', u'O'), (u'Senate', u'ORGANIZATION'), (u'over', u'O'), (u'the', u'O'), (u'weekend', u'O'), (u'.', u'O'), (u'Bills', u'O'), (u'related', u'O'), (u'to', u'O'), (u'affordable', u'O'), (u'housing', u'O'), (u',', u'O'), (u'health', u'O'), (u',', u'O'), (u'and', u'O'), (u'elections', u'O'), (u'all', u'O'), (u'took', u'O'), (u'steps', u'O'), (u'forward', u'O'), (u'.', u'O'), (u'Affordable', u'O'), (u'Housing', u'O'), (u':', u'O'), (u'Addressing', u'O'), (u'Washington', u'LOCATION'), (u'\u2019', u'O'), (u's', u'O'), (u'homelessness', u'O'), (u'crisis', u'O'), (u'has', u'O'), (u'been', u'O'), (u'a', u'O'), (u'key', u'O'), (u'issue', u'O'), (u'during', u'O'), (u'this', u'O'), (u'session', u'O'), (u'.', u'O'), (u'Though', u'O'), (u'the', u'O'), (u'problem', u'O'), (u'is', u'O'), (u'multifaceted', u'O'), (u',', u'O'), (u'possible', u'O'), (u'solutions', u'O'), (u'continue', u'O'), (u'to', u'O'), (u'move', u'O'), (u'forward', u'O'), (u'as', u'O'), (u'three', u'O'), (u'bills', u'O'), (u'aimed', u'O'), (u'at', u'O'), (u'improving', u'O'), (u'access', u'O'), (u'to', u'O'), (u'affordable', u'O'), (u'housing', u'O'), (u'passed', u'O'), (u'out', u'O'), (u'of', u'O'), (u'the', u'O'), (u'Senate', u'ORGANIZATION'), (u'on', u'O'), (u'Friday', u'O'), (u'.', u'O'), (u'House', u'O'), (u'bill', u'O'), (u'5407', u'O'), (u',', u'O'), (u'sponsored', u'O'), (u'by', u'O'), (u'Senator', u'O'), (u'Frockt', u'O'), (u',', u'O'), (u'would', u'O'), (u'forbid', u'O'), (u'landlords', u'O'), (u'from', u'O'), (u'discriminating', u'O'), (u'against', u'O'), (u'tenants', u'O'), (u'based', u'O'), (u'on', u'O'), (u'their', u'O'), (u'source', u'O'), (u'of', u'O'), (u'income', u'O'), (u'.', u'O'), (u'This', u'O'), (u'bill', u'O'), (u'would', u'O'), (u'ensure', u'O'), (u'that', u'O'), (u'tenants', u'O'), (u'whose', u'O'), (u'income', u'O'), (u'includes', u'O'), (u'housing', u'O'), (u'subsidies', u'O'), (u'or', u'O'), (u'other', u'O'), (u'forms', u'O'), (u'of', u'O'), (u'public', u'O'), (u'assistance', u'O'), (u'would', u'O'), (u'have', u'O'), (u'the', u'O'), (u'same', u'O'), (u'opportunities', u'O'), (u'to', u'O'), (u'rent', u'O'), (u'or', u'O'), (u'lease', u'O'), (u'property', u'O'), (u'as', u'O'), (u'any', u'O'), (u'other', u'O'), (u'tenant', u'O'), (u'who', u'O'), (u'does', u'O'), (u'not', u'O'), (u'utilize', u'O'), (u'these', u'O'), (u'services', u'O'), (u'.', u'O'), (u'\u201c', u'O'), (u'Homelessness', u'O'), (u'is', u'O'), (u'a', u'O'), (u'crisis', u'O'), (u'in', u'O'), (u'Washington', u'LOCATION'), (u'state', u'O'), (u',', u'O'), (u'and', u'O'), (u'we', u'O'), (u'have', u'O'), (u'limited', u'O'), (u'tools', u'O'), (u'to', u'O'), (u'solve', u'O'), (u'this', u'O'), (u'problem', u'O'), (u',', u'O'), (u'\u201d', u'O'), (u'Frockt', u'PERSON'), (u'said', u'O'), (u'.', u'O'), (u'\u201c', u'O'), (u'One', u'O'), (u'of', u'O'), (u'those', u'O'), (u'tools', u'O'), (u'is', u'O'), (u'housing', u'O'), (u'assistance', u'O'), (u'.', u'O'), (u'But', u'O'), (u'that', u'O'), (u'only', u'O'), (u'works', u'O'), (u'if', u'O'), (u'people', u'O'), (u'are', u'O'), (u'able', u'O'), (u'to', u'O'), (u'rent', u'O'), (u'homes', u'O'), (u'using', u'O'), (u'that', u'O'), (u'source', u'O'), (u'of', u'O'), (u'income.', u'O'), (u'\u201d', u'O'), (u'Also', u'O'), (u'passing', u'O'), (u'Friday', u'O'), (u'was', u'O'), (u'SB', u'O'), (u'6371', u'O'), (u'which', u'O'), (u'would', u'O'), (u'increase', u'O'), (u'the', u'O'), (u'debt', u'O'), (u'allowed', u'O'), (u'by', u'O'), (u'the', u'O'), (u'Housing', u'ORGANIZATION'), (u'Finance', u'ORGANIZATION'), (u'Commission', u'ORGANIZATION'), (u',', u'O'), (u'SB', u'O'), (u'6294', u'O'), (u'which', u'O'), (u'would', u'O'), (u'exempt', u'O'), (u'certain', u'O'), (u'emergency', u'O'), (u'shelters', u'O'), (u'from', u'O'), (u'impact', u'O'), (u'fees', u'O'), (u',', u'O'), (u'and', u'O'), (u'SB', u'O'), (u'6347', u'O'), (u'which', u'O'), (u'would', u'O'), (u'expand', u'O'), (u'the', u'O'), (u'property', u'O'), (u'tax', u'O'), (u'exemption', u'O'), (u'for', u'O'), (u'building', u'O'), (u'multi-unit', u'O'), (u'housing', u'O'), (u'.', u'O'), (u'Opioids', u'O'), (u':', u'O'), (u'Another', u'O'), (u'publicized', u'O'), (u'issue', u'O'), (u'during', u'O'), (u'this', u'O'), (u'session', u'O'), (u'has', u'O'), (u'been', u'O'), (u'tackling', u'O'), (u'the', u'O'), (u'state', u'O'), (u'\u2019', u'O'), (u's', u'O'), (u'opioid', u'O'), (u'epidemic', u'O'), (u'.', u'O'), (u'Representative', u'O'), (u'Eileen', u'PERSON'), (u'Cody', u'PERSON'), (u'\u2019', u'O'), (u's', u'O'), (u'opioid', u'O'), (u'treatment', u'O'), (u'and', u'O'), (u'prevention', u'O'), (u'bill', u'O'), (u'passed', u'O'), (u'out', u'O'), (u'of', u'O'), (u'the', u'O'), (u'House', u'ORGANIZATION'), (u'with', u'O'), (u'a', u'O'), (u'unanimous', u'O'), (u'vote', u'O'), (u'Friday', u'O'), (u'afternoon', u'O'), (u'.', u'O'), (u'Among', u'O'), (u'several', u'O'), (u'actions', u'O'), (u',', u'O'), (u'the', u'O'), (u'comprehensive', u'O'), (u'bill', u'O'), (u'would', u'O'), (u'establish', u'O'), (u'new', u'O'), (u'requirements', u'O'), (u'for', u'O'), (u'integrating', u'O'), (u'health', u'O'), (u'records', u'O'), (u'and', u'O'), (u'the', u'O'), (u'prescription', u'O'), (u'drug', u'O'), (u'monitoring', u'O'), (u'program', u'O'), (u',', u'O'), (u'allow', u'O'), (u'pharmacists', u'O'), (u'to', u'O'), (u'partially', u'O'), (u'fill', u'O'), (u'prescriptions', u'O'), (u',', u'O'), (u'and', u'O'), (u'require', u'O'), (u'in-person', u'O'), (u'discussions', u'O'), (u'between', u'O'), (u'provider', u'O'), (u'and', u'O'), (u'patient', u'O'), (u'for', u'O'), (u'first', u'O'), (u'time', u'O'), (u'opioid', u'O'), (u'prescriptions', u'O'), (u'.', u'O'), (u'Monday', u'O'), (u'morning', u'O'), (u',', u'O'), (u'the', u'O'), (u'House', u'ORGANIZATION'), (u'also', u'O'), (u'passed', u'O'), (u'HB', u'O'), (u'2390', u'O'), (u',', u'O'), (u'a', u'O'), (u'bill', u'O'), (u'that', u'O'), (u'would', u'O'), (u'ensure', u'O'), (u'that', u'O'), (u'Narcan', u'O'), (u',', u'O'), (u'an', u'O'), (u'opioid', u'O'), (u'overdose', u'O'), (u'reversal', u'O'), (u'medication', u'O'), (u',', u'O'), (u'is', u'O'), (u'available', u'O'), (u'in', u'O'), (u'kindergarten', u'O'), (u'through', u'O'), (u'12th', u'O'), (u'grade', u'O'), (u'schools', u'O'), (u'as', u'O'), (u'well', u'O'), (u'as', u'O'), (u'in', u'O'), (u'college', u'O'), (u'dorms', u'O'), (u'.', u'O'), (u'\u201c', u'O'), (u'We', u'O'), (u'need', u'O'), (u'to', u'O'), (u'do', u'O'), (u'everything', u'O'), (u'possible', u'O'), (u'to', u'O'), (u'save', u'O'), (u'the', u'O'), (u'lives', u'O'), (u'of', u'O'), (u'young', u'O'), (u'people', u'O'), (u'during', u'O'), (u'this', u'O'), (u'opioid', u'O'), (u'epidemic', u'O'), (u',', u'O'), (u'\u201d', u'O'), (u'said', u'O'), (u'sponsor', u'O'), (u'Rep.', u'O'), (u'Gerry', u'PERSON'), (u'Pollet', u'PERSON'), (u'.', u'O'), (u'\u201c', u'O'), (u'It', u'O'), (u'reaches', u'O'), (u'everywhere', u'O'), (u'in', u'O'), (u'our', u'O'), (u'state', u'O'), (u'and', u'O'), (u',', u'O'), (u'sadly', u'O'), (u',', u'O'), (u'every', u'O'), (u'school', u'O'), (u'and', u'O'), (u'college', u'O'), (u'.', u'O'), (u'Naloxone', u'O'), (u'is', u'O'), (u'safe', u'O'), (u'and', u'O'), (u'easily', u'O'), (u'administered', u'O'), (u'.', u'O'), (u'We', u'O'), (u'need', u'O'), (u'to', u'O'), (u'educate', u'O'), (u'people', u'O'), (u'to', u'O'), (u'recognize', u'O'), (u'overdoses', u'O'), (u'and', u'O'), (u'enable', u'O'), (u'school', u'O'), (u'and', u'O'), (u'college', u'O'), (u'dorm', u'O'), (u'staff', u'O'), (u'to', u'O'), (u'administer', u'O'), (u'\u2013', u'O'), (u'especially', u'O'), (u'since', u'O'), (u'so', u'O'), (u'few', u'O'), (u'public', u'O'), (u'schools', u'O'), (u'have', u'O'), (u'nurses', u'O'), (u'on', u'O'), (u'hand.', u'O'), (u'\u201d', u'O'), (u'Voting', u'O'), (u'and', u'O'), (u'Elections', u'O'), (u':', u'O'), (u'On', u'O'), (u'Saturday', u'O'), (u',', u'O'), (u'legislation', u'O'), (u'to', u'O'), (u'enact', u'O'), (u'automatic', u'O'), (u'voter', u'O'), (u'registration', u'O'), (u'passed', u'O'), (u'out', u'O'), (u'of', u'O'), (u'the', u'O'), (u'Senate', u'ORGANIZATION'), (u'by', u'O'), (u'a', u'O'), (u'31-12', u'O'), (u'vote', u'O'), (u'.', u'O'), (u'If', u'O'), (u'the', u'O'), (u'bill', u'O'), (u'becomes', u'O'), (u'law', u'O'), (u',', u'O'), (u'starting', u'O'), (u'in', u'O'), (u'2019', u'O'), (u',', u'O'), (u'anyone', u'O'), (u'who', u'O'), (u'applies', u'O'), (u'for', u'O'), (u'or', u'O'), (u'renews', u'O'), (u'an', u'O'), (u'enhanced', u'O'), (u'driver', u'O'), (u'\u2019', u'O'), (u's', u'O'), (u'license', u'O'), (u'will', u'O'), (u'automatically', u'O'), (u'be', u'O'), (u'registered', u'O'), (u'to', u'O'), (u'vote', u'O'), (u'.', u'O'), (u'The', u'O'), (u'Senate', u'ORGANIZATION'), (u'also', u'O'), (u'passed', u'O'), (u'a', u'O'), (u'bill', u'O'), (u'to', u'O'), (u'toughen', u'O'), (u'campaign', u'O'), (u'finance', u'O'), (u'laws', u'O'), (u'and', u'O'), (u'bring', u'O'), (u'about', u'O'), (u'transparency', u'O'), (u'regarding', u'O'), (u'the', u'O'), (u'individuals', u'O'), (u'and', u'O'), (u'entities', u'O'), (u'that', u'O'), (u'pay', u'O'), (u'for', u'O'), (u'political', u'O'), (u'ads', u'O'), (u'.', u'O'), (u'These', u'O'), (u'bills', u'O'), (u'are', u'O'), (u'part', u'O'), (u'of', u'O'), (u'the', u'O'), (u'\u201c', u'O'), (u'Access', u'O'), (u'to', u'O'), (u'Democracy', u'O'), (u'\u201d', u'O'), (u'package', u'O'), (u'of', u'O'), (u'legislation', u'O'), (u'announced', u'O'), (u'before', u'O'), (u'session', u'O'), (u'began', u'O'), (u'.', u'O')]
