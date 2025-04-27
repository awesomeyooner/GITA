class EnemyManager extends EntityManager{

    static instance = new EnemyManager();

    constructor(maxEnemies = 100){
        super(maxEnemies);

        this.initialize();
    }

    static getInstance(){
        return this.instance;
    }

    initialize(){
        this.reset(50, 1);
    }

    update(target){
        for(var entity of this.entities){
            entity.pursuit(target);
            entity.update();
        }
    }

    reset(size, speed, maxBullets = 10, maxHealth = 3, color = "red"){
        for(var i = 0; i < this.maxEntities; i++){
            this.entities[i] = new Enemy(
                size,
                speed,
                maxBullets,
                maxHealth,
                color
            );

            this.entities[i].isActive = false;
        }
    }
}