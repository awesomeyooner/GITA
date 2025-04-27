class TurretManager extends EntityManager{

    constructor(maxTurrets = 10){
        super(maxTurrets);

        this.initialize();
    }

    initialize(){
        this.reset();
    }

    reset(size = 40, maxBullets = 10, maxHealth = 20, color = "green"){
        for(var i = 0; i < this.maxEntities; i++){
            var turret = new Turret(
                size,
                maxBullets,
                maxHealth,
                color
            );

            turret.isActive = false;

            this.entities[i] = turret;
        }
    }

    update(target){
        for(var entity of this.entities){
            entity.update(target);
        }
    }


}