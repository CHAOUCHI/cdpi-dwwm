# Exercices TypeScript – Attributs et Méthodes Statiques

Les **membres statiques** d'une classe appartiennent à la classe elle-même et non à ses instances.  
Ils se manipulent directement via le nom de la classe, sans créer d'objet.

Exemple :
```ts
class Exemple {
  static compteur = 0;

  static afficherCompteur() {
    console.log(Exemple.compteur);
  }
}

Exemple.compteur++;
Exemple.compteur++;
Exemple.afficherCompteur(); // Affiche 2
```
On ne fait **pas** : `this.compteur` dans les instances, mais bien `Exemple.compteur`.



##  Exercice 1 – Attribut statique simple

Crée une classe `Counter` avec un **attribut statique** `count` initialisé à `0`.  
Ajoute une méthode statique `showCount()` qui affiche la valeur actuelle de `count`.  
Teste l’appel sans créer d’instance.



##  Exercice 2 – Incrémenter un compteur statique

Modifie la classe `Counter` pour ajouter une méthode statique `increment()`  
qui augmente `count` de `1`.  
Affiche la valeur après plusieurs appels.



##  Exercice 3 – Compteur d’instances

Crée une classe `User` avec un **attribut statique** `numberOfUsers`.  
Chaque fois qu’un nouvel utilisateur est créé (dans le constructeur), incrémente cette valeur.  
Ajoute une méthode statique `showNumberOfUsers()` pour l’afficher.



##  Exercice 4 – Conversion avec méthode statique

Crée une classe `Converter` sans attributs d’instance.  
Ajoute une **méthode statique** `kmToMiles(km: number)` qui renvoie la valeur convertie.  
Fais la même chose avec `milesToKm(miles: number)`.



##  Exercice 5 – Validation de données

Crée une classe `Validator` avec une méthode statique `isEmail(email: string)`  
qui renvoie `true` si l’adresse contient un `@`, sinon `false`.  
Teste la méthode sans créer d’objet.



##  Exercice 6 – Calculs mathématiques

Crée une classe `MathTool` avec :
- une méthode statique `square(n: number)` qui retourne le carré du nombre,
- une méthode statique `cube(n: number)` qui retourne le cube du nombre.

Teste ces méthodes directement via le nom de la classe.



##  Exercice 7 – Gestion d’un identifiant auto-incrémenté

Crée une classe `Product` avec :
- un attribut d’instance `id`,
- un attribut **statique** `nextId` initialisé à `1`.

Dans le constructeur, affecte à `id` la valeur de `nextId` puis incrémente `nextId`.  
Chaque nouvelle instance doit avoir un identifiant unique.



##  Exercice 8 – Registre global

Crée une classe `Registry` avec :
- un attribut **statique** `allItems` (tableau de chaînes de caractères),
- une méthode statique `addItem(name: string)` pour ajouter un élément,
- une méthode statique `showItems()` pour afficher la liste complète.



##  Exercice 9 – Générateur de mots de passe

Crée une classe `PasswordGenerator` avec :
- une méthode statique `generate(length: number)`  
qui retourne une chaîne aléatoire de lettres majuscules de la longueur donnée.

Aucun attribut d’instance n’est nécessaire.



##  Exercice 10 – Utilitaire de date

Crée une classe `DateUtils` avec :
- une méthode statique `getCurrentYear()` qui renvoie l’année actuelle,
- une méthode statique `getCurrentDate()` qui renvoie la date au format `JJ/MM/AAAA`.

Teste les deux méthodes sans instancier la classe.