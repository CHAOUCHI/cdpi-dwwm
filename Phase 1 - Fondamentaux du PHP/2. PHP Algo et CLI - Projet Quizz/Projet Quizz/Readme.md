# Projet Quizz

## Objectif

Créez un petit quiz interactif en ligne de commande (CLI) pour réviser les bases de l'algorithmique en PHP.

## Pré-requis
- variables
- if
- while ou for
- récuperer des entrées utilisateur `fgets`
- tableau pour les questions
- tableau pour les réponses.

- w3schools PHP : https://www.w3schools.com/php/default.asp

## Synopsis

Vous devez concevoir un jeu de type quiz. Le programme pose des questions à l'utilisateur. Si l'utilisateur répond correctement il gagne des points.
Une fois que toutes les questions sont passées le programme dit si l'utilisateur à gagner ou non (le joueur gagne si il à répondu juste à plus de 50% des questions).

En langage PHP.

## Interface du jeu
Voici un exemple de partie :

```
###################################################
######## Qui veux gagner des millions ?! ##########
###################################################

###################################################
Score : 0
###################################################

Question 1 :

Qu'elle est la couleur du chaval blanc d'Henri IV ?
1. Noir 
2. Blanc
3. Rouge

2

Suspennnnce ! 

Bien joué !

*Le score augemente de 10*

###################################################
Score : 10
###################################################

Question 2 :

Prise de la Bastille ?
1. 1789
2. 1750
3. 1800

3

Suspennnnce ! 

NON ! 

*Le score n'augemente pas. :(*

###################################################
Score : 10
###################################################

Question [X] :

[Autre question ?
1. bla
2. blo]

[user_input]

Suspennnnce ! 

[Réponse]

[indiquer le score]

###################################################
Score : [score_du_joueur]
###################################################

########### GAME OVER ###########
Pourcentage de bonne réponse  : 70%

Bien joué tu as gagné des millions !
```

## Cahier des charges

|Taches|Description|Contraintes|
|-|-|-|
|Poser des questions|Afficher une question à l'écran et demander sa réponses à l'utilisateur|Les questions doivent s'enchainer jusqu'à ce qu'il n'y est plus de question à poser|
| Score | Augementer le score de 10 points quand une réponse est juste.|Afficher le score mis à jour du joueur avant chaque nouvelle question |
|UI|Respecter l'interface utilisateur proposé plus haut|
|Game Over | Quand il n'y a plus de questions le jeu s'arrete|Afficher le pourcentage de reussite du joueur et dite lui si il a gagner ou perdu. <br> Il faut plus de 50% de bonne réponses pour gagner. |
| [BONUS] Sauvagarde | A l'aide du cours PHP et la documentation W3schools sauvegardé le score en fin de partie et récupéré le en début de partie |



## Code source de départ

*main.php*
```php
<?php


$questions = [
    "Quelle est la couleur du cheval blanc d'Henri IV?\n1.Blanc\n2.Rouge\n3.Noir\n",
    "Date de la prise de la Bastille ?\n1.1750\n2.1789\n3.1800\n",
    "Quel est le plus grand océan du monde ?\n1.Océan Atlantique\n2.Océan Indien\n3.Océan Pacifique\n",
    "Qui a écrit Les Misérables ?\n1.Victor Hugo\n2.Emile Zola\n3.Marcel Proust\n",
    "Quelle est la capitale de l'Australie ?\n1.Sydney\n2.Melbourne\n3.Canberra\n"
];


$reponses = [1, 2, 3, 1, 3];
$score = 0;

$NB_QUESTIONS = count($questions);

for($i = 0; $i < $NB_QUESTIONS; $i++){
    echo "Question : ".$questions[$i]."\n";
    echo "La bonne répoonse : ".$reponses[$i]."\n";
    var_dump($i); // index des questions et reponses
    // Votre code
    
}

echo $score." \n";
```
