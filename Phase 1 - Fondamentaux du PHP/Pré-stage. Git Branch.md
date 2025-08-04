# Cahier des charges : Application de gestion de recettes

## Annexe :
- https://github.com/CHAOUCHI/parcours_dwwm/blob/master/Git/Mettre%20un%20projet%20sur%20GitHub.md#mettre-en-projet-sur-github

- La doc de git sur le git issue : https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-a-branch-for-an-issue

## 1. Contexte et objectif du projet

L'objectif de ce projet est de développer une application web de gestion de recettes de cuisine. 

Les utilisateurs pourront : 
- consulter, créer, modifier et supprimer des recettes.

Vous apprendrez à collaborer en utilisant les branches Git.

Chaque personne du groupe s'occupe d'un ensemble de fonctionnalités, qu'elle développera sur sa propre branche Git avant de proposer une fusion (merge) dans la branche principale.

Cette fusion s'appelle une Pull Request (ou Merge Request).

## 2. Fonctionnalités de l'application

L'application doit permettre la gestion de deux objets métiers : les Utilisateurs et les Recettes.

Voici les différentes parties de l'application, répartissez le travail entre vous : **chaque personne s'occupe d'une partie**.

### 2.1. Gestion des utilisateurs CRUD

Le fichier `crud_users.php` regroupe toutes les fonctions d'accès à la base de données pour la table User.

| Fonctionnalité | Description |
|----------------|-------------|
| **Création (Create)** | Permettre l'inscription d'un nouvel utilisateur (nom d'utilisateur, mot de passe chiffré). |
| **Lecture (Read)** | Permettre à un utilisateur de se connecter (authentification simple) et de consulter ses propres informations. |
| **Mise à jour (Update)** | Permettre à un utilisateur de modifier ses informations (par exemple, son mot de passe). |
| **Suppression (Delete)** | Permettre à un utilisateur de supprimer son propre compte. |

### 2.2. Gestion des recettes CRUD

Le fichier `crud_recettes.php` regroupe toutes les fonctions d'accès à la base de données pour la table Recette.

| Fonctionnalité | Description | Accès |
|----------------|-------------|-------|
| **Création (Create)** | Ajouter une nouvelle recette avec un titre, une description pour les étapes de préparation et le nom de l'auteur. | Utilisateur connecté |
| **Lecture (Read)** | Récupérer la liste de toutes les recettes et les détails de chaque recette. | Tous les utilisateurs (connectés ou non) |
| **Mise à jour (Update)** | Modifier une recette existante. | Auteur de la recette uniquement (il faut demander l'id en paramètre de la fonction donc) |
| **Suppression (Delete)** | Supprimer une recette existante. | Auteur de la recette uniquement |

### 2.3. Gestion des pages (interface visuelle)

Les différentes pages de l'application, vous pouvez diviser le travail entre plusieurs personnes : **attention, personne ne travaille sur la même page en même temps !**

| Page / Fonctionnalité                        | Description                                                                                       | Accès                                 |
|----------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------|
| **Page d'accueil**                           | Affiche la liste de toutes les recettes disponibles.                                              | Tous les utilisateurs                 |
| **Page de détail d'une recette**             | Affiche le titre, les ingrédients, les étapes de préparation et l'auteur d'une recette sélectionnée.| Tous les utilisateurs                 |
| **Formulaire de création/modification de recette** | Permet d'ajouter ou de modifier une recette.                                                      | Utilisateurs connectés uniquement     |
| **Formulaire de connexion/inscription**      | Permet de se connecter ou de créer un nouveau compte utilisateur.                                 | Tous les utilisateurs                 |
| **Barre de navigation**                      | Menu pour accéder aux différentes pages et se connecter/déconnecter.                              | Tous les utilisateurs                 |

## 3. Architecture logicielle

 * Base de données : Une base de données relationnelle MySQL.

 * Structure des fichiers :

  * index.php : Le point d'entrée de l'application.

  * crud_users.php : Un fichier PHP regroupant toutes les fonctions d'accès à la base de données pour l'objet Utilisateur.

  * crud_recettes.php : Un fichier PHP regroupant toutes les fonctions d'accès à la base de données pour l'objet Recette.

  * templates/ : Un dossier contenant les fichiers HTML/PHP pour les différentes vues (pages).

  * styles/ : Un dossier pour les fichiers CSS.

## 4. Workflow Git

Pour chaque fonctionnalité, vous devrez toujours suivre la même procédure : 

 1. **Créer une issue Git** : Avant de commencer à travailler, créez une "issue" sur le dépôt GitHub pour décrire la fonctionnalité (par exemple, "Créer la fonction de création de recette CRUD").

 2. **Créer une branche à partir d'une issue** : À partir de l'issue créée, créez une nouvelle branche avec un nom descriptif (par exemple, feature/add-recipe).

 3. **Développer et committer** : Développez la fonctionnalité sur votre branche. Chaque ajout significatif doit être accompagné d'un commit avec un message clair (par exemple, "Ajout de la fonction create_recipe()").

 4. **Pousser la branche** : Une fois la fonctionnalité terminée, faites un git push de votre branche vers le dépôt distant.

 5. **Créer une Pull Request** : L'étudiant ouvre une Pull Request depuis GitHub pour demander la fusion de sa branche dans la branche principale.

 6. **Revue de code et fusion** : les autres membres du groupe examinent ensemble le code et, si tout est conforme, valident la Pull Request pour la fusionner à la branche main.

 **C'est ainsi qu'on travaille en groupe avec GitHub !**
