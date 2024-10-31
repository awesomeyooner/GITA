class Bird extends Entity{

    constructor(size, x = 0, y = 0){
        super(size, x, y);
    }

    update(){
        fill("blue");
        this.constrainMovement();
        this.move();
        circle(this.getNativeX(), this.getNativeY(), this.getSize());
    }
}