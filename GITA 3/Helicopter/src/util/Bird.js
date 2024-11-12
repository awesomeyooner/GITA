class Bird extends Entity{

    constructor(size, x = 0, y = 0){
        super(size, x, y);
    }

    update(){
        fill("blue");
        this.constrainMovement();
        this.move();
        circle(this.getNativeX(), this.getNativeY(), this.getSize());
    }

    constrainMovement(w = width, h = height){ 
        if(this.getCartesianX() + (this.getSize() / 2) > w / 2 && this.getHeading().getX() >= 0) //right
            this.setHeading(this.getHeading().times(-1));
            // this.setX(this.getCartesianX() * -1);
    
        // else if(this.getCartesianX() + (this.getSize() / 2) < -w / 2) //left
        //     this.setHeadingX(2);
            
        // if(this.getCartesianY() - (this.getSize() / 2) > h / 2) //up
        //     this.setY(this.getCartesianY() * -1);

        // if(this.getCartesianY() + (this.getSize() / 2)< -h / 2) //down
        //     this.setY(this.getCartesianY() * -1);
    }
}