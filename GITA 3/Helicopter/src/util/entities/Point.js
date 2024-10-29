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