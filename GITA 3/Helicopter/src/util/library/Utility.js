class Utility{

    static textCenter(text_to_use, x, y, size = 20, degrees = 0, color = "black"){
        push();
        fill(color);
        textSize(size);
        translate(x, y);
        rotate(degrees);
        text(text_to_use, -textWidth(text_to_use) / 2, textSize() / 4);
        pop();
    }

    static random(lowerBound, upperBound){
        return (Math.random() * (upperBound - lowerBound)) + lowerBound;
    }

    static cycle(){
        return ((sin(millis() * 0.1) + 1) / 2);
    }

    static getCenterBoxCorners(w = width, h = height){
        var corners = [
            new Point(w / 2, h / 2),
            new Point(w / 2, -h / 2),
            new Point(-w / 2, -h / 2),
            new Point(-w / 2, h / 2)
        ];

        return corners;
    }

    static textCorner(text_to_use, x, y, size = 20, degrees = 0, color = "black"){
        push();
        fill(color);
        textSize(size);
        translate(x, y);
        rotate(degrees);
        text(text_to_use, 0, 0);
        pop();
    }

    static drawLine(pointA, pointB){
        line(
            pointA.getNativeX(),
            pointA.getNativeY(),

            pointB.getNativeX(),
            pointB.getNativeY()
        );
    }

    static rectCenter(x, y, w, h){
        rect(x - (w / 2), y - (h / 2), w, h);
    }

    static cartesianToNative(x, y, w = width, h = height){
        var xNew = this.cartesianToNativeX(x, w);
        var yNew = this.cartesianToNativeY(y, h);

        return {x: xNew, y: yNew};
    }

    static nativeToCartesian(x, y, w = width, h = height){
        var xNew = this.nativeToCartesianX(x, w);
        var yNew = this.nativeToCartesianY(y, h);

        return {x: xNew, y: yNew};
    }

    static cartesianToNativeX(x, w = width){
        return x + Math.round(w / 2);
    }

    static cartesianToNativeY(y, h = height){
        return -y + Math.round(h / 2);
    }

    static nativeToCartesianX(x, w = width){
        return x - Math.round(w / 2);   
    }

    static nativeToCartesianY(y, h = height){
        return -y + Math.round(h / 2);
    }
}