class Ingredients extends Page{

    constructor(){
        super();

        this.ingredients = new Array();
        this.ingredientIndex = 0;

        this.ingredients = [
            new Action(this.showBuns),
            new Action(this.showMeat),
            new Action(this.showCheese),
            new Action(this.showMayo),
            new Action(this.showSecretSauce)
        ];
    }

    update(){
        background("lightgray");

        Utility.textCorner(
            "Gather all of your ingredients!",
            0,
            75,
            40
        )

        Utility.textCorner(
            "Click on the Action! button to cycle ingredients! --->",
            30,
            height - 10,
            40
        );

        this.showIngredient();
    }

    showIngredient(){
        this.ingredients[this.ingredientIndex].action();
    }

    showBuns(){

        Utility.textCorner(
            "Buns!",
            Utility.cartesianX(-400),
            Utility.cartesianY(-30),
            70
        );

        push();
        stroke("black");
        strokeWeight(0);
        fill("tan");
        translate(Utility.cartesianX(-150), Utility.cartesianY(-50));
        rect(0, 0, 300, 75);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("tan");
        translate(Utility.cartesianX(200), Utility.cartesianY(-50));
        rotate((sin(millis() * 0.1) + 1) * 90);
        arc(-200, 0, 300, 200, 180, 360);
        pop();
    }

    showMeat(){
        Utility.textCenter(
            "MEAT!",
            Utility.cartesianX(0),
            Utility.cartesianY(0),
            70
        );

        push();
        stroke("black");
        strokeWeight(0);
        fill("brown");
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        rotate(millis() / 5);
        arc(200, 0, 150, 150, 0, 360);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("brown");
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        rotate(millis() / 5);
        arc(-200, 0, 150, 150, 0, 360);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("brown");
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        rotate(millis() / 5);
        arc(0, 200, 150, 150, 0, 360);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("brown");
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        rotate(millis() / 5);
        arc(0, -200, 150, 150, 0, 360);
        pop();
    }

    showCheese(){
        Utility.textCenter(
            "Cheese!",
            Utility.cartesianX(-400),
            Utility.cartesianY(0),
            70,
            millis() / 5
        );

        Utility.textCenter(
            "Cheese!",
            Utility.cartesianX(400),
            Utility.cartesianY(0),
            70,
            millis() / 5
        );
        
        push();
        stroke("black");
        strokeWeight(0);
        fill("yellow");
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        rotate(millis() / 5);
        rect(-150, -150, 300, 300);
        pop();

        Utility.textCenter(
            "Cheese!",
            Utility.cartesianX(0),
            Utility.cartesianY(0),
            70,
            millis() / 5
        );
    }

    showMayo(){
        Utility.textCenter(
            "Mayo!",
            Utility.cartesianX(-400),
            Utility.cartesianY(0),
            70
        );

        push();
        stroke("black");
        strokeWeight(0);
        fill("white");
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        rotate(millis() / 5);
        rect(-75, -200, 150, 400);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("white");
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        rotate(millis() / 5);
        rect(-15, -40 + 240, 30, 80);

        pop();
    }

    showSecretSauce(){
        Utility.textCenter(
            "Shhhh" + "\n" + "Secret Sauce!",
            Utility.cartesianX(-400),
            Utility.cartesianY(0),
            70
        );

        push();
        stroke("black");
        strokeWeight(0);
        fill("#FA8072");
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        rotate(-millis() / 5);
        rect(-75, -200, 150, 400);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("#FA8072");
        translate(Utility.cartesianX(0), Utility.cartesianY(0));
        rotate(-millis() / 5);
        rect(-15, -40 + 240, 30, 80);

        pop();

        Utility.textCenter(
            "Click Next!",
            Utility.cartesianX(300),
            Utility.cartesianY(0),
            70
        );
    }

    action(){
        if(this.ingredientIndex < this.ingredients.length - 1)
            this.ingredientIndex++;
        else
            this.ingredientIndex = 0;
    }
}