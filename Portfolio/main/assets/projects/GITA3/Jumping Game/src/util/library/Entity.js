class Entity extends Point{

    constructor(size = 40, x = 0, y = 0, isActive = true, speed = 1, maxHealth = 1, color = "blue"){
        super(x, y);
        
        this.size = size;
        this.maxHealth = maxHealth;
        this.health = maxHealth;
        this.isActive = isActive;
        this.speed = speed;
        this.color = color;
        this.movement = new Vector();
    }

    //returns if update was valid (basically not dead)
    update(){
        if(this.health <= 0)
            this.isActive = false;

        if(!this.isActive)
            return false;
        else
            return true;
    }

    drawEntity(){
        fill(this.color);
        circle(this.getNativeX(), this.getNativeY(), this.size);
    }

    setHeading(newHeading, useSpeed = false){
        this.movement = useSpeed ? newHeading.getUnitVector().times(this.speed) : newHeading;
    }
    
    setHeadingX(newX){
        this.movement.setX(newX);
    }

    setHeadingY(newY){
        this.movement.setY(newY);
    }

    getHeading(){
        return this.movement;
    }

    move(heading = this.movement){
        this.setX((this.getCartesianX() + heading.getX()));
        this.setY((this.getCartesianY() + heading.getY()));
    }

    constrainMovement(w = width, h = height, heading = this.movement){ 
        if(this.getCartesianX() + (this.size / 2) > w / 2 && heading.getX() > 0) //right
            heading.setX(0);
    
        else if(this.getCartesianX() - (this.size / 2) < -w / 2 && heading.getX() < 0) //left
            heading.setX(0);
            
        if(this.getCartesianY() + (this.size / 2) > h / 2 && heading.getY() > 0) //up
            heading.setY(0);

        if(this.getCartesianY() - (this.size / 2)< -h / 2 && heading.getY() < 0)
            heading.setY(0);
    }

    isFullyOutOfBounds(w = width, h = height){
        if(Math.abs(this.getCartesianX()) > w / 2)
            return true;
        
        if(Math.abs(this.getCartesianY()) > h / 2)
            return true;

        return false;
    }

    isOutOfBoundsAndGoingInside(w = width, h = height){
        var isGoingInsideRight = this.getCartesianX() > (w / 2) && this.getHeading().getX() < 0;
        var isGoingInsideLeft = this.getCartesianX() < -(w / 2) && this.getHeading().getX() > 0;

        var isGoingInsideTop = this.getCartesianY() > (h / 2) && this.getHeading().getY() < 0;
        var isGoingInsideBottom = this.getCartesianY() < -(h / 2) && this.getHeading().getY() > 0;

        return isGoingInsideRight|| isGoingInsideLeft || isGoingInsideTop || isGoingInsideBottom;
    }

    isOutOfBoundsAndGoingOutside(w = width, h = height){
        var isGoingOutsideRight = this.getCartesianX() > (w / 2) && this.getHeading().getX() > 0;
        var isGoingOutsideLeft = this.getCartesianX() < -(w / 2) && this.getHeading().getX() < 0;

        var isGoingOutsideTop = this.getCartesianY() > (h / 2) && this.getHeading().getY() > 0;
        var isGoingOutsideBottom = this.getCartesianY() < -(h / 2) && this.getHeading().getY() < 0;

        return isGoingOutsideRight|| isGoingOutsideLeft || isGoingOutsideTop || isGoingOutsideBottom;
    }

    collides(otherEntity){
        var maxDistance = (this.size / 2) + (otherEntity.size / 2);

        return this.getDistance(otherEntity) < maxDistance;
    }
}