class EnemySegment extends Entity{

    constructor(size, health, point, index, speed, color){
        super(
            size,
            point.getCartesianX(),
            point.getCartesianY() + (size * index),
            true,
            speed,
            health,
            color
        );

        this.index = index;
        this.numActiveBelow = index;
    }

    update(origin){

        this.applyGravity();
        
        this.move();

        this.setX(origin.getCartesianX());
        
        if(!super.update())
            return;
    
        this.drawEntity();
    }

    applyGravity(){

        var gravity = 0.3;

        if(this.isAboveFloor()){ //if youre above the ground
            this.setHeadingY(this.getHeading().getY() - (gravity));
        }
        else{
            // this.setHeadingY(0);
            this.snapToFloor();
        }
    }

    snapToFloor(){
        var floor = GROUND_Y + (this.size * this.numActiveBelow);

        this.setY(floor + (this.size / 2));
    }

    isAboveFloor(){
        var floor = GROUND_Y + (this.size * this.numActiveBelow);//-((height / 2) - (this.size / 2));

        return this.getCartesianY() - (this.size / 2) > floor;
    }
}