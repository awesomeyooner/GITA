class Cell extends Entity{

    constructor(x, y, size){
        super(
            size,
            x, 
            y,
            false,
            0,
            1,
            "gray"
        );
    }

    initialize(){

    }

    update(debug = false){
        super.update();

        if(this.isActive)
            this.color = "black";
        else
            this.color = "gray";

        if(debug)
            this.drawEntity();
    }

    drawEntity(){
        push();
        stroke("black");
        fill(this.color);
        Shapes.rectangleCenterFromPoint(this, this.size, this.size);
        pop();
    }

    getGCost(start){
        return this.getDistance(start);
    }

    getHCost(end){
        return this.getDistance(end);
    }

    getFCost(start, end){
        return this.getGCost(start) + this.getHCost(end);
    }

    /**
     * 
     * @param {Entity} entity 
     */
    checkOccupancy(entity){
        if(!entity.isActive)
            return;

        // im too lazy to do the correct way so im just gonna treat each cell as a circle

        if(this.collides(entity))
            this.isActive = true;
    }

    /**
     * 
     * @param {Array<Entity>} entities 
     */
    checkOccupancyWithEntities(entities){
        for(var entity of entities){
            this.checkOccupancy(entity);
        }
    }
}