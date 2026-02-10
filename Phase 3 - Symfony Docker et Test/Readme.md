# Idée de projets 


| Nom du projet | Features clés | Fonctionnalités Symfony & Bibliothèques (Stack Entreprise) |
| --- | --- | --- |
| **Tasklist** (Le Starter) | - Tâches épinglées<br><br>- Recherche & Filtres<br><br>- Priorités & Dossiers<br><br>- Mode hors-ligne | **Doctrine ORM** (Entités/Repo), **Form Component**, **Twig** (ou API Platform), **MakerBundle**, **Symfony Security** (Auth de base), **PHPUnit** (Tests unitaires). |
| **Instant-Drive : Location de voitures** | - Réservation de véhicules<br>- Calendrier de dispo<br>- Upload de documents (permis)<br>- Rappels de maintenance | **EasyAdmin** (Back-office rapide), **VichUploaderBundle** (Gestion fichiers), **Validator** (Contraintes métier), **Symfony Mailer** (Notifications), **DateInterval** logic. |<br>- Upload de documents (permis)<br>- Rappels de maintenance | **EasyAdmin** (Back-office rapide), **VichUploaderBundle** (Gestion fichiers), **Validator** (Contraintes métier), **Symfony Mailer** (Notifications), **DateInterval** logic. |
| *pas sûr hesitation pour stripe et API Platform* **MarketPlace "Local First"** | - Catalogue produits<br>- Panier & Commandes<br>- Système de notation/avis <br>- Gestion de stock | **Relations complexes** (ManyToMany), **API Platform** (pour le lien React), **Security Voters** (qui peut modifier quoi ?), **Messenger** (Traitement asynchrone des mails). |
| **SaaS de Facturation** | - Génération PDF<br>- Abonnement (Free/Pro)<br>- Dashboard stats<br>- Export de données | **Workflow Component** (États des factures : devis > payé), **Service Layer** (Calculs complexes), **KnpSnappyBundle** (PDF), **Clock** (pour tester le temps). |
| **Plateforme de Support (Ticketing)** | - Attribution auto de tickets<br>- Historique des échanges<br>- SLA (délais de réponse)<br>- API pour client externe | **Custom Commands** (Console), **Scheduler** (Tâches chronométrées), **JWT Authentication** (LexikJWT), **Panther** (Tests E2E/Navigateur). |<br>- SLA (délais de réponse)<br>- API pour client externe | **Custom Commands** (Console), **Scheduler** (Tâches chronométrées), **JWT Authentication** (LexikJWT), **Panther** (Tests E2E/Navigateur). |

