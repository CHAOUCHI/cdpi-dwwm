
*Assets.ts*
```ts
 public static getLaserImage() : HTMLImageElement{
        const image: HTMLImageElement = document.querySelector("img#asset_laser");
        if(image == null) throw Error("No star asset found");

        return image;
    }
```

*Input.ts*
```ts
export class Input {

    private static axisX : Direction = 0;
    private static isShooting : boolean = false;

    public static getAxisX() : Direction{
        return this.axisX;
    }

    public static getIsShooting() : boolean {
        return Input.isShooting;
    }

    public static listen(){
        // Codez ici...
        window.addEventListener("keydown",(event)=>{
            console.log(event.key)
            switch (event.key) {
                case "d":
                case "D":
                    Input.axisX = 1;
                    
                    break;
                case "q":
                case "Q":
                    Input.axisX = -1;
                    break;
                case " ":
                    Input.isShooting = true;
                    break;
                default:
                    break;
            }
        });
        window.addEventListener("keyup",(event)=>{
            switch (event.key) {
                case "d":
                case "D":
                case "q":
                case "Q":
                    Input.axisX = 0;
                    break;
                case " ":
                    Input.isShooting = false;  
                    break;
                default:
                    break;
            }
        });
    }
}

export type Direction = 0 | 1 | -1;
```

*Laser.ts*
```ts
import { Assets } from "../Assets.js";
import { Alien } from "./Alien.js";
import { GameObject } from "./GameObject.js";
import { Player } from "./Player.js";

export class Laser extends GameObject{

    protected start(): void {

        this.setImage(Assets.getLaserImage());
        this.setPosition({
            x : this.getGame().getPlayer().getPosition().x,
            y : this.getGame().getPlayer().getPosition().y - this.getImage().height
        })
    }

    protected update(): void {
        this.setPosition({
            x : this.getPosition().x,
            y : this.getPosition().y -10,
        });

        if(this.getPosition().y < 0){
            this.getGame().destroy(this);
        }
    }

    protected collide(other: GameObject): void {
        if(other instanceof Alien){
            this.getGame().destroy(other);
            this.getGame().destroy(this);
        }
    }
}
```

```ts
import { Assets } from "../Assets.js";
import { Input } from "../Input.js";
import { GameObject } from "./GameObject.js";
import { Laser } from "./Laser.js";

export class Player extends GameObject {

    public lastShootTime  : number = Date.now();
    private shootInterval_ms : number = 200;
    protected start(): void {
        this.setImage(Assets.getPlayerImage());
        // Codez ici...
        this.setPosition({ 
            x: this.getGame().CANVAS_WIDTH/2 - this.getImage().width/2,
            y: this.getGame().CANVAS_HEIGHT - this.getImage().height - 10 
        });
    }

    protected update() : void{
        // Codez ici...
        this.setPosition({
            x : this.getPosition().x+10 * Input.getAxisX(),
            y : this.getPosition().y
        });
        console.log(Input.getAxisX());

        // +
        if(
            Input.getIsShooting() &&
            (
                (Date.now() - this.lastShootTime) >= this.shootInterval_ms
            )
        ){
            this.getGame().instanciate(new Laser(this.getGame()));
            this.lastShootTime = Date.now();
        }


    }
}
```
