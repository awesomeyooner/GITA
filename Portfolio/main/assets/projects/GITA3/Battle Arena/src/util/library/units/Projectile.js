class Projectile extends Entity{

    constructor(size, maxBounces = 0, speed = 3, health = 1, color = "blue"){
        super(
            size, //size
            0, //x
            0, //y
            false, //is active
            speed, //speed
            health, //health
            color //color
        );

        this.bounces = 0;
        this.maxBounces = maxBounces;
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

        if(!super.update())
            return;
        
        this.move();
        this.constrainMovement();

        if(this.bounces > this.maxBounces){
            this.isActive = false;
            this.bounces = 0;
        }

        this.drawEntity();
    }   

    shoot(origin, direction){
        this.setPoint(origin);
        this.setHeading(direction.withMagnitude(this.speed));
        this.isActive = true;
        this.health = this.maxHealth;
        this.bounces = 0;
    }

    // collides(object, runnable = () => {}, extraConditional = (projectile) => true){

    //     if(super.collides(object) && extraConditional(this)){
    //         this.isActive = false;
            
    //         runnable();

    //         return true;
    //     }
    //     else
    //         return false;
    // }
}