# Projet 6 - Toast

## Le Besoin
Faire apparaître une notification de type toast lors du clic sur le bouton "Enregistrer".

![alt text](image-8.png)

## Pré-requis

### Le DOM

#### Créer un élément HTML dynamiquement
Cela se passe en 3 étapes : la création, la personnalisation et l'affichage.

Exemple :
```js
const section = document.querySelector(".hero-section");

// Création de la balise
const nouvelleBalise = document.createElement("p");

// Personnalisation de la balise
nouvelleBalise.classList.add("text_content");
nouvelleBalise.innerText = "Je suis un paragraphe créé dynamiquement en JS !";

// Affichage de la nouvelle balise en tant qu'enfant de la section.
section.appendChild(nouvelleBalise);

// Destruction d'une balise
nouvelleBalise.remove();
```

# Cahier des charges

| Tâches | Description | Contraintes |
|---|---|---|
| Intégrer la page HTML | Intégrer une page HTML qui contient un texte "Projet Toast" et un bouton "Enregistrer" | Les éléments doivent être centrés au milieu de l'écran. |
| Apparition d'un toast | Faire apparaître un toast disant "Le fichier a bien été enregistré" lors du clic sur le bouton "Enregistrer" | Le toast apparaît en dessous du bouton "Enregistrer" sans perturber l'affichage de la page. |
| Disparition du toast | Le toast disparaît au bout de quelques secondes ou lorsque l'on clique dessus. | La disparition se fait avec une animation fade-out. |