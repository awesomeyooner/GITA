class Player extends Entity{

    constructor(size, speed){
        super(
            size,
            0,
            0,
            true,
            speed,
            1,
            "blue"
        );

        this.crouching = false;
    }

    update(){
        if(!super.update())
            return;

        this.applyGravity();
        
        this.move();
        this.drawEntity();
    }

    drawEntity(){
        push();
        fill(this.color);
        circle(this.getNativeX(), this.getNativeY(), this.size);

        if(!this.crouching){
            circle(this.getNativeX(), this.getNativeY() - this.size, this.size);
            circle(this.getNativeX(), this.getNativeY() - (2 * this.size), this.size);
        }

        pop();
    }

    jump(strength = 10){
        if(!this.isAboveFloor())
            this.setHeadingY(strength);
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

    snapToFloor(){
        var floor = GROUND_Y - (this.size / 2);//-((height / 2) - (this.size / 2));

        this.setY(floor);
    }

    isAboveFloor(){
        var floor = GROUND_Y - (this.size / 2);//-((height / 2) - (this.size / 2));

        return this.getCartesianY() > floor;
    }
}