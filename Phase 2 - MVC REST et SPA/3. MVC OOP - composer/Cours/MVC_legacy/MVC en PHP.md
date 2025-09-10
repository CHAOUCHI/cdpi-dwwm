


# VI - Ajouter de nouvelles pages
Dans le pattern MVC l'ajout d'une nouvelle page signifie l'ajout d'une nouvelle méthode à un controleur. Si le controleur n'existe pas il vous faut le créer.

Partez de l'exemple de MVC vierge disponible sur mon github juste ici : https://github.com/CHAOUCHI/sample-mvc.git

## Ajouter un controleur
Vous pouvez vous basez sur les "samples" de `model` et `controller` présent dans le github. Egalement les parties de ce cours sur l'ajout du controleur ProductController et de la méthode show pour la route /product/show.

1. Si néccessaire créez un modèle dans app/model
2. Créez un fichier dans /app/controller, ce fichier contient une nouvelle classe Controller par exemple : PokemonController pour les routes qui commence par /pokemon.
3. Créez une méthode dans le Controller, par exemple pour la route pokemon/add créez la méthode PokemonController::add
4.  Ajouter une nouvelle route au Router du fichier /app/Router.php dans le switch, cette route doit return une instance du Controller précédement créez.
5. Si vous avez besoin d'un nouvelle page à partir du controleur, créez simplement une nouvelle méthode dans votre Controller et tout fonctionne directement. Attention cependant cette nouvelle méthode doit afficher une vue avec require_once()

# A propos des frameworks
Vous l'avez surement remarquez, mettre en place un MVC est plutot fastidieux et même une fois le MVC mit en place l'ajout de Controller et de méthodes est une actions plutot complexe. On appelle ces actions le code *boilerplate*, c'est à dire du code qui ne répond pas directement au besoin du projet mais qui est neccessaire pour faire fonctionner l'application.

Pour éviter d'avoir à ecrire tout ce code *boilerplate* on a inventé les frameworks. C'est à dire un gros paquet de code *boilerplate* déjà coder dans lequel vous allez juste rajouter le code qui vous interesse comme votre route et vos vues par exemple.

Un framework fournit également souvent un programme en ligne de commande appelé CLI. Ce programme permet via des lignes de commandes dans la console de créer à votre place le code *boilerplate*.

Par exemple avec le Framework PHP Symfony, l'ajout d'un `Controller` ce fin comme ceci :
```bash
symfony console make:controller ProductController
```
Symfony nous génère alors le code suivant que nous pouvont modifier :
```php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    #[Route('/product', name: 'app_product')]
    public function index(): Response
    {
        return $this->render('product/index.html.twig', [
            'controller_name' => 'ProductController',
        ]);
    }
}
```

Les framework sont utilisez dans pratiquement tout les projets informatiques car il permettent un gain de temps obligatoire, un sécruité supérieur du code et une norme de codage déjà défini par le framework ce qui assure du code clean et lisible par tous.

Les framework PHP les plus connu sont :
- Symfony, le big boss des framework PHP Symfony est le framework le plus complet mais également le plus *"difficile"* à apprendre.
- Laravel, plus simple que Symfony mais moins complet.
- Slim Framework, c'est le plus facile à utiliser il permet de créer des API REST rapidement et sans trop d'effort.

<!-- 

### III - Contrôleur et vue
6. **Créer un contrôleur et une vue.**
7. Tester le contrôleur dans App pour afficher une vue en fonction de valeurs rentrées en dur dans le code.
8. **Extraire** de l'**url**
    - le nom d'un **contrôleur**
    - le nom de la **méthode** 
    - les **paramètres**.
9. Tester mon controlleur avec ces valeurs extraites.

### IV - Routing
10. Créer une **classe Router** qui va instancier le bon contrôleur en fonction des valeurs extraites de l'url.
11. Tester mon application avec le Router
### V - Page d'accueil et erreur 404
12. Solidifier mon application avec
    - un **Contrôleur par défaut**, une page d'accueil
    - une **Contrôleur error 404**
### VI - Ajouter de nouvelles pages
13. Ajouter une nouvelle méthode au contrôleur
14. Ajouter un nouveau contrôleur. -->




<!-- 
- Design pattern MVC
- Separation of concern
- Model (CRUD des Entity)
    - Gére la BDD
    - Une table est un model ex : UserModel
    - Une entité est une ligne de la table UserEntity
    - Un model possède des méthodes publique pour faire un CRUD et genere des entités si besoin
- Vue ( Page HTML)
    - Gère l'affichage
    - Une vue est une page HTML qui instancie un Controller
    - Une vue possède un route ("URL")
- Controller (Logique métier)
    - Relie le Model à la Vue
    - Controller Utilise les Model pour récupérer des données (souvent des Entité).
    - Il possède des méthodes et attributs publique accessible dans la vue
- Exemple de structure MVC Blog
    - index.php // stating point of the app
    - /models
        - /Category
            - CategoryModel.php
            - CategoryEntity.php
        - /Article
            - ArticleModel.php
            - ArticleEntity.php
    - /vues
        - /Home
            - HomeVue.php
            - HomeVue.css
            - HomeVue.js
        - /Blog
            - BlogVue.php
            - BlogVue.css
            - BlogVue.js
    - /controller
        - HomeController.php
        - BlogController.php -> ArticleModel


# Idée TP
- Blog Article
- Boutique en ligne
- User Login Logout space -->