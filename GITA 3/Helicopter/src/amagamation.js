class KeyboardController{

    #keys = new Map();
    #bindings = new Map();

    constructor(){

    }

    initialize(window){
        window.addEventListener("keydown", function(event){
            keyboard.keyDown(event.key);
          });
        
          window.addEventListener("keyup", function(event){
            keyboard.keyUp(event.key);
          })
    }

    update(){
        for(var binding of this.#bindings.keys()){
            if(this.#keys.get(binding) == null || !this.#keys.get(binding))
                continue;
            
            this.#bindings.get(binding)();
        }
    }

    keyUp(key){
        this.#keys.set(key, false);
    }

    keyDown(key){
        this.#keys.set(key, true);
    }

    getKeys(){
        return this.#keys;
    }

    getHeading(){
        var dx = 0;
        var dy = 0;

        for(var key of this.getKeys().keys()){
            if(!this.getKeys().get(key)) //if its not pressed
                continue;

            if(key === "w")
                dy += 1;
            else if(key === "s")
                dy += -1;

            else if(key === "d")
                dx += 1;
            else if(key === "a")
                dx += -1;
        }

        return new Vector(dx, dy).getUnitVector();
    }

    configureBinding(key, runnable){
        this.#bindings.set(key, runnable);
    }

}


class Point{
    #x = 0;
    #y = 0;

    constructor(x, y){
        this.#x = x;
        this.#y = y;
    }

    getPoint(){
        return this;
    }

    setPoint(newPoint){
        set(newPoint.getCartesianX(), newPoint.getCartesianY());
    }

    set(x, y){
        this.setX(x);
        this.setY(y);
    }

    setX(x){
        this.#x = x;
    }

    setY(y){
        this.#y = y;
    }

    getNativeX(){
        return Utility.cartesianToNativeX(this.#x);
    }

    getNativeY(){
        return Utility.cartesianToNativeY(this.#y);
    }

    getCartesianX(){
        return this.#x;
    }

    getCartesianY(){
        return this.#y;
    }

    getDistance(otherPoint){
        var deltaX = this.getCartesianX() - otherPoint.getCartesianX();
        var deltaY = this.getCartesianY() - otherPoint.getCartesianY();

        return Math.sqrt((deltaX * deltaX) + (deltaY + deltaY));
    }

    isOutOfBounds(w = width, h = height){
        if(this.getCartesianX() > w / 2 || this.getCartesianX() < -w / 2)
            return true;
        
        if(this.getCartesianY() > h / 2 || this.getCartesianY() < -h / 2)
            return true;

        return false;
    }


}

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

class Vector {

    #dx;
    #dy;

    //if its polar its r then theta
    constructor(arg1 = 0, arg2 = 0, isPolar = false){
        if(!isPolar){
            this.#dx = arg1;
            this.#dy = arg2;
        }
        else{
            this.#dx = arg1 * Math.cos(arg2);
            this.#dy = arg1 * Math.sin(arg2); 
        }
    }

    getUnitVector(){
        var magnitude = this.getMagnitude();

        if(magnitude == 0)
            return new Vector();
            
        return new Vector(this.getX() / magnitude, this.getY() / magnitude);
    }

    setX(x){
        this.#dx = x;
    }

    setY(y){
        this.#dy = y;
    }

    getX(){
        return this.#dx;
    }

    getY(){
        return this.#dy;
    }

    getAngle(){
        return Math.atan2(this.#dy, this.#dx);
    }

    getMagnitude(){
        return Math.sqrt((this.#dx * this.#dx) + (this.#dy * this.#dy));
    }

    times(scalar){
        return new Vector(this.getX() * scalar, this.getY() * scalar);
    }
}

class Utility{

    static textCenter(text_to_use, x, y, size = 20, degrees = 0, color = "black"){
        push();
        fill(color);
        textSize(size);
        translate(x, y);
        rotate(degrees);
        text(text_to_use, -textWidth(text_to_use) / 2, textSize() / 4);
        pop();
    }

    static cycle(){
        return ((sin(millis() * 0.1) + 1) / 2);
    }

    static textCorner(text_to_use, x, y, size = 20, degrees = 0, color = "black"){
        push();
        fill(color);
        textSize(size);
        translate(x, y);
        rotate(degrees);
        text(text_to_use, 0, 0);
        pop();
    }

    static rectCenter(x, y, w, h){
        rect(x - (w / 2), y - (h / 2), w, h);
    }

    static cartesianToNative(x, y, w = width, h = height){
        var xNew = this.cartesianToNativeX(x, w);
        var yNew = this.cartesianToNativeY(y, h);

        return {x: xNew, y: yNew};
    }

    static nativeToCartesian(x, y, w = width, h = height){
        var xNew = this.nativeToCartesianX(x, w);
        var yNew = this.nativeToCartesianY(y, h);

        return {x: xNew, y: yNew};
    }

    static cartesianToNativeX(x, w = width){
        return x + Math.round(w / 2);
    }

    static cartesianToNativeY(y, h = height){
        return -y + Math.round(h / 2);
    }

    static nativeToCartesianX(x, w = width){
        return x - Math.round(w / 2);   
    }

    static nativeToCartesianY(y, h = height){
        return -y + Math.round(h / 2);
    }
}

class Entity extends Point{

    #size = 0;
    #active = false;
    #movement = new Vector();

    constructor(size, x = 0, y = 0){
        super(x, y);
        
        this.#size = size;
        
        this.#active = true;
    }

    update(){}

    setSize(newSize){
        this.#size = newSize;
    }

    getSize(){
        return this.#size;
    }

    setHeading(newHeading){
        this.#movement = newHeading;
    }

    getHeading(){
        return this.#movement;
    }

    setActive(state){
        this.#active = state;
    }

    isActive(){
        return this.#active;
    }

    move(heading = this.#movement){
        this.setX(Math.round(this.getCartesianX() + heading.getX()));
        this.setY(Math.round(this.getCartesianY() + heading.getY()));
    }

    collides(otherEntity){
        var maxDistance = this.getSize() + otherEntity.getSize();

        return this.getDistance(otherEntity) <= maxDistance;
    }
}

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
