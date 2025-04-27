class Fortress extends Entity{

    constructor(origin, size, health, color, type){
        super(
            size, // size
            origin.getCartesianX(),
            origin.getCartesianY(),
            true,
            0, // speed
            health,
            color
        );

        this.initialize(type);
    }

    update(){
        if(!super.update())
            return;

        this.move();
        this.drawEntity();
        
        this.displayHealthBar();
    }

    initialize(type){

        if(type == CollisionType.FORTRESS_ENEMY)
            CollisionManager.addEntity(
                this,
                CollisionType.FORTRESS_ENEMY,
                (selfEvent, collidedEvent) => {
                    if(selfEvent.type !== collidedEvent.type){

                        switch(collidedEvent.type){
                            case CollisionType.BULLET:
                                selfEvent.entity.incrementHealth(-1);
                                break;
                        }
                    }
                }
            );
        else if(type == CollisionType.FORTRESS_PLAYER)
            CollisionManager.addEntity(
                this,
                CollisionType.FORTRESS_PLAYER,
                (selfEvent, collidedEvent) => {
                    if(selfEvent.type !== collidedEvent.type){

                        switch(collidedEvent.type){
                            case CollisionType.ENEMY:
                                selfEvent.entity.incrementHealth(-1);
                                break;
                            case CollisionType.BULLET:
                                selfEvent.entity.incrementHealth(-1);
                                break;
                        }
                    }
                }
            );
    }

    
}