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

        this.gCost = 0;
        this.hCost = 0;

        this.inflation = 30;
    }

    initialize(){}

    update(debug = false){
        super.update();

        if(this.isActive){
            if(this.heuristic == 0)
                this.color = "gray";
            else if(this.heuristic > 0)
                this.color = "white";

        }
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

    /**
     * Gets the grid distance from this cell to another cell
     * @param {Cell} other 
     */
    getGridDistance(other){
        
        var gridDeltaX = Math.abs(this.gridX - other.gridX);
        var gridDeltaY = Math.abs(this.gridY - other.gridY);

        var distance = 0;

        var horizontalDistance = this.size;
        var diagonalDistance = this.size * Math.sqrt(2);

        if(gridDeltaX <= gridDeltaY){
            var diagonal = gridDeltaX * diagonalDistance;
            var horizontal = (gridDeltaY - gridDeltaX) * horizontalDistance;

            distance = diagonal + horizontal;
        }
        else{
            var diagonal = gridDeltaY * diagonalDistance;
            var horizontal = (gridDeltaX - gridDeltaY) * horizontalDistance;

            distance = diagonal + horizontal;
        }

        return distance;
    }

    getGCost(){
        return this.gCost + this.heuristic;
    }

    getHCost(){
        return this.hCost;
    }

    getFCost(){
        return this.gCost + this.hCost;
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
     * @returns If this cell is walkable
     */
    isWalkable(){
        return this.isActive;
    }

    setWalkable(setToWalkable){

        // If once walkable but going to not walkable
        if(this.isWalkable() && !setToWalkable)
            GridManager.getInstance().inflateCellsWithinRadius(this, this.inflation);

        else if(!this.isWalkable() && setToWalkable)
            GridManager.getInstance().deflateCellsWithinRadius(this, this.inflation);

        this.isActive = setToWalkable;
    }

    /**
     * 
     * @param {Entity} entity 
     * @return True if it is occupied by entity
     */
    checkOccupancy(entity){
        if(!entity.isActive)
            return false;

        // im too lazy to do the correct way so im just gonna treat each cell as a circle

        return this.collides(entity);
    }

    /**
     * 
     * @param {Array<Entity>} entities 
     */
    checkOccupancyWithEntities(entities){
        var isOccupied = false;

        for(var entity of entities){
            if(this.checkOccupancy(entity)){
                isOccupied = true;
                this.setWalkable(false);
                break;
            }
        }

        if(!isOccupied)
            this.setWalkable(true);
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
        var gridCoordinatesSame = this.gridX == other.gridX && this.gridY == other.gridY;
        var parentsSame = this.parent == other.parent;
        var heuristicSame = this.heuristic == other.heuristic;

        return coordinatesSame && gridCoordinatesSame && heuristicSame;
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

    /**
     * 
     * @param {Array<Cell>} cells 
     * @param {Cell} contain
     * @return True if the cells contains the given cell
     */
    static doesSetContainCell(cells, contain){
        for(var cell of cells){
            if(cell.equals(contain))
                return true;
        }

        return false;
    }
}