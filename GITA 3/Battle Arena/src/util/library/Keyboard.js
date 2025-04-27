const BindType = {
    ON_PRESS: "on_press",
    ON_RELEASE: "on_release",

    WHILE_PRESSED: "while_pressed",
    WHILE_RELEASED: "while_released"
}

class Keybind{

    constructor(key, action, bindType){
        this.key = key;
        this.action = action;
        this.bindType = bindType;

        this.state = false;
        this.previousState = false;
    }

    refresh(newState){
        this.previousState = this.state;
        this.state = newState;
    }
}

class Keyboard{

    static #keys = new Map();
    static #bindings = new Map();

    constructor(){

    }

    static initialize(window){
        window.addEventListener("keydown", function(event){
            Keyboard.keyDown(event.key);
          });
        
          window.addEventListener("keyup", function(event){
            Keyboard.keyUp(event.key);
          })
    }

    static update(){
        for(var key of this.#bindings.keys()){
            if(this.#keys.get(key) == null || this.#bindings.get(key) == null)
                continue;

            for(var bind of this.#bindings.get(key)){
                bind.refresh(this.#keys.get(key)); //refresh the value at each binding with the state of the key
                
                switch(bind.bindType){
                    case BindType.ON_PRESS:
                        if(bind.state && !bind.previousState) //if pressed and previously not pressed
                            bind.action();
                        break;

                    case BindType.ON_RELEASE:
                        if(!bind.state && bind.previousState) //if not pressed and previously pressed
                            bind.action();
                        break;
                    
                    case BindType.WHILE_PRESSED:
                        if(bind.state)
                            bind.action();
                        break;

                    case BindType.WHILE_RELEASED:
                        if(!bind.state)
                            bind.action();
                        break;
                }
            }
        }
    }

    static printKeys(){
        for(var key of this.getKeys().keys()){
            print(key + ": " + this.getKeys().get(key));
        }
    }

    static keyUp(key){
        this.#keys.set(key, false);
    }

    static keyDown(key){
        this.#keys.set(key, true);
    }

    static getKeys(){
        return this.#keys;
    }

    static getHeading(){
        var dx = 0;
        var dy = 0;

        for(var key of this.getKeys().keys()){
            if(!this.getKeys().get(key)) //if its not pressed
                continue;

            if(key === "w")
                dy += 1;
            else if(key === "s")
                dy += -1;

            else if(key === "d")
                dx += 1;
            else if(key === "a")
                dx += -1;
        }

        return new Vector(dx, dy).getUnitVector();
    }

    /**
     * Adds a binding
     * @param {string} key 
     * @param {Function} action 
     * @param {BindType} bindType 
     * @example configureBinding("r", () => console.log("Hello World!"), BindType.ON_PRESS);
     */
    static configureBinding(key, action, bindType){
        if(this.#bindings.get(key) == null){
            this.#bindings.set(key, new Array());
        }

        this.#keys.set(key, false);

        var bindings = this.#bindings.get(key);
        bindings.push(new Keybind(key, action, bindType));

       this.#bindings.set(key, bindings);
    }

}