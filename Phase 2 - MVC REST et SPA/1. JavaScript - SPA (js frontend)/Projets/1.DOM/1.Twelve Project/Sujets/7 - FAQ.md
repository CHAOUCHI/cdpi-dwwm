# Projet 7 - FAQ

## Le Besoin
Créer un élément de type FAQ qui cache du contenu par tiroir.

![alt text](image-9.png)

## Pré-requis
- L'événement *click*
- Modifier les classes CSS dynamiquement
- Sélectionner des balises sœurs et enfants

```html
<div>
    <p>1er élément</p>
    <p>2ème élément</p>
    <p>3ème élément</p>
    <p>dernier élément</p>
</div>
```

```js
const conteneur = document.querySelector("div");

// Récupérer le premier élément enfant
const premier = conteneur.firstElementChild;
// Récupérer le dernier élément enfant
const dernier = conteneur.lastElementChild;

// Récupérer l'élément suivant au premier
const deuxieme = premier.nextElementSibling;
// Récupérer l'élément précédent au dernier
const troisieme = dernier.previousElementSibling;
```

## Cahier des charges
| Tâches | Description | Contraintes |
|---|---|---|
| Intégrer trois questions FAQ composées de la question et d'un texte de réponse | Créer une structure FAQ avec trois questions et leurs réponses | Respecter la structure HTML et l'interactivité demandée |
| Faire apparaître la réponse au clic de la question correspondante | Afficher ou masquer la réponse associée à chaque question lors d'un clic | Utiliser les événements et la manipulation du DOM |

