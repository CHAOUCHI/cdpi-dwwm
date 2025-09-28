
#####  Solution Exercice 12
<pre>










</pre>
```ts
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

    // Listen to input
    Input.listen();
    // Start game loop
    this.loop();
}
```