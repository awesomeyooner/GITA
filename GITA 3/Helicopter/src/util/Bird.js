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
        var dx = this.getHeading().getUnitVector().getX();
        var dy = this.getHeading().getUnitVector().getY();

        var deltaX = 0;
        var deltaY = 0;

        var rightOOB = this.getCartesianX() > (w / 2);
        var leftOOB = this.getCartesianX() < -(w / 2);

        var topOOB = this.getCartesianY() > (h / 2);
        var bottomOOB = this.getCartesianY() < -(h / 2);

        if(leftOOB || rightOOB){ //horizontal
            console.log("horizontal");
            deltaX = Math.sign(this.getCartesianX()) * w;
            deltaY = deltaX * (dy / dx);
        }

        else if(topOOB || bottomOOB){ //vertical
            console.log("vertical")
            deltaY = Math.sign(this.getCartesianY()) * h;
            deltaX = deltaY * (dx / dy);
        }

        this.setX(this.getCartesianX() - deltaX);
        this.setY(this.getCartesianY() - deltaY);
    }
}