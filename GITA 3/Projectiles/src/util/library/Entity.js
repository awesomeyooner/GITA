class Entity extends Point{

    #size;
    #maxHealth;
    #health;
    #active;
    #speed;
    #color;
    #movement = new Vector();

    constructor(size = 40, x = 0, y = 0, active = true, speed = 1, maxHealth = 1, color = "blue"){
        super(x, y);
        
        this.#size = size;
        this.#maxHealth = maxHealth;
        this.#health = maxHealth;
        this.#active = active;
        this.#speed = speed;
        this.#color = color;
    }

    update(){}

    setSize(newSize){
        this.#size = newSize;
    }

    getSize(){
        return this.#size;
    }

    setHealth(newHealth){
        this.#health = newHealth;
    }

    getHealth(){
        return this.#health;
    }

    setMaxHealth(newMax){
        this.#maxHealth = newMax;
    }

    getMaxHealth(){
        return this.#maxHealth;
    }

    resetHealth(){
        this.#health = this.#maxHealth;
    }

    setSpeed(newSpeed){
        this.#speed = newSpeed;
    }

    getSpeed(){
        return this.#speed;
    }

    setColor(newColor){
        this.#color = newColor;
    }

    getColor(){
        return this.#color;
    }

    setHeading(newHeading, useSpeed){
        this.#movement = useSpeed ? newHeading.getUnitVector().times(this.#speed) : newHeading;
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
        this.setX((this.getCartesianX() + heading.getX()));
        this.setY((this.getCartesianY() + heading.getY()));
    }

    constrainMovement(w = width, h = height, heading = this.#movement){ 
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

        return this.getDistance(otherEntity) < maxDistance;
    }
}