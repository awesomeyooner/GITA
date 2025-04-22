class Player extends Gunner{

    constructor(size, speed, maxBullets = 50, maxHealth = 10, color = "blue"){
        super(
            size,
            speed,
            maxBullets,
            maxHealth,
            color
        );

        this.barricadeManager = new BarricadeManager(3);

        this.initialize();
    }

    update(enemies){
        super.update();
        this.barricadeManager.update();

        if(!this.isActive)
            return;

        this.displayHealthBar();

        var closest = this.getClosestTarget(enemies);

        closest.color = "blue";
    }

    placeBarricade(point){
        this.barricadeManager.shoot(point, new Vector(0, 0));
    }

    shootWithAutoAim(enemies){
        var closest = this.getClosestTarget(enemies);

        this.shoot(closest.getVector(this).getUnitVector());

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

                    if(collidedEvent.type === CollisionType.ENEMY)
                        selfEvent.entity.incrementHealth(-1);
                    else if(collidedEvent.type === CollisionType.BARRICADE)
                        selfEvent.entity.incrementHealth(-1);
                    // if(collidedEvent.entity.bounces != 0){
                    //     selfEvent.entity.health--;
                    //     collidedEvent.entity.isActive = false;
                    // }
                }
            }
        );

        CollisionManager.addArrayOfEntities(
            this.barricadeManager.getProjectiles(),
            CollisionType.BARRICADE,
            (selfEvent, collidedEvent) => {
            
                if(selfEvent.type !== collidedEvent.type){
                    if(collidedEvent.type === CollisionType.BULLET)
                        selfEvent.entity.incrementHealth(-1);
                    else if(collidedEvent.type === CollisionType.ENEMY)
                        selfEvent.entity.incrementHealth(-1);
                    else if(collidedEvent.type === CollisionType.PLAYER)
                        selfEvent.entity.setHealth(0);
                }
                else{
                    selfEvent.entity.applyAntiNoClip(collidedEvent.entity);
                }
            }
        );
    }
}