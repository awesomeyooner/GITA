class GameManager{

    #timeElapsed = 0;

    #player = new Player(
        50, //size
        100, //max bullets
        5, //max health
        "blue" //color
    );

    #enemy = new Enemy(
        50, //size
        20, //max bullets
        20, //max health
        "red" //color
    );

    #isActive = true;

    initialize(){
        this.#enemy.initialize();
    }

    update(){

        if(this.#enemy.isActive && this.#player.isActive)
            this.#timeElapsed = Math.round(100 * millis() / 1000) / 100;

        if(!this.#enemy.isActive){
            this.drawEndScreen("You Win!" + "\n" + `Lasted ${this.#timeElapsed} seconds`);
            return;
        }
        else if(!this.#player.isActive){
            this.drawEndScreen("You Lose!" + "\n" + `Lasted ${this.#timeElapsed} seconds`);
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
        Utility.textCorner("Time: " + this.#timeElapsed, 20, 200, 30);
    }

    drawEndScreen(text = "Game Over!"){
        Utility.textCenter(
            text, 
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