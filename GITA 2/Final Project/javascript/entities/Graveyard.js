class Graveyard extends Entity{

    constructor(canvasX, canvasY){
        super(canvasX, canvasY, "resources/grave.png");

        this.healthCap = 20;
        this.internalHealth = this.healthCap;

        this.size = 150;

        //this.place(- canvasX / 2, - canvasY / 2);
    }

    update(knights){
        super.update();
        this.isHit(knights);
    }

    isHit(knights){
        for(knight of knights){

            if(knight.isAlive && Utility.getDistance(this, knight) < 50){
                knight.kill();
                this.internalHealth--;
            }
        }
    }
}