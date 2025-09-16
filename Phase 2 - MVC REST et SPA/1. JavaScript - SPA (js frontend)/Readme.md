# Plan d'action

## 1. Cours/Getting started
Consulter le cours Getting started pour apprendre les bases du JS.

## 2. Cours/DOM
Consulter le cours DOM pour apprendre à manipuler le DOM en JS.
C'est à dire :
- Sélectionner des éléments HTML (balises)
- Modifier le contenu des éléments HTML (texte, balises enfants)
- Modifier les attributs des éléments HTML (src, href, class, id, data-*)
- Gérer les évènements (click, scroll, ...)

## 3. Projet/Twelve project
Consulter le sujet du projet Twelve project dans le dossier `Sujet` et réaliser les tous dans l'ordre.

Voyez la démo sur `localhost:9090` avec la commande suivante :

```bash
docker run -p 9090:80 --name twelve-project chaouchi/twelve-prod
```

## 4. Projet/Todolist
Le projet todolist est un projet pour apprendre à gérer un formulaire en JS et l'enregistrement d'un tableau d'objet dans le localStorage du navigateur. Du stockage coté client donc (pas besoin de serveur MySQL toutes les tâches sont stockés dans le navigateur).

## 5. Cours/Fetch
Consulter le cours Fetch pour apprendre à faire des requêtes HTTP en JS. Vous pourrez ainsi concevoir votre front-end de façon autonome du back-end et utiliser les serveur web public (API REST publique) pour vos projets.


## 6. Projet/Pokedex
Un projet pour apprendre à faire des requêtes HTTP en JS avec l'API REST https://pokebuildapi.fr/api/v1.

## 7. Projet/Meteo
Un projet un peu plus complexe qui utilise la geolocation pour afficher la météo en fonction de la position actuelle de l'utilisateur. 

- Récupérer la position de l'utilisateur avec l'API Geolocation
- Faire une requête HTTP avec Fetch à l'API Open-Meteo pour récupérer la météo en fonction de la position : https://open-meteo.com/en/docs/historical-forecast-api
- Afficher la météo dans le navigateur.
- Obtenez la position d'une ville avec l'API https://open-meteo.com/en/docs/geocoding-api

