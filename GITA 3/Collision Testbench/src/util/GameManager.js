
class GameManager{

    constructor(){
        this.player = new Player(
            50,
            5
        );
    }

    initialize(){

    }

    update(){
        background("skyblue");

        this.player.update();
    }

    displayStats(){
        
    }
}