import requests
from bs4 import BeautifulSoup
#Beautiful Soup transforme un document HTML complexe en un arbre complexe d’objets Python. Mais vous aurez à manipuler seulement quatre types d’objets : Tag, NavigableString, BeautifulSoup, et Comment.

 
req = requests.get('https://o-t.staffomaticapp.com/locations/26605/users)')
soup = BeautifulSoup(req.text, "lxml")


soup.title
# <title></title>>
 
soup.title.name
# 'title'
 
soup.title.string
# 'title'

soup.h1
# <h1 class="firstHeading" id="firstHeading" lang="en">Python (programming language)</h1>
 
soup.h1.string
# 'Python (programming language)'
 
soup.h1['class']
# ['firstHeading']
 
soup.h1['id']
# 'firstHeading'
 
soup.h1.attrs
# {'class': ['firstHeading'], 'id': 'firstHeading', 'lang': 'en'}
 
soup.h1['class'] = 'firstHeading, mainHeading'
soup.h1.string.replace_with("Python - Programming Language")
del soup.h1['lang']
del soup.h1['id']
 
soup.h1
# <h1 class="firstHeading, mainHeading">Python - Programming Language</h1>

for sub_heading in soup.find_all('h2'):
    print(sub_heading.text)
     
# all the sub-headings like Contents, History[edit]...

print(soup.p.contents)
# [<b>Python</b>, ' is a widely used ',.....the full list]
 
print(soup.p.contents[2])
# <a href="/wiki/Readability" title="Readability">readability</a>
 
for child in soup.p.children:
    print(child.name)
# b
# None
# a
# None
# a
# None
# ... and so on.

print(soup.p.parent.name)
# div
 
for parent in soup.p.parents:
    print(parent.name)
# div
# div
# div
# body
# html
# [document]

soup.head.next_sibling
# '\n'
 
soup.p.a.next_sibling
# ' for '
 
soup.p.a.previous_sibling
# ' is a widely used '
 
print(soup.p.b.previous_sibling)
# None
