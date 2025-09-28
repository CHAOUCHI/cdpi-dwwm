
##### Solution Exercice 3
```ts
import { GameObject } from "./GameObjects/GameObject.js";

export class Game{
    // Public attributs
    
    // Private attributs
    private context : CanvasRenderingContext2D;
    public readonly CANVAS_WIDTH : number = 900;
    public readonly CANVAS_HEIGHT : number = 600;
    
    constructor(){
        // Init Game canvas
        const canvas : HTMLCanvasElement = document.querySelector("canvas");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }

    // Public methods

    public start() : void{
        // Clear context
        this.context.clearRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
    }

    //  La fonction draw qui affiche un gameObject
    private draw(gameObject : GameObject){
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getImage().width,
            gameObject.getImage().height
        );
    }
}
```