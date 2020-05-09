from pystaffo import StaffoAccount
import requests
import json
from getpass import getpass # librairie qui permmet de ne pas afficher les loguin et mot de pass saisie en ligne 11 et 13 dans le shell/
from bs4 import BeautifulSoup
 # script mot_de_passe.py
from requests import get
from scrapy import Selector


soup = BeautifulSoup("<html><p>This is <b>invalid HTML</p></html>", "html.parser")
subdomain = 'o-t'

soup = BeautifulSoup("<html><p>This is <b>invalid HTML</p></html>", "html.parser") 
subdomain = 'o-t'




print("Entrez votre login d'authentification")
username = getpass('') #ici le input est mmodifié par le getpas
print("Entrez votre mot de passe")
password = getpass('') # idem commentaire ligne 11



account = StaffoAccount(subdomain=subdomain, username=username, password=password)

# The locations and departments are cached as attributes of the class instance.
# Return dictionary of {'department_name': department_id, ...}:
account.locations

# Return the information of a particular location:
account.get_location('Paris')


x = requests.get('https://o-t.staffomaticapp.com')
print(x.status_code)
r = requests.get("http://o-t.staffomaticapp.com/")
print(r.text)
r = requests.put("http://o-t.staffomaticapp.com/")
r = requests.delete("http://o-t.staffomaticapp.com/")
r = requests.patch("http://o-t.staffomaticapp.com/")
r = requests.post("http://o-t.staffomaticapp.com/")
r = requests.head("http://o-t.staffomaticapp.com/")
r = requests.options("http://o-t.staffomaticapp.com/")

req = requests.get('http://o-t.staffomaticapp.com/")')
soup = BeautifulSoup(req.text, "lxml")

url = "http://o-t.staffomaticapp.com/"
response = get(url)
source = None # Le code source de la page 
if response.status_code == 200 :
    # Si la requete s'est bien passee
    source = response.text


## Parsing de la page
if source :
    # Si le code source existe
    selector = Selector(text=source)
    titles = selector.css("div.toc ul > li")
    for title in titles:
        level = title.css("span.tocnumber::text").extract_first()
        name = title.css("span.toctext::text").extract_first()
        print(level + " " + name)
