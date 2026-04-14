

<!-- - Installer et compiler Tailwind -->

## Database
- Configurer Symfony : .env
    - SQLite3
- Créer des tables : Entity et migrations
    - make:entity
    - make:migration
    - doctrine:migrations:migrate
- Injection de dépendences :
    - Repository
        - findAll, etc
    - EntityManager
        - persist
        - flush
- Enums Type
- Faire les relations entre les tables
    - make:entity ExistingEntity
- Créer un formulaire
    - make:form
    - $request->getPayload()->get(name)

- Créer un CRUD
    - make:crud

## Security
- Security
    - Autentification
        - make:user
        - make:registration-form
        - make:security:form-login
    - Authorizations 
        - Firewall : form_login,default_target_path,login_path,check_path, logout:path/target,
        - Access control : - {route: ,role: }
    - CSRF
        - Formulaire à la main
            - csrf()
            - $form->isValidCsrfToken()
        - Formulaire automatique
            - make:form

- Injection de dependences :
    - Request
        - getPayload()
    - #CurrentUser()
    - LoggerInterface
    - Repository
    - EntityManager

- Twig Component
    - make:twig:component
    - public attribut
    - getter function
    