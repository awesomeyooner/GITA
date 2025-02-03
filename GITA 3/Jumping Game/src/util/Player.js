class Player extends Entity{

    #bullets = new Array();
    #maxBullets;

    constructor(size, speed, maxBullets = 20){
        super(
            size,
            0,
            0,
            true,
            speed,
            1,
            "blue"
        );

        this.#maxBullets = maxBullets;

        this.crouching = false;

        this.resetBullets();
    }

    resetBullets(){
        for(var i = 0; i < this.#maxBullets; i++){
            this.#bullets[i] = new Bullet(
                10, //size
                0, //bounces
                10, //speed
                this.color //color
            );
        }
    }

    getBullets(){
        return this.#bullets;
    }

    getInactiveBullets(){
        var total = 0;

        for(var bullet of this.#bullets){
            if(!bullet.isActive)
                total++;
        }

        return total;
    }

    shoot(direction, offset = new Point(0, 0)){
        for(var bullet of this.#bullets){
            if(bullet.isActive)
                continue;
            else{
                bullet.setPoint(this.plus(offset));
                bullet.setHeading(direction.times(bullet.speed));
                bullet.isActive = true;
                bullet.bounces = 0;
                break;
            }
        }
    }

    update(){
        if(!super.update())
            return;

        this.applyGravity();
        
        this.move();
        this.drawEntity();

        for(var bullet of this.#bullets){
            if(!bullet.isActive)
                continue;

            bullet.update();
        }
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