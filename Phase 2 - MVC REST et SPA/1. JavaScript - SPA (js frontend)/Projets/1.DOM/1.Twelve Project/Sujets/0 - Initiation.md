# Projet - Compteur JavaScript
**Besoin** : Créer un compteur de clic en JavaScript.

## Pré-requis
### Le DOM
Selectionner une balise 
```js
const balise = document.querySelector(cssSelector);
```
Modifier le contenu textuel d'une balise
```js
balise.innerText = "Nouveau texte";
```

Réagir à un évenement - *click*
```js
balise.addEventListener("click",onClicSurBalise);
// ou
balise.onclick = onClicSurBalise;

function onClicSurBalise(){ /* Faire quelque chose... */ }
```

## HTML de départ
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compteur JS</title>
</head>
<body>
    <h1>Compteur de clic</h1>
    <button class="btn-counter">+1</button>
    <p>Valeur du compteur : <span class="value-counter">0</span></p>
</body>
<script src="script.js"></script>
</html>
```

*script.js*
```js

```

# Cahier des charges
|Tâches| Description | Contraintes |
|---|---|---|
| Affichage | Integration d'une page HTML qui contient un bouton d'incmentation du compteur et un texte qui affiche la valeur de la variable de compteur.  | 
| Bouton + | Le bouton HTML incremente une variable de compteur.|
| Mise à jour du compteur | Mettre à jour l'affichage du compteur lors ce que la variable de compteur augemente.
