# Variable, condition entrée utilisateurs et boucle.
Ici vous apprendrez les fondamentaux de l'algo en PHP et la conception d'application en ligne de commande CLI(Command line Interface).

## Lancer un programme

Si se n'est pas dejà fait installez PHP.

```bash
sudo apt install php
```

> Voir le cours pour plus de détail sur les moyens d'installation du PHP.

### Créer fichier main.php
```bash
mkdir premier_projet    # créer un dossier pour notre application
cd premier_projet       # se déplacer dans le dossier
touch main.php          # créer un fichier vierge main.php
code .                  # Ouvrir le dossier du projet dans VSCode (. est le raccourcis vers dossier courant : premier_projet)
```

Dans le fichier main.php écrivez le code suivant

*main.php*
```php
<?php


```

### `<?php` démarrage du programme
`<?php`  est un mot clé clé du PHP qui signifie *départ du programme* **n'écrivez jamais rien avant ce mot clé**.

### Executer le script `main.php`
Lancer se programme (vide) avec la commande php

```bash
php main.php
```

Si tout ce passe bien il ne sais rien passé après l'execution du programme, c'est normal il est vide.

## Affichage à l'écran et mot réservé

Certain mot clé sont reservé en PHP, vous connaissez déjà <?php qui défini le démmarrage du programme, mais il existe aussi echo qui affiche du texte dans le terminal utilisateur.

> Dans le cas des serveur PHP echo n'affiche pas dans le terminal mais envoie le texte au navigateur web (firefox, chrome) du client comme contenu HTML pour etre affiché à l'écran. C'est ainsi qu'on affichera des données dans une page web en PHP.

```php
<?php

echo "Salut tout le monde !\n";

```
> `\n` est le caractère *retour à la ligne de la table ASCII*.

1. Executez ce script.

## Variables

### string

- $prenom="Pierre";
- concaténation `.` mot clé réservé du PHP

### number
- $age = 25;
- calcul et opérateur (+,-,*,/,% (exemple %2 pour les nombre pair))



