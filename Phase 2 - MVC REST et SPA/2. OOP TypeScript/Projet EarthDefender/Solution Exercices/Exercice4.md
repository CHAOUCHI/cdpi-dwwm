
##### Solution Exercice 4
<pre>





</pre>

*/src/Classes/Assets.ts*
```ts
export class Assets{
    public static getDefaultImage() : HTMLImageElement{
        const image : HTMLImageElement = document.querySelector("img#asset_default");
        if(image == null){
            throw Error("No assets found");
        }
        return image;
    }
    // Ajout du getter d'asset player
    public static getPlayerImage() : HTMLImageElement{
        const image : HTMLImageElement = document.querySelector("img#asset_player");
        if(image == null){
            throw Error("No assets found");
        }
        return image;
    }
}
```