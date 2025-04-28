const ShapeType = {
    RECTANGLE: "rectangle",
    CIRCLE: "circle"
}

class Shapes{
 
    /**
     * Draws a rectangle at the point X, Y
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} w 
     * @param {Number} h 
     */
    static rectangleCenter(x, y, w, h){
        rect(Utility.cartesianToNativeX(x) - (w / 2), Utility.cartesianToNativeY(y) - (h / 2), w, h);
    }

    /**
     * Draws a rectangle at given point
     * @param {Point} center 
     * @param {Number} w 
     * @param {Number} h 
     */
    static rectangleCenterFromPoint(center, w, h){
        this.rectangleCenter(
            center.getCartesianX(),
            center.getCartesianY(),
            w,
            h
        );
    }

    /**
     * Draws a circle at given point
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} radius 
     */
    static circleCenter(x, y, radius){
        circle(x, y, radius);
    }

    /**
     * Draws a circle at the given point
     * @param {Point} center 
     * @param {Number} radius 
     */
    static circleCenterFromPoint(center, radius){
        this.circleCenter(
            center.getNativeX(),
            center.getNativeY(),
            radius
        );
    }

}