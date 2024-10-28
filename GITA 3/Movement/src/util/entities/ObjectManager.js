class ObjectManager{

    #objects = new Array();
    #maxObjects;

    constructor(maxObjects){
        this.#maxObjects = maxObjects;
    }

    initialize(){
        this.resetObjects();
        this.fillObjects();
    }

    update(){
        this.placeObjects();
    }

    reset(){
        this.resetObjects();
        this.fillObjects();
    }

    getObjects(){
        return this.#objects;
    }

    resetObjects(){
        //this.#objects = new Array(Math.floor((this.#maxObjects * Math.random()) + 1));
        this.#objects = new Array(this.#maxObjects);
    }

    fillObjects(){
        for(var i = 0; i < this.#objects.length; i++){

            var size = Math.floor(
                (Math.random() * 100) + 50
            );

            var x = Math.floor(
                (Math.random() * width) - (width / 2)
            );

            if(x < 0)
                x += Math.floor(size / 2);
            else
                x -= Math.floor(size / 2);

            var y = Math.floor(
                (Math.random() * height) - (height / 2)
            );

            if(y < 0)
                y += Math.floor(size / 2);
            else
                y -= Math.floor(size / 2);

            this.#objects[i] = new Entity(size, x, y);
        }
    }
    
    placeObjects(){
    
        for(var object of this.#objects){

            //var object = this.#objects[i];

            push();

            if(object.isActive()){
                fill(255, 0, 0);
                stroke(255, 0, 0);
            }
            else{
                fill(0, 0, 255);
                stroke(0, 0, 255); 
            }
            
            circle(object.getNativeX(), object.getNativeY(), object.getSize());
            
            pop();


        }            
        
    }
}