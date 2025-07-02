# Un serveur PHP

Un serveur PHP est avant tout un serveur web : un programme qui peut recevoir des requête HTTP et renvoyer des réponses HTTP. 

Sa particularité est qu'il peut exécuter du code PHP pour générer dynamiquement des pages web.

Concrètement vous pouvez faire la même chose qu'un programme en ligne de commande, à la différence que l'instruction `echo` va envoyer du texte au navigateur web pluotôt que dans la console.


Ce texte sera ensuite interprété par le navigateur pour affichée dans une page web.

## Exécution d'un serveur PHP
Crée un fichier `index.php` dans un dossier vide, et ajoute le code suivant :

```php
<?php
echo "Hello World !";
?>
```

Ensuite, ouvrez un terminal dans ce dossier et lancez la commande suivante :

```bash
php -S localhost:8000
```


Ouvrez ensuite votre navigateur web et allez à l'adresse `http://localhost:8000` pour voir "Hello World !" s'afficher à l'écran.

Je peux aussi lancer un serveur php en watchmode pour rafrachir la page à chaque ctrl+S

```bash
php -S localhost:8000 -t . --watch
```

## Du code HTML
Vous pouvez aussi écrire du code HTML dans un fichier PHP. Par exemple, modifiez le fichier `index.php` pour y mettre du HTML il faut simplement l'écrire en dehors des balises PHP :

```php
<?php 
echo "Hello World !";
?>

<p>Bonjour, voici un paragraphe en HTML !</p>
```

Rafraîchissez la page dans votre navigateur pour voir le paragraphe s'afficher.

> N'oubliez pas de sauvegarder votre fichier avant de rafraîchir la page dans le navigateur. Sinon vous verrez toujours l'ancienne version de la page.

## Des variables dans le HTML !
Vous pouvez aussi utiliser des variables PHP pour générer du contenu HTML dynamique. Par exemple, modifiez le fichier `index.php` pour y ajouter une variable :

```php
<?php
$dice = rand(1,6); // Génère un nombre aléatoire entre 1 et 6
?>

<p>Bonjour, voici un D<?php echo $dice; ?> !</p>
```

ou la balise `<?= ?>` plus courte qui execute un echo automatiquement :

```php
<?php
$dice = rand(1,6); // Génère un nombre aléatoire entre 1 et 6
?>
<p>Bonjour, voici un D<?= $dice; ?> !</p>
```

## Boucles et conditions
En PHP il existe une syntaxe d'écriture de bloc d'instructions sans accolades.

C'est ette syntaxe qui est utilisée dans les fichiers `.php` pour écrire du HTML de façon conditionnelle.

- if endif pour majeur mineur un tableau de notes et la lecture de chaque ligne d'un fichier texte :


*exemple boucle for*
```php
<?php
$notes = [12, 15, 8, 20, 10];
?>
<p>Voici les notes :</p>
<?php foreach ($notes as $note): ?>
    <p>Note : <?= $note; ?></p>
<?php endforeach; ?> 
``` 

*exemple for lecture de fichier*
```php
<?php
$lines = [];
$fichier = fopen("fichier.txt", "r");
if($fichier){

    while (($line = fgets($fichier)) !== false) {
        $lines[] = $line;
    }
    fclose($fichier);
}
?>


<h2>Contenu du fichier :</h2>
<?php foreach ($lines as $line): ?>
    <p><?= $line; ?></p>
<?php endforeach; ?>
```

*exemple if gestion d'erreur affiché à l'écran*
```php
<?php
$age = 18;
if ($age >= 18): ?>
    <p>Vous êtes majeur.</p>
<?php else: ?>
    <p>Vous êtes mineur.</p>
<?php endif; ?>
```


## Formulaire HTML
Les données d'un formulaire PHP sont placées dans le body, à la différence d'un body `JSON` il est beaucoup plus simple de récupérer ces données.
Il suffit de lire le contenu du tableau `$_POST`.

Soit un formulaire HTML : 
```html
<form action="/add-user.php" method="post">
  <input type="text" name="name">
  <input type="email" name="email">
  <input type="password" name="password">

  <input type="submit" value="Submit">
</form> 
```
Les données du formulaire sont simplement dans le tableau `$_POST`.
```php
<h2> Bonjour <?= $_POST["name"] ?> !</h2>
echo $_POST["email"];
echo $_POST["password"];
```


## Header de redirection
En cas d'erreur, vous voulez rediriger l'utilisateur vers une autre page. Pour cela, vous pouvez utiliser la fonction `header()` qui permet d'envoyer au navigateur non pas du texte HTML mais une instruction de redirection appelée "header HTTP".
```php
<?php
if (!isset($_POST["name"]) || empty($_POST["name"])) {
    header("Location: /mising-name.php");
    exit();
}
```


### FormData et fichiers
Pour envoyer des fichiers via un formulaire HTML, vous devez utiliser l'attribut `enctype="multipart/form-data"` dans la balise `<form>`. Cela permet au navigateur de savoir qu'il doit envoyer des données binaires (comme des fichiers) en plus des données textuelles.

Voici un exemple de formulaire pour uploader un fichier :

```html
<form action="/upload.php" method="post" enctype="multipart/form-data">
  <input type="text" name="author" placeholder="Auteur">
  <input type="file" name="photo" accept="image/*">
  <input type="submit" value="Envoyer">
</form>
```

Pour récupérer le fichier uploadé, vous pouvez utiliser le tableau `$_FILES` :

```php
<?php
if (isset($_FILES['photo'])) {
    $author = $_POST['author'];
    $file = $_FILES['photo'];
}