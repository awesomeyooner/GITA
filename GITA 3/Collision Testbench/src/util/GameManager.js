
class GameManager{

    static instance = new GameManager();

    constructor(){
        this.player = new Player(
            50,
            5
        );
    }

    static getInstance(){
        return this.instance;
    }

    initialize(){

    }

    update(){
        background("skyblue");

        this.player.update();

        CollisionManager.update();
        EnemyManager.getInstance().update(this.player);

        this.#displayStats();
    }

    #displayStats(){
        Utility.textCorner(
            this.player.health,
            100,
            50,
            20
        );

        Utility.textCorner(
            this.player.projectileManager.getNumberOfActiveProjectiles(),
            100,
            100,
            20
        );
    }
}