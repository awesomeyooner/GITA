const Weather = {
    SUNNY: "sunny",
    RAINING: "raining"
};


class GameManager{

    #corners;

    #helicopter = new Helicopter(100, 5);
    #fuelPacks = new Array();
    #birds = new Array();
    #target = new Target(100, 2, "yellow");

    constructor(){
        this.weather = Weather.SUNNY;
        this.weatherTimestamp = 0;
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

        for(var i = 0; i < 4; i++){

            var size = 40;

            var x = Utility.random(
                -((width / 2) - (size / 2)), 
                ((width / 2) - (size / 2))
            );

            var y = Utility.random(
                -((height / 2) - (size / 2)), 
                ((height / 2) - (size / 2))
            );

            this.#fuelPacks[i] = new FuelPack(size, x, y);
        }

        this.#target.set(0, -(height / 2) + this.#target.size / 2 + 10);
        this.#target.setHeading(new Vector(this.#target.speed, 0));
    }

    update(){
        if(Math.round(Utility.random(0, 1000)) == 500){
            this.weather = Weather.RAINING;
            this.weatherTimestamp = millis();
        }

        print(this.weather.toString());

        if(this.weather == Weather.RAINING && millis() - this.weatherTimestamp > 5000)
            this.weather = Weather.SUNNY;

        this.#helicopter.update(this.#target, this.weather);
        this.#target.update();

        var distanceThreshold = 150;

        for(var bird of this.#birds){
            
            if(this.getHelicopter().getDistance(bird) < distanceThreshold)
                bird.setHeading(bird.getVector(this.#helicopter).getUnitVector());
            else{

            }

            bird.update(this.#corners);
        }

        for(var pack of this.#fuelPacks){

            if(this.#helicopter.collides(pack)){
                this.#helicopter.fuel = this.#helicopter.maxFuel;
                
                var x = Utility.random(
                    -((width / 2) - (pack.size / 2)), 
                    ((width / 2) - (pack.size / 2))
                );
    
                var y = Utility.random(
                    -((height / 2) - (pack.size / 2)), 
                    ((height / 2) - (pack.size / 2))
                );

                pack.setX(x);
                pack.setY(y);
            }

            pack.update();
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