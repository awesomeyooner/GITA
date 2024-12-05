class Bullet extends Entity{

    #speed;
    #bounces = 0;
    #maxBounces;

    constructor(size, maxBounces = 5, speed = 3){
        super(size, 0, 0, false);
        this.#maxBounces = maxBounces;
        this.#speed = speed;
    }

    getSpeed(){
        return this.#speed;
    }

    setSpeed(newSpeed){
        this.#speed = newSpeed;
    }

    getBounces(){
        return this.#bounces;
    }

    setBounces(newBounce){
        this.#bounces = newBounce;
    }

    constrainMovement(w = width, h = height){ 
        if(Math.abs(this.getCartesianX() + (this.getSize() / 2)) > w / 2 ){ //horizontal
            this.getHeading().timesX(-1);
            this.#bounces++;
        }
            
        if(Math.abs(this.getCartesianY() + (this.getSize() / 2)) > h / 2){ //vertical
            this.getHeading().timesY(-1);
            this.#bounces++;
        }
    }

    update(){

        if(!this.isActive())
            return;
        
        this.move();
        this.constrainMovement();

        if(this.#bounces > this.#maxBounces){
            this.setActive(false);
            this.#bounces = 0;
        }
        

        fill("blue");
        circle(this.getNativeX(), this.getNativeY(), this.getSize());

    }   
}