# Projet TaskList - Projet de gestion de tâches
<!-- - TodoList - session, SQL (User||--o{Task)
    - On a besoin de SQL pour stocker les tâches
    - On a besoin de session pour stocker l'utilisateur connecté
    - On a besoin de $_POST pour ajouter une tâche
    - On a besoin de $_GET pour afficher une tâche
    - task-list.php
    - post-task.php
    - get-task.php?id= -->

## Objectif
Développer une application web de gestion de tâches (TaskList) avec des fonctionnalités d'inscription, de connexion et de déconnexion. L'application doit permettre aux utilisateurs de voir leurs tâches personnelles.

## Prérequis
- Serveur PHP : lancer avec `php -S localhost:8000`
- $_SESSION et session_start() pour la gestion des sessions de connexion
- $_POST
- foreach dans un template HTML
- $_GET pour la suppression d'une tâche
- PDO pour la connexion à la base de données SQL
- Modélisation de la relation SQL : un utilisateur possède plusieurs tâches (`User` 1--n `Task`)
- password_hash() et password_verify() pour le chiffrement des mots de passe
- Utilisation de `isset()` pour vérifier les données du formulaire
- Redirection de page avec `header('Location: ...')`
- Utilisation de `require_once` pour inclure des fichiers PHP
- Créer des fonctions pour l'accès CRUD aux tables SQL

## 1. Clonez Template du projet
Je vous ai déjà crée un template de projet avec toutes les pages nécessaires.

Cloner le projet avec les commandes suivantes :
```bash
git clone https://github.com/CHAOUCHI/tasklist-template.git
cd tasklist-template
rm -r .git  # Obligatoire pour écraser le lien avec mon repo
```

## 2. Pushez le projet sur votre propre compte GitHub

```bash
rm -r .git  # Si ce n'est pas déjà fait
git init
gh repo create 
```
> ATTENTION !  REPONDEZ PUSH EXISTING LOCAL REPOSITORY pour push le dossier courant sur votre compte github.

Fait ensuite un premier commit et un push :
```bash
git add .
git commit -m "Initial commit"
git push --set-upstream origin master
```

## Synopsis
L'application TaskList permet aux utilisateurs de s'inscrire, de se connecter et de gérer leurs tâches personnelles. Chaque utilisateur peut ajouter ses propres tâches. Les tâches sont stockées dans une base de données SQL, et les sessions sont utilisées pour maintenir l'utilisateur connecté et ainsi afficher uniquement les tâches qui lui appartiennent.

## Contraintes
- Les mots de passe doivent être chiffrés avec l'algorithme bcrypt.
- Les utilisateurs doivent être authentifiés pour accéder à leurs tâches.
- Les tâches doivent être associées à l'utilisateur qui les a créées.
- Les pages doivent rediriger vers la page de connexion si l'utilisateur n'est pas connecté.
- Les tâches doivent être affichées uniquement pour l'utilisateur connecté.

## Cahier des charges
| Tâches | Description | Contraintes |
|--------|-------------|-------------|
| Page d'inscription | Permettre à un nouvel utilisateur de s'inscrire avec un nom d'utilisateur et un mot de passe | -Créer un nouvel utilisateur dans la table User avec le mot de passe chiffré avec l'algo bcrypt<br>-Redirection vers la page de connexion|
| Page de connexion | Permettre à un utilisateur existant de se connecter avec son nom d'utilisateur et son mot de passe | -Vérifier les identifiants dans la table User<br>-Redirection vers la page d'accueil en cas de succès, sinon afficher un message d'erreur<br>-Utiliser `session_start()` pour démarrer la session et stocker l'id SQL de l'utilisateur dans la session|
| Page de déconnexion | Permettre à l'utilisateur de se déconnecter | Vider la session|
| Page d'accueil | Afficher les tâches de l'utilisateur connecté uniquement | Redirection vers la page de connexion si l'utilisateur n'est pas connecté|
| Ajouter une tâche | Permettre à l'utilisateur d'ajouter une nouvelle tâche via un formulaire POST | À la création, une tâche doit être associée à un utilisateur |
|  Supprimer une tâche | Permettre à l'utilisateur de supprimer une tâche | Supprimer la tâche de la base de données en utilisant son id passé en paramètre GET|
| [BONUS] Page de tâche détaillée | Afficher les détails d'une tâche spécifique | Utiliser l'id de la tâche passé en paramètre GET pour récupérer les informations dans la base de données |
| [BONUS] Valider une tâche | Permettre à l'utilisateur de marquer une tâche comme terminée | Mettre à jour le statut de la tâche dans la base de données | 
