# On importe la fonction 'get' (téléchargement) de 'requests' et la classe 'Selector' (Parsing) de 'scrapy'
from requests import get
from scrapy import Selector


url = "https://o-t.staffomaticapp.com/locations/26605/reports/applications"
response = get(url)
source = None # Le code source de la page 
if response.status_code == 200 :
    # Si la requete s'est bien passee
    source = response.text

if source :
    # Si le code source existe
    selector = Selector(text=source)
    titles = selector.css("div.id div > class")
    for title in titles:
        level = title.css("span.tocnumber::text").extract_first()
        name = title.css("span.toctext::text").extract_first()
        print(level + " " + name)
