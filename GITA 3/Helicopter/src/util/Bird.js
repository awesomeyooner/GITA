class Bird extends Entity{

    constructor(size){
        super(size, 0, 0);
    }

    update(){
        this.move();

        fill("blue");
        this.move();
        circle(this.getNativeX(), this.getNativeY(), this.getSize());
    }
}