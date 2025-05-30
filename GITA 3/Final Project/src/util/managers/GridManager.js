class GridManager{

    static instance = new GridManager();

    constructor(){
        this.grid = new Array();

        this.size = 50;

        this.rows = Math.round(HEIGHT / this.size) + 1;
        this.cols = Math.round(WIDTH / this.size) + 1;

        this.initialize();
    }

    static getInstance(){
        return this.instance;
    }

    initialize(){

        this.populateGrid(this.rows, this.cols, this.size);
    }

    /**
     * Populates the grid with the given rows, columns, and size (base length) of each cell  
     * @param {Number} rows Number of Rows
     * @param {Number} columns Number of Columns
     * @param {Number} size Size (base length) of each Cell
     */
    populateGrid(rows, columns, size){
        for(var c = 0; c < columns; c++){
            this.grid[c] = new Array();

            for(var r = 0; r < rows; r++){
                var x = Math.round(-columns / 2 + c) * size;
                var y = Math.round(-rows / 2 + r) * size;
                this.grid[c][r] = new Cell(x, y, c, r, size);
            }
        }
    }

    /**
     * Gets the number of cells in the grid
     * @returns The number of cells
     */
    getMaxSize(){
        return this.rows * this.cols;
    }

    /**
     * Refreshes the grid with the given obstacles
     * @param {Array<Entity>} entities Obstacles
     * @param {Number} inflation Inflation radius of each obstacle, in pixels
     * @param {Boolean} debug Flag if you want to display debug information, default `false`
     */
    update(entities, inflation = 30, debug = false){

        for(var row of this.grid){
            for(var cell of row){
                cell.checkOccupancyWithEntities(entities);
                cell.update(debug);

                if(cell.isActive)
                    continue;

                cell.inflation = inflation;

                this.inflateCellsWithinRadius(cell, inflation);
            }
        }
    }

    /**
     * Paints the cell that the point is standing over
     * @param {Point} point Point to paint
     * @param {String} color Color to use
     */
    paintCellFromPoint(point, color = "blue"){
        var cell = this.getCellFromPoint(point);

        if(cell == null)
            return;

        cell.color = color;
        cell.drawEntity();
    }

    /**
     * Returns the cell that this point is standing over
     * @param {Point} point The Point to get the cell from
     * @returns The Cell
     */
    getCellFromPoint(point){
        var x = Math.round(point.getCartesianX() / this.size + (this.cols - 1) / 2);
        var y = Math.round(point.getCartesianY() / this.size + (this.rows - 1) / 2);

        if(this.isGridCoordinateOutOfBounds(x, y))
            return null;

        return this.grid[x][y];
    }


    /**
     * Returns if the given grid coordinates are out of bounds
     * @param {Number} x The X Coordinate
     * @param {Number} y The Y Coordinate
     * @returns True if the given x and y coordinates are out of the grids range
     */
    isGridCoordinateOutOfBounds(x, y){
        if(x < 0 || x > this.cols - 1)
            return true;

        if(y < 0 || y > this.rows - 1)
            return true;

        return false;
    }

    /**
     * Returns an array of all the neighboring cells
     * @param {Cell} cell The reference cell
     * @return Array of cells representing the neighbors, no order
     */
    getNeighboringCells(cell){
        
        var neighbors = new Array();

        for(var row = -1; row <= 1; row++){
            for(var col = -1; col <= 1; col++){
                var x = cell.gridX + col;
                var y = cell.gridY + row;

                if(this.isGridCoordinateOutOfBounds(x, y))
                    continue;

                // if the x and y is the target cell
                if(row == 0 && col == 0)
                    continue;

                neighbors.push(this.grid[x][y]);
            }
        }

        return neighbors;
    }

    /**
     * Returns an array of cells that are within the reference cell's radius
     * @param {Cell} cell The reference cell
     * @param {Number} radius The radius to check, in pixels
     */
    getCellsWithinRadius(cell, radius){
        
        var cells = new Array();

        var gridRadius = Math.round(radius / this.size);

        var padding = Math.floor(gridRadius / 2);
        
        for(var row = -(gridRadius + padding); row <= (gridRadius + padding); row++){

            for(var col = -(gridRadius + padding - Math.abs(row)); col <= (gridRadius + padding - Math.abs(row)); col++){

                if(Math.abs(row) > gridRadius || Math.abs(col) > gridRadius)
                    continue;

                var x = cell.gridX + col;
                var y = cell.gridY + row;

                if(this.isGridCoordinateOutOfBounds(x, y))
                    continue;

                // if the x and y is the target cell
                if(row == 0 && col == 0)
                    continue;

                cells.push(this.grid[x][y]);
            }
        }

        return cells;
    }

    /**
     * Sets the heuristic of all the cells within the radius of the reference cell
     * @param {Cell} cell The reference cell
     * @param {Number} radius The radius to check, in pixels
     * @param {Number} heuristic The heuristic to set
     */
    setHeuristicOfCellsWithinRadius(cell, radius, heuristic){
        var neighbors = this.getCellsWithinRadius(cell, radius);

        for(var neighbor of neighbors){
            if(!neighbor.isActive)
                continue;

            neighbor.heuristic = heuristic;
        }

        cell.heuristic = heuristic;
    }

    /**
     * Sets the heuristic of all the cells within the radius of the reference cell to 1000
     * @param {Cell} cell The reference cell
     * @param {Number} radius The radius to check, in pixels
     */
    inflateCellsWithinRadius(cell, radius){
        this.setHeuristicOfCellsWithinRadius(cell, radius, 1000);
    }

    /**
     * Sets the heuristic of all the cells within the radius of the reference cell to 0
     * @param {Cell} cell The reference cell
     * @param {Number} radius The radius to check, in pixels
     */
    deflateCellsWithinRadius(cell, radius){
        this.setHeuristicOfCellsWithinRadius(cell, radius, 0);
    }
}