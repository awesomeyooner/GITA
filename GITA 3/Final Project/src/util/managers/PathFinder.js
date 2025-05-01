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

        var openSet = new Array();
        var closedSet = new Array();

        openSet.push(startCell);

        while(openSet.length > 0){
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
    }

    drawPath(path){

        for(var i = 0; i < path.length; i++){
            var initial = path[i];
            var final;

            if(i == path.length - 1){ //if its the last one basically
                final = path[i]; //make the last connect with first
            }
            else
                final = path[i + 1]; //if not, then just make it the next

                Utility.drawLine(
                    initial,
                    final
                );
        }
    }

    getPath(start, end){
        var path = new Array();

        var current = end;

        while(!current.equals(start)){
            path.push(current);
            current = current.parent;
        }

        path.reverse();

        return path;
    }

    tracePath(start, end){
        var path = this.getPath(start, end);
        this.drawPath(path);

        for(var cell of path){
            cell.color = "purple";
            // cell.drawEntity();
        }

        
    }
}