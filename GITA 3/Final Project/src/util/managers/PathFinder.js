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
        var startCell = GridManager.getInstance().getCellFromPoint(start);
        var endCell = GridManager.getInstance().getCellFromPoint(end);

        var openSet = new Array();
        var closedSet = new Array;

        openSet.push(startCell);

        while(openSet.length > 0){
            
        }
    }
}