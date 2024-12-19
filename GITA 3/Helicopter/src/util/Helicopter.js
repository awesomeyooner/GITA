class Helicopter extends Entity{

    #mirror = 1;

    constructor(size, speed = 5){
        super(size, 0, 0, true, speed);

        this.maxFuel = 500;
        this.fuel = 500;
    }

    update(){
        fill("red");

        if(this.getHeading().getY() <= 0)
            this.getHeading().setY(-0.75);
        else
            this.fuel--;

        

        this.constrainMovement();
        this.move();
        //circle(this.getNativeX(), this.getNativeY(), this.size);
        this.drawEntity();
        this.displayFuel();

        if(this.getHeading().getX() != 0)
            this.#mirror = Math.sign(this.getHeading().getX());
    }

    displayFuel(){
        push();
        fill("orange");
        rect(
            Utility.cartesianToNativeX(-750),
            Utility.cartesianToNativeY(300),
            200 * (this.fuel / this.maxFuel),
            10
        );
        pop();
    }

    drawEntity(){

        push();
        translate(
            this.getNativeX(),
            this.getNativeY()
        );

        fill("cyan");
        circle(this.#mirror * 10, 0, 80);
        
        fill("gray")
        Utility.rectCenter(this.#mirror * -70, 0, 80, 10);
        Utility.rectCenter(this.#mirror * 10, -40, 100, 10);

        pop();
        
        push();
        fill("gray");
        translate(
            this.getNativeX() - (this.#mirror * 100),
            this.getNativeY()
        );
        rotate(millis() / 50);
        Utility.rectCenter(0, 0, 10, 60);
        pop();
    }
}