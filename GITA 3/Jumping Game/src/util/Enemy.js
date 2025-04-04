class Enemy extends Entity{

    constructor(size, speed, maxSegments = 3, maxHealth = 3){
        super(
            size,
            0,
            0,
            true,
            speed,
            maxHealth,
            "red"
        );

        this.segments = new Array();

        this.maxSegments = maxSegments;

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

    update(){
        if(!super.update())
            return;

        if(this.getActiveSegments() == 0)
            this.isActive = false;
        
        this.bombManager.update();

        this.applyGravity();
        
        this.move();
        this.drawEntity();

        this.refreshSegments();
    }

    reset(active = false){
        this.isActive = active;

        for(var i = 0; i < this.segments.length; i++){
            var segment = this.segments[i];

            segment.isActive = active;
            segment.setY(this.getCartesianY() + (i * segment.size));
        }

        this.set(width / 2, GROUND_Y + (this.size / 2));
    }

    launchBomb(direction){
        var headLevel = this.getActiveSegments() * this.size;
        var offset = new Point(0, headLevel);

        this.bombManager.shoot(this.plus(offset), direction);
    }

    drawEntity(){
        for(var segment of this.segments){
            segment.update(this);
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

    refreshSegments(){
        for(var i = 0; i < this.segments.length; i++){
            this.segments[i].numActiveBelow = this.getNumberOfActiveSegmentsBelow(i);
        }
    }

    getNumberOfActiveSegmentsBelow(index){
        var total = 0;

        for(var i = 0; i < index; i++){
            if(this.segments[i].isActive)
                total++;
        }

        return total;
    }

    applyGravity(){

        var gravity = 0.3;

        if(this.isAboveFloor()){ //if youre above the ground
            this.setHeadingY(this.getHeading().getY() - (gravity));
        }
        else{
            this.setHeadingY(0);
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