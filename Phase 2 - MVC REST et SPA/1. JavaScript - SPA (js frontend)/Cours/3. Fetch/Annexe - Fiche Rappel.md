# Anti-sèche Fetch - à retenir



### Récupérer du JSON
- La fonction `fetch` renvoie une `Promise`.
- Si le serveur renvoie le body HTTP au format JSON, j'utilise la fonction `response.json()` dans le premier `then()` pour le transformer en variable JavaScript.
- Les données promises sont disponibles dans le deuxième `then()`.


*syntaxe asynchrone*
```js
fetch(url_str)
        .then(response_obj => response_obj.json())
        .then(data_obj => {
                console.log(data_obj);
                // Utilisez les données ici ...
        })
        .catch(err_obj => console.warn(err_obj.message));
```

Je vous conseil d'utiliser la syntaxe `async/await` qui est plus lisible.

*syntaxe synchrone*
```js
async function main_func(){
        try {
                const response_obj = await fetch(url_str);
                const data_obj = await response_obj.json();
                console.log(data_obj);
                // Utilisez les données ici ...
        } catch(err_obj) {
                console.warn(err_obj.message);
        }
}
main_func();
```

> **Attention**: `await` ne fonctionne que dans une fonction marquée `async`.

## Exemple Pokédex

```js
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response_obj => response_obj.json())
        .then(pikachu_obj => {
                console.log(pikachu_obj);
                // Utilisez les données ici ...
        })
        .catch(err_obj => console.warn(err_obj.message));
```

## Exemple barre de recherche

Voici un code qui cherche un Pokémon et l'ajoute à l'écran.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
        <meta charset="UTF-8">
        <title>Document</title>
        </head>
        <body>
        <form>
                <input type="text" id="poke-name" name="poke-name">
                <button type="submit">Rechercher</button>
        </form>
</body>
<script>
const form_elem = document.querySelector("form");

form_elem.addEventListener("submit", async (event_obj) => {
        event_obj.preventDefault();
        const formData_obj = new FormData(form_elem);

        const response_obj = await fetch("https://pokebuildapi.fr/api/v1/pokemon/" + formData_obj.get("poke-name"));
        const pokemon_obj = await response_obj.json();

        console.log(pokemon_obj);
        // J'affiche le nom du Pokémon recherché dans une balise <p>
        const img_elem = document.createElement("img");
        img_elem.setAttribute("src", pokemon_obj.image);
        img_elem.setAttribute("alt", pokemon_obj.name);
        document.body.appendChild(img_elem);
});
</script>
</html>
```

Vous remarquez que j'ai utilisé `async` dans la fonction callback de l'event listener.

```js
form_elem.addEventListener("submit", async (event_obj) => {
                // ...
});
```