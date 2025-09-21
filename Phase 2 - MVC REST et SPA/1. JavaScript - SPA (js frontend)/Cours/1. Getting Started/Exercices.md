## Pré-requis

je vous conseil grandement d'étudier l'annexe JS avant de faire ces exercices si vous ne vous sentez pas à l'aise avec le langage JS.

## Exercices

> Tentez ces exercices pour vous entraîner, mais vous pouvez passer certain si vous n'y arrivez pas. Notamment les exercices utilisant les fonctions `filter`, `map` et `reduce` qui sont plus avancées.

1. Créez une variable `ville_str` contenant le nom de votre ville, puis affichez-la dans la console.
2. Écrivez un programme qui demande à l'utilisateur son âge avec `prompt`, puis affiche "Vous êtes majeur" si l'âge est supérieur ou égal à 18, sinon affiche "Vous êtes mineur".
3. Créez un tableau `couleurs_arr` contenant les couleurs "rouge", "vert" et "bleu", puis affichez chaque couleur dans la console à l'aide d'une boucle `for`.
4. Ajoutez la couleur "jaune" à la fin du tableau `couleurs_arr`, puis affichez le tableau mis à jour dans la console.
5. Écrivez une fonction `multiplier_func` qui prend deux nombres en paramètres et retourne leur produit. Affichez le résultat dans la console en appelant la fonction avec deux valeurs de votre choix.
6. Utilisez `setInterval` pour afficher "Ceci s'affiche toutes les 3 secondes" dans la console toutes les 3 secondes.
7. Créez un tableau `nombres_arr` contenant les nombres de 1 à 10, puis utilisez la méthode `filter` pour créer un nouveau tableau contenant uniquement les nombres pairs. Affichez ce nouveau tableau dans la console.
8. Utilisez la méthode `map` pour créer un nouveau tableau contenant les carrés des nombres du tableau `nombres_arr`. Affichez ce nouveau tableau dans la console.
9. Utilisez la méthode `reduce` pour calculer la somme des nombres du tableau `nombres_arr`, puis affichez le résultat dans la console.
10. Déclarez un objet `livre_obj` avec les propriétés `titre`, `auteur` et `anneePublication`, puis affichez le titre et l'auteur dans la console.


### Exercices avec `prompt`

1. **Demandez à l'utilisateur un nombre avec `prompt`, puis affichez dans la console si ce nombre est pair ou impair.**

2. **Demandez à l'utilisateur un nombre, puis affichez la table de multiplication de ce nombre (de 1 à 10) dans la console.**

3. **Demandez à l'utilisateur un mot, puis affichez ce mot à l'envers dans la console.**
> A savoir : On peut accéder à un caractère d'une chaîne de caractères comme dans un tableau avec des crochets.
>```js
>const mot_str = "Bonjour";
>console.log(mot_str[2]); // n
>console.log(mot_str[1]); // o
>console.log(mot_str[0]); // B
>```

4. **Demandez à l'utilisateur un nombre, puis affichez la somme de tous les entiers de 1 jusqu'à ce nombre inclus.**

5. **Demandez à l'utilisateur une phrase, puis comptez et affichez le nombre de voyelles dans cette phrase.**

7. **Demandez à l'utilisateur un mot, puis vérifiez s'il s'agit d'un palindrome (un mot qui se lit dans les deux sens) et affichez le résultat dans la console.**

8. **Demandez à l'utilisateur deux nombres, puis affichez tous les nombres entre ces deux valeurs (inclus) dans la console.**

9. **Demandez à l'utilisateur une liste de nombres séparés par des virgules (ex: "4,7,2,9"), transformez cette chaîne en tableau, puis affichez le plus grand nombre dans la console.**

10. **Demandez à l'utilisateur un nombre, puis affichez la factorielle de ce nombre dans la console.**
