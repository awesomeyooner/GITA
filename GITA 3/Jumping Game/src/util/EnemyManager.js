class EnemyManager{

    constructor(maxEnemies = 100){
        this.maxEnemies = maxEnemies;

        this.enemies = new Array();

        this.totalSegmentsEliminated = 0;
    }

    update(player){
        for(var enemy of this.enemies){
            if(!enemy.isActive)
                continue;

            enemy.update();

            if(enemy.collides(player)){
                player.health--;
                enemy.isActive = false;
                continue;
            }

            for(var bullet of player.bulletManager.getProjectiles()){
                for(var segment of enemy.segments){
                    if(bullet.isActive && segment.isActive && segment.collides(bullet)){
                        bullet.isActive = false;
                        segment.isActive = false;
                        this.totalSegmentsEliminated++;
                    }
                }
               
            }

            for(var bomb of player.bombManager.getProjectiles()){
                for(var segment of enemy.segments){
                    if(bomb.isActive && segment.isActive && segment.collides(bomb)){
                        bomb.isActive = false;
                        segment.isActive = false;
                        this.totalSegmentsEliminated++;
                    }
                }
            }

            for(var bullet of enemy.bulletManager.getProjectiles()){

                for(var segment of player.segments){
                    if(bullet.isActive && segment.isActive && segment.collides(bullet)){
                        bullet.isActive = false;
                        player.health--;
                    }
                }
                
            }

            for(var bomb of enemy.bombManager.getProjectiles()){

                for(var segment of player.segments){
                    if(bomb.isActive && segment.isActive && segment.collides(bomb)){
                        bomb.isActive = false;
                        player.health--;
                    }
                }
                
            }
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