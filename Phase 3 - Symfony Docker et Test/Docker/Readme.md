# Docker
Docker est un outil de conteneurisation qui permet de créer, déployer et exécuter des applications dans des conteneurs. Un conteneur est une unité légère et portable qui contient tout ce dont une application a besoin pour fonctionner, y compris le code, les bibliothèques, les dépendances et les configurations.

## Avant docker Serveur Physique et VM


### Serveur Physique

Au départ, les applications étaient déployées sur des serveurs physiques.

Chaque application etait coder pour l'OS du serveur (windows ou linux) et les dépendances de l'application devaient être installées manuellement sur le serveur.

Quand une application devait être déployée sur un autre serveur, il fallait réinstaller les dépendances et configurer l'application pour le nouvel environnement.

Quand une application devait être mise à jour, il fallait arrêter le serveur, faire les modifications, puis redémarrer le serveur.

Quand une application plantait, elle avait tendance à faire planter le serveur entier, affectant ainsi les autres applications hébergées sur le même serveur.

Cette solution entraine donc des soucis :
- Difficulté de déploiement (environnement de production différent de l'environnement de développement)
- Difficulté de mise à jour (Application indisponible pendant la mise à jour)
- Difficulté de resolution de problèmes (Plantage de l'application affectant le serveur entier)

### VM (Virtual Machine)

On à donc par la suite inventé les machines virtuelles (VM) pour résoudre ces problèmes.

Une machine virtuelle est un environnement d'exécution isolé qui fonctionne sur un hyperviseur. Chaque VM a son propre système d'exploitation, ses propres ressources (CPU, mémoire, stockage) et peut **exécuter des applications de manière indépendante**.

Cependant, les VM ont aussi leurs inconvénients :
- Elles sont **lourdes en termes de ressources** (CPU, mémoire, stockage) car chaque VM nécessite un **système d'exploitation complet**.
- Elles sont **lentes à redémarrer et à arrêter**, ce qui peut entraîner des temps d'arrêt prolongés lors du déploiement ou de la mise à jour des applications.
- Les applications sont toujours **dépendantes de l'OS** de la VM, car l'environnement de dev et de production sont différents, ce qui peut entraîner des problèmes de compatibilité.



Docker résout ces problèmes :

|Problèmes|Serveur Physique|VM|Docker|
|-|-|-|-|
|lourdes en termes de ressources|Oui|Oui|Non|
|Dépendance à l'OS|Oui|Oui|Non|
|Isolation des applications|Non|Oui|Oui|
|Redémarrage rapide|Non|Non|Oui|

## Arrivée de Docker

En 2010 Solomon Hykes un ingénieur franco-américain à crée Docker une solution pour simplifier le déploiment et la développement d'application en s'inspirant du concept de *conteneur de fret*.

> *"Solomon Hykes met en avant un concept, Docker, transposant à l’industrie du logiciel l’idée du conteneur[3] qui a révolutionné l’industrie du transport. Le concept est issu d’une recherche d’efficacité dans le développement de logiciels et dans leur déploiement, indépendamment des contextes d'exécution."* 
*source : https://fr.wikipedia.org/wiki/Solomon_Hykes*

Un conteneur de fret est une unité de transport standardisée qui peut être facilement déplacée d'un mode de transport à un autre (navire, train, camion) sans nécessiter de déchargement et de rechargement du contenu. De la même manière, Docker permet de créer des conteneurs logiciels qui peuvent être facilement déplacés d'un environnement à un autre (développement, test, production) sans nécessiter de modifications du code ou des dépendances.

![alt text](image.png)


## Le workflow de Docker

1. **Développement** : Les développeurs code l'application
2. **Documentation** : Les développeurs écrivent de la documentation pour expliquer comment lancer l'application ainsi que les ports TCP qu'elle écoute (*listen*).
3. **Build** : Le DevOps écrit un *DockerFile*, un fichier texte qui copie le code source et défini les commandes linux a executer pour lancer l'application.
4. **Run** : Le DevOps execute le conteneur sur le serveur en précisant les ports TCP à ouvrir pour que les utilisateurs puissent accéder à l'application.

> Retenez bien ces étapes, c'est le workflow de base de Docker !

### Exemple de contenerisation d'une API REST nodejs

#### 1. **Développement** : Les développeurs code l'application

*projet/app.js*
```js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // par défaut le port est 3000 mais on peut le configurer via une variable d'environnement

app.get('/', (req, res) => {
  res.json({ message: "Hello je suis une api rest qui attend d'être contenerisée !" });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
```

#### 2. **Documentation** : Les développeurs écrivent de la documentation pour expliquer comment lancer l'application ainsi que les ports TCP qu'elle écoute (*listen*).

*La documentation du déploiement de l'application respecte souvent le même schéma :*
```
## Prérequis (requirements)
## Installation des dépendances (dependencies)
## Lancement de l'application (run)
```

> **Note :** Documenter le déploiement d'une application est obligatoire pour le passage du titre DWWM (*cf. REAC DWWM 2023*)

##### Prérequis (requirements)
1. Node.js version 18 ou supérieure
2. npm 
##### Installation des dépendances (dependencies)

1. Rendez-vous à la racine du projet
```bash
cd projet
``` 

2. Installer les dépendances nodejs
  
```bash
npm install
```
##### Lancement de l'application (run)


3. Lancer l'application
```bash
node app.js
```

Voilà on a bien documenté le lancement de notre application, on peut maintenant passer à l'étape suivante : la contenerisation de l'application avec Docker.



#### 3. **Build** : Le DevOps écrit un *DockerFile*, un fichier texte qui copie le code source et défini les commandes linux a executer pour lancer l'application.


A présent il est temps de créer un fichier *DockerFile*, concrètement c'est un script qui contient les commandes linux à exécuter pour construire l'image de notre application.

**Image docker**: Une image est un template à partir duquel on peut créer des conteneurs, elle contient tout ce dont l'application a besoin pour fonctionner (code source, dépendances, configurations).

Pour construire une image j'ai besoin de besoin de chosir une autre image qui sert de base. Souvent on utilise `alpine` linux qui est une distribution linux légère. 

Dans notre cas on a besoin de `nodejs` et `npm` pour faire tourner notre application, on va donc choisir l'image officielle `node:18`, **qui est effecivement basée sur alpine**, mais qui **contient déjà nodejs et npm pré-installé**.

> ***Important à savoir*** : Prendre une image contenant déjà ce qu'il faut évite d'écrit des commandes `apt install` qui va ralentir le processus de création de l'image et l'allourdir.

*projet/DockerFile*
```Dockerfile
# 1. On part d'une image de base qui contient déjà nodejs
FROM node:18
# 2. On copie le code source de notre application dans le conteneur
COPY . /app
# 3. On se place dans le dossier de l'application
WORKDIR /app
# 4. On installe les dépendances de l'application
RUN npm install
# 5. On expose le port TCP que l'application écoute
EXPOSE 3000
# 6. On définit la commande à exécuter pour lancer l'application
ENTRYPOINT ["node", "app.js"]
```


Déscription des commandes :
- `FROM` : Un DockerFile commence TOUJOURS par la commande `FROM` qui indique une image existante sur dockerhub à utiliser comme base pour construire notre image.
- `COPY` : La commande `COPY` permet de copier des fichiers ou des dossiers de notre machine locale vers le conteneur.
- `WORKDIR` : La commande `WORKDIR` permet de se placer dans un dossier du conteneur, c'est comme si on faisait un `cd` dans le terminal.
- `RUN` : La commande `RUN` permet d'exécuter une commande linux dans le conteneur, dans notre cas on l'utilise pour installer les dépendances de notre application.
- `EXPOSE` : La commande `EXPOSE` permet d'indiquer le port TCP que l'application écoute, c'est important pour pouvoir accéder à l'application depuis l'extérieur du conteneur.
- `ENTRYPOINT` : La commande `ENTRYPOINT` permet de définir en avance la commande à exécuter pour lancer l'application, **c'est la commande qui sera exécutée lorsque le conteneur sera lancé**(la commande executé par `docker run` donc).

> `CMD` ou `ENTRYPOINT` ? : On peut utiliser les deux, mais la différence est que `CMD` peut être écrasé par la commande passée à `docker run`, tandis que `ENTRYPOINT` ne peut pas être écrasé, c'est pourquoi on utilise souvent `ENTRYPOINT` pour les applications qui doivent toujours être lancées de la même manière.
> Exemple :
```bash
docker run -p 3000:3000 my-image echo hello # avec CMD, la commande echo hello écrase la commande node app.js, l'application ne se lance pas
docker run -p 3000:3000 my-image # avec ENTRYPOINT, la commande node app.js est exécutée même si on ne la précise pas dans la commande docker run
``