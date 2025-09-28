

##### Solution Exercice 13
*/src/Classes/GameObjects/Star.ts*
```ts
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";

export class Star extends GameObject{
    protected start(): void {
        this.setImage(Assets.getStarImage());
        this.setPosition({
            x : Math.random() * this.getGame().CANVAS_WIDTH,
            y : Math.random() * this.getGame().CANVAS_HEIGHT - 10
        });
    }
    protected update(): void {
        this.setPosition({
            x : this.getPosition().x,
            y : this.getPosition().y+1
        });
        if(this.getPosition().y > this.getGame().CANVAS_HEIGHT){
            this.setPosition({
                x : this.getPosition().x,
                y : 0
            });
        }
    }
}
```