# NodeJS

Habituellement, le JavaScript s'exécute sur le navigateur du client, côté front-end. Il est donc impossible pour du JavaScript côté front-end d'accéder à une base de données SQL, d'envoyer des mails ou de gérer la connexion d'un utilisateur.

Voilà pourquoi il faut un programme côté serveur qui peut exécuter du JavaScript côté back-end. Ce programme s'appelle NODEJS.

## NodeJS, un runtime JavaScript

NodeJS est un environnement d'exécution JavaScript basé sur le moteur V8 utilisé par Chrome.

NodeJS va exécuter notre code JS et donne accès, via ses nombreuses APIs, au réseau, aux fichiers ou à une base de données SQL, etc.

> Voici un lien vers le cours introductif à NodeJS du site officiel : https://nodejs.org/fr/learn/getting-started/introduction-to-nodejs

# Pré-requis

Pour correctement se servir de NodeJS, vous allez avoir besoin de deux logiciels :
- `nodejs` pour exécuter votre JavaScript
- `npm` (Node package manager) pour générer un projet et installer facilement des extensions non natives à NodeJS (comme le connecteur MySQL par exemple).

<!-- ## Installer NodeJS et npm sous Windows
Téléchargez NodeJS Long Term Support (LTS) ici : https://nodejs.org/en

> Long Term Support signifie que cette version de NodeJS est stable et que toutes les failles seront corrigées pendant encore un moment. C'est donc une version fiable à utiliser pour la plupart des projets. -->

## Installer NodeJS et npm sous Linux
```bash
sudo apt install nodejs npm
```
<!-- > Sous Linux, il est nécessaire d'installer explicitement NodeJS et npm -->

<!-- ## Installer NodeJS et npm sous Mac
Avec HomeBrew, le gestionnaire de paquets MacOS :
```bash
brew install node
```
Ou à la main via le lien suivant : https://nodejs.org/en/download/ -->

## Exécuter du JavaScript
Créez un fichier `app.js` et placez-y un `console.log()` pour vérifier que tout fonctionne.

*app.js*
```js
console.log("Hello App");
```

Puis exécutez le code dans un terminal via la commande :
```bash
node app.js
```

## Travailler avec plusieurs fichiers -  .js ou .mjs

### ESModule

En JavaScript, il est possible d'exporter une variable d'un fichier pour l'importer dans un autre.

Avec les mots-clés `export` et `import ... from`.

*autre-fichier.js*
```js
export let prenom = "Massinissa";
```

*main.js*
```js
import { prenom } from "./autre-fichier.js";

console.log(prenom);  // Massinissa
```

Normalement, vous allez avoir un message d'avertissement d'un reparsing de CommonJS à ESModule.

Il faut donc changer l'extension de nos fichiers de .js à .mjs pour utiliser la syntaxe la plus moderne ESModule : les `import from`.

1. Renommez vos fichiers en .mjs

#### **Pourquoi les { } dans l'import ?**
Le partage de variables entre fichiers JavaScript se fait par l'exposition d'un objet d'export.

Les accolades sont un opérateur d'extraction d'attributs d'objets. C'est-à-dire qu'au lieu d'importer l'entièreté de l'objet exporté, je choisis uniquement les attributs dont j'ai besoin. On appelle cela le destructuring assignment.

En JavaScript, l'export de variables se fait simplement par l'export d'un objet qui contient toutes les variables exportées.

Concrètement, je pourrais très bien exporter une variable `autreFichier` et écrire `autreFichier.prenom` dans mon code.

*autre-fichier.js*
```js
export let prenom = "Massinissa";
```

*main.js*
```js
import * as autreFichier from "./autre-fichier.js";

console.log(autreFichier.prenom);  // Massinissa
```

### CommonJS
NodeJS est sorti avant l'uniformisation du JavaScript avec la norme ECMAScript.

Il utilise donc par défaut une ancienne syntaxe, le CommonJS, une syntaxe d'import née de la communauté JavaScript dans les années 2010.

> Les fichiers CommonJS sont en .js et les ESModule sont en .mjs

Notre code précédent en CommonJS :
*autre-fichier.js*
```js
let prenom = "Massinissa";

module.exports = {
    prenom
}
```

*main.js*
```js
const { prenom } = require("./autre-fichier.js");

console.log(prenom);  // Massinissa
```

NodeJS exécute le code de autre-fichier lors de l'appel de require qui retourne la variable `module.exports` (une primitive fournie par NodeJS).

> Notez l'utilisation du *destructuring assignment* pour déclarer une variable par un attribut d'objet, ici l'objet module.exports de l'autre fichier.
> https://www.w3schools.com/JS/js_destructuring.asp

Je me permets d'utiliser les deux syntaxes de temps à autre dans le cours. Vous devez les connaître toutes les deux, même si ESModule est celle préférée par les frameworks (Angular, Vue, Next(React), NestJS).

ESModule est également **la seule syntaxe disponible dans le code front-end** d'un navigateur web.

*Privilégiez donc `import from`.*
