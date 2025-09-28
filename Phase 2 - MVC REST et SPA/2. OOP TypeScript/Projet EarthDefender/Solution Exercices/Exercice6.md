
#### Solution Exercice 6
<pre>









</pre>
```ts
private player : Player;
public start() : void{
        this.context.clearRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);

        // J'instancie le GameObject
        this.player = new Player(this);
        // Je le dessine
        this.draw(player);

    }
```