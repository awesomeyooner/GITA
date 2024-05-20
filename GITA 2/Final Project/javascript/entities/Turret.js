
class Turret extends Entity{

    constructor(canvasX, canvasY){
        super(canvasX, canvasY, "resources/turret.png");

        this.size = 75;

        this.healthCap = 10;
        this.internalHealth = 10;

        this.arrow = new Arrow(0, 0 , 1, 5);
    }

    update(zombies){
        super.update();

        if(!this.isBinded){
            this.size = 75;
        }
        else{
            this.size = 100;
        }

        if(this.isAlive){
            this.track(zombies);
        }

        this.arrow.follow(this, zombies);
    }

    respawn(place){
        super.respawn(place);
    }

    place(newX, newY){
        super.place(newX, newY);

        if(!this.arrow.isActive)
            this.arrow.reset(this.x, this.y);
        
    }

    initialize(context, canvas){
        this.context = context;
        this.canvas = canvas;

        this.arrow.context = context;

        this.arrow.reset(this.x, this.y);
    }

    track(zombies){
        var closest = {distance: 10000, id: -1};

        for(zombie of zombies){
            if(!zombie.isAlive)
                continue;

            var distance = Utility.getDistance(this, zombie);

            if(distance < closest.distance){
                closest.distance = distance;
                closest.id = zombie.id;
            }    
        }

        if(closest.id != -1){
            
            if(!this.arrow.isActive){
                this.internalHealth -= 0.5;
                this.arrow.isActive = true;
                this.arrow.setTarget(zombies[closest.id]);   
            }
            
        }
    }

}

class Arrow{
    constructor(x, y, speed, size){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;

        this.context = null;

        this.isActive = false;

        this.target = {angle: 0, id: -1};
    }

    follow(turret, zombies){

        if(this.target.id != -1){
            var xSpeed = Math.cos(this.target.angle) * this.speed;
            var ySpeed = Math.sin(this.target.angle) * this.speed;
            
            if(turret.isAlive){
                if(this.isActive){
                    this.place(
                        xSpeed + this.x,
                        ySpeed + this.y,
                        turret.canvasX, 
                        turret.canvasY
                    );
                }

                for(zombie of zombies){

                    if(!zombie.isAlive)
                        continue;

                    if(Utility.getDistance(this, zombie) < 25){
                        zombie.internalHealth--;
                        this.reset(turret.x, turret.y);
                        break;
                    }
                }

                if(Math.abs(this.x) > turret.canvasX / 2 || Math.abs(this.y) > turret.canvasY / 2){
                    this.reset(turret.x, turret.y);
                }
            }
        }
    }

    setTarget(zombie){
        this.target.id = zombie.id;

        var deltaX = this.x - zombie.x;
        var deltaY = this.y - zombie.y;
        
        var angle = Math.PI + Math.atan2(deltaY, deltaX);

        this.target.angle = angle;
    }

    place(x, y, maxX, maxY){
        this.x = x;
        this.y = y;

        this.context.fillStyle = "#FF0000";
        this.context.beginPath();
        this.context.arc(
            Utility.toCartesianX(this.x, maxX), 
            Utility.toCartesianY(this.y, maxY), 
            this.size, 0, 2 * Math.PI, true);
            this.context.closePath();
            this.context.fill();
    }

    reset(x, y){
        this.x = x;
        this.y = y;

        this.isActive = false;
    }
}