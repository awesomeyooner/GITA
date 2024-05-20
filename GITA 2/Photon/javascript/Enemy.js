class Enemy{

    constructor(x, y, size, speed, health){
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.health = health;
    }

    isAlive(){
        return this.health > 0;
    }
}