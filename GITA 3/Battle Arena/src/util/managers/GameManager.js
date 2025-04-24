
class GameManager{

    static instance = new GameManager();

    constructor(){
        this.player = new Player(
            50,
            5
        );

        this.playerFortress = new Fortress(
            PLAYER_FORTRESS_LOCATION,
            100,
            100,
            "blue"
        );

        this.enemyFortress = new Fortress(
            ENEMY_FORTRESS_LOCATION,
            100,
            100,
            "red"
        );
    }

    static getInstance(){
        return this.instance;
    }

    initialize(){

    }

    update(){
        background("skyblue");

        if(!this.player.isActive){
            this.#displayGameOver();
            return;
        }
        
        CollisionManager.update();
        EnemyManager.getInstance().update(this.player);
        this.player.update(EnemyManager.getInstance().enemies);

        this.playerFortress.update();
        this.enemyFortress.update();

        this.#displayStats();
    }

    #displayGameOver(){
        Utility.textCenter(
            "Game Over!",
            Utility.cartesianToNativeX(0),
            Utility.cartesianToNativeY(0),
            100
        );
    }

    #displayStats(){
        Utility.textCorner(
            "Health: " + this.player.health,
            100,
            50,
            20
        );

        Utility.textCorner(
            "Bullets: " + this.player.projectileManager.getNumberOfActiveProjectiles(),
            100,
            100,
            20
        );

        Utility.textCorner(
            "Barricades: " + this.player.barricadeManager.getNumberOfActiveProjectiles(),
            100,
            150,
            20
        );
    }
}