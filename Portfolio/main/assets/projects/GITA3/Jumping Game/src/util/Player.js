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

        this.wantedHeading = new Vector();

        this.crouching = false;
    }

    update(){
        if(!super.update())
            return;

        this.applyGravity();
        this.setHeadingX(this.wantedHeading.withY(0).withMagnitude(this.speed).getX());

        this.crouching = this.wantedHeading.getY() < 0;

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

    setWantedHeading(newHeading, useSpeed = false){
        this.wantedHeading = useSpeed ? newHeading.getUnitVector().times(this.speed) : newHeading;
    }

    getWantedHeading(){
        return this.wantedHeading;
    }

    applyGravity(){

        var floor = GROUND_Y - (this.size / 2);//-((height / 2) - (this.size / 2));

        if(this.getCartesianY() > floor){ //if youre above the ground
            this.setHeadingY(this.getHeading().getY() - (.1));
        }
        else{
            if(this.wantedHeading.getY() > 0) //if you want to jump
                this.setHeadingY(this.wantedHeading.withMagnitude(this.speed).getY());
            else{
                this.setHeadingY(0);
                this.setY(floor);
            }
        }
    }
}