class Barricade extends Projectile{

    constructor(maxHealth, size = 40){
        super(
            size,
            1,
            0,
            maxHealth,
            "brown"
        );
    }

    update(){
        super.update()

        if(!this.isActive)
            return;
        
        this.displayHealthBar();

        if(this.health == 1)
            this.color = "black";
        else if(this.health == 2)
            this.color = "brown";
        else if(this.health == 3)
            this.color = "tan";
    }
}