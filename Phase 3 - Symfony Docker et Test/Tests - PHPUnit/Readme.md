<!-- ![schéma de la pyramide de test](test-pyramid.png) -->

# Test avec PHPUnit

## Documentation

- Symfony : https://symfony.com/doc/current/testing.html
- PHPUnit : https://docs.phpunit.de/en/13.1/
- Commande d'assertation : https://docs.phpunit.de/en/13.1/assertions.html

## Ligne de commande

### Créer un test

```bash
symfony console make:test
```

- *Si vous n'injecter aucun service, repo ou autre dans votre test selectionnez : `Unit Test`*
- ***Si vous injecter un service**, repo ou autre dans votre test selectionnez : `Test Case`*

### Lancer les tests

```bash
php bin/phpunit
```

## Objectif 

1. Forkez et clonez le projet suivant : https://github.com/CHAOUCHI/phase3-testing-exercices
2. Je vous ai créer des services et des classe de Test il vous faut remplir les méthodes de test avec les bonnes assertions pour que les tests passent.

