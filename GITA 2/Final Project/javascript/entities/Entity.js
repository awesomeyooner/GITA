class Entity{

    constructor(canvasX, canvasY, pathToImage){
        this.context = null;
        this.canvas = null;
        this.id = 0;

        this.x = 0;
        this.y = 0;

        this.canvasX = canvasX;
        this.canvasY = canvasY;

        this.image = new Image();
        this.image.src = pathToImage;

        this.isAlive = true;

        this.isBinded = false;

        this.size = 50;

        this.healthCap = 5;
        this.internalHealth = this.healthCap;

        this.speed = 0.15;
    }

    initialize(context, canvas){
        this.context = context;
        this.canvas = canvas;
    }

    respawn(place){
        if(place){
            this.x = Math.floor(Math.random() * this.canvasX) - (this.canvasX / 2);
            this.y = Math.floor(Math.random() * this.canvasY) - (this.canvasY / 2);
        }

        this.isAlive = true;
        this.internalHealth = this.healthCap;
    }

    respawnAround(angle, radius, focal){
        var displacementX = Math.cos(angle) * radius;
        var displacementY = Math.sin(angle) * radius;

        this.respawn(false);
        this.place(focal.x + displacementX, focal.y + displacementY);
    }

    update(){
        if(this.internalHealth <= 0)
            this.isAlive = false;
        else
            this.isAlive = true;

        this.place(this.x, this.y);
    }

    kill(){
        this.internalHealth = 0;
        this.isAlive = false;
    }

    scatter(){
        this.place(
            (Math.random() * this.canvasX) - (this.canvasX / 2),
            (Math.random() * this.canvasY) - (this.canvasY / 2)
        );
    }

    place(newX, newY){
        if(this.isAlive){
            this.x = newX;
            this.y = newY;

            this.context.drawImage(
                this.image,
                (this.x + (this.canvasX / 2)) - (this.size / 2), 
                -(this.y - (this.canvasY / 2)) - (this.size / 2), 
                this.size, 
                this.size
                );

            //this.writeTextCartesian(this.id, this.x -5, this.y + 50);
            this.drawRectangle(this.x - (this.size / 2), this.y - 40, this.internalHealth * 10, 5, "#FF0000");
        }
    }

    pursuit(object){
        var deltaX = this.x - object.x;
        var deltaY = this.y - object.y;
        
        var angle = Math.PI + Math.atan2(deltaY, deltaX);

        var xSpeed = Math.cos(angle) * this.speed;
        var ySpeed = Math.sin(angle) * this.speed;
        

        this.place(
            xSpeed + this.x,
            ySpeed + this.y
        );
    }
    

    getDistanceTo(object){
        return Utility.getDistance(object, this);
    }

    writeText(text, x, y){
        context.font = "30px Arial";
        context.fillStyle = "#FF0000";
        context.fillText(text, x, y);
    }
    
    writeTextCartesian(text, x, y){
        writeText(
            text,
            x + (canvasBoundX / 2),
            -(y - (canvasBoundY / 2))
        )
    }

    drawRectangle(x, y, width, height, color){
        this.context.fillStyle = color;
        this.context.fillRect(
            Utility.toCartesianX(x, this.canvasX), 
            Utility.toCartesianY(y, this.canvasY), 
            width, 
            height);
    }

    
}