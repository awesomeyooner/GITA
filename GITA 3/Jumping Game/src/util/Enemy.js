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

        this.bulletManager = new ProjectileManager(50, 5, 10, 0, "red");
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

    shoot(direction = new Vector(-1, 0)){
        var headLevel = this.crouching ? 0 : this.size * 2;
        var offset = new Point(0, headLevel);

        this.bulletManager.shoot(this.plus(offset), direction);
    }

    launchBomb(direction = new Vector(-1, 1)){
        var headLevel = this.crouching ? 0 : this.size * 2;
        var offset = new Point(0, headLevel);

        this.bombManager.shoot(this.plus(offset), direction);
    }


    update(){
        if(!super.update())
            return;

        if(this.getActiveSegments() == 0)
            this.isActive = false;
        
        this.bombManager.update();
        this.bulletManager.update();

        this.applyGravity();
        
        this.move();
        this.drawEntity();

        this.refreshSegments();

        this.procProjectiles();
    }

    procProjectiles(){
        var within = 200;

        var proc = Math.floor(Math.random() * within);

        var bulletChance = 5; // 5 in 1000
        var bombChance = within - 5; // 5 in 1000;

        if(proc == bulletChance)
            this.shoot();
        
        if(proc == bombChance)
            this.launchBomb();
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