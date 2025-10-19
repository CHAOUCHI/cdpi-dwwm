
*GameObject.ts*
```ts
import { Assets } from "../Assets.js";
import { Game } from "../Game.js";
import { Position } from "../Position.js";

export class GameObject {

    // ...
    
    protected collide(other:GameObject){}

    public callCollide(other : GameObject):void{
        this.collide(other);
    }


}
```

*Alien.ts*
```ts
import { Assets } from "../Assets.js"
import { GameObject } from "./GameObject.js"
import { Player } from "./Player.js";

export class Alien extends GameObject {
    // ...
    // +++
    protected collide(other: GameObject): void {
        if (other instanceof Player) {
            console.log("Miam Miam !")
            this.getGame().over()
        }
    }
}
```

*Game.ts*
```ts
import { Alien } from "./GameObjects/Alien.js";
import { GameObject } from "./GameObjects/GameObject.js";
import { Player } from "./GameObjects/Player.js";
import { Star } from "./GameObjects/Star.js";
import { Input } from "./Input.js";

export class Game {
    // ...

    // +
    public over() : void{
        alert("GameOver!")
        window.location.reload();
    }



}
```
