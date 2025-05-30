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

    update(target, debug = false){
        
        var path = PathFinder.getInstance().findPath(this, target);

        if(path.length == 0)
            this.pursuit(target);
        else
            this.pursuitPath(path, 75, debug);

        super.update()

        if(!this.isActive)
            return;
        
        this.displayHealthBar();

        var percent = this.health / this.maxHealth;
        
        if(percent >= 0.67)
            this.color = "yellow";
        else if(percent >= 0.34)
            this.color = "orange";
        else if(percent > 0)
            this.color = "red";
    }
}