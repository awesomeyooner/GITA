class Knight extends Entity{

    constructor(canvasBoundX, canvasBoundY){
        super(canvasBoundX, canvasBoundY, "resources/knight.png");
        
        this.healthCap = 3;
        this.internalHealth = 3;
        this.speed = 0.2;
    }

    update(zombies, graveyard){
        super.update();

        if(!this.isBinded){
            this.punch(zombies, graveyard);

            if(Castle.isEnraged){
                this.speed = 1;
                this.image.src = "resources/enraged knight.png";
                this.size = 60;
            }
            else{
                this.size = 50;
                this.speed = 0.2;
                this.image.src = "resources/knight.png";
            }

                
        }
        else{
            this.size = 75;
        }
    }

    punch(zombies, graveyard){
        var closest = {distance: 10000, id: -1};

        for(zombie of zombies){
            if(!zombie.isAlive || zombie.isBinded)
                continue;

            var distance = Utility.getDistance(this, zombie);

            if(distance < closest.distance){
                closest.distance = distance;
                closest.id = zombie.id;
            }    
        }

        if(closest.id != -1){
            if(Utility.getDistance(this, graveyard) > 300)
                super.pursuit(zombies[closest.id]);
            else
                super.pursuit(graveyard);
        }
            
        else{
            super.pursuit(graveyard);
        }

        if(closest.distance < 5){
            zombies[closest.id].kill();

            if(!Castle.isEnraged)
                this.internalHealth--;
            else
                this.internalHealth -= 0.2;
        }
    }
}