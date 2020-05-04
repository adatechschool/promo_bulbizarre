


from pystaffo import StaffoAccount
import requests
import json
from getpass import getpass # librairie qui permmet de ne pas afficher les loguin et mot de pass saisie en ligne 11 et 13 dans le shell/
import hashlib

 
subdomain = 'o-t'
print("Entrez votre loguin d'authetification")
username = getpass('') #ici le input est mmodifié par le getpass 
print("Entrez votre mot de passe")
password = getpass('') # idem commentaoire ligne 11

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

