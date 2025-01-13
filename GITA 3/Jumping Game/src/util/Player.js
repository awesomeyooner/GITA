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
    }

    update(){
        if(!super.update())
            return;

        this.applyGravity();
        this.setHeadingX(this.wantedHeading.getX());
        this.move();
        this.drawEntity();
    }

    setWantedHeading(newHeading, useSpeed = false){
        this.wantedHeading = useSpeed ? newHeading.getUnitVector().times(this.speed) : newHeading;
    }

    getWantedHeading(){
        return this.wantedHeading;
    }

    applyGravity(){

        var floor = -((height / 2) - (this.size / 2));

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