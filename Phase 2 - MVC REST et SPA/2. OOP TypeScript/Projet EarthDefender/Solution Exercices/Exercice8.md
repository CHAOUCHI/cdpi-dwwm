#### Solution Exercice 8
<pre>












</pre>

*/src/Classes/Input.ts*
```ts
export class Input{
    private static axisX : Direction = 0;
    public static getAxisX(){
        return this.axisX;
    }
    public static listen(){
        // Key Down
        document.addEventListener("keydown",(event)=>{
            switch (event.key) {
                // Go right
                case "d":
                case "D":
                    Input.axisX = 1;
                    break;
                // Go left
                case "q":
                case "Q":
                    Input.axisX = -1;
                    break;
                default:
                    break;
            }
        });

        // Key Realeased
        document.addEventListener("keyup",(event)=>{
            switch (event.key) {
                // Player Stops
                case "d":
                case "D":
                case "q":
                case "Q":
                    Input.axisX = 0;
                break;
                default:
                    break;
            }
        });
    }
}

type Direction = 0 | 1 | -1;
```
