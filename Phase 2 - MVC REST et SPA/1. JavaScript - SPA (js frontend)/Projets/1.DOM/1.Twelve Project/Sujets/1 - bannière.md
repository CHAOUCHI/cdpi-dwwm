# Projet 1 - Bannière

**Besoin** : Créer une bannière de cookies qui disparaît quand l'utilisateur a accepté les cookies.

![alt text](image.png)

# Pré-requis

## DOM

- Récupérer une balise HTML en JS
- Réagir à un événement *click*
- Modifier les classes CSS d'une balise HTML en JS

```js
const balise = document.querySelector(cssSelector);
balise.classList.add(className);    // Ajouter
balise.classList.remove(className); // Supprimer
balise.classList.toggle(className); // Inverser la présence
```

# Cahier des charges

| Tâches | Description | Contraintes |
|---|---|---|
| Intégration HTML CSS | Intégration du HTML et CSS pour afficher une page placeholder avec une bannière en bas de page qui demande d'accepter les cookies. | Peu importe la longueur de la page, la bannière doit rester collée en bas de page par-dessus le contenu. |
| Clic sur le bouton accepter | Lors du clic sur le bouton accepter, la bannière disparaît. |
| Animation CSS | Une animation CSS fade out se produit sur la bannière lorsque l'on accepte les cookies. |
