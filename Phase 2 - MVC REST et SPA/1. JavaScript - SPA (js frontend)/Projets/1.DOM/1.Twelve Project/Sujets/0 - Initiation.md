# Projet - Compteur JavaScript
**Besoin** : Créer un compteur de clics en JavaScript.

## Pré-requis
### Le DOM
Sélectionner une balise  
```js
const balise = document.querySelector(cssSelector);
```
Modifier le contenu textuel d'une balise  
```js
balise.innerText = "Nouveau texte";
```

Réagir à un événement - *click*  
```js
balise.addEventListener("click", onClicSurBalise);
// ou
balise.onclick = onClicSurBalise;

function onClicSurBalise() { /* Faire quelque chose... */ }
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
    <h1>Compteur de clics</h1>
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
| Tâches | Description | Contraintes |
|---|---|---|
| Affichage | Intégration d'une page HTML qui contient un bouton d'incrémentation du compteur et un texte qui affiche la valeur de la variable compteur. | |
| Bouton + | Le bouton HTML incrémente une variable compteur. | |
| Mise à jour du compteur | Mettre à jour l'affichage du compteur lorsque la variable compteur augmente. | |

