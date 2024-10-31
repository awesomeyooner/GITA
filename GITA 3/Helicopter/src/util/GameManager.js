class GameManager{

    #helicopter = new Helicopter(100);
    #birds = new Array();

    constructor(){
    }

    initializeBirds(){
        for(var i = 0; i < 10; i++){
            var size = 20;
            var x = (Math.random() * width - (2 * size)) - (width / 2);
            var y = (Math.random() * height - (2 * size)) - (height / 2);
            
            this.#birds[i] = new Bird(size, x, y);
        }
    }

    update(){

        for(var bird of this.#birds){
            if(this.getHelicopter().getDistance(bird) < 150)
                bird.setHeading(bird.getVector(this.getHelicopter()).getUnitVector().times(4));
              else
                bird.setHeading(new Vector());
            
            bird.update();
        }
    }

    getHelicopter(){
        return this.#helicopter;
    }

    getBirds(){
        return this.#birds;
    }
}