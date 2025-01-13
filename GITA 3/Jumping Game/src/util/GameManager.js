
class GameManager{

    constructor(){
        this.player = new Player(20, 5);
    }

    initialize(){
    }

    update(){
       this.player.update();
    }
}