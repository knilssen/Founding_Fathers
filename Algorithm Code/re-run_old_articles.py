import sys
import string
import time
import nltk
import newspaper
from timeit import default_timer as timer
from collections import defaultdict
from nltk import FreqDist
from nltk import word_tokenize
from nltk import FreqDist
import warnings
import mysql
import mysql.connector
from mysql.connector import errorcode


from database_interactors import mysql_article_entry
from database_interactors import mysql_article_person_link
from database_interactors import mysql_article_based_weights
from database_interactors import mysql_social_media_entry
from database_interactors import mysql_check_duplicate
from database_interactors import mysql_found_url_entry
from database_interactors import mysql_check_found_url
from nltk.tag import StanfordNERTagger

# def petext(article_to_be_re_ran, number_ran, Keywords, otherNames):


def main(run_type, single_article):
    # if run_type == 0:

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
                u'Brandon Vick', u'Mike Volz', u'Jim Walsh', u'J.T. Wilcox', u'Sharon Wylie', u'Jesse Young', u'Adam Smith',
                u'Cathy McMorris Rodgers', u'Dan Newhouse', u'David Reichert', u'Denny Heck', u'Derek Kilmer',
                u'Jaime Herrera Beutler', u'Pramila Jayapal', u'Rick Larsen', u'Suzan DelBene']

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
                u'Judy Warnick', u'Lisa Wellman', u'Lynda Wilson', u'Hans Zeiger', u'Patty Murray', u'Maria Cantwell']

    Governer = {}
    Governers = [u'Jay Inslee']


    DiffName_longLName = {'Sharon Santos':'Sharon Tomiko Santos','Monica Stonier':'Monica Jurado Stonier','Luanne Werven':'Luanne Van Werven','Kevin Wege':'Kevin Van De Wege'}
    DiffName = {'Governor Inslee':'Jay Inslee', 'Dave Reichert':'David Reichert', 'Sharon Santos':'Sharon Tomiko Santos', 'Monica Stonier':'Monica Jurado Stonier', 'Luanne Werven':'Luanne Van Werven', 'Kevin Wege':'Kevin Van De Wege'}
    # DiffName = DiffName.update(DiffName_longLName)
    # print "DiffName", DiffName
    otherNames = DiffName

    washington_senators_us = {}
    utah_senators_us = [u'Patty Murray', u'Maria Cantwell']

    washington_reps_us = {}
    utah_reps_us = [u'Adam Smith', u'Cathy McMorris Rodgers', u'Dan Newhouse', u'David Reichert', u'Denny Heck', u'Derek Kilmer',
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
    Keywords = names





    articles = {}
    socials = {}
    # Links is a dictionary of dictionaries
    # Structure is {article_id: {person_id: {link_data}}
    links = {}


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

        # Get article information for the articles or article we are going to re-run
        cursor = cnx.cursor(dictionary=True)
        cursor.execute("SELECT id, url, text FROM News_articles WHERE id > 197")
        article_data = cursor.fetchall()
        articles = article_data
        cursor.close()

        # Get social media data for articles or article we are going to re-run
        cursor = cnx.cursor(dictionary=True)
        cursor.execute("SELECT * FROM News_social_media where articles_id_id > 197")
        social_data = cursor.fetchall()
        socials = social_data
        cursor.close()

        # Get person links data for articles or article we are going to re-run
        for re_run_articles in articles:
            cursor = cnx.cursor(dictionary=True)
            cursor.execute(("SELECT * FROM News_article_person WHERE articles_id_id=%s") % (re_run_articles["id"]))
            link_data = cursor.fetchall()
            # print link_data

            if link_data != []:
                # print link_data[0]["people_id_id"]
                for person_linked in link_data:
                    person_cursor = cnx.cursor(dictionary=True)
                    person_cursor.execute(("SELECT first_name, last_name FROM News_people WHERE id=%s") % (person_linked["people_id_id"]))
                    person_data = person_cursor.fetchall()[0]
                    person_linked_data = person_linked
                    person_linked_data.update(person_data)


                    if re_run_articles["id"] in links:
                        links[re_run_articles["id"]].update({person_linked["people_id_id"]: person_linked_data})

                    else:
                        links[re_run_articles["id"]] = {person_linked["people_id_id"]: person_linked_data}


                    person_cursor.close()
            else:
                # print re_run_articles["id"]
                links[re_run_articles["id"]] = {}






            cursor.close()

        # print "\n"
        #
        # for shit in links:
        #     print shit
        #
        # print "\n"

        # Get found url data
        cursor = cnx.cursor()
        cursor.execute("SELECT url FROM News_found_url")
        found_url_data = [item[0] for item in cursor.fetchall()]
        cursor.close()


    cnx.close()



    # Begin re running everything
    number_ran = 0
    # for article_to_be_re_ran in articles:
    #     number_ran += 1
    #     petext(article_to_be_re_ran, number_ran, Keywords, otherNames)
    #
    #
    #


    for article_to_be_re_ran in articles:
        number_ran += 1

        article_people = {}
        Type = "PERSON"
        classifier = 'stanford-ner/classifiers/english.all.3class.distsim.crf.ser.gz'
        jar = 'stanford-ner/stanford-ner.jar'
        st = StanfordNERTagger(classifier,jar)
        sentence = word_tokenize(article_to_be_re_ran["text"])
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
        Url = article_to_be_re_ran["url"]

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
        # print links

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
                            # print 'temp_realtypefind: ', title_tag, temp_realtypefind

                            # If our found title is a nickname such as rep. for represenative, then change the nickname to its respected title.
                            # If not, continue
                            if title_tag in alt_position_titles:
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


        # print "\n"
        # print article_people

        # Create a better output of people
        output_people = []
        for people in article_people:
            output_people.append(people)

        # print output_people


        # If the article has one or more people of interest, then add the article to our database
        if len(article_people) >= 1:
            # print "  ", found_article_number, (3-len(str(found_article_number))) * " " + "        ", article_id, (3-len(str(article_id))) * " " + "                  ", output_people
            try:

                # print article_people

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

                    # add_article_person = ("INSERT INTO News_article_person "
                    #        "(articles_id_id, people_id_id, name_mentions, mention_percentage, totoltypecount) "
                    #        "VALUES (%s, %s, %s, %s, %s)")


                    for person in article_people:
                        # print person
                        mention_percentage = round((float(article_people[person])/float(totoltypecount)), 4) * 100
                        lname = str(" ".join(person.split()[1:]))
                        fname = str(person.split()[0])
                        cursor.execute(('SELECT id FROM News_people WHERE last_name = "%s" AND first_name = "%s"') % (lname, fname))
                        data = cursor.fetchall()
                        try:
                            data = data[0]
                            data = data[0]
                        except:
                            print "\n"
                            print "     ERROR: PROBLEM WITH MYSQL_ARTICLE_PERSON_LINK"
                            print "            MOST LIKELY HAS TO DO WITH PERSON NOT BEING IN DATABASE TABLE NEWS_PEOPLE"
                            print "\n"
                            print "                                        ARTICLE_ID:                      ", article_to_be_re_ran['id']
                            print "                                        ARTICLE_PEOPLE:                  ", article_people
                            print "                                        PERSON:                          ", fname + " " + lname
                            print "                                        MENTION_PERCENTAGE:              ", mention_percentage
                            print "                                        totoltypecount:    ", totoltypecount
                            print "                                        ERROR ON LINE 52:"
                            print "                                                             data = data[0]"
                            print "                                        PRINT DATA:"
                            print "                                                          ", data
                            print "\n"
                        # print person
                        # # print data
                        else:
                            # print data
                            # print "hi", links[198]
                            # print links[article_to_be_re_ran['id']]
                            if data not in links[article_to_be_re_ran['id']]:
                                # print "\a\a"
                                # print "\a"
                                # print "PERSON NOT ORIGINIALLY FOUND IN", article_to_be_re_ran['id']
                                # print person, "0", "   |   ", article_people[person]
                                print "        ", article_to_be_re_ran['id'], (3-len(str(article_to_be_re_ran['id']))) ,"        ", 0, (3-len(str(0))) * " " + "                  ", article_people[person], (3-len(str(article_people[person]))) * " " + "                  ", person.title()
                                # sys.stdout.write("TYPE [ YES ] TO COMMITE CHANGES AND [ NO ] TO OMIT THEM\n")
                                # choice = raw_input().lower()
                                # print "ANSWER:  [ YES ]     OR      [ NO ]"
                            elif article_people[person] != links[article_to_be_re_ran['id']][data]["name_mentions"]:
                                # print "\a"
                                # print "\a"
                                # print person, links[article_to_be_re_ran['id']][data]["name_mentions"], "   |   ", article_people[person]
                                print "        ", article_to_be_re_ran['id'], (3-len(str(article_to_be_re_ran['id']))) ,"        ", links[article_to_be_re_ran['id']][data]["name_mentions"], (3-len(str(links[article_to_be_re_ran['id']][data]["name_mentions"]))) * " " + "                  ", article_people[person], (3-len(str(article_people[person]))) * " " + "                  ", person.title()
                                # sys.stdout.write("TYPE [ YES ] TO COMMITE CHANGES AND [ NO ] TO OMIT THEM\n")
                                # choice = raw_input().lower()
                                # print "ANSWER:  [ YES ]     OR      [ NO ]"
                            # data_article_person = (article_id, data[0], article_people[person], mention_percentage, totoltypecount)
                            # cursor.execute(add_article_person, data_article_person)

                    cursor.close()
                cnx.close()















                # mysql_article_person_link.main(article_id, article_people, totoltypecount)
                # mysql_social_media_entry.main(article_id, Url)
            except Exception, err:
                print "\a\a\a"

                print "  ", number_ran, (3-len(str(number_ran))) * " " + "                  ", "ERROR WITH DATABASE INTERACTION, URL:", Url
                print "Article text:", article_to_be_re_ran["text"]
                print "\n"
                # print "Congratulation! you tripped a #%d error" % err
                print "error:", repr(err)
                print "exception", Exception
                print "\n"
            except:
                print "Other Error?"
                print "\n"


            # If there are people of interest in the article, and the article was succefully entered into the database without error, print out the information along with the
            # articles id number from News_articles
            # print "        ", number_ran, (3-len(str(number_ran))) * " " + "                  ", article_to_be_re_ran['id'], (3-len(str(article_to_be_re_ran['id']))) * " " + "                  ", output_people



        # If everything goes smoothly, or the article doesnt have anyone we are interested in mentioned, release the sema and return the Url, people found of interest,
        # return people found that are not of interest, and also return pre name possible posisitions like those of accepted such as governor and senator.

























if __name__ == "__main__":

    if len(sys.argv) == 2:
        print "\n"
        print "\n"
        print "RE RUNNING OLD ARTICLE WITH ID:", sys.argv[1]
        print "\n"
        main(1, sys.argv[1])
    elif len(sys.argv) == 1:
        print "\n"
        print "\n"
        print "RE RUNNING ALL OLD ARTICLES ON ALL ASPECTS!"
        print "\n"
        main(0, "All")
    else:
        print 'Invalid Use, try again with proper parameters'
        print "Options:"
        print '  Single Article         python re-run_old_articles.py [ article_id ]'
        print '  All Articles           python re-run_old_articles.py [ article_id ]'
