class Vector {

    #dx;
    #dy;

    /**
     * Creates a new vector, either from polar coordinates or cartesian
     * @param {number} arg1 X Coordinate if `isPolar = false`, r if true
     * @param {number} arg2 Y Coordinate if `isPolar = false`, theta if true
     * @param {number} isPolar Whether or not this vector is from polar coordinates or cartesian
     */
    constructor(arg1 = 0, arg2 = 0, isPolar = false){
        if(!isPolar){
            this.#dx = arg1;
            this.#dy = arg2;
        }
        else{
            this.#dx = arg1 * Math.cos(arg2);
            this.#dy = arg1 * Math.sin(arg2); 
        }
    }

    /**
     * Gets the Unit Vector of this vector
     * @returns The unit vector
     */
    getUnitVector(){
        var magnitude = this.getMagnitude();

        if(magnitude == 0)
            return new Vector();
            
        return new Vector(this.getX() / magnitude, this.getY() / magnitude);
    }

    /**
     * Gets this vector, used for method chaining
     * @returns this vector
     */
    getVector(){
        return this;
    }

    /**
     * Gets a copy of this vector with the same values, just without the ownership
     * @returns A new Vector with the same components
     */
    copy(){
        return new Vector(this.#dx, this.#dy);
    }

    /**
     * Sets the X Coordinate of this vector
     * @param {number} x The X component to set 
     * @returns This vector with the new X component, used for method chaining
     */
    setX(x){
        this.#dx = x;

        return this.getVector();
    }

    /**
     * Sets the Y Coordinate of this vector
     * @param {number} y The Y component to set 
     * @returns This vector with the new X component, used for method chaining
     */
    setY(y){
        this.#dy = y;

        return this.getVector();
    }

    /**
     * Gets a new Vector with the same Y but new X
     * @param {number} x The new X Coordinate 
     * @returns A new vector with the same Y, but given X
     */
    withX(x){
        return new Vector(x, this.getY());
    }

    /**
     * Gets a new Vector with the same X but new Y
     * @param {number} y The new Y Coordinate 
     * @returns A new vector with the same X, but given Y
     */
    withY(y){
        return new Vector(this.getX(), y);
    }

    /**
     * Gets a this vector but with the given magnitude
     * @param {number} magnitude new magnitude 
     * @returns This vector but with the given magnitude
     */
    withMagnitude(magnitude){
        return this.getUnitVector().times(magnitude);
    }

    /**
     * Gets the X component of this vector
     * @returns The X component of this vector
     */
    getX(){
        return this.#dx;
    }

    /**
     * Gets the Y component of this vector
     * @returns The Y component of this vector
     */
    getY(){
        return this.#dy;
    }

    /**
     * Sets the angle of this vector while keeping the same magnitude
     * @param {number} theta The angle, in radians, to set this to. Keeps the same magnitude 
     * @returns 
     */
    setAngle(theta){
        var magnitude = this.getMagnitude();

        this.setX(magnitude * Math.cos(theta));
        this.setY(magnitude * Math.sin(theta));

        return this.getVector();
    }

    /**
     * Sets this vector's magnitude while keeping the same angle
     * @param {number} magnitude The magnitude to set this to 
     * @returns 
     */
    setMagnitude(magnitude){
        var theta = this.getAngle();

        this.setX(magnitude * Math.cos(theta));
        this.setY(magnitude * Math.sin(theta));

        return this.getVector();
    }

    /**
     * Gets the angle of this vector in radians
     * @returns The angle, in radians, of this vector
     */
    getAngle(){
        return Math.atan2(this.#dy, this.#dx);
    }

    /**
     * Gets the magnitude of this vector
     * @returns The magnitude of this vector
     */
    getMagnitude(){
        return Math.sqrt((this.#dx * this.#dx) + (this.#dy * this.#dy));
    }

    /**
     * Gets a new Vector that is `this vector * scalar`
     * @param {number} scalar Factor to multiply this vector with 
     * @returns A new Vector with `this vector * scalar`
     */
    times(scalar){
        return new Vector(this.getX() * scalar, this.getY() * scalar);
    }

    /**
     * Gets a new Vector that has its X component multiplied by scalar
     * @param {number} scalar Factor to multiply the X component with
     * @returns A new Vector with `this vector.getX() * scalar`
     */
    timesX(scalar){
        this.#dx *= scalar;
        return this.getVector();
    }

    /**
     * Gets a new Vector that has its Y component multiplied by scalar
     * @param {number} scalar Factor to multiply the X component with
     * @returns A new Vector with `this vector.getY() * scalar`
     */
    timesY(scalar){
        this.#dy *= scalar;
        return this.getVector();
    }

    /**
     * Gets the point representation of this vector
     * @returns The point representation of this vector
     */
    toPoint(){
        return new Point(this.#dx, this.#dy);
    }

    /**
     * Gets the dot product of this vector and the given vector
     * @param {Vector} otherVector the other vector to perform the dot product with 
     * @returns The dot product of this vector and the otherVector
     */
    dot(otherVector){
        var sum = (this.getX() * otherVector.getX()) + (this.getY() * otherVector.getY());

        return sum;
    }

    /**
     * Adds this vector with the other vector, `this + other`
     * @param {Vector} otherVector The other vector to add
     * @returns The vector sum
     */
    plus(otherVector){
        var sumX = this.getX() + otherVector.getX();
        var sumY = this.getY() + otherVector.getY();

        return new Vector(sumX, sumY);
    }
}
