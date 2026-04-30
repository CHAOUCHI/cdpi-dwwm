
## Pré-requis

1. Si ce n'est pas déjà fait, installer le composant Mailer de Symfony
```bash
composer require symfony/mailer
```

2. Configurer l'envoie de mail synchrone dans packages/messenger.yaml
```yaml
framework:
    messenger:
        failure_transport: failed

        transports:
            # +++++++++
            sync: 'sync://'
            # https://symfony.com/doc/current/messenger.html#transport-configuration
            async:
                dsn: '%env(MESSENGER_TRANSPORT_DSN)%'
                retry_strategy:
                    max_retries: 3
                    multiplier: 2
            failed: 'doctrine://default?queue_name=failed'

        default_bus: messenger.bus.default

        buses:
            messenger.bus.default: []

        routing:
            # +++++++++ Modifier async vers sync pour utiliser le mode synchrone défini ci-dessus
            Symfony\Component\Mailer\Messenger\SendEmailMessage: sync
            Symfony\Component\Notifier\Message\ChatMessage: async
            Symfony\Component\Notifier\Message\SmsMessage: async

            # Route your messages to the transports
            # 'App\Message\YourMessage': async
```

3. Symfony Mailer enregistre les mails dans la base de données, il est donc nécessaire d'avoir une base de données configurée et migrée pour pouvoir utiliser cette fonctionnalité.
```bash
symfony console doctrine:migrate:migrate
```

<!-- - Installer le client HTTP amphp qui est utilisé par Symfony Mailer pour envoyer les mails, c'est un client HTTP asynchrone qui permet d'envoyer les mails de manière performante.
```bash
composer require amphp/http-client:^5
``` -->


- Docker compose est aussi nécessaire pour faire tourner le container mailpit qui va nous permettre de visualiser les mails envoyés par notre application en localhost, cela evite de configurer/payer un vrai serveur SMTP et d'envoyer de vrais mails pendant le développement.

Symfony à déjà ecrite votre compose.override.yml pour faire tourner le container mailpit.
```bash
  mailer:
    image: axllent/mailpit
    ports:
      - "1025"
      - "8025"
    environment:
      MP_SMTP_AUTH_ACCEPT_ANY: 1
      MP_SMTP_AUTH_ALLOW_INSECURE: 1
```

1. Lancer le container mailpit
```bash
docker compose up
``` 

2. Puis modifier le fichier .env pour configurer le DSN de mailer pour utiliser le container mailpit :
```env
###> symfony/mailer ###
MAILER_DSN=smtp://localhost:33021
###< symfony/mailer ###
```
> 33021 est le port exposé par le container mailpit pour recevoir les mails, il est défini dans le fichier compose.override.yml
> Verifiez le port bind à 1025 dans Docker Desktop pour etre verifier quel port est exposé sur votre machine.

## Envoie d'un mail
1. Ouvrez sur votre navigateur localhost:46517 pour accéder à l'interface de mailpit qui vous permettra de visualiser les mails envoyés par votre application.

2. Dans un controller, injecter le service MailerInterface et utilisez le constructeur new Email() pour fabriquer un email et la méthode send() pour envoyer un mail :
```php
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;

final class MailController extends AbstractController
{
    #[Route('/mail', name: 'app_mail')]
    public function index(MailerInterface $mailer): Response
    {
        $email = new Email();
        $email->from("website@cool.com")
            ->to("massi.chaouchi@gmail.com")
            ->subject("Ceci est un mail Test sujet")
            ->text("Ceci est un mail Test text");

        $mailer->send($email);


        return $this->render('mail/index.html.twig', [
            'controller_name' => 'MailController',
        ]);
    }
}
```

1. Recharger la page localhost:8000/mail pour déclencher l'envoie du mail, puis aller sur localhost:46517 pour voir le mail dans l'interface de mailpit.

![alt text](image-1.png)

## Envoyer un template twig
Doc : https://symfony.com/doc/current/mailer.html#html-content

Précedement j'ai utiliser la méthode public text de la class Email pour envoyer du texte brut mais il est aussi possible d'envoyer un template twig en utilisant la méthode htmlTemplate de la class Email :
```php
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;

final class MailController extends AbstractController
{
    #[Route('/mail', name: 'app_mail')]
    public function index(MailerInterface $mailer): Response
    {
        $email = new Email();
        $email->from("website@cool.com")
            ->to("massi.chaouchi@gmail.com")
            ->subject("Ceci est un mail Test sujet")
            ->htmlTemplate('dossier/vue.html.twig');

        $mailer->send($email);


        return $this->render('mail/index.html.twig', [
            'controller_name' => 'MailController',
        ]);
    }
}
```

