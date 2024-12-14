class Enemy extends Entity{

    #bullets = new Array();

    #maxBullets;

    #path = new Array();
    #pursuitedPoint;
    #indexOfPursuited;
    #timeOfPursuited;

    constructor(size, maxBullets = 10, maxHealth = 3, color = "blue"){
        super(
            size, //size
            0, //x
            0, //y
            true, //is active at start
            5, //speed
            maxHealth, //max health
            color //color
        );

        this.#maxBullets = maxBullets;

        this.resetBullets();
    }

    initialize(){
        var offset = -100;
        var w = (width / 2) + offset;
        var h = (height / 2) + offset;

        this.#path = [
            new Point(-w, h),
            new Point(w, h),
            new Point(w, -h),
            new Point(-w, -h)
        ];

        this.setX(this.#path[0].getCartesianX());
        this.setY(this.#path[0].getCartesianY());
    }
    

    resetBullets(){
        for(var i = 0; i < this.#maxBullets; i++){
            this.#bullets[i] = new Bullet(
                10, //size
                4, //bounces
                5, //speed
                this.color //color
            );
        }
    }

    getBullets(){
        return this.#bullets;
    }

    getInactiveBullets(){
        var total = 0;

        for(var bullet of this.#bullets){
            if(!bullet.isActive)
                total++;
        }

        return total;
    }

    shoot(direction){
        for(var bullet of this.#bullets){
            if(bullet.isActive)
                continue;
            else{
                bullet.setPoint(this);
                bullet.setHeading(direction.times(bullet.speed));
                bullet.isActive = true;
                bullet.bounces = 0;
                break;
            }
        }
    }

    pursuitPath(lookahead = 50){

        for(var i = 0; i < this.#path.length; i++){
            var initial = this.#path[i].toVector();
            var deltaInitialAndReference = this.#path[i].minus(this).toVector();
            var final;
            var pursuited;
            var time;

            if(i == this.#path.length - 1){ //if its the last one basically
                final = this.#path[0].toVector(); //make the last connect with first
            }
            else
                final = this.#path[i + 1].toVector(); //if not, then just make it the next

            var vector = final.plus(initial.times(-1));

            var radicand = 
                (Math.pow(lookahead, 2) / Math.pow(vector.getMagnitude(), 2)) - 
                (Math.pow(deltaInitialAndReference.getMagnitude(), 2) / Math.pow(vector.getMagnitude(), 2)) + 
                Math.pow(deltaInitialAndReference.dot(vector) / Math.pow(vector.getMagnitude(), 2), 2);

            if(radicand >= 0){
                time = 
                    Math.sqrt(radicand) - 
                    (deltaInitialAndReference.dot(vector) / Math.pow(vector.getMagnitude(), 2));
                    
                if(time > 1)
                    time = 1;
                else if(time < 0)
                    time = 0;

                pursuited = vector.times(time).plus(initial).toPoint();
            }
            else{
                time = -deltaInitialAndReference.dot(vector) / (vector.dot(vector));

                if(time > 1)
                    time = 1;
                else if(time < 0)
                    time = 0;

                pursuited = vector.times(time).plus(initial).toPoint();
            }

            if(this.#pursuitedPoint == null){
                this.#pursuitedPoint = pursuited;
                this.#indexOfPursuited = i;
                this.#timeOfPursuited = time;

                continue;
            }

            if(i == this.#indexOfPursuited){
                this.#pursuitedPoint = pursuited;
                this.#timeOfPursuited = time;
            }

            if(i == this.#indexOfPursuited)
                this.#timeOfPursuited == time;

            var atEndOfPath = this.#timeOfPursuited == 1;
            var isLookingAtNext = i - this.#indexOfPursuited == 1 || (this.#indexOfPursuited == this.#path.length - 1 && i == 0);
            var analyzedIsShorter = i != this.#indexOfPursuited && this.getVector(this.#pursuitedPoint).getMagnitude() > this.getVector(pursuited).getMagnitude();

            if(isLookingAtNext && (analyzedIsShorter || atEndOfPath)){
                this.#pursuitedPoint = pursuited;
                this.#indexOfPursuited = i;
                this.#timeOfPursuited = time;
            }
        }

        //circle(this.#pursuitedPoint.getNativeX(), this.#pursuitedPoint.getNativeY(), 10);

        this.setHeading(this.getVector(this.#pursuitedPoint).getUnitVector().times(-5));
    }

    drawPath(path){

        for(var i = 0; i < path.length; i++){
            var initial = path[i];
            var final;

            if(i == path.length - 1){ //if its the last one basically
                final = path[0]; //make the last connect with first
            }
            else
                final = path[i + 1]; //if not, then just make it the next

                Utility.drawLine(
                    initial,
                    final
                );
        }
    }

    update(player){
        if(!super.update())
            return;

        //moving
        this.constrainMovement(width, height);
        this.move();
        this.drawEntity();

        if(millis() % 500 < 20)
            this.shoot(player.getVector(this).getUnitVector());

        for(var bullet of this.#bullets){
            if(!bullet.isActive)
                continue;

            bullet.update();

            bullet.collides(
                player, //collides with player?
                () => player.health-- //if yes, remove health
            );
        }

        //this.drawPath(this.#path);
        this.pursuitPath();
    }   
}