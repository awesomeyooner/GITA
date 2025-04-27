class ProjectileManager{

    constructor(maxProjectiles = 10, speed = 1, size = 10, health = 1, maxBounces = 0, color = "blue", override = false){
        this.projectiles = new Array();
        this.maxProjectiles = maxProjectiles;

        if(!override){
            this.resetProjectiles(
                size,
                maxBounces,
                speed,
                health,
                color
            );
        }
    }

    resetProjectiles(size = 10, maxBounces = 0, speed = 1, health = 1, color = "blue"){
        for(var i = 0; i < this.maxProjectiles; i++){
            this.projectiles[i] = new Projectile(
                size, //size
                maxBounces, //bounces
                speed, //speed
                health, //health
                color //color
            );
        }
    }

    getProjectiles(){
        return this.projectiles;
    }

    getMaxProjectiles(){
        return this.maxProjectiles;
    }

    getNumberOfActiveProjectiles(){
        var total = 0;

        for(var bullet of this.projectiles){
            if(bullet.isActive)
                total++;
        }

        return total;
    }

    getNumberOfInactiveProjectiles(){
        var total = 0;

        for(var bullet of this.projectiles){
            if(!bullet.isActive)
                total++;
        }

        return total;
    }

    shoot(origin, direction){
        for(var bullet of this.projectiles){
            if(bullet.isActive)
                continue;
            else{
                bullet.shoot(origin, direction);
                break;
            }
        }
    }
    
    update(){
        for(var bullet of this.projectiles){
            if(!bullet.isActive)
                continue;

            bullet.update();
        }
    }
}