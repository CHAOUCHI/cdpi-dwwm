# Projet MiniInsta

## Objectif
Développer une application web simple permettant aux utilisateurs de publier et de consulter des photos. Toutes les photos sont visibles par l'ensemble des utilisateurs.

## Pré-requis
- Serveur PHP : lancer avec `php -S localhost:8000`
- Formulaire HTML
    - `multipart/form-data`
    - Utilisation de `isset()`
    - Accès à `$_POST`
    - Gestion des fichiers avec `move_uploaded_file()` et `$_FILES`
- Redirection de page
- Lecture de dossier via `readdir()`
- Manipulation de tableaux PHP
- Boucle `foreach` dans un template HTML
- Clean Code : création de fonctions
    - pour encapsuler la logique de lecture de dossier

## Synopsis
L'application est un mini Instagram développé en PHP. Les utilisateurs peuvent publier des photos, qui sont ensuite affichées les unes sous les autres pour tous les visiteurs.

L'application adopte une approche mobile-first, optimisée pour une utilisation sur téléphone mobile, tout en restant accessible sur ordinateur.
La page d'accueil présente l'ensemble des photos publiées par les utilisateurs.

> Chaque photo est affichée seule, sans informations supplémentaires, afin de conserver la simplicité du projet, en l'absence de base de données SQL.

## Contraintes
Les fichiers uploadés doivent respecter le format de nommage suivant : `date-auteur-filename.extension`.  
Exemple : *20250601144419-pierre-chat.png* pour une photo de chat postée par Pierre le 01/06/2025 à 14h44m19s.
> Cela permet de démontrer la capacité à traiter à la fois les champs textuels et binaires d'un formulaire HTML.

## Cahier des charges
| Tâches | Description | Contraintes |
|--------|-------------|-------------|
| Page d'accueil | Afficher les photos publiées par les utilisateurs | Utiliser `readdir()` pour lire le dossier des photos et une boucle `foreach` pour l'affichage |
| Upload de photos | Permettre aux utilisateurs de publier des photos via un formulaire comportant deux champs : `auteur` et `fichier` | Utiliser un formulaire HTML de type `multipart/form-data` pour envoyer les photos à un script serveur |
| Convention de nommage des fichiers uploadés | Les fichiers doivent être nommés selon le format `date-auteur-filename.extension` | Exemple : *20250601144419-pierre-chat.png* pour une photo de chat postée par Pierre le 01/06/2025 à 14h44m19s |

