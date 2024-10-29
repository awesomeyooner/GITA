const GameState = {
    TITLE: "title",
    REVEAL: "reveal",
    LIGHTS_OUT: "lights_out",
    SLASHING: "slashing",
    END: "end"
};

class GameManager{

    #state = GameState.TITLE;

    constructor(objectmanager, slashmanager){
        this.objectmanager = objectmanager;
        this.slashmanager = slashmanager;
    }

    update(){

        switch(this.#state){
            case GameState.TITLE:
                background("lightblue");

                Utility.textCenter(
                    "My Game",
                    Utility.cartesianToNativeX(0),
                    Utility.cartesianToNativeY(0),
                    75
                );

                Utility.textCenter(
                    "Press ACTION! to start",
                    Utility.cartesianToNativeX(0),
                    Utility.cartesianToNativeY(-100),
                    30
                );
                break;
            
            case GameState.REVEAL:
                background("lightblue");
                break;

            case GameState.LIGHTS_OUT:
                background("lightblue");
                break;

            case GameState.SLASHING:
                background("lightblue");
                break;

            case GameState.END:
                this.objectmanager.update();
                Utility.textCenter(
                    "Hit: " + this.getCollisions() + "\n" +
                    "Out of: " + this.objectmanager.getObjects().length,
                    Utility.cartesianToNativeX(0),
                    Utility.cartesianToNativeY(0),
                    150
                );
                break;
        }
    }

    setState(newState){
        this.#state = newState;
    }

    getState(){
        return this.#state;
    }

    getCollisions(){
        var points = this.slashmanager.getPoints();
        var objects = this.objectmanager.getObjects();

        var objectsHit = 0;

        for(var object of objects){
            
            for(var point of points){
                if(point == null)
                    continue;

                var distance = dist(
                    point.getCartesianX(),
                    point.getCartesianY(),
                    object.getCartesianX(),
                    object.getCartesianY()
                );

                if(distance < object.getSize() / 2)
                    object.setActive(false);
            }

            if(!object.isActive())
                objectsHit++;
        }

        return objectsHit;
    }
}