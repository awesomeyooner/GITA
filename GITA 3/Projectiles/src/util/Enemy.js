class Enemy extends Entity{

    #bullets = new Array();

    #maxBullets;

    #path = new Array();

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
            var final;

            if(i == this.#path.length - 1){ //if its the last one basically
                final = this.#path[0].toVector(); //make the last connect with first
            }
            else
                final = this.#path[i + 1].toVector(); //if not, then just make it the next

            var vector = final.plus(initial.times(-1));

            var radicand = 
                (Math.pow(lookahead, 2) / Math.pow(vector.getMagnitude(), 2)) - 
                (Math.pow(initial.getMagnitude(), 2) / Math.pow(vector.getMagnitude(), 2)) + 
                Math.pow(initial.dot(vector) / Math.pow(vector.getMagnitude(), 2), 2);
            
            var time = 
            Math.sqrt(radicand) - 
            (initial.dot(vector) / Math.pow(vector.getMagnitude(), 2));
            
            print(time);
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

        this.pursuitPath();
    }   
}