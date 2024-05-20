class Zombie extends Entity{

    constructor(canvasBoundX, canvasBoundY){
        super(canvasBoundX, canvasBoundY, "resources/skull.png");

        this.kill();
    }

    update(object){
        if(this.internalHealth <= 0)
            this.isAlive = false;
        else
            this.isAlive = true;

        if(this.isAlive){
            if(!this.isBinded){
                this.pursuit(object);
                this.size = 50;
            }
            else{
                this.size = 75;
            }
        }
    }

    
}