import { Alien } from "./GameObjects/Alien.js";
import { GameObject } from "./GameObjects/GameObject.js";
import { Player } from "./GameObjects/Player.js";
import { Star } from "./GameObjects/Star.js";
import { Input } from "./Input.js";

export class Game{
    // Public attributs
    
    // Private attributs
    private context : CanvasRenderingContext2D;
    public readonly CANVAS_WIDTH : number = 900;
    public readonly CANVAS_HEIGHT : number = 600;
    private nbAliens : number = 10;


    private player : Player;
    private gameObjects : GameObject[] = [];
    
    constructor(){
        // Init Game canvas
        const canvas : HTMLCanvasElement = document.querySelector("canvas");
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        this.context = canvas.getContext("2d");
    }

    public start() : void{
        // Clear context
        this.context.clearRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
    
        this.player = new Player(this);
        this.instanciate(this.player)
    
        for (let i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));
        }
        // for (let i = 0; i < 100; i++) {
        //     this.instanciate(new Star(this));
        // }
        
    
        // Listen to input
        Input.listen();
        // Start game loop
        this.loop();
    }
    public instanciate(gameObject : GameObject) : void{
        this.gameObjects.push(gameObject);
    }   
    
    private draw(gameObject : GameObject){
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getImage().width,
            gameObject.getImage().height
        );
    }

    private loop(){
        setInterval(()=>{
            // Clear context
            this.context.clearRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
            this.context.fillStyle = "#141414";
            this.context.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
            
            this.gameObjects.forEach(go=>{
                go.callUpdate();
                this.draw(go);
                
                this.gameObjects.forEach(other=>{
                    if(go !== other && go.overlap(other)){
                        go.callCollide(other);
                    }
                });
            })

        },10); 
    }

}