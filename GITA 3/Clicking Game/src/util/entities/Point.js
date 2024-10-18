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
        this.#x = x;
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
}