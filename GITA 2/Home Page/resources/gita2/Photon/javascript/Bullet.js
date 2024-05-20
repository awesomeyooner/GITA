class Bullet{
    constructor(x, y, speedX, speedY, isActive){
        //defines the coordinates of the bullet
        this.x = x;
        this.y = y;

        //defines the speed of the bullet
        this.speedX = speedX;
        this.speedY = speedY;

        //defines whether it is active (firing) or not
        this.isActive = isActive;
    }

    move(){
        this.x += this.speedX;
        this.y += this.speedY;
    }


}