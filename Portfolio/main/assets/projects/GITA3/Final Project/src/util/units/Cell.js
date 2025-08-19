class Cell extends HeapEntity{

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
     * Gets the grid distance from this cell to another cell (Manhatten Distance)
     * @param {Cell} other The other cell to get the distance to
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

    /**
     * Gets the G Cost of this cell
     * @returns The G Cost
     */
    getGCost(){
        return this.gCost + this.heuristic;
    }

    /**
     * Gets the H Cost of this cell
     * @returns The H Cost
     */
    getHCost(){
        return this.hCost;
    }

    /**
     * Gets the F Cost of this cell
     * @returns The F Cost
     */
    getFCost(){
        return this.getGCost() + this.getHCost();
    }

    /**
     * Returns the cell with the lowest F Cost in an Array of Cells
     * @param {Array<Cell>} cells An array of cells
     * @returns 
     */
    getCellWithLowestFCost(cells){
        var lowestFCost = Infinity;
        var cellWithLowestFCost = null;

        for(var cell of cells){
            if(cell.getFCost() < lowestFCost)
                cellWithLowestFCost = cell;
        }

        return cellWithLowestFCost;
    }

    /**
     * Returns if the cell is walkable or not
     * @returns If this cell is walkable
     */
    isWalkable(){
        return this.isActive;
    }

    /**
     * Sets the cell walkable based on the flag, will also inflate and deflate neighbors accordingly
     * @param {Boolean} setToWalkable Whether to set the cell to walkable or not
     */
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
     * @param {Cell} other 
     */
    compareTo(other){
        var compare = this.getFCost() - other.getFCost();

        if(compare == 0)
            compare = this.getHCost() - other.getHCost();

        if(compare == 0)
            return 0;
        else
            return -compare / Math.abs(compare);
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