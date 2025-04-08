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
        this.set(newPoint.getCartesianX(), newPoint.getCartesianY());
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

        return Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    }

    getVector(otherPoint){
        var deltaX = this.getCartesianX() - otherPoint.getCartesianX();
        var deltaY = this.getCartesianY() - otherPoint.getCartesianY();

        return new Vector(deltaX, deltaY);
    }

    toVector(){
        return new Vector(this.#x, this.#y);
    }

    plus(otherPoint){
        var sumX = this.#x + otherPoint.getCartesianX();
        var sumY = this.#y + otherPoint.getCartesianY();

        //this.set(sumX, sumY);

        return new Point(sumX, sumY);
    }

    minus(otherPoint){
        var deltaX = this.#x - otherPoint.getCartesianX();
        var deltaY = this.#y - otherPoint.getCartesianY()

        return new Point(deltaX, deltaY);
    }

    isOutOfBounds(w = width, h = height){
        if(this.getCartesianX() > w / 2 || this.getCartesianX() < -w / 2)
            return true;
        
        if(this.getCartesianY() > h / 2 || this.getCartesianY() < -h / 2)
            return true;

        return false;
    }


}