# Exercices TypeScript – Classes, Constructeurs, et Encapsulation

Fait les exercices suivants pour pratiquer la création de classes, l’utilisation de constructeurs, **si tu galère sur un exercice passe le**, ce n'est pas grâce si tu ne les fais pas tous, mais ne t'aide **JAMAIS de l'IA**

L'objectif est seulement de pratique pour que la syntaxe rentre dans la tête.

##  Chapitre 1 – Classe et Instance

### Exercice 1
Crée une classe `Person` avec deux propriétés `firstName` et `lastName`.  
Ajoute une méthode `sayHello()` qui affiche un message de salutation.  
Crée une instance de la classe et appelle la méthode.



### Exercice 2
Ajoute une troisième propriété `age` à la classe `Person`.  
Affiche son contenu à l’aide d’une méthode `showInfo()`.


### Exercice 3
Crée une classe `Animal` avec une propriété `species`.  
Ajoute une méthode `makeSound()` qui affiche un son typique de cet animal.


### Exercice 4
Crée une classe `Book` avec les propriétés `title` et `author`.  
Instancie deux livres différents et affiche leurs informations dans la console.



### Exercice 5
Crée une classe `Rectangle` avec les propriétés `width` et `height`.  
Ajoute une méthode `getArea()` qui calcule et affiche l’aire du rectangle.



### Exercice 6
Crée une classe `Student` avec `name`, `grade`.  
Ajoute une méthode `displayStudent()` pour afficher les informations.



### Exercice 7
Crée une classe `Movie` avec `title` et `year`.  
Ajoute une méthode `getInfo()` qui affiche les détails du film.



### Exercice 8
Crée une classe `Product` avec `name` et `price`.  
Crée plusieurs instances et affiche leurs noms et prix.



### Exercice 9
Crée une classe `City` avec `name` et `population`.  
Ajoute une méthode `describe()` qui affiche une phrase descriptive.



### Exercice 10
Crée une classe `Computer` avec `brand` et `ram`.  
Affiche dans la console les détails d’un ordinateur.



##  Chapitre 2 – Constructor

### Exercice 1
Reprends la classe `Person` et ajoute un constructeur qui initialise `firstName` et `lastName`.



### Exercice 2
Crée une classe `Car` avec un constructeur qui initialise `brand` et `year`.  
Ajoute une méthode `showInfo()`.



### Exercice 3
Crée une classe `Dog` avec un constructeur prenant `name` et `breed`.  
Ajoute une méthode `bark()`.



### Exercice 4
Crée une classe `Circle` avec `radius`.  
Ajoute une méthode `getPerimeter()` et un constructeur pour initialiser `radius`.



### Exercice 5
Crée une classe `User` avec `username` et `email`.  
Utilise le constructeur pour les initialiser.



### Exercice 6
Crée une classe `Course` avec `title` et `duration` (en heures).  
Ajoute une méthode `describeCourse()`.



### Exercice 7
Crée une classe `Laptop` avec `brand`, `processor`, `price`.  
Initialise-les dans le constructeur.



### Exercice 8
Crée une classe `Book` avec `title`, `author`, `pages`.  
Ajoute une méthode `summary()` qui affiche une courte description.



### Exercice 9
Crée une classe `Employee` avec `name`, `position`, `salary`.  
Ajoute une méthode `introduce()`.



### Exercice 10
Crée une classe `Plane` avec `model` et `capacity`.  
Ajoute une méthode `fly()` qui affiche un message.



##  Chapitre 3 – Public et Private

### Exercice 1
Crée une classe `BankAccount` avec une propriété privée `balance`.  
Ajoute une méthode publique `showBalance()`.



### Exercice 2
Crée une classe `SafeBox` avec une propriété privée `secretCode`.  
Ajoute une méthode publique `open(code: string)` qui vérifie si le code est correct.



### Exercice 3
Crée une classe `Email` avec une propriété privée `content`.  
Ajoute une méthode publique `read()` pour l’afficher.



### Exercice 4
Crée une classe `Thermostat` avec une température privée.  
Ajoute une méthode publique `showTemperature()`.



### Exercice 5
Crée une classe `Door` avec un état privé `isLocked`.  
Ajoute une méthode `unlock()` et une méthode `lock()`.



### Exercice 6
Crée une classe `Score` avec une propriété privée `points`.  
Ajoute une méthode `addPoints(value: number)` et `showScore()`.



### Exercice 7
Crée une classe `Light` avec une propriété privée `isOn`.  
Ajoute des méthodes `turnOn()` et `turnOff()`.



### Exercice 8
Crée une classe `Car` avec une vitesse privée.  
Ajoute une méthode `showSpeed()`.



### Exercice 9
Crée une classe `Password` avec une propriété privée `value`.  
Ajoute une méthode `check(password: string)` pour vérifier la correspondance.



### Exercice 10
Crée une classe `Wallet` avec une somme privée `money`.  
Ajoute des méthodes `addMoney()` et `showMoney()`.



##  Chapitre 4 – Constructor, Public, Private, Setter & Getter (sans syntaxe `get` / `set`)

### Exercice 1
Crée une classe `User` avec un `username` public et un `password` privé.  
Ajoute une méthode `checkPassword(pass: string)` qui retourne vrai si le mot de passe est correct.



### Exercice 2
Crée une classe `Car` avec `brand` privé et `speed` privé.  
Ajoute `setSpeed(newSpeed: number)` et `getSpeed()`.



### Exercice 3
Crée une classe `Student` avec `name` public et `average` privé.  
Ajoute des méthodes `setAverage(value: number)` et `getAverage()`.



### Exercice 4
Crée une classe `Account` avec un solde privé.  
Ajoute une méthode `deposit(amount: number)` et `getBalance()`.



### Exercice 5
Crée une classe `Book` avec un `title` public et un `price` privé.  
Ajoute `setPrice(newPrice: number)` et `getPrice()`.



### Exercice 6
Crée une classe `Laptop` avec `brand` et `batteryLevel` privés.  
Ajoute des méthodes pour augmenter ou diminuer le niveau de batterie.



### Exercice 7
Crée une classe `Person` avec `name` et `age` privés.  
Ajoute des méthodes `setAge(newAge: number)` et `getAge()`.



### Exercice 8
Crée une classe `Phone` avec `number` privé et `owner` public.  
Ajoute des méthodes pour modifier le numéro et le lire.



### Exercice 9
Crée une classe `GameCharacter` avec `name` public et `health` privé.  
Ajoute des méthodes pour infliger des dégâts (`takeDamage`) et afficher la santé (`getHealth`).



### Exercice 10
Crée une classe `BankAccount` avec un `owner` public et un `balance` privé.  
Ajoute `deposit(amount: number)`, `withdraw(amount: number)`, et `getBalance()`.



📘 **Conseil final :**
Teste tous tes exercices dans un fichier `.ts`, puis exécute-les avec la commande :
```bash
tsc nom_du_fichier.ts && node nom_du_fichier.js
