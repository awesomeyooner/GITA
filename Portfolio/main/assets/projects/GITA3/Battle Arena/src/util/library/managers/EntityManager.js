class EntityManager{

    constructor(maxEntities = 100){
        this.maxEntities = maxEntities;

        this.entities = new Array();
    }

    /**
     * Call in the constructor
     */
    initialize(){
        // this.reset(50, 1);
    }

    update(){
        for(var entity of this.entities){
            entity.update();
        }
    }

    /**
     * Override, basically just populate the array
     */
    reset(){}

    respawnOne(origin){

        for(var entity of this.entities){
            if(entity.isActive)
                continue;

            entity.reset(origin);
            break;
        }
    }

    respawnOneAroundPoint(origin, maxRadius){

        for(var entity of this.entities){
            if(entity.isActive)
                continue;

            entity.resetWithinRadius(origin, maxRadius);
            break;
        }
    }

    getNumberOfActiveEntities(){
        var total = 0;

        for(var entity of this.entities){
            if(entity.isActive)
                total++;
        }

        return total;
    }

    getNumberOfInactiveEntities(){
        var total = 0;

        for(var entity of this.entities){
            if(!entity.isActive)
                total++;
        }

        return total;
    }
}