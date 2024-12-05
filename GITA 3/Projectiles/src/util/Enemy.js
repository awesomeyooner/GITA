class Enemy extends Entity{

    #bullets = new Array();

    #maxBullets;

    constructor(size, maxBullets = 10, maxHealth = 3){
        super(
            size, //size
            0, //x
            0, //y
            true, //is active at start
            maxHealth //max health
        );

        this.#maxBullets = maxBullets;

        this.resetBullets();
    }

    resetBullets(){
        for(var i = 0; i < this.#maxBullets; i++){
            this.#bullets[i] = new Bullet(
                10, //size
                4, //bounces
                10 //speed
            );
        }
    }

    getBullets(){
        return this.#bullets;
    }

    getInactiveBullets(){
        var total = 0;

        for(var bullet of this.#bullets){
            if(!bullet.isActive())
                total++;
        }

        return total;
    }

    shoot(direction){
        for(var bullet of this.#bullets){
            if(bullet.isActive())
                continue;
            else{
                bullet.setPoint(this);
                bullet.setHeading(direction.times(bullet.getSpeed()));
                bullet.setActive(true);
                bullet.setBounces(0);
                break;
            }
        }
    }

    update(){

        if(!this.isActive())
            return;

        this.move();

        fill("red");
        circle(this.getNativeX(), this.getNativeY(), this.getSize());
    
        for(var bullet of this.#bullets){
            if(!bullet.isActive())
                continue;

            bullet.update();
            
            if(bullet.collides(this) && bullet.getBounces() > 0){
                bullet.setActive(false);
                this.setHealth(this.getHealth() - 1);

                if(this.getHealth() <= 0)
                    this.setActive(false);

                break;
            }
        }
    }   
}