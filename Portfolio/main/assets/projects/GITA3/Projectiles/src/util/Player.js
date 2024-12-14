class Player extends Entity{

    #bullets = new Array();

    #maxBullets;

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

    resetBullets(){
        for(var i = 0; i < this.#maxBullets; i++){
            this.#bullets[i] = new Bullet(
                10, //size
                4, //bounces
                10, //speed
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

    update(enemy){
        if(!super.update())
            return;

        //moving
        this.constrainMovement(Constants.BOUNDING_WIDTH, Constants.BOUNDING_HEIGHT);
        this.move();
        this.drawEntity();

        for(var bullet of this.#bullets){
            if(!bullet.isActive)
                continue;

            bullet.update();

            bullet.collides(
                this, //collides with player?
                () => this.health--, //if yes, remove health
                (bullet) => bullet.bounces > 0 //additional condition
            );

            bullet.collides(
                enemy, //collides with enemy?
                () => enemy.health-- //if yes, remove health
            );
        }
    }   
}