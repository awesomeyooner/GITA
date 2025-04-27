class Turret extends Gunner{
 
    constructor(size, maxBullets, maxHealth, color="green"){
        super(
            size,
            0,
            maxBullets,
            maxHealth,
            color
        );

        this.initialize();
    }

    initialize(){
        CollisionManager.addArrayOfEntities(this.projectileManager.getProjectiles(), 
            CollisionType.BULLET,
            (selfEvent, collidedEvent) => {
                
                if(selfEvent.type !== collidedEvent.type && collidedEvent.type === CollisionType.ENEMY){
                    selfEvent.entity.incrementHealth(-1);
                }
                else if(collidedEvent.type === CollisionType.FORTRESS_ENEMY)
                    selfEvent.entity.setHealth(0);
            }
        );

        CollisionManager.addEntity(this,
            CollisionType.TURRET,
            (selfEvent, collidedEvent) => {
                if(selfEvent.type !== collidedEvent.type){

                    if(collidedEvent.type === CollisionType.ENEMY)
                        selfEvent.entity.setHealth(0);
                    else if(collidedEvent.type === CollisionType.BARRICADE)
                        selfEvent.entity.setHealth(0);

                }
                else
                    selfEvent.entity.applyAntiNoClip(collidedEvent.entity);
            }
        );
    }

    update(enemies){
        super.update();

        if(!this.isActive)
            return;

        this.displayHealthBar();
        this.shootAtClosest(enemies);
    }

    shootAtClosest(enemies){

        var proc = 20; //1 in proc

        var random = Math.round(Utility.random(0, proc));

        if(0 != random)
            return

        var closest = this.getClosestTarget(enemies);

        if(closest === null)
            return;

        this.shoot(closest.getVector(this));
        this.incrementHealth(-1);
    }


}