class Enemy extends Gunner{

    constructor(size, speed, maxBullets = 50, maxHealth = 10, color = "blue"){
        super(
            size,
            speed,
            maxBullets,
            maxHealth,
            color
        );

        this.initialize();
    }

    initialize(){
        // CollisionManager.addArrayOfEntities(this.projectileManager.getProjectiles(), 
        //     CollisionType.BULLET,
        //     (selfEvent, collidedEvent) => {
                
        //         if(selfEvent.type !== collidedEvent.type && selfEvent.entity.bounces != 0){
        //             selfEvent.entity.incrementHealth(-1);
        //         }
        //     }
        // );

        CollisionManager.addEntity(this,
            CollisionType.ENEMY,
            (selfEvent, collidedEvent) => {

                if(selfEvent.type !== collidedEvent.type){
                    
                    if(collidedEvent.type === CollisionType.BULLET)
                        selfEvent.entity.incrementHealth(-1);
                    else if(collidedEvent.type === CollisionType.PLAYER)
                        selfEvent.entity.setHealth(0);
                    else if(collidedEvent.type === CollisionType.BARRICADE)
                        selfEvent.entity.setHealth(0);
                    else if(collidedEvent.type === CollisionType.FORTRESS_PLAYER)
                        selfEvent.entity.setHealth(0);
                }
                else{
                    selfEvent.entity.applyAntiNoClip(collidedEvent.entity);
                }
            }
        );
    }

    update(){
        super.update()

        if(!this.isActive)
            return;
        
        this.displayHealthBar();

        if(this.health == 1)
            this.color = "red";
        else if(this.health == 2)
            this.color = "orange";
        else if(this.health == 3)
            this.color = "yellow";
    }
}