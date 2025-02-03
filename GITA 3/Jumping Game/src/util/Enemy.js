class Enemy extends Entity{

    constructor(size, speed, maxHealth = 3){
        super(
            size,
            0,
            0,
            true,
            speed,
            maxHealth,
            "red"
        );

        this.crouching = false;

        this.bombManager = new BombManager(20, 10, 50, 5, "black");
    }

    update(){
        if(!super.update())
            return;
        
        this.bombManager.update();

        this.applyGravity();
        
        this.move();
        this.drawEntity();
    }

    reset(active = false){
        this.isActive = active;

        this.set(width / 2, GROUND_Y + (this.size / 2));
    }

    launchBomb(direction){
        var headLevel = this.crouching ? 0 : this.size * 2;
        var offset = new Point(0, headLevel);

        this.bombManager.shoot(this.plus(offset), direction);
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
        var floor = GROUND_Y;

        this.setY(floor + (this.size / 2));
    }

    isAboveFloor(){
        var floor = GROUND_Y;//-((height / 2) - (this.size / 2));

        return this.getCartesianY() - (this.size / 2) > floor;
    }
}