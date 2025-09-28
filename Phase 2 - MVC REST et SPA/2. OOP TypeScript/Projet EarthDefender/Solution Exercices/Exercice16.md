
Pour supprimer un GameObject du tableau gameObjects, on peut utiliser la méthode filter() des tableaux en TypeScript.

Je vais ainsi filter tout les gameobjects qui ne sont pas celui que je veux supprimer.

La méthode filter renvoie donc un nouveau tableau qui ne contient pas le gameObject que je veux supprimer.

Je stocke ensuite ce nouveau tableau dans this.gameObjects pour mettre à jour le tableau des gameObjects.

> Rappel : Le tableaux de gameObjects est mis à jours à chaque frame.

```ts
class Game{
  // ...
  public destroy(gameObject : GameObject) : void {
          this.gameObjects = this.gameObjects.filter(go=>go!=gameObject);
  }
  // ...
}
```
 
 