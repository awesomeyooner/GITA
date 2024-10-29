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

    setX(x){
        this.#dx = x;
    }

    setY(y){
        this.#dy = y;
    }

    getX(){
        return this.#dx;
    }

    getY(){
        return this.#dy;
    }

    getAngle(){
        return Math.atan2(this.#dy, this.#dx);
    }

    getMagnitude(){
        return Math.sqrt((this.#dx * this.#dx) + (this.#dy * this.#dy));
    }

    times(scalar){
        return new Vector(this.getX() * scalar, this.getY() * scalar);
    }
}
