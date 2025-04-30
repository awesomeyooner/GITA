class Cell extends Entity{

    constructor(x, y, gridX, gridY, size){
        super(
            size,
            x, 
            y,
            true,
            0,
            1,
            "gray"
        );

        this.parent = null;

        this.gridX = gridX;
        this.gridY = gridY;

        this.heuristic = 0;
    }

    initialize(){}

    update(debug = false){
        super.update();

        if(this.isActive)
            this.color = "gray";
        else
            this.color = "black";

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
        return this.getDistance(end) + this.heuristic;
    }

    getFCost(start, end){
        return this.getGCost(start) + this.getHCost(end);
    }

    getCellWithLowestFCost(cells, start, end){
        var lowestFCost = Infinity;
        var cellWithLowestFCost = null;

        for(var cell of cells){
            if(cell.getFCost(start, end) < lowestFCost)
                cellWithLowestFCost = cell;
        }

        return cellWithLowestFCost;
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
            this.isActive = false;
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

    /**
     * 
     * @param {Point} point 
     * @return True if the given point is over this box
     */
    isStandingOver(point, debug = false){
        var difference = this.minus(point);

        var withinHorizontally = Math.abs(difference.getCartesianX()) <= (this.size / 2);
        var withinVertically = Math.abs(difference.getCartesianY()) <= (this.size / 2);

        if(debug && withinHorizontally && withinVertically){
            this.color = "blue";
            this.drawEntity();
        }

        return withinHorizontally && withinVertically;
    }

    /**
     * Gets if two cells are equal
     * @param {Cell} other 
     * @returns True if equal
     */
    equals(other){
        var coordinatesSame = this.getDistance(other) == 0;
        var parentsSame = this.parent == other.parent;
        var heuristicSame = this.heuristic = other.heuristic;

        return coordinatesSame && heuristicSame;
    }

    /**
     * 
     * @param {Array<Cell>} cells 
     * @param {Cell} cell 
     */
    static removeCellFromSet(cells, cell){
        for(var i = 0; i < cells.length; i++){
            if(cell.equals(cells[i])){
                cells.splice(i, 1);
                break;
            }
        }
    }
}