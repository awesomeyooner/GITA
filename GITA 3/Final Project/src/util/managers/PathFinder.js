class PathFinder{

    static instance = new PathFinder();

    constructor(){
        
    }

    static getInstance(){
        return this.instance;
    }

    /**
     * 
     * @param {Point} start 
     * @param {Point} end 
     * @param {Array<Array<Cell>>} grid 
     */
    findPath(start, end){
        var grid = GridManager.getInstance();

        var startCell = grid.getCellFromPoint(start);
        var endCell = grid.getCellFromPoint(end);

        if(startCell == null || endCell == null){
            return new Array();
        }

        if(!startCell.isActive || !endCell.isActive)
            return new Array();

        if(startCell.heuristic > 0 || endCell.heuristic > 0)
            return new Array();

        var openSet = new Array();
        var closedSet = new Array();

        openSet.push(startCell);

        var iterations = 0;

        while(openSet.length > 0){
            iterations++;

            var currentCell = openSet[0];

            // currentCell = node in the open set with the lowest F Cost
            for(var i = 1; i < openSet.length; i++){
                var openIsFCheaper = openSet[i].getFCost() < currentCell.getFCost();
                var costSameButOpenIsHCheaper = openSet[i].getFCost() == currentCell.getFCost() && openSet[i].getHCost() < currentCell.getHCost();

                if(openIsFCheaper || costSameButOpenIsHCheaper)
                    currentCell = openSet[i];
            }

            // remove the current cell from the open set
            Cell.removeCellFromSet(openSet, currentCell);

            // add the current cell to the closed set
            closedSet.push(currentCell);

            // if the current cell is the target, end
            if(currentCell.equals(endCell)){
                console.log(iterations);
                return this.getPath(startCell, endCell);
                // this.tracePath(startCell, endCell);
                // break;
            }

            var neighbors = grid.getNeighboringCells(currentCell);

            // for every neighbor of the current node
            for(var neighbor of neighbors){

                if(neighbor == null)
                    continue;

                // if the neighbor is not traversable OR is the neighbor is in the closed set, skip
                if(!neighbor.isActive || Cell.doesSetContainCell(closedSet, neighbor))
                    continue;

                var costToGoToNeighbor = currentCell.getGCost() + currentCell.getGridDistance(neighbor);

                // if the new path is shorter OR if the neighbor is not in the open set
                if(costToGoToNeighbor < neighbor.getGCost() || !Cell.doesSetContainCell(openSet, neighbor)){
                    neighbor.gCost = costToGoToNeighbor;
                    neighbor.hCost = neighbor.getGridDistance(endCell);
                    neighbor.parent = currentCell;

                    if(!Cell.doesSetContainCell(openSet, neighbor))
                        openSet.push(neighbor);
                }
            }
        }

        return new Array();
    }

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

    tracePath(path){
        for(var cell of path){
            cell.color = "purple";
            cell.drawEntity();
        }        
    }

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