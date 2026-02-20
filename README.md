# Welcome to My First Backend
***

## Task
What is the problem? And where is the challenge?
Je dois réaliser une app backend, qui va permettre à l'utilisateur de réaliser différentes actions.
## Description
How have you solved the problem?
Il va y avoir plusieurs chemin d'accès ou route vers les demandes de l'utilisateur. Chacune des routes se porte sur Frank Sinatra, sauf deux qui seront basé sur l'accès public ou protégé.
## Installation
How to install your project? npm install? make? make re?
J'ai créé un fichier : app.js grâce à doctype. Il s'utilise avec node.js.
## Usage
How does it work?
```
Le fichier se sépare en trois grandes parties avec la première sur l'initialisation, la deuxième sur les différentes routes qui porte sur Frank Sinatra,
et la dernière qui va gérer la route /protected.

Dans la première partie j'importe la librairie ou framework express puis je défini le port et enfin je faire en sorte que le serveur "écoute" lorsque je lance dans 
le teminal la requête : node app.js.

Dans la seconde partie je vais gérer les différentes informations sur Frank Sinatra grâce à plusieurs routes, comme demandé dans la consigne. Les routes sont pour 
sa date d'anniversaire, le lieu de naissance, les différentes femmes qu'il a eu, une image de la personne et enfin la dernière qui va donner un song qu'il a rélisé.
À chaque fois je répète la même méthode qui est de vérifier si une requête HTTP GET à été réalisé et de savoir laquelle. Ensuite j'affiche dans la console le chemin
de la requête et je renvoi la réponse qui est attendu. Pour le song random je vais utilisé deux fonction qui vont e permettre d'avoir une valeur random et grâce à elle 
je vais chercher la chanson associé à l'indice de ma liste de 20 chansons.

Dans la dernière partie je vais vérifier si l'utilise possède la bon username et password afin d'accèder à la version "protégée" et de s'authentifier. Pour cela je récupère l'authorisation de
la requête envoyé par le client. Je convertis l'encodage en base 64 et je le remet en string. Je vais pouvoir extraire le username et password et il me restera juste à vérifier si
c'est ce que l'on attend ou non. Si oui l'utilisateur pourra être authentifier, si non la réponse sera "non autorisé". 
Pour la partie "public" je fais exactement la même chose que pour les infos sur Frank Sinatra.
```

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
