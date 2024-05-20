class Meat{

    constructor(canvasBoundX, canvasBoundY){
        this.canvas = null;
        this.context = null;

        this.canvasBoundX = canvasBoundX;
        this.canvasBoundY = canvasBoundY;

        this.x = Math.floor(Math.random() * this.canvasBoundX) - (this.canvasBoundX / 2);
        this.y = Math.floor(Math.random() * this.canvasBoundY) - (this.canvasBoundY / 2);

        this.image = new Image();

        this.image.src = "resources/meat.png";
    }

    update(){
        this.place(this.x, this.y);
    }

    respawn(){
        this.place(
            Math.floor(Math.random() * this.canvasBoundX) - (this.canvasBoundX / 2),
            Math.floor(Math.random() * this.canvasBoundY) - (this.canvasBoundY / 2)
        );

        this.place(this.x, this.y);
    }

    place(x, y){
        this.x = x;
        this.y = y;

        this.context.drawImage(
            this.image,
            (this.x + (this.canvasBoundX / 2)) - 25, 
            -(this.y - (this.canvasBoundY / 2)) - 25, 
            50, 
            50
            );
    }




}