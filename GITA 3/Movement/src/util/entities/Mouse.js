class Mouse extends Point{

    #isMousePressed = false;

    constructor(){
        super(0, 0);
    }

    update(isMousePressed){
        this.set(Utility.nativeToCartesianX(mouseX), Utility.nativeToCartesianY(mouseY));        

        this.isMousePressed = isMousePressed;
    }

    isPressed(){
        return this.isMousePressed;
    }
}