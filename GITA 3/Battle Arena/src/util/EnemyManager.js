class EnemyManager{

    static instance = new EnemyManager();

    constructor(maxEnemies = 100){
        this.maxEnemies = maxEnemies;

        this.enemies = new Array();

        this.initialize();
    }

    static getInstance(){
        return this.instance;
    }

    initialize(){
        this.reset(50, 2);
    }

    update(target){
        for(var enemy of this.enemies){
            enemy.pursuit(target);
            enemy.update();
        }
    }

    reset(size, speed, maxBullets = 10, maxHealth = 3, color = "red"){
        for(var i = 0; i < this.maxEnemies; i++){
            this.enemies[i] = new Enemy(
                size,
                speed,
                maxBullets,
                maxHealth,
                color
            );

            this.enemies[i].isActive = false;
        }
    }

    respawnOneEnemy(origin){

        for(var enemy of this.enemies){
            if(enemy.isActive)
                continue;

            enemy.reset(origin);
            break;
        }
    }

    getNumberOfActiveEnemies(){
        var total = 0;

        for(var enemy of this.enemies){
            if(enemy.isActive)
                total++;
        }

        return total;
    }

    resetEnemies(){
        for(var i = 0; i < this.maxEnemies; i++){
            this.enemies[i] = new Enemy(
                40,
                2,
                3
            );

            this.enemies[i].reset(false);
        }
    }

    removeFeet(){
        for(var enemy of this.enemies){
            if(!enemy.isActive)
                continue;

            for(var segment of enemy.segments){
                if(segment.isActive){
                    segment.isActive = false;
                    break;
                }
            }

            enemy.refreshSegments();
        }
    }

    spawnEnemy(){
        for(var enemy of this.enemies){
            if(!enemy.isActive){
                enemy.reset(true);
                enemy.setHeading(new Vector(-1, 0), true);
                break;
            }
        }
    }
}