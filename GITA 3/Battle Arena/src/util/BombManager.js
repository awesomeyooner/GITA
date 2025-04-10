class BombManager extends ProjectileManager{

    resetProjectiles(size = 10, maxBounces = 5, speed = 3, color = "black"){
        for(var i = 0; i < this.maxProjectiles; i++){
            this.projectiles[i] = new Bomb(
                size, //size
                maxBounces, //bounces
                speed, //speed
                color //color
            );
        }
    }

    
}