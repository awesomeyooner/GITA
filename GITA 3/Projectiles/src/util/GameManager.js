class GameManager{

    #player = new Player(
        50, //size
        100, //max bullets
        5, //max health
        "blue" //color
    );

    #enemy = new Enemy(
        50, //size
        20, //max bullets
        100, //max health
        "red" //color
    );

    initialize(){
        this.#enemy.initialize();
    }

    update(){

        if(!this.#player.isActive || !this.#enemy.isActive){
            this.drawGameOver();
            return;
        }

        this.#player.update(this.#enemy);
        this.#enemy.update(this.#player);
        
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
        Utility.textCorner("Health: " + this.getPlayer().health, 20, 50, 30);

        Utility.textCorner("Enemy Health: " + this.getEnemy().health, 20, 150, 30);
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