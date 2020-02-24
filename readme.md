![Bulbizarre](https://www.eternia-dimension.com/wiki/images/8/8c/Bulbizarre_Artwork.png "Bulbizarre")

# A quoi sert ce repertoire de travail

Ce dossier regroupe tous les projets sur lesquels la promo Bulbizarre (2019 - 2020) a travaillé.
Chaque dossier de ce projet représente une séquence de l'année.
Chaque sous-dossier de la séquence représente le ou les projets d'une équipe.

# Comment participer à ce dossier ?

## Installer Git

Pour pouvoir utiliser Git, il y a besoin de l'installer.
En fonction du système sur lequel voe machine est, l'installation sera différente. Voici un lien qui peut vous aider: https://gist.github.com/dgageot/656299

Si vous etes sous OSX(mac), voici une manière parmis d'autres de faire:
- Installez [Brew](https://brew.sh/index_fr) si vous ne l'avez pas
- Ouvrez un terminal puis lancez la commande d'installation suivante qui permet d'installer le paquet Git:
```
brew install git
```

## Récupérer le dossier sur votre machine (en local)

Ouvrez un terminal, allez dans le dossier qui correspond à votre espace de travail favori pour Ada Tech School et clonez ce dossier:
```
git clone git@github.com:adatechschool/promo_bulbizarre.git
```

Le dossier sera installé sur votre machine suite à cette commande :tada:

## Récupérer les modifications sur le projet en ligne

Des fois, on veut pouvoir synchroniser notre version locale du projet avec la version en ligne. Pour cela, Git propose une [méthode pour récupérer les modifications ajoutées au repertoire distant](https://git-scm.com/docs/git-pull) (github dans notre cas):
```
git pull
```

## Mettre à jour le dossier avec vos modifications

Les modifications que vous voulez apporter peuvent etre l'ajout d'un nouveau projet ou la modification d'un autre. Dans tous les cas, il va falloir préciser à Git les modifications que vous voulez envoyer. Pour cela, vous pouvez utiliser la [commande suivante](https://git-scm.com/docs/git-add/fr):
```
git add -p
```

L'option `-p` permet de choisir les modifications en cours qu'on veut ajouter au futur commit.

Après avoir précisé les modification à ajouter à Git, créons le [commit](https://git-scm.com/docs/git-commit/fr):
```
git commit -m 'Nom du commit'
```

Et enfin, [envoyons ce commit à Github](https://git-scm.com/docs/git-push), pour que toutes les personnes associées au projet puissent y accéder:
```
git push
```
