# Démo des projets à réaliser

Le projet Twelve project est un peu particulier car il est divisé en petits projets à réaliser.

Pour chaque projet vous avec un Sujet dans le dossier `Sujet` et un dossier `Solution` qui contient la solution.

## Fork et clonez ce repository
Il est obligatoire de forker ce repository et de le cloner en local pour faire les projets.

> Je rappel que tout les projets de l'année doivent être présent sur votre github personnel !

Template du projet : https://github.com/CHAOUCHI/cdpi-dwwm-p2-module-js-dom-twelve-projet

1. Une fois clonez démarrez un serveur python pour voir tout les dossiers du projets dans le navigateur:

```bash
python3 -m http.server 8001
```

2. Rendez vous sur http://localhost:8001 pour voir vos projets;

## Pré-requis
Les twelve projet sont lié au cours DOM car il vous demanderons d'intéragir en JavaScript avec :
- Le Contenu HTML (texte ou balises enfants)
- Les attributs HTML (src, href, class, id, data-*)
- Les évènements (click, scroll, ...)



## Démo des projets

1. Lancez la commande docker suivante pour lancer un container contenant les projets fini :

```
docker run -p 9090:80 --name twelve-project chaouchi/twelve-prod
```

> Si vous rallumez votre ordinateur le container se sera fermé, ne refaite pas run mais plutot start
> ```
> docker start twelve-project
> ```

2. Ouvrez votre navigateur et allez à l'adresse http://localhost:9090 et consultez les projets à réaliser.
