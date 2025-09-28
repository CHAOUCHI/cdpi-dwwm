# Projet 3 - Dark Mode
## Le Besoin
Concevoir un bouton qui change l'apparence visuel du site de light-mode à dark-mode et inversement. 

## Astuce
Le plus simple est d'appliquer une classe css sur tout les elements voulu lorsque le site est en darkmode ou de la retirer si le site est en light mode. L'utilisation d'une boucle for est conseillé.

# Pré-requis
##  Le DOM
Récupérer un tableau de toutes les balises HTML qui possède un certain selecteur CSS( comme une classe par exemple).
```js
const tableauDeBalise = document.querySelectorAll(cssSelector);
tableauDeBalise.forEach(function(balise){
    /* Faire quelque chose avec les balises */
});
```

> N'oubliez pas que `cssSelector` est une chaine de caractère qui représente un selecteur CSS valide.
> Par exemple pour selectionner toutes les balises qui ont la classe `darkmode` il faut écrire `.darkmode` **AVEC LE POINT AU DEBUT !**

## Le selecteur universelle `*`

Vous pouvez selectionner toutes les balises HTML d'une page avec le selecteur universelle `*` en CSS.

```js
const toutesLesBalises = document.querySelectorAll('*');
toutesLesBalises.forEach(function(balise){
    /* Faire quelque chose avec les balises */
});
```

# Cahier des charges
|Tâches| Description | Contraintes |
|---|---|---|
|Affichage HTML CSS| Intégrer une page HTML CSS qui contient un titre un bouton darkmode et un fond de couleur claire | Lors de l'activation du darkmode le fond de couleur change et la couleur du texte deviens blanche pour etre lisible |  
| Il faut que le darkmode permettent de rajouter facilement des éléments HTML dans la page sans avoir à modifier le code JS | Le code JS doit être générique et ne pas cibler des éléments HTML en particulier |

