class Bomb extends Projectile{
    
    update(){

        if(!this.isActive)
            return;
        

        this.applyGravity();

        this.move();
        this.constrainMovement();

        if(this.bounces > this.maxBounces){
            this.isActive = false;
            this.bounces = 0;
        }

        this.drawEntity();
    }   

    applyGravity(){

        var gravity = 0.3;

        if(this.isAboveFloor()){ //if youre above the ground
            this.setHeadingY(this.getHeading().getY() - (gravity));
        }
        else{
            this.snapToFloor();
        }
    }

    constrainMovement(w = width, h = GROUND_Y - (this.size / 2)){ 
        if(Math.abs(this.getCartesianX() + (this.size / 2)) > w / 2 ){ //horizontal
            this.isActive = false;
        }
            
        if(!this.isAboveFloor()){ //vertical
            this.getHeading().timesY(-0.8);
            this.bounces++;
        }
    }

    snapToFloor(){
        var floor = GROUND_Y;

        this.setY(floor + (this.size / 2));
    }

    isAboveFloor(){
        var floor = GROUND_Y;//-((height / 2) - (this.size / 2));

        return this.getCartesianY() - (this.size / 2) > floor;
    }
}