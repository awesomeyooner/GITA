class GridManager{

    static instance = new GridManager();

    constructor(){
        this.grid = new Array();

        this.size = 20;

        this.initialize();
    }

    static getInstance(){
        return this.instance;
    }

    initialize(){
        
        var rows = Math.round(HEIGHT / this.size) + 1;
        var cols = Math.round(WIDTH / this.size) + 1;

        this.populateGrid(rows, cols, this.size);
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

    update(point, entities, debug = false){

        for(var row of this.grid){
            for(var cell of row){
                cell.checkOccupancyWithEntities(entities);
                cell.update(debug);
            }
        }

        var cell = this.getCellFromPoint(point);

        if(cell == null)
            return;

        cell.color = "blue";
        cell.drawEntity();
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

    getNeighboringCells(cell){

    }
}