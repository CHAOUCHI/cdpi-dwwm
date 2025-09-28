# Projet 3 - Dark Mode

## Le Besoin
Concevoir un bouton qui change l'apparence visuelle du site du mode clair (light mode) au mode sombre (dark mode) et inversement.

## Astuce
Le plus simple est d'appliquer une classe CSS sur tous les éléments voulus lorsque le site est en dark mode, ou de la retirer si le site est en light mode. L'utilisation d'une boucle `forEach` est conseillée.

# Pré-requis

## Le DOM
Récupérer un tableau de toutes les balises HTML qui possèdent un certain sélecteur CSS (comme une classe par exemple).
```js
const tableauDeBalises = document.querySelectorAll(cssSelector);
tableauDeBalises.forEach(function(balise){
    /* Faire quelque chose avec les balises */
});
```

> N'oubliez pas que `cssSelector` est une chaîne de caractères qui représente un sélecteur CSS valide.
> Par exemple, pour sélectionner toutes les balises qui ont la classe `darkmode`, il faut écrire `.darkmode` **AVEC LE POINT AU DÉBUT !**

## Le sélecteur universel `*`

Vous pouvez sélectionner toutes les balises HTML d'une page avec le sélecteur universel `*` en CSS.

```js
const toutesLesBalises = document.querySelectorAll('*');
toutesLesBalises.forEach(function(balise){
    /* Faire quelque chose avec les balises */
});
```

# Cahier des charges

| Tâches | Description | Contraintes |
|---|---|---|
| Affichage HTML CSS | Intégrer une page HTML/CSS qui contient un titre, un bouton dark mode et un fond de couleur claire | Lors de l'activation du dark mode, le fond de couleur change et la couleur du texte devient blanche pour être lisible |
| Généricité | Il faut que le dark mode permette de rajouter facilement des éléments HTML dans la page sans avoir à modifier le code JS | Le code JS doit être générique et ne pas cibler des éléments HTML en particulier |

