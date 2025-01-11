class Bird extends Entity{

    constructor(size, x = 0, y = 0, speed = 2, timeOffset = 0){
        super(size, x, y, true, speed, 1);

        this.timeOffset = timeOffset;
    }

    update(corners){
        fill("blue");
        this.constrainMovement(corners);
        this.move(this.getHeading().times(this.speed));

        circle(this.getNativeX(), this.getNativeY(), this.size);
        this.drawEntity();
    }

    drawEntity(){

        // this.setHeadingX(-1);
        // this.setHeadingY(1);

        push();
        translate(
            this.getNativeX(), 
            this.getNativeY()
        );

        // rotate(-this.getHeading().getAngle());

        var mirror = this.getHeading().getX() == 0 ? 1 : Math.sign(this.getHeading().getX());

        //draw body
        fill("brown");
        ellipse(
            0, 
            0, 
            80, 
            40
        );

        //draw tail
        fill("white");
        triangle(
            mirror * -60,
            -40,

            mirror * -60,
            40,

            mirror * -40,
            0
        );

        //draw feet
        fill("yellow");
        rect(
            mirror * -15,
            20,
            10,
            20
        );

        rect(
            mirror * 5,
            20,
            10,
            20
        );

        //draw head
        fill("white");
        ellipse(
            mirror * 40, 
            -20, 
            30, 
            40
        );

        //draw beak
        fill("yellow");
        triangle(
            mirror * 40,
            -10,

            mirror * 40,
            -20,

            mirror * 55,
            -15
        );

        //draw eyes
        fill("black");
        circle(
            mirror * 35,
            -22,
            5
        );
        circle(
            mirror * 49,
            -22,
            5
        );
        pop();
    }

    constrainMovement(corners, w = width, h = height){ 
        var initialX = this.getCartesianX();
        var initialY = this.getCartesianY();

        var vx = this.getHeading().getUnitVector().getX();
        var vy = this.getHeading().getUnitVector().getY();

        var time;

        for(var i = 0; i < corners.length; i++){

            var currentCorner = corners[i];
            var nextCorner;

            //if its the last element, then the "next" corner is index 0 
            if(i == corners.length - 1)
                nextCorner = corners[0];
            else 
                nextCorner = corners[i + 1];

            var currentCornerX = currentCorner.getCartesianX();
            var currentCornerY = currentCorner.getCartesianY();

            var deltaCornerX = nextCorner.getCartesianX() - currentCorner.getCartesianX();
            var deltaCornerY = nextCorner.getCartesianY() - currentCorner.getCartesianY();

            //vector between corners
            var r = new Vector(deltaCornerX, deltaCornerY); 

            if(i == 1 && initialY < currentCornerY)
                this.setHeading(this.getHeading().times(-1));
            
            time = (initialX - currentCornerX) / (vx + r.getX());

            if(Math.abs(time) < 100)
                time = (initialY - currentCornerY) / (vy + r.getY());

            //if its negative then it doesn't have a solution, if its less than 20 then its too close, which means youre comparing the wrong line, skip
            if(time < 100)
                continue;

            var newX = initialX - (vx * time);
            var newY = initialY - (vy * time);

            if(Math.abs(newX) > w / 2 || Math.abs(newY) > h / 2)
                continue;

            if(this.isOutOfBoundsAndGoingOutside()){
                //debug printing
                // print("Initial X: " + initialX);
                // print("Initial Y: " + initialY);
                // print("i: " + i);
                // print("time: " + time)
                // print("vx: " + vx);
                // print("vy: " + vy);
                // print("X: " + newX);
                // print("Y: " + newY);
                this.set(newX, newY);
            }
        }
    }
}