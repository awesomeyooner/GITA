class Entity extends Point{

    #size = 0;
    #active = false;

    constructor(size, x = 0, y = 0){
        super(x, y);
        
        this.#size = size;
        
        this.#active = true;
    }

    setSize(newSize){
        this.#size = newSize;
    }

    getSize(){
        return this.#size;
    }

    setActive(state){
        this.#active = state;
    }

    isActive(){
        return this.#active;
    }
}