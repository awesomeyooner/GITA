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

        var distanceThreshold = 150;
        var birdSpeed = 2;

        for(var bird of this.#birds){
            
            if(this.getHelicopter().getDistance(bird) < distanceThreshold)
                bird.setHeading(bird.getVector(this.getHelicopter()).getUnitVector().times(2));
              else
                bird.setHeading(
                    new Vector(birdSpeed, 2 * (Math.sin((millis() / 2000) * Math.PI)))
                );
            
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