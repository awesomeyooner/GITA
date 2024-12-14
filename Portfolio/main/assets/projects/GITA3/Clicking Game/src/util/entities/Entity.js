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