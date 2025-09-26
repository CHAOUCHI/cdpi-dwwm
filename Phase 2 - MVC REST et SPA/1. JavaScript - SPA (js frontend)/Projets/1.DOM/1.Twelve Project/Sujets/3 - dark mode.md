# Projet 3 - Dark Mode

## Le besoin
Concevoir un bouton qui change l'apparence visuelle du site du mode clair (light mode) au mode sombre (dark mode) et inversement.

## Astuce
Le plus simple est d'appliquer une classe CSS sur tous les éléments souhaités lorsque le site est en dark mode, ou de la retirer si le site est en light mode. L'utilisation d'une boucle `for` est conseillée.

![alt text](image-2.png)

![alt text](image-3.png)

# Pré-requis

## Le DOM
Récupérer un tableau de toutes les balises HTML qui possèdent un certain sélecteur CSS (comme une classe, par exemple).
```js
const tableauDeBalises = document.querySelectorAll(cssSelector);
tableauDeBalises.forEach(function(balise) {
    /* Faire quelque chose avec les balises */
});
```

# Cahier des charges

| Tâches                | Description                                                                                  | Contraintes                                                                                      |
|-----------------------|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Affichage HTML/CSS    | Intégrer une page HTML/CSS qui contient un titre, un bouton dark mode et un fond de couleur claire | Lors de l'activation du dark mode, le fond de couleur change et la couleur du texte devient blanche pour être lisible |
| Icône like            | L'icône like change d'apparence au clic                                                      |                                                                                                  |
| Bouton "Abonnez-vous" | Change de couleur au clic et le texte passe de "Abonnez-vous" à "Abonné"                      |                                                                                                  |