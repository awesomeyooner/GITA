class Hornet{

    constructor(canvasBoundX, canvasBoundY){
        this.canvas = null;
        this.context = null;

        this.canvasBoundX = canvasBoundX;
        this.canvasBoundY = canvasBoundY;

        this.speed = 2;
        this.isActive = false;
    
        this.x = Math.floor(Math.random() * this.canvasBoundX) - (this.canvasBoundX / 2)
        this.y = Math.floor(Math.random() * this.canvasBoundY) - (this.canvasBoundY / 2)
        this.strength = Math.floor(Math.random() * 25);

        this.image = new Image();       
        this.stinger = new Image();

        this.image.src = "resources/hornet left.png";
        this.stinger.src = "resources/stinger left.png";
    }

    writeText(text, x, y){
        context.font = "30px Arial";
        context.fillStyle = "#FF0000";
        context.fillText(text, x, y);
    }

    update(meat, hornets){
        if(this.isActive){

            if(this.isStrongest(hornets) && this.getActiveHornets(hornets) > 1){
                this.pursuitWeakest(hornets);
            }
            else{
                this.speed = 1;
                this.pursuit(meat.x, meat.y);
            }
        }

    }

    pursuitWeakest(hornets){
        var lowestStrength = 100;
        var hornetID = -1;

        for(var i = 0; i < hornets.length; i++){
            var currentHornet = hornets[i];
            
            if(currentHornet.strength < lowestStrength && currentHornet.isActive){
                lowestStrength = currentHornet.strength;
                hornetID = i;
            }
        }

        this.speed = 1;
        this.pursuit(hornets[hornetID].x, hornets[hornetID].y);
    }

    pursuit(targetX, targetY){
        var deltaX = this.x - targetX;
        var deltaY = this.y - targetY;

        var angle;
        
        angle = Math.PI + Math.atan2(deltaY, deltaX);

        var xSpeed = Math.cos(angle) * this.speed;
        var ySpeed = Math.sin(angle) * this.speed;

        if(xSpeed && ySpeed){
            this.move(xSpeed, ySpeed);
            var x = 0;
        }
        else{
            this.place(this.x, this.y);
        }
    }

    move(xSpeed, ySpeed){
        if(xSpeed > 0){
            this.image.src = "resources/hornet right.png";
            this.stinger.src = "resources/stinger right.png";
        }
        else{
            this.image.src = "resources/hornet left.png";
            this.stinger.src = "resources/stinger left.png";
        }

        this.x += xSpeed;
        this.y += ySpeed;

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

        this.context.drawImage(
            this.stinger,
            (this.x + (this.canvasBoundX / 2)) - this.strength + 5, 
            -(this.y - (this.canvasBoundY / 2)) - this.strength + 35, 
            this.strength, 
            this.strength
            );
    }

    respawn(){
        this.isActive = true;

        this.place(
            Math.floor(Math.random() * this.canvasBoundX) - (this.canvasBoundX / 2),
            Math.floor(Math.random() * this.canvasBoundY) - (this.canvasBoundY / 2)
        );
    }

    isStung(hornets){

        for(var i = 0; i < hornets.length; i++){
            var currentHornet = hornets[i];

            if(
                Math.abs(currentHornet.x - this.x) < 25 &&
                Math.abs(currentHornet.y - this.y) < 25 &&
                currentHornet.strength > this.strength)
                return true;

        }

        return false;
    }

    touchesMeat(meat){
        return Math.abs(meat.x - this.x) < 25 &&
            Math.abs(meat.y - this.y) < 25;
    }

    isStrongest(hornets){
        var highestStrength = 0;

        for(var i = 0; i < hornets.length; i++){
            var currentHornet = hornets[i];

            if(currentHornet.strength > highestStrength)
                highestStrength = currentHornet.strength;
        }

        return this.strength >= highestStrength;
    }

    getActiveHornets(hornets){
        var numAlive = 0;

        for(var i = 0; i < hornets.length; i++){
            if(hornets[i].isActive)
                numAlive++;
        }

        return numAlive;
    }
}