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

        push();

        translate(
            this.getCartesianX(), 
            -this.getCartesianY()
        );

        //draw body
        fill("brown");
        ellipse(
            Utility.cartesianToNativeX(0), 
            Utility.cartesianToNativeY(0), 
            80, 
            40
        );

        //draw tail
        fill("white");
        triangle(
            Utility.cartesianToNativeX(-60),
            Utility.cartesianToNativeY(-40),

            Utility.cartesianToNativeX(-60),
            Utility.cartesianToNativeY(40),

            Utility.cartesianToNativeX(-40),
            Utility.cartesianToNativeY(0)
        );

        //draw feet
        fill("yellow");
        rect(
            Utility.cartesianToNativeX(-15),
            Utility.cartesianToNativeY(-20),
            10,
            20
        );

        rect(
            Utility.cartesianToNativeX(5),
            Utility.cartesianToNativeY(-20),
            10,
            20
        );

        //draw head
        fill("white");
        ellipse(
            Utility.cartesianToNativeX(40), 
            Utility.cartesianToNativeY(20), 
            30, 
            40
        );

        //draw beak
        fill("yellow");
        triangle(
            Utility.cartesianToNativeX(40),
            Utility.cartesianToNativeY(10),

            Utility.cartesianToNativeX(40),
            Utility.cartesianToNativeY(20),

            Utility.cartesianToNativeX(55),
            Utility.cartesianToNativeY(15)
        );

        //draw eyes
        fill("black");
        circle(
            Utility.cartesianToNativeX(35),
            Utility.cartesianToNativeY(22),
            5
        );
        circle(
            Utility.cartesianToNativeX(49),
            Utility.cartesianToNativeY(22),
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