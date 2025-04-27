const CollisionType  = {
    PLAYER: "player",
    ENEMY: "enemy",
    BULLET: "bullet",
    BARRICADE: "barricade",
    TURRET: "turret",
    FORTRESS_PLAYER: "fortress_player",
    FORTRESS_ENEMY: "fortress_enemy"
}

class CollisionEvent{

    constructor(entity, type, runnable){
        this.entity = entity;
        this.type = type;
        this.runnable = runnable;
    }
}

class CollisionManager{

    static collisionEvents = new Array();

    static addEntity(entity, type, runnable){
        this.collisionEvents.push(new CollisionEvent(entity, type, runnable));
    }

    static addArrayOfEntities(entities, type, runnable){
        for(var entity of entities){
            this.addEntity(entity, type, runnable);

        }
    }

    static update(){
        for(var index = 0; index < this.collisionEvents.length; index++){
            var current = this.collisionEvents[index];

            if(!current.entity.isActive)
                continue;

            for(var compare = 0; compare < this.collisionEvents.length; compare++){

                //if youre comparing the same entity then skip
                if(compare == index)
                    continue;

                var compared = this.collisionEvents[compare];

                if(!compared.entity.isActive)
                    continue;

                // console.log(current.entity.collides(compared.entity));

                if(current.entity.collides(compared.entity)){
                    current.runnable(current, compared);
                    compared.runnable(compared, current);
                }
                    
            }
        }
    }
}