# Projet 10 - Formulaire

## Le Besoin
Créer le front-end d'un formulaire de contact en JavaScript ainsi que ses messages d'erreur.

![alt text](image-12.png)

## Pré-requis
- la condition `if`
- Récupérer la longueur d'une string
```js
const prenom = "Massinissa";
prenom.length        // Nombre de caractères
```
- Récupérer la valeur d'une balise `<input>`
```js
const balise = document.querySelector("input");
balise.value;               // Renvoie le contenu de l'input.
balise.value = "Contenu";   // Modifie le contenu de l'input.
```
- L'événement `submit`
```js
const formulaire = document.querySelector("form");
formulaire.addEventListener("submit", function(event){
    event.preventDefault(); // Empêche le rechargement de la page

    /**
     * Traite le contenu du formulaire ...
     * */
});
```
L'événement `submit` se produit **UNIQUEMENT** sur les balises `form` lorsque l'utilisateur clique sur un bouton de type submit ou appuie sur la touche entrée.

Par défaut, l'événement `submit` demande au navigateur d'envoyer le contenu du formulaire au serveur dans une requête HTTP, ce qui provoque un rechargement de la page.

Si vous voulez vérifier les champs du formulaire en JavaScript avant d'envoyer un message au serveur, il faut désactiver le comportement par défaut de l'événement grâce à la fonction `preventDefault()`.

### Récupérer les valeurs du formulaire à partir de FormData
Dans le code suivant, j'utilise l'objet event et la classe FormData pour former un objet facile à utiliser contenant comme attributs les `value` des balises `<input>`.

> Le nom des attributs est défini par l'attribut HTML `name` des balises `<input>`.

```js
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="">
        <input type="email" name="mail" id="">
        <input type="text" name="nom" id="">
        <button type="submit">submit</button>
    </form>
</body>
<script>

    const form = document.querySelector("form");

    form.addEventListener("submit", event => {
        event.preventDefault();

        const formData = new FormData(form);
        console.log(formData.get("mail"));
        console.log(formData.get("nom"));
        console.log(formData);
    });
</script>
</html>
```

### Améliorer la structure

L'attribut event.target est un pointeur sur la balise qui a subi l'événement, ici le formulaire.

On peut donc dire que :

```js
form === event.target // true
```

Notez que je me sers de la variable globale `form` plutôt que de `event.target`. Je préfère rendre mon code le moins dépendant possible des variables globales pour pouvoir facilement encapsuler cette fonction anonyme dans une fonction bien définie et améliorer la structure et la lisibilité du code.

Je le fais comme ceci :

```js
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="">
        <input type="email" name="mail" id="">
        <input type="text" name="nom" id="">
        <button type="submit">submit</button>
    </form>
</body>
<script>

    const form = document.querySelector("form");

    form.addEventListener("submit", onLogin);

    function onLogin(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData);
        console.log(formData.get("mail"));
        console.log(formData.get("nom"));

        // Ici je pourrais par exemple faire une requête HTTP pour demander un jeton d'authentification à mon serveur avec la fonction fetch().
    }
</script>
</html>
```

# Cahier des charges
| Tâches | Description | Contraintes |
|---|---|---|
| Intégration du formulaire | Intégrer en HTML/CSS un formulaire de contact | Il doit contenir : nom, prénom, email et un message avec un bouton ENVOYER de type `submit` |
| Message d'erreur du champ nom | Afficher un message d'erreur sous le champ nom si les conditions ne sont pas remplies lors de l'événement `submit` | Le nom doit être supérieur à 2 et inférieur à 20 caractères. |
| Message d'erreur du champ prénom | Afficher un message d'erreur sous le champ prénom si les conditions ne sont pas remplies lors de l'événement `submit` | Le prénom doit être supérieur à 2 et inférieur à 20 caractères. |
| Message d'erreur du champ email | Afficher un message d'erreur sous le champ email si les conditions ne sont pas remplies lors de l'événement `submit` | L'email doit être une adresse email valide (voir la fonction isValidEmail ci-dessous). |
| Message d'erreur du champ message | Afficher un message d'erreur sous le champ message si les conditions ne sont pas remplies lors de l'événement `submit` | Le message doit être inférieur à 100 et supérieur à 10 caractères. |

# La fonction isValidEmail
Voici la fonction qui permet de tester si un email est valide.

La fonction utilise le concept de regex, qui est un langage de parsing de texte permettant de tester ou d'extraire des données d'un texte.

Rendez-vous sur le site web regex101 si vous avez besoin d'apprendre les regex.
```js
/**
 * Renvoie vrai si la string email passée en paramètre correspond à une adresse email valide.
 */
function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegExp
    if (emailFormat.test(email))
    {
        return true;
    } else {
        return false;
    }
}
```
