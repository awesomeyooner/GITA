class Bird extends Entity{

    constructor(size, x = 0, y = 0, speed = 2, timeOffset = 0){
        super(size, x, y, true, speed, 1);

        this.timeOffset = timeOffset;
    }

    update(){
        fill("blue");
        this.constrainMovement();
        this.move(this.getHeading().times(this.speed));
        circle(this.getNativeX(), this.getNativeY(), this.size);
    }

    constrainMovement(w = width, h = height){ 
        var deltaX = this.getHeading().getUnitVector().getX() * (w);
        var deltaY = this.getHeading().getUnitVector().getY() * (h);

        if(this.isFullyOutOfBounds() && !this.isOutOfBoundsAndGoingInside()){
            console.log("boom");
            this.setX(0);
            this.setY(0);
        }

        // if(Math.abs(this.getCartesianY()) > (h / 2) - (this.size / 2))
        //     this.setHeading(this.getHeading().timesY(-1));
    
        // else if(this.getCartesianX() + (this.getSize() / 2) < -w / 2) //left
        //     this.setHeadingX(2);
            
        // if(this.getCartesianY() - (this.getSize() / 2) > h / 2) //up
        //     this.setY(this.getCartesianY() * -1);

        // if(this.getCartesianY() + (this.getSize() / 2)< -h / 2) //down
        //     this.setY(this.getCartesianY() * -1);
    }
}