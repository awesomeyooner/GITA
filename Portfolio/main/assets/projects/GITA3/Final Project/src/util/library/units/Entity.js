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
     * Base method for initializing Entity
     */
    initialize(){}

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
     * Resets the entity around a certain point
     * @param {Point} origin 
     * @param {number} maxRadius 
     */
    resetWithinRadius(origin, maxRadius){
        var radius = Utility.random(0, maxRadius);

        var angle = Utility.random(0, 2 * Math.PI);

        var x = radius * Math.cos(angle);
        var y = radius * Math.sin(angle);

        var point = new Point(x, y);

        this.reset(origin.plus(point));
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

    displayHealthBar(){
        push();

        fill("red");
        stroke("black");

        Utility.rectCenter(
            this.getNativeX(),
            this.getNativeY() + (this.size * 0.75),
            (this.health / this.maxHealth) * this.size * 1.15,
            this.size * 0.1
        )
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
     * Increments the health and sets `isActive` to `false` if it makes the new health <=0
     * @param {number} increment how much health to add, make negaive to subtract 
     */
    incrementHealth(increment){
        this.health += increment;

        if(this.health <= 0)
            this.isActive = false;
    }

    /**
     * Sets the health to the given value
     * @param {number} newHealth new health to set 
     */
    setHealth(newHealth){
        this.health = newHealth;

        if(this.health <= 0)
            this.isActive = false;
    }

    /**
     * Sets the health back to max
     */
    resetHealth(){
        this.health = this.maxHealth;
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
     * Moves towards the target
     * @param {Entity} target The targeted entity to go to 
     */
    pursuit(target){
        var heading = this.getVector(target).times(-1);

        this.setHeading(heading, true);
    }

    /**
     * Moves towards the next step of the given path
     * @param {Array<Point>} path 
     * @param {number} lookahead 
     */
    pursuitPath(path, lookahead = 50, debug = false){

        var pursuitedPoint;
        var indexOfPursuited;
        var timeOfPursuited;

        if(path.length <= 1)
            return;

        for(var i = 0; i < path.length - 1; i++){
            var initial = path[i].toVector();
            var final = path[i + 1].toVector();
            var deltaInitialAndReference = path[i].minus(this).toVector();
            var pursuited;
            var time;

            var vector = final.plus(initial.times(-1));

            var radicand = 
                (Math.pow(lookahead, 2) / Math.pow(vector.getMagnitude(), 2)) - 
                (Math.pow(deltaInitialAndReference.getMagnitude(), 2) / Math.pow(vector.getMagnitude(), 2)) + 
                Math.pow(deltaInitialAndReference.dot(vector) / Math.pow(vector.getMagnitude(), 2), 2);

            // if the path intersects the lookahead circle
            if(radicand >= 0){
                time = 
                    Math.sqrt(radicand) - 
                    (deltaInitialAndReference.dot(vector) / Math.pow(vector.getMagnitude(), 2));
                    
                if(time > 1)
                    time = 1;
                else if(time < 0)
                    time = 0;

                pursuited = vector.times(time).plus(initial).toPoint();
            }
            // if the path is not within the lookahead
            else{
                time = -deltaInitialAndReference.dot(vector) / (vector.dot(vector));

                if(time > 1)
                    time = 1;
                else if(time < 0)
                    time = 0;

                pursuited = vector.times(time).plus(initial).toPoint();
            }

            if(pursuitedPoint == null){
                pursuitedPoint = pursuited;
                indexOfPursuited = i;
                timeOfPursuited = time;

                continue;
            }

            if(i == indexOfPursuited){
                pursuitedPoint = pursuited;
                timeOfPursuited = time;
            }

            var atEndOfPath = timeOfPursuited == 1;
            var isLookingAtNext = i - indexOfPursuited == 1 || (indexOfPursuited == path.length - 1 && i == 0);
            var analyzedIsShorter = i != indexOfPursuited && this.getVector(pursuitedPoint).getMagnitude() > this.getVector(pursuited).getMagnitude();

            if(isLookingAtNext && (analyzedIsShorter || atEndOfPath)){
                pursuitedPoint = pursuited;
                indexOfPursuited = i;
                timeOfPursuited = time;
            }
        }

        
        if(debug){
            Shapes.circleCenterFromPoint(pursuitedPoint, 10);
            this.drawPath(path);
        }

        this.setHeading(this.getVector(pursuitedPoint).times(-1), true);
    }

    drawPath(path){

        if(path.length <= 1)
            return;

        for(var i = 0; i < path.length - 1; i++){

            var initial = path[i];
            var final = path[i + 1];
            
            push();
            strokeWeight(3);
            stroke("green");
            Utility.drawLine(
                initial,
                final
            );
            pop();
        }
    }

    /**
     * Gets the closest target in a given array of targets
     * @param {Array<Entity>} targets Array of targets
     * @return {Entity} The closest target
     */
    getClosestTarget(targets){

        if(targets.length <= 0)
            throw new Error("Targets is empty!");

        var closest = Infinity;
        var indexOfClosest = -1;

        for(var i = 0; i < targets.length; i++){
            
            if(!targets[i].isActive)
                continue;

            var distance = this.getDistance(targets[i]);

            if(distance < closest){
                closest = distance;
                indexOfClosest = i;
            }
        }

        if(indexOfClosest == -1)
            return null;
        else
            return targets[indexOfClosest];
    }

    /**
     * Highlights the closest entity within an array of Entitiesa
     * @param {Array<Entity>} targets 
     * @param {string} color 
     */
    highlightClosest(targets, color = "blue"){
        var closest = this.getClosestTarget(enemies);

        if(closest === null)
            return;

        closest.color = color;
    }

    /**
     * Moves both entities so that they don't no clip each other
     * @param {Entity} otherEntity The Other entity to compare 
     */
    applyAntiNoClip(otherEntity){

        if(!this.collides(otherEntity))
            return;

        var maxDistance = this.getDistanceBetweenEdges(otherEntity);

        var vector = otherEntity.getVector(this).withMagnitude(maxDistance);

        this.move(vector);
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
        var maxDistance = this.getMaxDistanceBeforeCollision(otherEntity);

        return this.getDistance(otherEntity) < maxDistance;
    }

    /**
     * Gets the max distance to another entity before colliding
     * @param {Entity} otherEntity The other entity to compare to 
     * @returns The max distance
     */
    getMaxDistanceBeforeCollision(otherEntity){
        var maxDistance = (this.size / 2) + (otherEntity.size / 2);

        return maxDistance;
    }

    /**
     * Gets the distance between the edges of two entites;
     * @param {Entity} otherEntity The other entity to compare to 
     * @return The distance between the edges
     */
    getDistanceBetweenEdges(otherEntity){
        var distance = this.getDistance(otherEntity) - (this.size / 2) - (otherEntity.size / 2);

        return distance;
    }
}