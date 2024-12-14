class KeyboardController{

    #keys = new Map();

    constructor(){

    }

    keyUp(key){
        this.#keys.set(key, false);
    }

    keyDown(key){
        this.#keys.set(key, true);
    }

    getKeys(){
        return this.#keys;
    }

    getHeading(){
        var dx = 0;
        var dy = 0;

        for(key of this.getKeys().keys()){
            if(!this.getKeys().get(key)) //if its not pressed
                continue;

            if(key === "w")
                dy = 1;
            else if(key === "s")
                dy = -1;

            else if(key === "d")
                dx = 1;
            else if(key === "a")
                dx = -1;
        }

        return new Vector(dx, dy).getUnitVector();
    }

}