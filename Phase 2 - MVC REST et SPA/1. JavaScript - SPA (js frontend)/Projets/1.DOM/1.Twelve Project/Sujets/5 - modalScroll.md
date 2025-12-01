# Projet 5 - Modal Scroll

## Le Besoin

Faire apparaître une fenêtre pop-up lorsque l'utilisateur a suffisamment scrollé.  
Par "suffisamment", on entend lorsque l'utilisateur a atteint une certaine portion de la page.

![alt text](image-6.png)

## Pré-requis

L'événement "*scroll*" et la position d'une balise dans le document.

Écouter l'événement scroll qui s'active quand l'utilisateur fait défiler la page :
```js
window.addEventListener("scroll", onScrollFunction);
```

Récupérer la position en pixels d'une balise sur l'axe Y :
```js
balise.offsetTop        // position du border-top d'une balise
```

Récupérer la position du viewport, c'est-à-dire la position du haut de la fenêtre du navigateur en pixels :
```js
document.documentElement.scrollTop;  // => Number
```
Pour faire simple, scrollTop renvoie la distance entre le border-top de la balise `<html>` et le haut de la portion de page actuellement visible.

> A vous de faire une petite soustraction pour savoir si l'utilisateur a atteint la section 3. ;)

# Cahier des charges

| Tâches | Description | Contraintes |
|---|---|---|
| Intégrer les sections HTML | Intégrer une page qui contient 4 ou 5 sections de la hauteur d'un écran, pour que l'utilisateur ait suffisamment de place pour scroller. | |
| Pop-up | Intégrer un pop-up qui est fixé au centre de l'écran et contient un texte avec un bouton croix. | Par défaut, le pop-up est caché et l'on peut le fermer avec la croix. |
| Apparition du pop-up | Faire apparaître le pop-up quand l'utilisateur atteint la section 3 en scrollant. | |
