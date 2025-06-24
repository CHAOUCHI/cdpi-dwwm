# Apprendre le PHP
**PHP (PHP : Hypertext Preprocessor) est un langage de programmation de scripting généraliste**. Sa principale vocation est l'envoi de réponse HTTP que se soit une page HTML générée en PHP ou des données JSON. 

Le PHP permet l'utilisation des principes de la **POO** (héritage, polymorphisme, interface) mais n'oblige pas son utilisation comme Java ou dans une moindre mesure le JavaScript. **Comme tout langage de scripting PHP néccessite un interpréteur pour être executé.**

# Documentations 
**Le manuel du langage PHP** est disponible sur le site officel du langage : https://www.php.net/manual/fr/index.php

**La réference des fonctions et objets** du langage sont disponible via la barre de recherche du site officel : https://www.php.net/docs.php

**La réference de la syntaxe du langage** est dispoible ici : https://www.php.net/manual/fr/langref.php

Comme d'habitude **W3schools** est également là : https://www.w3schools.com/php/php_syntax.asp

# Les possibilités du PHP
PHP est le premier langage de programmation du web et comme son nom l'indique PHP est un *Préprocesseur d'Hypertext*.  Concrètement, un hypertext est un fichier HTML et PHP permet de d'exectuer un algorithme avant l'envoi de l'hypertext au client pour envoyer du contenu dynamique.
>Aujourd'hui on n'envoi pas exclusivement de l'hypertext (html) mais également du JSON ou du XML.

Avec PHP vous pourrez entre autre : 
- **Créer un site web dynamique** sans l'utilisation de JavaScript.
- **Accéder à une base de données SQL**.
- Créer un **système d'autentification**.
- **Concevoir une API REST** accéssible depuis un front-end, par exemple en JavaScript via la méthode `fetch()` ou depuis n'importe quel client HTTP.
- Récupérer le contenu des champs d'un formulaire HTML.
- Gérer les **cookies**


# Installation de l'intérpreteur PHP 
L'intérpreteur php est le programme qui va executer nos scripts php.

## Linux
```linux
apt install php
le/dossier/de/mon/serveur$ php -S localhost:8080
```
## Mac
```
brew install php
le/dossier/de/mon/serveur$ php -S localhost:8080
```
# Lancez un serveur web compatible avec PHP
Une fois l'intérpréteur installé il faut lancer un serveur http local grâce à une simple commande disponible avec l'intérpréteur php. A la différence de serveurs HTTP lancés avec python, ce serveur local va executer les scripts php si un client demande un fichier `".php"`.

Rendez vous dans le dossier dans lequel vous souhaitez mettre vos futurs sites web PHP et ouvrez une console à cet endroit.

Puis écrivez ceci pour lancer le serveur en `localhost` sur le port `8080`.
```
php -S localhost:8080
```
> Si vous souhaitez que votre serveur soit accéssible à tout les PC du réseau local de chez vous : remplacez `localhost` par l'adresse ipv4 de votre pc.
