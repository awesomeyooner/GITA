class SlashManager{

    #points = new Array();

    constructor(buffer){
        this.buffer = buffer;

        for(var i = 0; i < buffer; i++){
            this.#points[i] = new Point(-5000, -5000);
        }
    }

    update(){
        this.drawArc(5);
    }
    
    getPoints(){
        return this.#points;
    }

    append(point){
        // this.#points.push(point);
        // this.#points.shift();
        this.#points.unshift(point);
        this.#points.pop();
    }

    reset(){
        this.#points = new Array(this.buffer);
    }

    drawArc(weight){
        var previous = this.#points[0];

        if(previous == null)
            return;

        for(var point of this.#points){

            if(point == null)
                continue;

            push();
            strokeWeight(weight);
            stroke("white");


            line(
                previous.getNativeX(), 
                previous.getNativeY(),

                point.getNativeX(), 
                point.getNativeY()
            );
            // circle(point.getNativeX(), point.getNativeY(), 5);
            // pop();

            previous = point;
        }
    }
}