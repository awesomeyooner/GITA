
class GameManager{

    constructor(){
        this.player = new Player(40, 5);

        this.enemyManager = new EnemyManager(100);
    }

    initialize(){
        this.player.set(-500, GROUND_Y);
        this.enemyManager.resetEnemies();
    }

    update(){
        background("skyblue");

        if(!this.player.isActive){
            Utility.textCenter(
                "Game Over!",
                Utility.cartesianToNativeX(0),
                Utility.cartesianToNativeY(0),
                100
            );
        }

        Utility.rectFromCartesian(
            -width/2, 
            HORIZON_Y,
            width,
            (height / 2) - HORIZON_Y,
            "green",
            "green"
        );


        this.player.update();

        this.enemyManager.update(this.player);

        this.displayStats();
    }

    displayStats(){
        Utility.textCorner("Points: " + this.enemyManager.totalSegmentsEliminated * 10, 20, 50, 40);
        Utility.textCorner("Bombs: " + this.player.bombManager.getNumberOfInactiveProjectiles(), 20, 100, 40);
        Utility.textCorner("Bullets: " + this.player.bulletManager.getNumberOfInactiveProjectiles(), 20, 150, 40);
        Utility.textCorner("Enemies: " + this.enemyManager.getNumberOfActiveEnemies(), 20, 200, 40);
        Utility.textCorner("Health: " + this.player.health, 20, 250, 40);
    }
}