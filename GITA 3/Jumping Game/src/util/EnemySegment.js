class EnemySegment extends Entity{

    constructor(size, health, point, index, speed, color){
        super(
            size,
            point.getCartesianX(),
            point.getCartesianY() + (size * index) * index,
            true,
            speed,
            health,
            color
        );
    }

    update(){
        if(!super.update())
            return;
        
        this.applyGravity();
        
        this.move();
        this.drawEntity();
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
        var floor = GROUND_Y + (this.size * index);//-((height / 2) - (this.size / 2));

        return this.getCartesianY() - (this.size / 2) > floor;
    }
}