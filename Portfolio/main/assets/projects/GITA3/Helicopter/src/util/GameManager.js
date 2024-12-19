class GameManager{

    #corners;

    #helicopter = new Helicopter(100, 5);
    #fuelPacks = new Array();
    #birds = new Array();

    constructor(){
    }

    initialize(){
        this.#corners = Utility.getCenterBoxCorners(width, height);

        for(var i = 0; i < 10; i++){
            var size = 20;

            var x = Utility.random(
                -((width / 2) - (size / 2)), 
                ((width / 2) - (size / 2))
            );

            var y = Utility.random(
                -((height / 2) - (size / 2)), 
                ((height / 2) - (size / 2))
            );

            var speed = Utility.random(4, 10);

            var dx = Utility.random(-1, 1);
            var dy = Utility.random(-1, 1);
            var heading = new Vector(dx, dy).getUnitVector();

            var timeOffset = Utility.random(0, 2000);

            this.#birds[i] = new Bird(size, x, y, speed, timeOffset);
            this.#birds[i].setHeading(heading);
        }

        for(var i = 0; i < 10; i++){
            
        }
    }

    update(){
        this.#helicopter.update();

        var distanceThreshold = 150;

        for(var bird of this.#birds){
            
            if(this.getHelicopter().getDistance(bird) < distanceThreshold)
                bird.setHeading(bird.getVector(this.#helicopter).getUnitVector());
            else{

            }


            bird.update(this.#corners);
        }
    }

    moveHelicopter(direction){
        this.#helicopter.setHeading(direction.times(this.#helicopter.speed));
    }

    getHelicopter(){
        return this.#helicopter;
    }

    getBirds(){
        return this.#birds;
    }
}