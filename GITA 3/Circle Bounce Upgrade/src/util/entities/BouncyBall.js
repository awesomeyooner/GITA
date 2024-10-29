class BouncyBall extends Entity{

    constructor(size){

        super(
            size,
            Utility.nativeToCartesianX(Math.random() * (width - size) + (size / 2)),
            Utility.nativeToCartesianY(Math.random() * (height - size) + (size / 2))
        );
        
        var magnitude = 2 + Math.random() * 10
        this.setHeading(new Vector(magnitude, Math.random() * Math.PI * 2));
    }

    update(){
        fill("red");
        this.move();
        circle(this.getNativeX(), this.getNativeY(), this.getSize());
        this.checkBounds();
    }

    checkBounds(w = width, h = height){

        if(this.getCartesianX() + (this.getSize() / 2) > w / 2 || this.getCartesianX() - (this.getSize() / 2) < -w / 2)
            this.getHeading().setX(-this.getHeading().getX());
            
        if(this.getCartesianY() + (this.getSize() / 2) > h / 2 || this.getCartesianY() - (this.getSize() / 2)< -h / 2)
            this.getHeading().setY(-this.getHeading().getY());    
        
    }
}