class Gunner extends Entity{

    constructor(size, speed, maxBullets = 100, maxHealth = 10, color = "blue"){
        super(
            size,
            0,
            0,
            true,
            speed,
            maxHealth,
            color
        );

        this.projectileManager = new ProjectileManager(
            maxBullets, 
            10, 
            10, 
            1, 
            3,
            color
        );

        // this.initialize();
    }

    initialize(){}

    update(){
        if(!super.update())
            return;

        this.move();
        this.drawEntity();

        this.projectileManager.update();
    }

    shoot(direction){
        this.projectileManager.shoot(this, direction);
    }
}