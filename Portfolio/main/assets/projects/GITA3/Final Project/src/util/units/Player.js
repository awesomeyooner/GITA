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
        this.turretManager = new TurretManager(10);

        this.initialize();
    }

    update(enemies, debug = false){
        super.update();
        this.barricadeManager.update();
        this.turretManager.update(enemies);

        if(!this.isActive)
            return;

        this.displayHealthBar();

        if(debug){
            this.highlightClosest(enemies);
            GridManager.getInstance().paintCellFromPoint(this);
        }
    }

    highlightClosest(enemies){
        var closest = this.getClosestTarget(enemies);

        if(closest === null)
            return;

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
                
                if(selfEvent.type !== collidedEvent.type && collidedEvent.type){
                    switch(collidedEvent.type){
                        case CollisionType.ENEMY:
                            selfEvent.entity.incrementHealth(-1);
                            break;
                        case CollisionType.FORTRESS_ENEMY:
                            selfEvent.entity.incrementHealth(-1);
                            break;
                        case CollisionType.FORTRESS_PLAYER:
                            selfEvent.entity.incrementHealth(-1);
                            break;
                    }
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
                    
                }
            }
        );

        CollisionManager.addArrayOfEntities(
            this.barricadeManager.getProjectiles(),
            CollisionType.BARRICADE,
            (selfEvent, collidedEvent) => {
            
                if(selfEvent.type !== collidedEvent.type){
                    switch(collidedEvent.type){
                        case CollisionType.ENEMY:
                            selfEvent.entity.incrementHealth(-1);
                            break;
                        case CollisionType.PLAYER:
                            selfEvent.entity.setHealth(0);
                            break;
                    }
                }
                else{
                    selfEvent.entity.applyAntiNoClip(collidedEvent.entity);
                }
            }
        );
    }
}