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
    
    setHeadingX(newX){
        this.#movement.setX(newX);
    }

    setHeadingY(newY){
        this.#movement.setY(newY);
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

    constrainMovement(heading = this.#movement, w = width, h = height){ 
        if(this.getCartesianX() + (this.getSize() / 2) > w / 2 && heading.getX() > 0) //right
            heading.setX(0);
    
        else if(this.getCartesianX() - (this.getSize() / 2) < -w / 2 && heading.getX() < 0) //left
            heading.setX(0);
            
        if(this.getCartesianY() + (this.getSize() / 2) > h / 2 && heading.getY() > 0) //up
            heading.setY(0);

        if(this.getCartesianY() - (this.getSize() / 2)< -h / 2 && heading.getY() < 0)
            heading.setY(0);
    }

    collides(otherEntity){
        var maxDistance = this.getSize() + otherEntity.getSize();

        return this.getDistance(otherEntity) <= maxDistance;
    }
}