class Title extends Page{

    constructor(){
        super();
    }

    update(){
        background("red");
  
        push();
        fill("black");
        textSize(150);
        translate(width / 2, height / 2);
        rotate(sin(millis()) * 20);
        text("TITLE!", -200, 50);
        pop();
        
        push();
        fill("black");
        textSize(40);
        translate(0, 75);
        text("This slide is all about rotating and" + "\n" + "translating text!", 0, 0);
        pop();
    }
}