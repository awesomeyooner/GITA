class GridManager{

    static instance = new GridManager();

    constructor(){
        this.grid = new Array();

        this.size = 20;

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

    update(point, entities, inflation = 30, debug = false){

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

        this.paintCellFromPoint(point);
    }

    /**
     * Paints the cell that the point is standing over
     * @param {Point} point 
     * @param {String} color
     */
    paintCellFromPoint(point, color = "blue"){
        var cell = this.getCellFromPoint(point);

        if(cell == null)
            return;

        cell.color = color;
        cell.drawEntity();

        console.log(cell.gridX + " : " + cell.gridY);
    }

    /**
     * 
     * @param {Point} point 
     * @returns Cell
     */
    getCellFromPoint(point){
        //really inefficient but optimize later

        // var x = point.getCartesianX() / this.size + this.cols - 1;
        // var y = point.getCartesianY() / this.size + this.rows - 1;

        // if(this.isGridCoordinateOutOfBounds(point.getCartesianX(), point.get))
        //     return null;

        for(var column of this.grid){
            for(var cell of column){
                if(cell.isStandingOver(point))
                    return cell;
            }
        }

        return null;
    }

    isGridCoordinateOutOfBounds(x, y){
        if(x < 0 || x > this.cols)
            return true;

        if(y < 0 || y > this.rows)
            return true;

        return false;
    }

    /**
     * Returns a list of all the neighboring cells
     * @param {Cell} cell 
     * @return Array of cells
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
     * 
     * @param {Cell} cell 
     * @param {Number} radius In Pixels
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

    setHeuristicOfCellsWithinRadius(cell, radius, heuristic){
        var neighbors = this.getCellsWithinRadius(cell, radius);

        for(var neighbor of neighbors){
            if(!neighbor.isActive)
                continue;

            neighbor.heuristic = heuristic;
        }

        cell.heuristic = heuristic;
    }

    inflateCellsWithinRadius(cell, radius){
        this.setHeuristicOfCellsWithinRadius(cell, radius, 1000);
    }

    deflateCellsWithinRadius(cell, radius){
        this.setHeuristicOfCellsWithinRadius(cell, radius, 0);
    }
}