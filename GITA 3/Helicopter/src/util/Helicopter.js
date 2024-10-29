class Helicopter extends Entity{

    constructor(size){
        super(size, 0, 0);
    }

    update(){
        this.move();

        fill("red");
        this.move();
        circle(this.getNativeX(), this.getNativeY(), this.getSize());
    }
}