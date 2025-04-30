class PathFinder{

    constructor(){
        
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

        var openSet = new Array();
        var closedSet = new Array();

        openSet.push(startCell);

        while(openSet.length > 0){
            var currentCell = openSet[0];

            for(var i = 1; i < openSet.length; i++){
                var openIsFCheaper = openSet[i].getFCost(start, end) < currentCell.getFCost(start, end);
                var costSameButOpenIsHCheaper = openSet[i].getFCost(start, end) == currentCell.getFCost(start, end) && openSet[i].getHCost(end) < currentCell.getHCost(end);

                if(openIsFCheaper || costSameButOpenIsHCheaper)
                    currentCell = openSet[i];
            }

            Cell.removeCellFromSet(openSet, currentCell);
            closedSet.push(currentCell);

            if(currentCell.equals(end)){
                break;
            }
            
        }
    }
}