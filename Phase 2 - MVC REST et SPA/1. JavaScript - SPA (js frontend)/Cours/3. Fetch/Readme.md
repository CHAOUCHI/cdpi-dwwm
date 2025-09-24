# Fetch - Effectuer une requete HTTP


L'api fetch est une fonction JavaScript qui permet d'effectuer une requete HTTP vers une serveur web.

Son utilisation est donc particulière et diffère des fonctions classiques.


Elle ressemble à ceci :

```js
async function main(){

    const reponseHTTP = await fetch(url);
    const status = reponseHTTP.status; // code HTTP 404, 200, ...
    const body = await reponseHTTP.text(); // Le body HTML ou autre texte
}
```

> Pour cette exemple simple on utilise la syntaxe async/await du JavaScript. Pour faire simple une fonction marquée `async` permet d'utiliser le mot clé `await` qui force le JavaScript à attendre la fin d'une opération asynchrone (comme fetch) avant de continuer l'exécution du code.

> **Attention**: `await` ne fonctionne que dans une fonction marquée `async`.

## Séparer le front du back
La fonction fetch permet d'accéder à un serveur web distant autre que le serveur web de notre site.

Il nous faut donc un autre serveur, ça tombe bien vous connaiassez le PHP. ;)

1. Créez un dossier nommé `fetch-exemple`
2. Créez deux sous-dossiers `backend` et `frontend`

```
fetch-exemple
    ├── backend
    └── frontend
```

### Serveur backend
Prenons un serveur PHP qui renvoie "Bonjour" :

*backend/hello.php*
```php
<?php
header('Access-Control-Allow-Origin: *'); // Obligatoire pour fetch
$data = "Bonjour je suis un serveur web quelconque!";
echo $data;
?>
```

Lancez ce serveur en local :
```bash
cd backend
php -S localhost:8001
```

**Le serveur web est donc accessible à l'adresse suivante :** `http://localhost:8001`

Voilà si je me rends sur http://localhost:8001/hello.php j'obtiens :
```
Bonjour je suis un serveur web quelconque!
```

### Serveur frontend
Créons maintenant un serveur web pour notre application frontend.

*frontend/index.html*
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Application</title>
</head>
<body>
    <h1>Bienvenue sur mon Front</h1>

    <script>
        
    </script>
</body>
</html>
```
1. Lancez ce serveur web sur un autre port.
```bash
cd frontend
php -S localhost:8002
```

Vous avez donc deux serveurs web qui tournent en local :
- Le serveur pour backend : http://localhost:8001
- Le serveur pour l'application frontend : http://localhost:8002

1. Utilisez la fonction fetch dans le code JavaScript pour aller chercher les données du serveur backend comme suit :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Application</title>
</head>
<body>
    <h1>Bienvenue sur mon Front</h1>

    <script>
        async function getData(){
            const response = await fetch('http://localhost:8001');
            const data = await response.text();
            console.log(data); // Affiche "Bonjour je suis un serveur web quelconque!"
            document.body.innerHTML += `<p>${data}</p>`;
        }
        getData();
    </script>
</body>
</html>
```

Voilà vous avez un front qui va chercher des données sur un back !

## Les serveurs publiques

Ici nous avons crée nous même le serveur backend. Mais il existe énormement de serveurs web qui fournissent des données accessible publiquement.

- https://pokeapi.co/ - API REST pour les pokémons
- https://openweathermap.org/api - API REST pour la météo
- https://chucknorris.io/ - API REST pour les blagues de Chuck Norris
- https://jsonplaceholder.typicode.com/ - API REST pour des données factices
- https://restcountries.com/ - API REST pour les pays du monde

La plupart de ces serveurs web fournissent des données au format JSON.

Je peux donc facilement afficher une chuck norris joke en utilisant fetch.

```js
async function getData(){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const joke_obj = await response.json();
    console.log(joke_obj.value); // Affiche une blague de Chuck Norris
    document.body.innerHTML += `<p>${joke_obj.value}</p>`;
}
getData();
```


1. Testez ce code dans le fichier `frontend/index.html` pour voir une chuck norris joke s'afficher à chaque rechargement de la page.
2. Modifiez le code pour afficher une nouvelle blague à chaque clic sur un bouton. Il vous suiffit l'appeller la fonction `getData()` à chaque clic.

> Dans ce cours j'ai utilisé la syntaxe `async/await` pour simplifier la lecture du code. Mais il est aussi possible d'utiliser la syntaxe avec les promesses `.then()` que vous allez voir dans la suite du cours.

## Conclusion

- fetch est une fonction JavaScript qui permet d'effectuer des requêtes HTTP.
- fetch est asynchrone, il faut donc utiliser la syntaxe `async/await`.
- fetch permet de séparer le front du back en allant chercher des données sur un serveur web distant.
- Il existe de nombreux serveurs web publiques qui fournissent des données utilisable par vos front qu'il soit web ou même une application mobile (Android, iOS).
