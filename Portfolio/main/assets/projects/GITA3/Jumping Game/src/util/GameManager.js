
class GameManager{

    constructor(){
        this.player = new Player(20, 5);
    }

    initialize(){
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
    }
}