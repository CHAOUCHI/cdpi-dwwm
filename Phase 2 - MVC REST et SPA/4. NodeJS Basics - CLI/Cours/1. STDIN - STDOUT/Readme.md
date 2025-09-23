# STDIN et STDOUT - Input/Output CLI Linux avec Node.js

Comme premier exemple d'API Node.js, nous allons accéder à stdin et stdout sur notre système Linux.

Notre objectif est donc de pouvoir récupérer l'entrée du terminal utilisateur (stdin) et d'écrire dans stdout, le terminal utilisateur.

***Un programme en ligne de commande (CLI, Command Line Interface).***

### Écrire dans le terminal : 1 méthode - console.log()

Pour écrire dans le terminal, Node.js a déclaré la variable `console`.

L'objet console possède plusieurs méthodes permettant d'écrire dans la console, les plus connues étant `console.log`, `console.error` et `console.warn`.

```js
console.log("Message de journalisation (logging)");
console.error("Message d'erreur");
console.warn("Message d'avertissement !");
```

Lancez le programme avec Node.js :

```bash
node main.mjs
```

Voici par exemple un programme qui affiche un message formaté correctement pour un tchat de discussion.

```js
main();
function main() {
    const userName = "Massinissa";
    const userText = "Salut tout le monde !";

    const message = formatedTchatMessage(userName, userText);

    console.log(message);
}

// Fonction pour formater le message

/**
 * 
 * @param {string} userName Le nom de l'utilisateur
 * @param {string} userText Le texte qu'il souhaite afficher
 * @returns {string} Le message correctement formaté.
 */
function formatedTchatMessage(userName, userText) {
    // Je teste la validité des paramètres.
    if (typeof userName !== "string" || typeof userText !== "string") {
        console.warn("Warning : userName and userText parameters should be of type string !");
        throw TypeError(`Warning : userName and userText parameters should be of type string !
            But are of type :
                userName : ${typeof userName},
                userText : ${typeof userText}
            `);
    }

    if (userName === "" || userText === "") {
        console.warn("Warning : userName and userText parameters should not be empty strings !");
        return;
    }

    const date = new Date(Date.now());
    // console.assert permet d'afficher un message SI et SEULEMENT SI la condition en paramètre est fausse.
    console.assert(date instanceof Date, "date should be instance of Date");

    // Formate la date
    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
    // Formate le message
    const message = `${time} ${userName} a dit "${userText}"`;

    return message;
}
```

> En JavaScript, il n'est pas nécessaire de définir une fonction `main`. Je le fais juste pour fixer un point d'entrée facile à identifier pour les autres développeurs.

