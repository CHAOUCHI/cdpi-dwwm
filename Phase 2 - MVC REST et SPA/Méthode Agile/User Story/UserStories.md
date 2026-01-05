# User Stories

## En résumé

Les User Stories respectent toutes la structure suivante : 

> "En tant que [rôle d'utilisateur], je veux [une action] afin de [un bénéfice/une valeur]."

Par exemple :
> "En tant qu'utilisateur, je veux pouvoir m'inscrire afin d'accéder aux fonctionnalités de l'application."

## Qu'est-ce qu'une User Story ?
Une User Story est une simple phrase qui décrit une fonctionnalité du point de vue de l'utilisateur final. Elle doit être concise, claire et axée sur les besoins de l'utilisateur.

- "En tant qu'utilisateur, je veux pouvoir m'inscrire afin d'accéder aux fonctionnalités de l'application."
- "En tant qu'utilisateur, je veux pouvoir retourner un livre afin de le rendre à la médiathèque."
## Comment écrire des User Stories ?

## Epic (issues) et User Stories (sub-issues)
Les User Stories qui possèdent un thème commun sont rangées dans des Epics : concrètement un Epic est une issue comme les autres à partir de laquelle on peut créer des sub-issues : les User Stories.

**Par exemple** pour une application de type médiathèque :
- ***Epic #1*** (issue) : Gestion de compte utilisateur
    - *User Story 1* (sub-issue) : En tant qu'utilisateur, je veux pouvoir m'inscrire afin d'accéder aux fonctionnalités de l'application.
    - *User Story 2* (sub-issue) : En tant qu'utilisateur, je veux pouvoir me connecter afin de gérer mon compte.
    - *User Story 3* (sub-issue) : En tant qu'administrateur, je veux pouvoir gérer les comptes utilisateurs afin de maintenir la sécurité de l'application.

- ***Epic #2*** (issue) : Gestion des emprunts
    - *User Story 1* (sub-issue) : En tant qu'utilisateur, je veux pouvoir emprunter un livre afin de le lire chez moi.
    - *User Story 2* (sub-issue) : En tant qu'utilisateur, je veux pouvoir retourner un livre afin de le rendre à la médiathèque.
    - *User Story 3* (sub-issue) : En tant qu'administrateur, je veux pouvoir suivre les emprunts afin de gérer les stocks de livres.

- ***Epic #3*** (issue) : Gestion des stocks de documents
        - *User Story 1* (sub-issue) : "En tant que gérant, je veux définir un seuil d'alerte critique afin de ne jamais être en rupture de stock sur les documents phares."
        - *User Story 2* (sub-issue) : "En tant que gérant, je veux scanner un code-barres pour ajouter un document en stock afin de gagner du temps lors des livraisons."
                - Critère : Le document est ajouté au stock avec les bonnes informations (nom, quantité, prix).
                - Critère : Notification visuelle en rouge quand Stock<Seuil.

## Structure d'une User Story
### Syntaxe d'une user story
Comme vous le voyez dans les exemples plus haut, ces User Stories respectent toutes la structure suivante : *"En tant que [rôle d'utilisateur], je veux [une action] afin de [un bénéfice/une valeur]."*
> "As a [role of user], I want [an action] so that [a benefit/a value]".

### Critère d'acceptation d'une user story
- Chaque User Story doit être accompagnée de critères d'acceptation, c'est une liste des conditions à remplir pour que la User Story soit considérée comme terminée.

> **Point important** : Une User Story ne doit pas décrire une tâche technique ou une solution spécifique, mais plutôt les désirs de l'utilisateur. Comme vous pouvez le voir dans les exemples ci-dessus, les descriptions peuvent paraître vagues mais c'est voulu pour laisser la liberté aux développeurs de trouver la meilleure solution technique pour répondre au besoin.

## Template d'une User Story
À chaque User Story appliquez toujours le template suivant :

*"En tant que [rôle d'utilisateur], je veux [une action] afin de [un bénéfice/une valeur]."*

Une User Story doit contenir les éléments suivants :

- **En tant que** : [type d'utilisateur] (ex : utilisateur enregistré, administrateur, visiteur).
- **Je veux** : [action ou fonctionnalité] (ex : pouvoir me connecter, ajouter un produit au panier).
- **Afin de** : [bénéfice ou valeur] (ex : accéder à mon compte, finaliser un achat).
- **Critères d'acceptation** :
    - [Critère 1] (ex : L'utilisateur peut se connecter avec un email et un mot de passe valides).
    - [Critère 2] (ex : Un message d'erreur s'affiche en cas de mot de passe incorrect).
- **Priorité** : [Haute, Moyenne, Basse].



