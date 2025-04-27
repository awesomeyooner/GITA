class Point{
    #x = 0;
    #y = 0;

    /**
     * Creates an object that represents a point in space
     * @param {number} x X Coordinate of the point
     * @param {number} y Y Coordinate of the point 
     */
    constructor(x, y){
        this.#x = x;
        this.#y = y;
    }

    static fromNative(x, y){
        return new Point(
            Utility.nativeToCartesianX(x),
            Utility.nativeToCartesianY(y)
        );
    }

    /**
     * Gets the point
     * @returns Itself
     */
    getPoint(){
        return this;
    }

    /**
     * Gets a copy of this Point without the same ownership
     * @returns A new point with the same coordinates
     */
    copy(){
        return new Point(this.#x, this.#y);
    }

    /**
     * Copies the values of one point to this point
     * @param {Point} newPoint New Point to copy over 
     */
    setPoint(newPoint){
        this.set(newPoint.getCartesianX(), newPoint.getCartesianY());
    }

    /**
     * Sets the X and Y coordinates of this point
     * @param {number} x new X Coordinate
     * @param {number} y new Y Coordinate 
     * @return This point with the new coordinates, used for method chaining
     */
    set(x, y){
        this.setX(x);
        this.setY(y);

        return this;
    }

    /**
     * Sets the X coordinate of this point
     * @param {number} x X coordinate to set 
     * @return This point with the new X Coorindate, used for method chaining
     */
    setX(x){
        this.#x = x;

        return this;
    }

    /**
     * Sets the Y coordinate of this point
     * @param {number} y Y coordinate to set 
     * @return This point with the new Y coordinate, used for method chaining
     */
    setY(y){
        this.#y = y;
        
        return this;
    }

    /**
     * Gets the X coordinate native to the p5 library
     * @returns The X coordinate of the point with origin being the top left corner
     */
    getNativeX(){
        return Utility.cartesianToNativeX(this.#x);
    }

    /**
     * Gets the Y coordinate native to the p5 library
     * @returns The Y coordinate of the point with origin being the top left corner
     */
    getNativeY(){
        return Utility.cartesianToNativeY(this.#y);
    }

    /**
     * Gets the X coordinate of this point
     * @returns The X coordinate of this point
     */
    getCartesianX(){
        return this.#x;
    }

    /**
     * Gets the Y coordinate of this point
     * @returns The Y coordinate of this point
     */
    getCartesianY(){
        return this.#y;
    }

    /**
     * Gets the distance between this point and the given point
     * @param {Point} otherPoint The other point to get the distance to 
     * @returns The distance between the two points
     */
    getDistance(otherPoint){
        var deltaX = this.getCartesianX() - otherPoint.getCartesianX();
        var deltaY = this.getCartesianY() - otherPoint.getCartesianY();

        return Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    }

    /**
     * Gets the vector where the other point is the terminal point and this point is the tip
     * @param {Point} otherPoint The other point to get the vector to 
     * @returns 
     */
    getVector(otherPoint){
        var deltaX = this.getCartesianX() - otherPoint.getCartesianX();
        var deltaY = this.getCartesianY() - otherPoint.getCartesianY();

        return new Vector(deltaX, deltaY);
    }

    /**
     * Gets the vector representation of this point, same as `getVector(new Point())`
     * @returns The vector representation of this point
     */
    toVector(){
        return new Vector(this.#x, this.#y);
    }

    /**
     * Adds this point and the given point
     * @param {Point} otherPoint other point to add 
     * @returns The sum of the two points
     */
    plus(otherPoint){
        var sumX = this.#x + otherPoint.getCartesianX();
        var sumY = this.#y + otherPoint.getCartesianY();

        //this.set(sumX, sumY);

        return new Point(sumX, sumY);
    }

    /**
     * Subtracts this point and the given point, `this - other`
     * @param {Point} otherPoint other point to subtract 
     * @returns The difference of the two points
     */
    minus(otherPoint){
        var deltaX = this.#x - otherPoint.getCartesianX();
        var deltaY = this.#y - otherPoint.getCartesianY()

        return new Point(deltaX, deltaY);
    }

    /**
     * Gets if the point is outside of the given bounding box
     * @param {number} w Width of the bounding box
     * @param {number} h Height of the bounding box 
     * @returns True if the point is outside of the bounding box
     */
    isOutOfBounds(w = width, h = height){
        if(this.getCartesianX() > w / 2 || this.getCartesianX() < -w / 2)
            return true;
        
        if(this.getCartesianY() > h / 2 || this.getCartesianY() < -h / 2)
            return true;

        return false;
    }


}