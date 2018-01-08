'''

Python script that is to grab all people of interest from the source: Washington State Legislature,
People grabbed will be Senetors, legisatures, governers and such.

Author: Founding Fathers, Kristian Nilssen
Date: 12/17/2017

Usage:

    python grabber_person.py


'''

import os
import sys
import time
from newspaper import Article
from bs4 import BeautifulSoup
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
# import ../database_interactors/mysql_person_entry
from database_interactors import mysql_person_entry


def main():
    # Input: None
    # Output: None

    # print "\n"
    # print "\n"
    # print "Washington State People Info Grab"
    # print "\n"
    sen_article = Article('http://leg.wa.gov/Senate/Senators/Pages/default.aspx')
    rep_article = Article('http://leg.wa.gov/House/Representatives/Pages/default.aspx')
    nat_article = Article('https://www.govtrack.us/congress/members/WA#senators')
    leg_article = Article('https://app.leg.wa.gov/memberemail/')
    sen_article.download()
    rep_article.download()
    nat_article.download()
    leg_article.download()
    sen_soups = BeautifulSoup(sen_article.html)
    rep_soups = BeautifulSoup(rep_article.html)
    nat_soups = BeautifulSoup(nat_article.html)
    leg_soups = BeautifulSoup(leg_article.html)
    sen_people = []
    rep_people = []
    nat_sen_people = []
    nat_rep_people = []
    leg_email_info = {}
    # prefix = "http://leg.wa.gov"


    leg_emails = leg_soups.find_all("div", class_="col-csm-10")
    prev_info = (0,[])

    for count, email in enumerate(leg_emails[1].find_all("td")):
        email = email.text.split()
        if count % 5 == 0:
            if prev_info[1] != []:
                leg_email_info[prev_info[0]] = prev_info[1]
            for x in range(0,len(email)):
                if email[x] == "Rep." or email[x] == "Senator":
                    prev_info = ((" ".join(email[x+1:])).replace("Rep. ", "").replace("Senator ", ""),[])
        else:
            if len(email) > 0:
                prev_info[1].append(email[0])
            else:
                prev_info[1].append('No Email Address')

    leg_email_info[prev_info[0]] = prev_info[1]



    senator_informations = sen_soups.find_all("div", class_="memberInformation")
    representative_information = rep_soups.find_all("div", class_="memberInformation")
    peoples = senator_informations + representative_information
    for people in peoples:
        image_url = people.img['src']
        name_party = people.find("span", class_="memberName").text.split()
        other_stuff = people.find_all("div", class_="col-csm-6 col-md-3 memberColumnPad ")
        bill_spon = people.find_all("div", class_="row clearfix memberDetails")
        for sponsor in bill_spon:
            if sponsor.a['href'][0:2] == "ht":
                bill_sponsorship = sponsor.a['href']
        other_stuff1 = other_stuff[0].text.replace("\n                             ", "").replace(" \n\n\n", "").replace("\n\n ", "").replace("Olympia", ", Olympia").split("\r")
        other_stuff2 = other_stuff[1].text.replace(" (Chair)", "").replace(" (Ranking Minority Member)", "").replace(" (Asst Ranking Minority Member)", "").replace(" (Vice Chair)", "").replace(" (Vice Chair, Capital Budget )", "").replace(" (Assistant Ranking Minority Member, Capital Budget)", "").replace(" (Assistant Ranking Minority Member, Operating Budget", "").split("\n\n")[1].split("\n")
        other_stuff2[len(other_stuff2)-1] = other_stuff2[len(other_stuff2)-1][:-1]

        phone_number = other_stuff1[3].replace(" ", "").replace("(", "").replace(")","-")

        for x in range(0,len(other_stuff2)-1):
            if len(other_stuff2[x]) != 0 and other_stuff2[x][-1] == " ":
                other_stuff2[x] = other_stuff2[x][:-1]

        name = " ".join(name_party[1:-1])
        if name_party[0] == "Representative":
            role = "house"
            rep_people.append(name)
        elif name_party[0] == "Senator":
            role = "senator"
            sen_people.append(name)

        if name_party[len(name_party)-1] == "(D)":
            party = "democrat"
        elif name_party[len(name_party)-1] == "(R)":
            party = "republican"
        elif name_party[len(name_party)-1] == "(I)":
            party = "independent"
        else:
            party = name_party[3].lower()



        full_name = name.lower()
        last_name = " ".join((name.split())[1:]).lower()
        first_name = str(name.split()[0]).lower()
        person_id = 'null'
        image = image_url
        role = role
        district = leg_email_info[name][1]
        legislative_since = "null"
        profession = "null"
        profession_affiliations = "null"
        education = "null"
        recognitions_and_honors = "null"
        counties = "null"
        mailing_address = ", ".join(other_stuff1[1:3])
        email = leg_email_info[name][0]
        cell = 'null'
        work_phone = phone_number
        home_phone = 'null'
        legislation = bill_sponsorship
        state = 'Washington'

        print full_name

        for item in [last_name, first_name, person_id, image, role, party, district, legislative_since, profession, profession_affiliations, education, recognitions_and_honors, counties, mailing_address, email, cell, work_phone, home_phone, legislation, state]:
            print " ", item

        print "\n"

        mysql_person_entry.main(last_name, first_name, person_id, image, role, party, district, legislative_since, profession, profession_affiliations, education, recognitions_and_honors, counties, mailing_address, email, cell, work_phone, home_phone, legislation, state)



    # Reps to national House and Sens to national Senate
    # Blocked from gov Track lol


    nat_pic_link = "https://www.govtrack.us"
    nat_senator_informations = nat_soups.find_all("div", class_="member")
    for nat_people in nat_senator_informations:
        image_url = nat_pic_link + nat_people.img['src']

        nat_role = nat_people.find("div", class_="photo_flag").text
        if "Senator" in nat_role.split():
            role = "us senator"
            district = "null"

        else:
            role = "us house"
            district = nat_role.split()[0][:-2]

        about = nat_people.find_all("div", class_="info")[0].text.split("\n")[1:-1]
        legislative_since = about[1]
        party = about[0].lower()




        full_name = nat_people.find("p", class_="moc").text.lower()
        last_name = " ".join((full_name.split())[1:]).lower()
        first_name = str(full_name.split()[0]).lower()
        person_id = 'null'
        image = image_url
        role = role
        profession = "null"
        profession_affiliations = "null"
        education = "null"
        recognitions_and_honors = "null"
        counties = "null"
        mailing_address = "null"
        email = "null"
        cell = 'null'
        work_phone = "null"
        home_phone = 'null'
        legislation = "null"
        state = 'Washington'

        print full_name

        for item in [last_name, first_name, person_id, image, role, party, district, legislative_since, profession, profession_affiliations, education, recognitions_and_honors, counties, mailing_address, email, cell, work_phone, home_phone, legislation, state]:
            print " ", item

        print "\n"

        mysql_person_entry.main(last_name, first_name, person_id, image, role, party, district, legislative_since, profession, profession_affiliations, education, recognitions_and_honors, counties, mailing_address, email, cell, work_phone, home_phone, legislation, state)






if __name__ == "__main__":

    if len(sys.argv) != 1:
        print "Usage: python grabber_person.py"
    else:
        main()
