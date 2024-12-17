class KeyboardController{

    #keys = new Map();
    #bindings = new Map();

    constructor(){

    }

    initialize(window){
        window.addEventListener("keydown", function(event){
            keyboard.keyDown(event.key);
          });
        
          window.addEventListener("keyup", function(event){
            keyboard.keyUp(event.key);
          })
    }

    update(){
        for(var binding of this.#bindings.keys()){
            if(this.#keys.get(binding) == null || !this.#keys.get(binding))
                continue;
            
            this.#bindings.get(binding)();
        }
    }

    printKeys(){
        for(var key of keyboard.getKeys().keys()){
            print(key + ": " + keyboard.getKeys().get(key));
        }
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

    configureBinding(key, runnable){
        this.#bindings.set(key, runnable);
    }

}