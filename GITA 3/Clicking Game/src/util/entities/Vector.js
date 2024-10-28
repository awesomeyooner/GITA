class Vector {

    #dx;
    #dy;

    constructor(dx = 0, dy = 0){
        this.#dx = dx;
        this.#dy = dy;
    }

    getUnitVector(){
        var magnitude = getMagnitude();

        if(magnitude == 0)
            return new Vector();
            
        return new Vector(this.getX() / magnitude, this.getY() / magnitude);
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
