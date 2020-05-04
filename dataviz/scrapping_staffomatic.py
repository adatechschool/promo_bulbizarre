import requests



token = 'https://o-t.staffomaticapp.com/locations/26605'

def get_pages(token, nb):
    pages = []
    for i in range(1,nb+1):
        j = token + str(i)
        pages.append(j)
    return pages
pages = get_pages(token,295)

for i in pages:
   response = requests.get(i)
