# Projet 8 - Fiche produit

## Le besoin
Créer une carte produit avec un bouton "Ajouter au panier". Un message apparaît indiquant le nombre de produits dans le panier à chaque clic.

![alt text](image-10.png)

## Pré-requis
- L'événement *click*
- Modifier un attribut HTML en JavaScript
```js
const balise = document.querySelector("img");

// Renvoie l'URL de l'image
balise.getAttribute("src")  
    
// Change l'URL de l'image
balise.setAttribute("src", nouvelleUrl);
```

## Cahier des charges
| Tâches | Description | Contraintes |
|---|---|---|
| Intégrer la page HTML/CSS | La page doit contenir une carte produit comprenant : le nom du produit, son prix, une description, des vignettes photos du produit et un bouton "Ajouter au panier" | La carte doit être centrée au milieu de l'écran |
| Vignette du produit | La photo doit changer lorsque l'on clique sur une vignette |  |
| Message d'ajout au panier | Faire apparaître une phrase indiquant le nombre de produits dans le panier lorsque l'utilisateur clique sur le bouton d'ajout au panier | Le message doit afficher le nombre total de produits ajoutés au panier par le client |

