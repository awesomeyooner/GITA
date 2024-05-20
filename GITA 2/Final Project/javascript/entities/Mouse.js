class Mouse{

    constructor(x, y){
        this.x = x;
        this.y = y;

        this.clicked = false;
        this.bindID = -1;
        this.isBinded = false;
        this.mode = "zombie";
    }

    isClickedOn(object){
        return this.clicked && this.isHoveringOver(object);
    }

    isHoveringOver(object){
        return Utility.getDistance(this, object) < 50;
    }

    toggleMode(){
        if(this.mode == "zombie")
            this.mode = "knight";
        else if(this.mode == "knight")
            this.mode = "turret";
        else if(this.mode == "turret")
            this.mode = "zombie";
    }
}