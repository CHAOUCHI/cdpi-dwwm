# Phase 1 - Fondamentaux du PHP

## Objectifs

À la fin de cette phase, vous serez capable de :

- Mettre en production un site web statique.
- Connecter du code PHP à une base de données SQL.
- Mettre en place un serveur PHP qui génère du HTML à partir d'une persistance de données(SQL).
- Gérer les sessions utilisateurs d'un site (Authentification)
- Créer une table `User` et une relation OneToMany entre un utilisateur et un autre objet métier, pour récupérer une données appartenant un utilisateur spécifique (l'utilisateur connecté).

## Projets 

- Quizz - Algo PHP et CLI
- 4 Maquettes - HTML/CSS(flex, grid, mediaquery, keyframes) et GitHubPages
  - Portfolio (flex, mediaquery)
  - Shop (grid)
  - Service (**)
  - Service (++ position absolute)
- PhotoTek - PHP Server : $POST form-data, readDir, writeFile, et $GET
  - catalogue-photo.php
  - get-photo.php?name=
  - post-photo.php
- TodoList - session ,SQL (User||--o{Task)
  - task-list.php
  - ppost-task.php
  - get-task.php?id=


## Projets à réaliser (5 semaines)

Pour chaque projet principal, un cours détaillé en markdown et une fiche d'exercices seront fournis. Des exercices complémentaires sur w3schools sont également recommandés.

### 1. Quizz - Algo PHP et CLI
- Créez un petit quiz interactif en ligne de commande (CLI) pour réviser les bases de l'algorithmique en PHP.

### 2. Maquettes HTML/CSS & Déploiement GitHub Pages
- Réalisez 4 maquettes web, chacune mettant en avant des techniques CSS spécifiques :
  - **Portfolio** : Utilisation de Flexbox et media queries pour l'adaptabilité mobile.
  - **Shop** : Mise en page avec CSS Grid.
  - **Service** : Maquette simple (niveau débutant).
  - **Service++** : Version avancée avec positionnement absolu.
- Publiez chaque maquette sur GitHub Pages.

### 3. PhotoTek - Mini application de gestion de photos en PHP
- Développez une application web simple permettant :
  - **catalogue-photo.php** : Afficher la liste des photos disponibles (lecture d'un dossier avec `readDir`).
  - **get-photo.php?name=** : Afficher une photo précise selon le nom passé en paramètre GET.
  - **post-photo.php** : Ajouter une nouvelle photo via un formulaire HTML (`$POST` en `form-data`), puis enregistrer le fichier sur le serveur (`writeFile`).
- **Conseil** : Précisez bien le fonctionnement attendu (ex : structure du dossier, format des fichiers, gestion des erreurs).

### 4. TodoList - Gestion de tâches avec sessions et SQL
- Créez une application de gestion de tâches multi-utilisateurs :
  - **task-list.php** : Afficher les tâches de l'utilisateur connecté (stocké en session).
  - **ppost-task.php** : Ajouter une nouvelle tâche (requête POST).
  - **get-task.php?id=** : Afficher le détail d'une tâche.
- Modélisez la relation SQL : un utilisateur possède plusieurs tâches (`User` 1--* `Task`).

---

**Remarque** : Avant chaque projet, consultez le cours associé et réalisez les exercices pour bien comprendre les nouveaux concepts.

<!-- 
---

## 1. Mettre en production un site web statique

Un site statique est composé de fichiers HTML, CSS et JS. Pour le mettre en production :

1. Créez un dossier avec vos fichiers :
    ```
    /mon-site/
      index.html
      style.css
      script.js
    ```
2. Placez ce dossier sur un serveur web (Apache, Nginx, etc.).
3. Accédez à `http://localhost/mon-site/index.html` pour voir votre site.

**Exemple de fichier `index.html` :**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Mon Site Statique</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Bienvenue sur mon site statique !</h1>
  <script src="script.js"></script>
</body>
</html>
```

---

## 2. Générer du HTML avec PHP et persistance de données

### Installer un serveur PHP

- Installez XAMPP, WAMP, ou utilisez la commande :
  ```
  php -S localhost:8000
  ```
- Placez vos fichiers `.php` dans le dossier du serveur.

### Exemple de génération de HTML avec PHP

```php
<?php
// data.php
$users = [
    ['id' => 1, 'name' => 'Alice'],
    ['id' => 2, 'name' => 'Bob'],
];
?>
<!DOCTYPE html>
<html>
<head>
  <title>Liste des utilisateurs</title>
</head>
<body>
  <h1>Utilisateurs</h1>
  <ul>
    <?php foreach ($users as $user): ?>
      <li><?= htmlspecialchars($user['name']) ?></li>
    <?php endforeach; ?>
  </ul>
</body>
</html>
```

---

## 3. Connexion à une base de données SQL avec PDO

### Créer une base de données et une table

```sql
CREATE DATABASE testdb;
USE testdb;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```

### Connexion PDO et requêtes préparées

```php
<?php
$pdo = new PDO('mysql:host=localhost;dbname=testdb', 'root', 'motdepasse');
$stmt = $pdo->prepare('INSERT INTO users (name) VALUES (:name)');
$stmt->execute(['name' => 'Charlie']);

$stmt = $pdo->prepare('SELECT * FROM users');
$stmt->execute();
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<ul>
  <?php foreach ($users as $user): ?>
    <li><?= htmlspecialchars($user['name']) ?></li>
  <?php endforeach; ?>
</ul>
```

---

## 4. Table User et relation OneToMany

### Exemple : Un utilisateur et ses articles

#### Création des tables

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255),
    content TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

#### Insérer des données

```sql
INSERT INTO users (name) VALUES ('Alice');
INSERT INTO articles (user_id, title, content) VALUES (1, 'Premier article', 'Contenu...');
```

#### Récupérer les articles d'un utilisateur

```php
<?php
session_start();
$_SESSION['user_id'] = 1; // Simuler un utilisateur connecté

$pdo = new PDO('mysql:host=localhost;dbname=testdb', 'root', 'motdepasse');
$stmt = $pdo->prepare('SELECT * FROM articles WHERE user_id = :user_id');
$stmt->execute(['user_id' => $_SESSION['user_id']]);
$articles = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<ul>
  <?php foreach ($articles as $article): ?>
    <li><?= htmlspecialchars($article['title']) ?></li>
  <?php endforeach; ?>
</ul>
```

---

## Conclusion

En suivant ce cours et en testant les exemples, vous serez capable de :

- Déployer un site statique.
- Générer du HTML dynamique avec PHP.
- Utiliser PDO pour interagir avec une base de données.
- Gérer des relations entre tables et exploiter les sessions PHP pour personnaliser l'affichage selon l'utilisateur connecté.
 -->
