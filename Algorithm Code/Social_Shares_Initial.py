import urllib, json, requests

URL = "http://www.bing.com"
donAPIURL = "https://count.donreach.com/?url="
FBURL = "http://graph.facebook.com/?id="
LIURL = "https://www.linkedin.com/countserv/count/share?url="
pinterestURL = "http://widgets.pinterest.com/v1/urls/count.json?source=6&url=" 
redditURL = "https://www.reddit.com/api/info.json?url="

donTotal = 0
FBShares = 0
FBComments = 0
linkedInShares = 0
pins= 0
upDoots = 0
karmaLinks = 0

print URL

#Calls Facebook graph and pulls the share count and comment count;
#comment count is rarely not 0
FBresponse = urllib.urlopen(FBURL + URL) #this goes to the URL
FBdata = json.loads(FBresponse.read()) #this scrapes the JSON data
FBShares = FBdata['share']['share_count'] #this parses the specific portion of the JSON data we want
FBComments = FBdata['share']['comment_count']
print "Facebook Shares: ", FBShares
print "Facebook Comments: ", FBComments

#Calls reddit API to pull the number of times shared
#and total number of upvotes the shares have
#NOTE: because it's reddit, upvote count fluctuates constantly
#need to use requests and get methos with browser header to prevent
#the occasional key error
redditResponse = requests.get(redditURL + URL, headers = {'User-agent': 'Chrome'})
redditData = json.loads(redditResponse.text) #.text instead of read due to requests method
karmaLinks = len(redditData['data']['children'])
#karmaLinks is the number of times shared; each share stored as a list item
#loop through the list and add each upvote count
if karmaLinks != 0 :
    for i in range(0,karmaLinks):
        upDoots += redditData['data']['children'][i]['data']['ups']
 
print "Reddit Shares: " , karmaLinks
print "Reddit Upvotes: " , upDoots

#Calls Pinterest API for number of shares
#doesn't return JSON object, but has text that contains JSON in the middle
#have to scrape the page and then parse non-JSON text out then
#convert to JSON and do normal JSON calls; way harder to accomplish via Javascript
pinterestResponse = urllib.urlopen(pinterestURL + URL).read()
parse1 = pinterestResponse.split("receiveCount(",1)[1]
parse2 = parse1.split(")",1)[0]
pinData = json.loads(parse2)
pins = pinData['count']
print "Pinterest Pins: " , pins

#Calls LinkedIn API for number of shares;
#near impossible via Javascript due to security issues
linkedInResponse = urllib.urlopen(LIURL + URL + "&format=json")
linkedInData = json.loads(linkedInResponse.read())
linkedInShares = linkedInData['count']
print "LinkedIn Shares: " , linkedInShares

#Call to the donShares API to pull extra social media shares
#currently throws a handshake error not present in Javascript
donResponse = urllib.urlopen(donAPIURL + URL + "&providers=all")
donData = json.loads(donResponse.read())
print donData
donTotal = donData['total']
print "Greater Total: " , donTotal