class FuelPack extends Entity{

    constructor(size, x = 0, y = 0){
        super(size, x, y, true);
    }

    update(){
        fill("red");

        if(!this.isActive)
            return;

        this.move();
        this.drawEntity();
    }

    drawEntity(){

        push();
        translate(
            this.getNativeX(),
            this.getNativeY()
        );

        fill("red");
        circle(0, 0, this.size);
        pop();
    }
}