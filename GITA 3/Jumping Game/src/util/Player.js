class Player extends Entity{

    constructor(size, speed, maxSegments = 3){
        super(
            size,
            0,
            0,
            true,
            speed,
            10,
            "blue"
        );

        this.maxSegments = maxSegments;

        this.segments = new Array();

        this.crouching = false;

        this.bulletManager = new ProjectileManager(50, 10);
        this.bombManager = new BombManager(20, 10, 50, 5, "black");

        this.resetSegments();
    }

    resetSegments(){
        for(var i = 0; i < this.maxSegments; i++){
            this.segments.push(new EnemySegment(
                this.size,
                this.maxHealth,
                this,
                i,
                this.speed,
                this.color
            ));
        }
    }

    getActiveSegments(){
        var total = 0;

        for(var segment of this.segments){
            if(segment.isActive)
                total++;
        }

        return total;
    }

    update(){
        if(!super.update())
            return;

        if(this.getActiveSegments() == 0)
            this.isActive = false;

        this.bulletManager.update();
        this.bombManager.update();

        this.applyGravity();
        
        this.move();
        this.drawEntity();

        this.refreshSegments();
    }

    refreshSegments(){
        for(var i = 0; i < this.segments.length; i++){
            this.segments[i].numActiveBelow = this.getNumberOfActiveSegmentsBelow(i);
        }
    }


    shoot(direction){
        var headLevel = this.crouching ? 0 : this.size * 2;
        var offset = new Point(0, headLevel);

        this.bulletManager.shoot(this.plus(offset), direction);
    }

    launchBomb(direction){
        var headLevel = this.crouching ? 0 : this.size * 2;
        var offset = new Point(0, headLevel);

        this.bombManager.shoot(this.plus(offset), direction);
    }

    drawEntity(){
        push();
        fill(this.color);
        // circle(this.getNativeX(), this.getNativeY(), this.size);

        for(var i = 0; i < this.segments.length; i++){
            if(i != 0 && this.crouching)
                this.segments[i].isActive = false;
            else if(i != 0 && !this.crouching)
                this.segments[i].isActive = true;

            this.segments[i].update(this);
        }

        // if(!this.crouching){
        //     circle(this.getNativeX(), this.getNativeY() - this.size, this.size);
        //     circle(this.getNativeX(), this.getNativeY() - (2 * this.size), this.size);
        // }

        pop();
    }

    getNumberOfActiveSegmentsBelow(index){
        var total = 0;

        for(var i = 0; i < index; i++){
            if(this.segments[i].isActive)
                total++;
        }

        return total;
    }

    jump(strength = 10){
        if(!this.isAboveFloor()){
            this.setHeadingY(strength);

            for(var segment of this.segments){
                segment.setHeadingY(strength);
            }
        }
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