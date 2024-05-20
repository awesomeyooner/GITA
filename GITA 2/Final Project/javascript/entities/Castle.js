var isEnraged = false;

class Castle extends Entity{

    constructor(canvasX, canvasY){
        super(canvasX, canvasY, "resources/castle.png");

        this.healthCap = 20;
        this.internalHealth = this.healthCap;

        this.size = 200;

        //this.place(- canvasX / 2, - canvasY / 2);
        this.duration = 300;
    }

    static get isEnraged(){
        return isEnraged;
    }

    setStatus(enrage){
        isEnraged = enrage;
    }

    toggleStatus(){
        isEnraged = !isEnraged;
    }

    update(zombies){
        super.update();
        this.isHit(zombies);

        if(this.duration <= 0){
            this.setStatus(false);
        }

        if(isEnraged){
            this.image.src = "resources/enraged castle.png";
            this.duration -= 0.4;
        }
        else{
            this.image.src = "resources/castle.png";

            if(this.duration < 300)
                this.duration += 0.5;
        }

        this.drawRectangle(-700, 175, this.duration, 20, Utility.greenToRedGradient(Math.floor(this.duration), 300));
    }

    isHit(zombies){
        for(zombie of zombies){

            if(zombie.isAlive && !zombie.isBinded && Utility.getDistance(this, zombie) < 50){
                zombie.kill();
                this.internalHealth--;
            }
        }
    }
}