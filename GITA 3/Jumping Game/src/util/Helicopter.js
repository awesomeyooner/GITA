class Helicopter extends Entity{

    #mirror = 1;

    #buffer = 30;
    #trail = new Array();

    #bullets = new Array();
    #maxBullets = 10;

    #points = 0;

    constructor(size, speed = 5){
        super(size, 0, 0, true, speed);

        this.maxFuel = 500;
        this.fuel = 500;

        this.resetBullets();
    }

    update(target, weather){
        fill("red");

        if(this.getHeading().getY() <= 0){
            this.getHeading().setY(-1);

            if(this.fuel <= this.maxFuel){
                this.fuel +=  0.5;
            }
        }
        else if(this.getHeading().getY() > 0 && this.fuel > 0){
            if(weather == Weather.SUNNY)
                this.fuel -= 3;
            else if(weather == Weather.RAINING)
                this.fuel -= 6;
            else
                this.fuel -= 1;
        }

        for(var bullet of this.#bullets){
            if(!bullet.isActive)
                continue;

            bullet.update();

            if(bullet.collides(target)){
                bullet.isActive = false;
                this.#points ++;
            }
        }
        
        this.constrainMovement();
        this.move();
        //circle(this.getNativeX(), this.getNativeY(), this.size);
        this.drawEntity();
        this.displayHUD();

        if(this.getHeading().getX() != 0)
            this.#mirror = Math.sign(this.getHeading().getX());


        var x = this.getCartesianX() + (this.#mirror * -100);
        var y = this.getCartesianY();

        this.append(new Point(x, y));
        this.drawTrail();
    }

    resetBullets(){
        for(var i = 0; i < this.#maxBullets; i++){
            this.#bullets[i] = new Bullet(
                40, //size
                0, //bounces
                4 //speed
            );
        }
    }

    shoot(direction){
        for(var bullet of this.#bullets){
            if(bullet.isActive)
                continue;
            else{
                bullet.setPoint(this);
                bullet.setHeading(direction.times(bullet.speed));
                bullet.isActive = true;
                bullet.bounces = 0;
                break;
            }
        }
    }

    append(point){

        if(this.#trail[this.#buffer] != null)
            this.#trail.pop();

        this.#trail.unshift(point);
    }

    displayHUD(){
        //fuel
        push();
        fill("orange");
        rect(
            Utility.cartesianToNativeX(-750),
            Utility.cartesianToNativeY(200),
            200 * (this.fuel / this.maxFuel),
            10
        );
        pop();

        //points
        Utility.textCorner(
            "Hits: " + this.#points,
            50,
            100,
            100
        )
    }

    drawTrail(){
        for(var i = 0; i < this.#trail.length - 1; i++){
            if(this.#trail[i] == null)
                continue;

            var currentPoint = this.#trail[i];
            var nextPoint = this.#trail[i + 1];

            push();

            stroke("white");
            strokeWeight(5);
            fill("white");

            line(
                currentPoint.getNativeX(),
                currentPoint.getNativeY(),

                nextPoint.getNativeX(),
                nextPoint.getNativeY()
            );

            pop();
        }
    }

    drawEntity(){

        push();
        translate(
            this.getNativeX(),
            this.getNativeY()
        );

        fill("cyan");
        circle(this.#mirror * 10, 0, 80);
        
        fill("gray")
        Utility.rectCenter(this.#mirror * -70, 0, 80, 10);
        Utility.rectCenter(this.#mirror * 10, -40, 100, 10);

        pop();
        
        push();
        fill("gray");
        translate(
            this.getNativeX() - (this.#mirror * 100),
            this.getNativeY()
        );
        rotate(millis() / 50);
        Utility.rectCenter(0, 0, 10, 60);
        pop();
    }
}