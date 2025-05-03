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
        for(var r = 0; r < rows; r++){
            this.grid[r] = new Array();

            for(var c = 0; c < columns; c++){
                var x = Math.round(-columns / 2 + c) * size;
                var y = Math.round(-rows / 2 + r) * size;
                this.grid[r][c] = new Cell(x, y, r, c, size);
            }
        }
    }

    update(point, entities, inflation = 1, debug = false){

        this.grid[20][20].isActive = false;

        for(var row of this.grid){
            for(var cell of row){
                cell.checkOccupancyWithEntities(entities);
                cell.update(debug);

                if(cell.isActive)
                    continue;

                for(var i = 0; i < inflation; i++){
                    var neighbors = this.getCellsWithinRadius(cell, 60);

                    for(var neighbor of neighbors){
                        if(!neighbor.isActive)
                            continue;

                        neighbor.heuristic = Infinity;
                    }
                }
            }
        }

        var cell = this.getCellFromPoint(point);

        if(cell == null)
            return;

        cell.color = "blue";
        cell.drawEntity();

        // console.log(this.getNeighboringCells(cell).length);
    }

    /**
     * 
     * @param {Point} point 
     * @returns Cell
     */
    getCellFromPoint(point){
        //really inefficient but optimize later

        for(var row of this.grid){
            for(var cell of row){
                if(cell.isStandingOver(point))
                    return cell;
            }
        }

        return null;
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
                var x = cell.gridX + row;
                var y = cell.gridY + col;

                // if the x is out of bounds
                if(x < 0 || x > this.rows - 1)
                    continue;

                // if the y is out of bounds
                if(y < 0 || y > this.cols - 1)
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
        
        for(var row = -gridRadius; row <= gridRadius; row++){
            
            
            // var bound = Math.abs(row) <= padding ? padding : -Math.abs(row);
            var bound = -Math.abs(row);

            for(var col = -(gridRadius + bound); col <= (gridRadius + bound); col++){
                var x = cell.gridX + row;
                var y = cell.gridY + col;

                // if the x is out of bounds
                if(x < 0 || x > this.rows - 1)
                    continue;

                // if the y is out of bounds
                if(y < 0 || y > this.cols - 1)
                    continue;

                // if the x and y is the target cell
                if(row == 0 && col == 0)
                    continue;

                cells.push(this.grid[x][y]);
            }
        }

        return cells;
    }
}