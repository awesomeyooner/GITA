class Admire extends Page{

    constructor(){
        super();

        this.ingredients = new Array();
        this.ingredientIndex = 0;
    }

    update(){
        background("lightpink");

        Utility.textCorner(
            "Admire your creation!",
            0,
            75,
            40
        )

        this.showPerson();
        this.showBurger();        
    }

    showPerson(){
        push();
        stroke("black");
        strokeWeight(0);
        fill("#c58c85");
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        arc(0, 0, 400, 500, 0, 360);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("black");
        translate(Utility.cartesianX(0), Utility.cartesianY(-80));
        arc(0, 0, 200, 200, 0, 360);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("yellow");
        translate(Utility.cartesianX(75), Utility.cartesianY(75));
        rotate(millis() * 0.1);
        triangle(
            -20, -10,
            20, -10,
            0, 20
        );
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("yellow");
        translate(Utility.cartesianX(75), Utility.cartesianY(75));
        rotate(millis() * 0.1);
        triangle(
            -20, 10,
            20, 10,
            0, -20
        );
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("yellow");
        translate(Utility.cartesianX(-75), Utility.cartesianY(75));
        rotate(millis() * 0.1);
        triangle(
            -20, -10,
            20, -10,
            0, 20
        );
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("yellow");
        translate(Utility.cartesianX(-75), Utility.cartesianY(75));
        rotate(millis() * 0.1);
        triangle(
            -20, 10,
            20, 10,
            0, -20
        );
        pop();
    }

    showBurger(){

        push();
        stroke("black");
        strokeWeight(0);
        fill("tan");
        translate(Utility.cartesianX(-150), Utility.cartesianY(-50 - 200));
        rect(0, 0, 300, 75);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("tan");
        translate(Utility.cartesianX(200), Utility.cartesianY(20 - 200));
        //rotate((sin(millis() * 0.1) + 1) * 90);
        arc(-200, 0, 300, 200, 180, 360);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("brown");
        translate(Utility.cartesianX(-150), Utility.cartesianY(-200));
        //rotate(-(sin(millis() * 0.1) + 1) * 90);
        rect(0, 0, 300, 50);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("yellow");
        translate(Utility.cartesianX(-150), Utility.cartesianY(-200));
        //rotate((sin(millis() * 0.1) + 1) * 90);
        rect(0, -10, 300, 20);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("white");
        translate(Utility.cartesianX(-150), Utility.cartesianY(-200));
        //rotate(-(sin(millis() * 0.1) + 1) * 90);
        rect(0, -20, 300, 20);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("#FA8072");
        translate(Utility.cartesianX(-150), Utility.cartesianY(-200));
        //rotate((sin(millis() * 0.1) + 1) * 90);
        rect(0, -40, 300, 20);
        pop();
    }
}