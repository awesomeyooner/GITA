class Entity extends Point{

    /**
     * Creates a Base Entity
     * @param {number} size Diameter of the object in pixels
     * @param {number} x Spawn Point X
     * @param {number} y Spawn Point Y
     * @param {boolean} isActive Is it active at the start?
     * @param {number} speed Base Speed 
     * @param {number} maxHealth Maximum Health when reset
     * @param {string} color Color of the base entity
     */
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

    /**
     * 
     * @returns True if active
     */
    update(){
        if(this.health <= 0){
            this.health = 0;
            this.isActive = false;
        }

        if(!this.isActive)
            return false;
        else
            return true;
    }

    /**
     * 
     * @param {Point} origin 
     * @param {boolean} active 
     */
    reset(origin = this, active = true){
        this.setPoint(origin);
        this.isActive = active;
        this.health = this.maxHealth;
    }

    /**
     * Paints the entity onto the screen, override for a custom drawing
     */
    drawEntity(){
        push();
        fill(this.color);
        circle(this.getNativeX(), this.getNativeY(), this.size);
        pop();
    }

    /**
     * Sets the Velocity Vector
     * @param {Vector} newHeading The new velocity vector
     * @param {boolean} useSpeed Set to true if newHeading is purely a direction
     */
    setHeading(newHeading, useSpeed = false){
        this.movement = useSpeed ? newHeading.getUnitVector().times(this.speed) : newHeading;
    }
    
    /**
     * 
     * @param {number} newX Sets the x component of the velocity vector
     */
    setHeadingX(newX){
        this.movement.setX(newX);
    }

    /**
     * 
     * @param {number} newY Sets the y component of the velocity vector 
     */
    setHeadingY(newY){
        this.movement.setY(newY);
    }

    /**
     * 
     * @returns The velocity vector
     */
    getHeading(){
        return this.movement;
    }

    /**
     * Updates the position with the velocity vector
     * @param {Vector} heading The velocity vector to use, defaults to the internal heading
     */
    move(heading = this.movement){
        this.setX((this.getCartesianX() + heading.getX()));
        this.setY((this.getCartesianY() + heading.getY()));
    }

    /**
     * Constrains the movement given the rectangular bounding box, assumes box is in the center
     * @param {number} w width of the bounding box
     * @param {number} h height of the bounding box
     * @param {number} heading heading to modify, defaults to the current heading
     */
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

    /**
     * Returns if the entity is fully outside of the given bounding box
     * @param {number} w Width of the bounding box
     * @param {number} h Height of the bounding box
     * @returns True if fully out of bounds
     */
    isFullyOutOfBounds(w = width, h = height){
        if(Math.abs(this.getCartesianX()) > w / 2)
            return true;
        
        if(Math.abs(this.getCartesianY()) > h / 2)
            return true;

        return false;
    }

    /**
     * Gets if the entity is out of bounds yet going towards the center
     * @param {number} w Width of the Bounding Box
     * @param {number} h Height of the Bounding Box 
     * @returns True if the entity is outside of the bounding box but going towards the center
     */
    isOutOfBoundsAndGoingInside(w = width, h = height){
        var isGoingInsideRight = this.getCartesianX() > (w / 2) && this.getHeading().getX() < 0;
        var isGoingInsideLeft = this.getCartesianX() < -(w / 2) && this.getHeading().getX() > 0;

        var isGoingInsideTop = this.getCartesianY() > (h / 2) && this.getHeading().getY() < 0;
        var isGoingInsideBottom = this.getCartesianY() < -(h / 2) && this.getHeading().getY() > 0;

        return isGoingInsideRight|| isGoingInsideLeft || isGoingInsideTop || isGoingInsideBottom;
    }

    /**
     * Gets if the entity is out of bounds yet going farther from the center
     * @param {number} w Width of the Bounding Box
     * @param {number} h Height of the Bounding Box 
     * @returns True if the entity is outside of the bounding box but going away from the center
     */
    isOutOfBoundsAndGoingOutside(w = width, h = height){
        var isGoingOutsideRight = this.getCartesianX() > (w / 2) && this.getHeading().getX() > 0;
        var isGoingOutsideLeft = this.getCartesianX() < -(w / 2) && this.getHeading().getX() < 0;

        var isGoingOutsideTop = this.getCartesianY() > (h / 2) && this.getHeading().getY() > 0;
        var isGoingOutsideBottom = this.getCartesianY() < -(h / 2) && this.getHeading().getY() < 0;

        return isGoingOutsideRight|| isGoingOutsideLeft || isGoingOutsideTop || isGoingOutsideBottom;
    }

    /**
     * Gets if this entity and another entity overlap
     * @param {Entity} otherEntity The other entity to compare to
     * @returns True if the entities overlap
     */
    collides(otherEntity){
        var maxDistance = (this.size / 2) + (otherEntity.size / 2);

        return this.getDistance(otherEntity) < maxDistance;
    }
}