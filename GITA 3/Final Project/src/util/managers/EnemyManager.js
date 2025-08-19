class EnemyManager extends EntityManager{

    static instance = new EnemyManager();

    constructor(maxEnemies = 5){
        super(maxEnemies);

        this.initialize();
    }

    static getInstance(){
        return this.instance;
    }

    initialize(){
        this.reset(50, 2);
    }

    update(target, base, debug = false){
        for(var entity of this.entities){
            if(entity == null)
                continue;

            entity.update(target, debug);
        }

        this.spawnOneInEvery(2, base, 200);
    }

    spawnOneInEvery(proc, origin, radius = 0){
        var random = Math.round(Utility.random(0, proc));

        if(random === 0)
            this.respawnOneAroundPoint(origin, radius);
    }

    reset(size, speed, maxBullets = 10, maxHealth = 20, color = "red"){
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