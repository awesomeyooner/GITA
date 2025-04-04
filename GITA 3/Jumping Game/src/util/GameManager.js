
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
        Utility.textCenter("Points: " + this.enemyManager.totalSegmentsEliminated, 100, 50, 40);
    }
}