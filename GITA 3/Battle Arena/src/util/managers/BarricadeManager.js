class BarricadeManager extends ProjectileManager{

    constructor(health, size = 40, maxBarricades = 100){
        super(
            maxBarricades,
            0,
            size,
            health,
            0,
            "brown",
            true
        );

        this.resetProjectiles(health, size);
    }

    resetProjectiles(health, size = 40){
        for(var i = 0; i < this.maxProjectiles; i++){
            this.projectiles[i] = new Barricade(
                health, //health
                size //size
            );

            // CollisionManager.addEntity(
            //     this.projectiles[i],
            //     CollisionType.BARRICADE,
            //     (selfEvent, collidedEvent) => {
                
            //         if(selfEvent.type !== collidedEvent.type && collidedEvent.type === CollisionType.BULLET){
            //             selfEvent.entity.incrementHealth(-1);
            //         }
            //     }
            // );
        }
    }
}