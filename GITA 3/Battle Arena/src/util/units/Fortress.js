class Fortress extends Entity{

    constructor(origin, size, health, color){
        super(
            size, // size
            origin.getCartesianX(),
            origin.getCartesianY(),
            true,
            0, // speed
            health,
            color
        );

        this.initialize();
    }

    update(){
        if(!super.update())
            return;

        this.move();
        this.drawEntity();
        
        this.displayHealthBar();
    }

    initialize(){
        CollisionManager.addEntity(
            this,
            CollisionType.FORTRESS,
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
        )
    }

    
}