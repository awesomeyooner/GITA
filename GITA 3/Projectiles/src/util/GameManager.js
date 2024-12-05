class GameManager{

    #player = new Player(
        50, //size
        20, //max bullets
        5, //max health
    );

    #enemy = new Enemy(
        50, //size
        20, //max bullets
        5, //max health
    );

 
    constructor(){
    }

    initialize(){

    }

    update(){

        if(!this.#player.isActive()){
            this.drawGameOver();
            return;
        }

        this.#player.update();
        this.#enemy.update();
        
        this.drawCage();
        this.drawHUD();
    }

    getPlayer(){
        return this.#player;
    }

    getEnemy(){
        return this.#enemy;
    }

    drawHUD(){
        Utility.textCorner("Bullets: " + this.getPlayer().getInactiveBullets(), 20, 100, 30);
        Utility.textCorner("Health: " + this.getPlayer().getHealth(), 20, 50, 30);

        Utility.textCorner("Enemy Health: " + this.getEnemy().getHealth(), 20, 150, 30);
    }

    drawGameOver(){
        Utility.textCenter(
            "Game Over!", 
            Utility.cartesianToNativeX(0), 
            Utility.cartesianToNativeY(0), 
            100
        );
    }

    drawCage(){
    
        Utility.drawLine(
            Constants.CORNERS[0],
            Constants.CORNERS[1]
        );

        Utility.drawLine(
            Constants.CORNERS[1],
            Constants.CORNERS[2]
        );

        Utility.drawLine(
            Constants.CORNERS[2],
            Constants.CORNERS[3]
        );

        Utility.drawLine(
            Constants.CORNERS[3],
            Constants.CORNERS[0]
        );
    }

}