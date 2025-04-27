class StatEntry{

    /**
     * 
     * @param {string} text 
     * @param {Function} getter 
     */
    constructor(text, getter){
        this.text = text;
        this.getter = getter;
    }
}

class StatManager{
    
    constructor(){
        this.stats = new Array();
    }

    addEntry(stat){
        this.stats.push(stat);
    }

    /**
     * Displays all the entries appended at the given point
     * @param {Point} point 
     * @param {Number} size 
     */
    display(point, size = 20){

        for(var i = 0; i < this.stats.length; i++){
            var stat = this.stats.at(i);

            Utility.textCorner(
                stat.text + ": \t" + stat.getter(),
                point.getNativeX(),
                point.getNativeY() + (i * size * 1.25),
                size
            );
        }
    }
}