
##### Solution Exercice 11
<pre>












</pre>
```ts
private loop(){
        setInterval(()=>{
            console.log("Frame!");
            // Clear context
            this.context.clearRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
            this.context.fillStyle = "#141414";
            this.context.fillRect(0,0,this.CANVAS_WIDTH,this.CANVAS_HEIGHT);
            
            this.gameObjects.forEach(go=>{
                go.callUpdate();
                this.draw(go);
            })

        },10); 
    }
```