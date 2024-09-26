class Assemble extends Page{

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
        background("lightblue");

        Utility.textCorner(
            "Ingredients, Assemble!",
            0,
            75,
            40
        )

        Utility.textCorner(
            "Click on the Action! button to assemble! --->",
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
            "Place buns down!",
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
            "ADD THE MEAT!",
            Utility.cartesianX(0),
            Utility.cartesianY(20),
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
        translate(Utility.cartesianX(200), Utility.cartesianY(0));
        rotate((sin(millis() * 0.1) + 1) * 90);
        arc(-200, 0, 300, 200, 180, 360);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("brown");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0));
        rotate(-(sin(millis() * 0.1) + 1) * 90);
        rect(0, 0, 300, 50);
        pop();
       
    }

    showCheese(){
        Utility.textCenter(
            "Cheese time!",
            Utility.cartesianX(-300),
            Utility.cartesianY(20),
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
        translate(Utility.cartesianX(200), Utility.cartesianY(0));
        rotate((sin(millis() * 0.1) + 1) * 90);
        arc(-200, 0, 300, 200, 180, 360);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("brown");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0));
        rotate(-(sin(millis() * 0.1) + 1) * 90);
        rect(0, 0, 300, 50);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("yellow");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0));
        rotate((sin(millis() * 0.1) + 1) * 90);
        rect(0, -10, 300, 20);
        pop();
    }

    showMayo(){
        Utility.textCenter(
            "flying saucer!",
            Utility.cartesianX(-300),
            Utility.cartesianY(20),
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
        translate(Utility.cartesianX(200), Utility.cartesianY(0));
        rotate((sin(millis() * 0.1) + 1) * 90);
        arc(-200, 0, 300, 200, 180, 360);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("brown");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0));
        rotate(-(sin(millis() * 0.1) + 1) * 90);
        rect(0, 0, 300, 50);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("yellow");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0));
        rotate((sin(millis() * 0.1) + 1) * 90);
        rect(0, -10, 300, 20);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("white");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0));
        rotate(-(sin(millis() * 0.1) + 1) * 90);
        rect(0, -20, 300, 20);
        pop();
    }

    showSecretSauce(){
        Utility.textCenter(
            "secret saucer!",
            Utility.cartesianX(-420),
            Utility.cartesianY(20),
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
        translate(Utility.cartesianX(200), Utility.cartesianY(20));
        rotate((sin(millis() * 0.1) + 1) * 90);
        arc(-200, 0, 300, 200, 180, 360);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("brown");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0));
        rotate(-(sin(millis() * 0.1) + 1) * 90);
        rect(0, 0, 300, 50);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("yellow");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0));
        rotate((sin(millis() * 0.1) + 1) * 90);
        rect(0, -10, 300, 20);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("white");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0));
        rotate(-(sin(millis() * 0.1) + 1) * 90);
        rect(0, -20, 300, 20);
        pop();

        push();
        stroke("black");
        strokeWeight(0);
        fill("#FA8072");
        translate(Utility.cartesianX(-150), Utility.cartesianY(0));
        rotate((sin(millis() * 0.1) + 1) * 90);
        rect(0, -40, 300, 20);
        pop();
    }

    action(){
        if(this.ingredientIndex < this.ingredients.length - 1)
            this.ingredientIndex++;
        else
            this.ingredientIndex = 0;
    }
}