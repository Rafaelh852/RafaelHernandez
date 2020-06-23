'''
* Updater for site
* goal is to replace manual updates to site by scanning rss feeds of personal accounts across digital platforms

Scans web for updates for rss feeds and pulls them as xml files

parses them to json by appropriate category

updates existing json files accoridingly


'''

import json
import requests
import xml.etree.ElementTree as ET

test_url = "https://medium.com/feed/@kenneth.b.jee?format=json"

my_url = "https://medium.com/feed/@rafael.hernandez852"

filename = "articles.xml"
path = "src/app/content/"
xml = path + filename

# grabs request and encodes it in utf-8
r = requests.get(test_url).text.encode("utf-8")

# writes the byte code to a file html, or xml
with open(xml, "wb") as file:
    file.write(r)


newsitems = []

# create element tree object
tree = ET.parse(xml)
root = tree.getroot()

chlink = str(root.find('./channel/link').text.encode('utf-8'))


# channel > item > link,description,title
# iterate news items
for item in root.findall('./channel/item'):
    news = {}

    for child in item:
        if (child.tag == "title") or(child.tag == "link") or (child.tag == "description"):
            news[child.tag] = str(child.text.encode('utf8'))

    if len(news) == 3:
        newsitems.append(news)








# writes json file
feed = open( path +filename[:filename.find(".")]+".json", "w")
feed.write('''{
  "link":"''' + chlink[2:(len(chlink)-1)] + '''",
  "article":''' + json.dumps(newsitems)+"}")

feed.close()
file.close()