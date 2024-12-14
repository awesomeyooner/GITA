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

class SlashManager{

    #points = new Array();

    constructor(buffer){
        this.buffer = buffer;

        // for(var i = 0; i < buffer; i++){
        //     this.#points[i] = new Point(-5000, -5000);
        // }
    }

    update(){
        this.drawArc(5);
    }
    
    getPoints(){
        return this.#points;
    }

    append(point){
        // this.#points.push(point);
        // this.#points.shift();
        if(this.#points[this.buffer] == null){
            this.#points.unshift(point);
            //this.#points.pop();
        }
    }

    isFull(){
        return this.#points[this.buffer] != null;
    }

    reset(){
        this.#points = new Array(this.buffer);
    }

    drawArc(weight){
        var previous = this.#points[0];

        if(previous == null)
            return;

        for(var point of this.#points){

            if(point == null)
                continue;

            push();
            strokeWeight(weight);
            stroke("white");


            line(
                previous.getNativeX(), 
                previous.getNativeY(),

                point.getNativeX(), 
                point.getNativeY()
            );
            // circle(point.getNativeX(), point.getNativeY(), 5);
            // pop();

            previous = point;
        }
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

}

class ObjectManager{

    #objects = new Array();
    #maxObjects;

    constructor(maxObjects){
        this.#maxObjects = maxObjects;
    }

    initialize(){
        this.resetObjects();
        this.fillObjects();
    }

    update(){
        this.placeObjects();
    }

    reset(){
        this.resetObjects();
        this.fillObjects();
    }

    getObjects(){
        return this.#objects;
    }

    resetObjects(){
        //this.#objects = new Array(Math.floor((this.#maxObjects * Math.random()) + 1));
        this.#objects = new Array(this.#maxObjects);
    }

    fillObjects(){
        for(var i = 0; i < this.#objects.length; i++){

            var size = Math.floor(
                (Math.random() * 100) + 50
            );

            var x = Math.floor(
                (Math.random() * width) - (width / 2)
            );

            if(x < 0)
                x += Math.floor(size / 2);
            else
                x -= Math.floor(size / 2);

            var y = Math.floor(
                (Math.random() * height) - (height / 2)
            );

            if(y < 0)
                y += Math.floor(size / 2);
            else
                y -= Math.floor(size / 2);

            this.#objects[i] = new Entity(size, x, y);
        }
    }
    
    placeObjects(){
    
        for(var object of this.#objects){

            //var object = this.#objects[i];

            push();

            if(object.isActive()){
                fill(255, 0, 0);
                stroke(255, 0, 0);
            }
            else{
                fill(0, 0, 255);
                stroke(0, 0, 255); 
            }
            
            circle(object.getNativeX(), object.getNativeY(), object.getSize());
            
            pop();


        }            
        
    }
}

const GameState = {
    TITLE: "title",
    REVEAL: "reveal",
    LIGHTS_OUT: "lights_out",
    SLASHING: "slashing",
    END: "end"
};

class GameManager{

    #state = GameState.TITLE;

    constructor(objectmanager, slashmanager){
        this.objectmanager = objectmanager;
        this.slashmanager = slashmanager;
    }

    update(){

        switch(this.#state){
            case GameState.TITLE:
                background("lightblue");

                Utility.textCenter(
                    "My Game",
                    Utility.cartesianToNativeX(0),
                    Utility.cartesianToNativeY(0),
                    75
                );

                Utility.textCenter(
                    "Press ACTION! to start",
                    Utility.cartesianToNativeX(0),
                    Utility.cartesianToNativeY(-100),
                    30
                );
                break;
            
            case GameState.REVEAL:
                background("lightblue");
                break;

            case GameState.LIGHTS_OUT:
                background("lightblue");
                break;

            case GameState.SLASHING:
                background("lightblue");
                break;

            case GameState.END:
                this.objectmanager.update();
                Utility.textCenter(
                    "Hit: " + this.getCollisions() + "\n" +
                    "Out of: " + this.objectmanager.getObjects().length,
                    Utility.cartesianToNativeX(0),
                    Utility.cartesianToNativeY(0),
                    150
                );
                break;
        }
    }

    setState(newState){
        this.#state = newState;
    }

    getState(){
        return this.#state;
    }

    getCollisions(){
        var points = this.slashmanager.getPoints();
        var objects = this.objectmanager.getObjects();

        var objectsHit = 0;

        for(var object of objects){
            
            for(var point of points){
                if(point == null)
                    continue;

                var distance = dist(
                    point.getCartesianX(),
                    point.getCartesianY(),
                    object.getCartesianX(),
                    object.getCartesianY()
                );

                if(distance < object.getSize() / 2)
                    object.setActive(false);
            }

            if(!object.isActive())
                objectsHit++;
        }

        return objectsHit;
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

    isOutOfBounds(w = width, h = height){
        if(this.getCartesianX() > w / 2 || this.getCartesianX() < -w / 2)
            return true;
        
        if(this.getCartesianY() > h / 2 || this.getCartesianY() < -h / 2)
            return true;

        return false;
    }

    collides(otherEntity){
        var maxDistance = this.getSize() + otherEntity.getSize();

        return this.getDistance(otherEntity) <= maxDistance;
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

    constructor(dx = 0, dy = 0){
        this.#dx = dx;
        this.#dy = dy;
    }

    getUnitVector(){
        var magnitude = getMagnitude();

        if(magnitude == 0)
            return new Vector();
            
        return new Vector(this.getX() / magnitude, this.getY() / magnitude);
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
