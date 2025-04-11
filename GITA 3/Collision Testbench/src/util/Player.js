class Player extends Entity{

    constructor(size, speed, maxBullets = 50, maxHealth = 10, color = "blue"){
        super(
            size,
            0,
            0,
            true,
            speed,
            maxHealth,
            color
        );

        this.projectileManager = new ProjectileManager(
            maxBullets, 
            10, 
            10, 
            2, 
            10,
            color
        );

        this.initialize();
    }

    initialize(){
        CollisionManager.addArrayOfEntities(this.projectileManager.getProjectiles(), 
            CollisionType.BULLET,
            (selfEvent, collidedEvent) => {
                
                if(selfEvent.type !== collidedEvent.type && selfEvent.entity.bounces != 0){
                    selfEvent.entity.health--;
                }
            }
        );

        CollisionManager.addEntity(this,
            CollisionType.PLAYER,
            (selfEvent, collidedEvent) => {
                if(selfEvent.type !== collidedEvent.type){

                    if(collidedEvent.entity.bounces != 0){
                        selfEvent.entity.health--;
                        collidedEvent.entity.isActive = false;
                    }
                }
            }
        );
    }

    update(){
        if(!super.update())
            return;

        this.move();
        this.drawEntity();

        this.projectileManager.update();
    }

    shoot(direction){
        this.projectileManager.shoot(this, direction);
    }
}