class Picture extends Page{

    constructor(){
        super();

        this.ingredients = new Array();
        this.ingredientIndex = 0;
    }

    update(){
        background("lightpink");

        Utility.textCorner(
            "Picture Time!",
            0,
            75,
            40
        )

        this.showPhone();
        this.showBurger();        
    }

    showPhone(){
        push();
        stroke("black");
        strokeWeight(0);
        fill("black");
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        rect(-250, -350, 500, 700);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("lightgray");
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        rect(-200, -300, 400, 600);
        pop();

        Utility.textCenter(
            "Just Made my First Burger!" + "\n" + 
            "Can't wait to eat it!" + "\n" +
            "Spent 23 years for this moment" + "\n" + 
            "please like this post if you want to see more!",
            Utility.cartesianX(0),
            Utility.cartesianY(-100),
            20
        );
    }

    showBurger(){

        push();
        stroke("black");
        strokeWeight(0);
        fill("tan");
        translate(Utility.cartesianX(-150), Utility.cartesianY(-50 + 100));
        rect(0, 0, 300, 75);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("tan");
        translate(Utility.cartesianX(200), Utility.cartesianY(20 + 100));
        //rotate((sin(millis() * 0.1) + 1) * 90);
        arc(-200, 0, 300, 200, 180, 360);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("brown");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0 + 100));
        //rotate(-(sin(millis() * 0.1) + 1) * 90);
        rect(0, 0, 300, 50);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("yellow");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0+ 100));
        //rotate((sin(millis() * 0.1) + 1) * 90);
        rect(0, -10, 300, 20);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("white");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0+ 100));
        //rotate(-(sin(millis() * 0.1) + 1) * 90);
        rect(0, -20, 300, 20);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("#FA8072");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0+ 100));
        //rotate((sin(millis() * 0.1) + 1) * 90);
        rect(0, -40, 300, 20);
        pop();

        
        push();
        stroke("black");
        strokeWeight(0);
        fill("yellow");
        translate(Utility.cartesianX(200), Utility.cartesianY(200));
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
        translate(Utility.cartesianX(200), Utility.cartesianY(-200));
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
        translate(Utility.cartesianX(-200), Utility.cartesianY(-200));
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
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        rotate(millis() * 0.1);
        triangle(
            -20, 10,
            20, 10,
            0, -20
        );
        pop();

    }
}