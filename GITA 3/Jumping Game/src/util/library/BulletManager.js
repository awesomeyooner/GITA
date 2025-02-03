class BulletManager{

    #bullets = new Array();
    #maxBullets;

    constructor(maxBullets = 10, speed = 1, size = 10, maxBounces = 0, color = "blue"){
        this.#maxBullets = maxBullets;

        this.resetBullets(
            size,
            maxBounces,
            speed,
            color
        );
    }

    resetBullets(size = 10, maxBounces = 0, speed = 1, color = "blue"){
        for(var i = 0; i < this.#maxBullets; i++){
            this.#bullets[i] = new Bullet(
                size, //size
                maxBounces, //bounces
                speed, //speed
                color //color
            );
        }
    }

    getBullets(){
        return this.#bullets;
    }

    getNumberOfInactiveBullets(){
        var total = 0;

        for(var bullet of this.#bullets){
            if(!bullet.isActive)
                total++;
        }

        return total;
    }

    shoot(origin, direction){
        for(var bullet of this.#bullets){
            if(bullet.isActive)
                continue;
            else{
                bullet.setPoint(origin);
                bullet.setHeading(direction.times(bullet.speed));
                bullet.isActive = true;
                bullet.bounces = 0;
                break;
            }
        }
    }
    
    update(){
        for(var bullet of this.#bullets){
            if(!bullet.isActive)
                continue;

            bullet.update();
        }
    }
}