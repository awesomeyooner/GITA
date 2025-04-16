class Player extends Gunner{

    constructor(size, speed, maxBullets = 50, maxHealth = 10, color = "blue"){
        super(
            size,
            speed,
            maxBullets,
            maxHealth,
            color
        );
    }

    initialize(){
        CollisionManager.addArrayOfEntities(this.projectileManager.getProjectiles(), 
            CollisionType.BULLET,
            (selfEvent, collidedEvent) => {
                
                if(selfEvent.type !== collidedEvent.type && collidedEvent.type !== CollisionType.PLAYER){
                    selfEvent.entity.incrementHealth(-1);
                }
            }
        );

        CollisionManager.addEntity(this,
            CollisionType.PLAYER,
            (selfEvent, collidedEvent) => {
                if(selfEvent.type !== collidedEvent.type){

                    if(collidedEvent.type == CollisionType.ENEMY)
                        selfEvent.entity.incrementHealth(-1);

                    // if(collidedEvent.entity.bounces != 0){
                    //     selfEvent.entity.health--;
                    //     collidedEvent.entity.isActive = false;
                    // }
                }
            }
        );
    }
}