from pystaffo import StaffoAccount
import requests
import json
from getpass import getpass # librairie qui permmet de ne pas afficher les loguin et mot de pass saisie en ligne 11 et 13 dans le shell/
from bs4 import BeautifulSoup
 # script mot_de_passe.py
from tkinter import *
from tkinter.messagebox import * # boîte de dialogue

soup = BeautifulSoup("<html><p>This is <b>invalid HTML</p></html>", "html.parser")
subdomain = 'o-t'




print("Entrez votre login d'authentification")
username = getpass('') #ici le input est mmodifié par le getpas
#print("Entrez votre mot de passe")
#password = Motdepasse # idem commentaire ligne 11



def Verification():
    if Motdepasse.get() == 'Lydia':#rentre le bon mot de passe pour tester
        # le mot de passe est bon : on affiche une boîte de dialogue puis on ferme la fenêtre
        showinfo('Résultat','Mot de passe correct.\nAu revoir !')
        Mafenetre.destroy()
    else:
        # le mot de passe est incorrect : on affiche une boîte de dialogue
        showwarning('Résultat','Mot de passe incorrect.\nVeuillez recommencer !')
        Motdepasse.set('')

# Création de la fenêtre principale (main window)
Mafenetre = Tk()
Mafenetre.title('Identification requise')


# Création d'un widget Label (texte 'Mot de passe')
Label1 = Label(Mafenetre, text = 'Mot de passe ')
Label1.pack(side = LEFT, padx = 5, pady = 5)

# Création d'un widget Entry (champ de saisie)
Motdepasse = StringVar()
s = Motdepasse.get()
Champ = Entry(Mafenetre, textvariable= Motdepasse, show='*', bg ='bisque', fg='maroon')
Champ.focus_set()
Champ.pack(side = LEFT, padx = 5, pady = 5)
valeur = Motdepasse.get()
print(Motdepasse)
    
# Création d'un widget Button (bouton Valider)
Bouton = Button(Mafenetre, text ='Valider', command = Verification)
Bouton.pack(side = LEFT, padx = 5, pady = 5)

Mafenetre.mainloop() 

soup = BeautifulSoup("<html><p>This is <b>invalid HTML</p></html>", "html.parser") 
subdomain = 'o-t'




print("Entrez votre login d'authentification")
username = getpass('') #ici le input est mmodifié par le getpas
print("Entrez votre mot de passe")
password = Motdepasse # idem commentaire ligne 11



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

req = requests.get('https://https://o-t.staffomaticapp.com/locations/26605/users/Python_(programming_language)')
soup = BeautifulSoup(req.text, "lxml")
