class EnemyManager{

    constructor(maxEnemies = 100){
        this.maxEnemies = maxEnemies;

        this.enemies = new Array();
    }

    update(){
        for(var enemy of this.enemies){
            if(!enemy.isActive)
                continue;

            enemy.update();
        }
    }

    resetEnemies(){
        for(var i = 0; i < this.maxEnemies; i++){
            this.enemies[i] = new Enemy(
                40,
                2,
            );

            this.enemies[i].reset(false);
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