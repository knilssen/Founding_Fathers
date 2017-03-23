'''
Python script that is to place articles into senators/house members/bills/governer/judicial database tables from article_grabber.py

Author: Founding Fathers, Kristian Nilssen
Date: 2/25/2017

Usage:

    python DatabasePlacement.py
'''

import sys
import personOfInterestWeightWithInputs
import article_Grabber


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

    urls = {}
    urls = article_Grabber.main()
    print len(urls)

    allkeywords = str(Governer) + "," + str(senators) + "," + str(HouseReps)
    allkeywords = allkeywords.replace("'", "")
    allkeywords = allkeywords.replace("]", "")
    allkeywords = allkeywords.replace("[", "")

    # print allkeywords

    for article in urls:
        print article
        print article[0]
        personOfInterestWeightWithInputs.main(article, allkeywords, DiffName,  "PERSON")



if __name__ == "__main__":

    # some preliminary error checking

    # if len(sys.argv) != 1:
    #     print 'python keywordMatchWeight [Url to article to be weighted] [keywords] [keyword type <PERSON|LOCATION|ORGANIZATION>]'
    # else:
    main()
