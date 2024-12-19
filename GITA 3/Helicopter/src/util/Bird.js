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
    }

    drawEntity(){

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
                print("Initial X: " + initialX);
                print("Initial Y: " + initialY);
                print("i: " + i);
                print("time: " + time)
                print("vx: " + vx);
                print("vy: " + vy);
                print("X: " + newX);
                print("Y: " + newY);
                this.set(newX, newY);
            }
        }
    }
}