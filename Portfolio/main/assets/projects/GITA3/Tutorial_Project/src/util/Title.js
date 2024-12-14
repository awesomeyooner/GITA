class Title extends Page{

    constructor(){
        super();
    }

    update(){
        background("red");

        Utility.textCenter(
            "McDonalds!",
            width / 2,
            height / 2,
            20 + ((sin(millis() * 0.1) + 1) * 75),
            sin(millis() * 0.25) * 30,
            "black"
        );

        Utility.textCorner(
            "How to Make a Burger!",
            0,
            75,
            40
        )
    }
}