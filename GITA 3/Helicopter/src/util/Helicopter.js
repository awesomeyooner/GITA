class Helicopter extends Entity{

    constructor(size, speed = 5){
        super(size, 0, 0, true, speed);
    }

    update(){
        fill("red");

        // if(this.getHeading().getY() <= 0)
        //     this.getHeading().setY(-0.75);

        this.constrainMovement();
        this.move();
        circle(this.getNativeX(), this.getNativeY(), this.size);
    }
}