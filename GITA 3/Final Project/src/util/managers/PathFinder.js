class PathFinder{

    static instance = new PathFinder();

    constructor(){
        
    }

    static getInstance(){
        return this.instance;
    }

    /**
     * Returns an array of points representing the path
     * @param {Point} start The start of the path
     * @param {Point} end The end of the path
     * @return {Array<Point>} The path, will be empty if the algorithm cannot find a path
     */
    findPath(start, end){
        var grid = GridManager.getInstance();

        var startCell = grid.getCellFromPoint(start);
        var endCell = grid.getCellFromPoint(end);

        if(startCell == null || endCell == null){
            return new Array();
        }

        if(!endCell.isActive)
            return new Array();

        if(endCell.heuristic > 0)
            return new Array();

        var openSet = new Heap(grid.getMaxSize());
        var closedSet = new Array();

        openSet.add(startCell);

        var iterations = 0;

        while(openSet.currentItemCount > 0){
            iterations++;

            var currentCell = openSet.removeFirst();

            // add the current cell to the closed set
            closedSet.push(currentCell);

            // if the current cell is the target, end
            if(currentCell.equals(endCell)){
                console.log(iterations);
                return this.getPath(startCell, endCell);
                // this.paintPath(startCell, endCell);
                // break;
            }

            for(var row = -1; row <= 1; row++){
                for(var col = -1; col <= 1; col++){
                    var x = currentCell.gridX + col;
                    var y = currentCell.gridY + row;

                    if(grid.isGridCoordinateOutOfBounds(x, y))
                        continue;

                    // if the x and y is the target cell
                    if(row == 0 && col == 0)
                        continue;

                    var neighbor = grid.grid[x][y];

                    if(neighbor == null)
                        continue;

                    // if the neighbor is not traversable OR is the neighbor is in the closed set, skip
                    if(!neighbor.isActive || Cell.doesSetContainCell(closedSet, neighbor))
                        continue;

                    var costToGoToNeighbor = currentCell.getGCost() + currentCell.getDistance(neighbor);

                    // if the new path is shorter OR if the neighbor is not in the open set
                    if(costToGoToNeighbor < neighbor.getGCost() || !openSet.contains(neighbor)){
                        neighbor.gCost = costToGoToNeighbor;
                        neighbor.hCost = neighbor.getDistance(endCell);
                        neighbor.parent = currentCell;

                        if(!openSet.contains(neighbor))
                            openSet.add(neighbor);
                        else
                            openSet.updateItem(neighbor);
                    }
                }
            }
        }

        return new Array();
    }

    /**
     * Draws a line through each cell to represent the path
     * @param {Array<Point>} path The path
     */
    drawPath(path){

        if(path.length <= 1)
            return;

        for(var i = 0; i < path.length - 1; i++){

            var initial = path[i];
            var final = path[i + 1];
            
            push();
            // strokeWeight(1);
            // stroke("green");
            Utility.drawLine(
                initial,
                final
            );
            pop();
        }
    }

    /**
     * Paints the cells that make up a path
     * @param {Array<Cell>} path The path to paint
     * @param {String} color The color of the cells to paint, defaults to `"purple"`
     */
    paintPath(path, color = "purple"){
        for(var cell of path){
            cell.color = color;
            cell.drawEntity();
        }        
    }

    /**
     * Returns an array of cells representing the path
     * @param {Cell} start Start cell
     * @param {Cell} end End Cell
     * @returns {Array<Cell>} The path represented as an array of cells, 0 is the start
     */
    getPath(start, end){
        var path = new Array();

        var current = end;

        while(!current.equals(start)){
            path.push(current);
            current = current.parent;
        }

        path.push(start);

        path.reverse();

        return path;
    }
}