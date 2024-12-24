class Target extends Entity{

    constructor(size, speed = 3, color = "blue"){
        super(
            size, //size
            0, //x
            0, //y
            true, //is active
            speed, //speed
            100, //health
            color //color
        );
    }

    constrainMovement(w = width, h = height){ 
        if(Math.abs(this.getCartesianX() + (this.size / 2)) > w / 2 ){ //horizontal
            this.getHeading().timesX(-1);
            this.bounces++;
        }
            
        if(Math.abs(this.getCartesianY() + (this.size / 2)) > h / 2){ //vertical
            this.getHeading().timesY(-1);
            this.bounces++;
        }
    }

    update(){

        if(!this.isActive)
            return;
        
        this.move();
        this.constrainMovement();

        this.drawEntity();
    }   

    collides(object, runnable, extraConditional = (bullet) => true){

        if(super.collides(object) && extraConditional(this)){
            this.isActive = false;
            
            runnable();

            return true;
        }
        else
            return false;
    }
}