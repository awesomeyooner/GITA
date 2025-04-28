class GridManager{

    static instance = new GridManager();

    constructor(){
        this.grid = new Array();

        this.initialize();
    }

    static getInstance(){
        return this.instance;
    }

    initialize(){
        var size = 20;
        
        var rows = Math.round(HEIGHT / size) + 1;
        var cols = Math.round(WIDTH / size) + 1;

        this.populateGrid(rows, cols, size);
    }

    populateGrid(rows, columns, size){
        for(var r = 0; r < rows; r++){
            this.grid[r] = new Array();

            for(var c = 0; c < columns; c++){
                var x = Math.round(-columns / 2 + c) * size;
                var y = Math.round(-rows / 2 + r) * size;
                this.grid[r][c] = new Cell(x, y, size);
            }
        }
    }

    update(entities, debug = false){

        for(var row of this.grid){
            for(var cell of row){
                cell.checkOccupancyWithEntities(entities);
                cell.update(debug);
            }
        }
    }
}