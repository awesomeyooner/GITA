class Turret extends Gunner{
 
    constructor(size, maxBullets, maxHealth, color="green"){
        super(
            size,
            0,
            maxBullets,
            maxHealth,
            color
        );

        this.initialize();
    }

    initialize(){

    }

    update(enemies){
        super.update();

        if(!this.isActive)
            return;

        this.shootAtClosest(enemies);
    }

    shootAtClosest(enemies){

        var proc = 20; //20 in 1000

        var random = Math.round(Utility.random(0, 1000));

        if(proc != random)
            return

        var closest = this.getClosestTarget(enemies);

        this.shoot(closest);
    }


}