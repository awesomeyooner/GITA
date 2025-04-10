class Vector {

    #dx;
    #dy;

    //if its polar its r then theta
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

    getUnitVector(){
        var magnitude = this.getMagnitude();

        if(magnitude == 0)
            return new Vector();
            
        return new Vector(this.getX() / magnitude, this.getY() / magnitude);
    }

    getVector(){
        return this;
    }

    setX(x){
        this.#dx = x;

        return this.getVector();
    }

    setY(y){
        this.#dy = y;

        return this.getVector();
    }

    withX(x){
        return new Vector(x, this.getY());
    }

    withY(y){
        return new Vector(this.getX(), y);
    }

    getX(){
        return this.#dx;
    }

    getY(){
        return this.#dy;
    }

    setAngle(theta){
        var magnitude = this.getMagnitude();

        this.setX(magnitude * Math.cos(theta));
        this.setY(magnitude * Math.sin(theta));

        return this.getVector();
    }

    setMagnitude(magnitude){
        var theta = this.getAngle();

        this.setX(magnitude * Math.cos(theta));
        this.setY(magnitude * Math.sin(theta));

        return this.getVector();
    }

    getAngle(){
        return Math.atan2(this.#dy, this.#dx);
    }

    getMagnitude(){
        return Math.sqrt((this.#dx * this.#dx) + (this.#dy * this.#dy));
    }

    withMagnitude(magnitude){
        return this.getUnitVector().times(magnitude);
    }

    times(scalar){
        return new Vector(this.getX() * scalar, this.getY() * scalar);
    }

    timesX(scalar){
        this.#dx *= scalar;
        return this.getVector();
    }

    timesY(scalar){
        this.#dy *= scalar;
        return this.getVector();
    }

    toPoint(){
        return new Point(this.#dx, this.#dy);
    }

    dot(otherVector){
        var sum = (this.getX() * otherVector.getX()) + (this.getY() * otherVector.getY());

        return sum;
    }

    plus(otherVector){
        var sumX = this.getX() + otherVector.getX();
        var sumY = this.getY() + otherVector.getY();

        return new Vector(sumX, sumY);
    }
}
