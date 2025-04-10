class Utility{

    /**
     * Puts text on the screen where the coordinates are of the center of the textbox
     * @param {string} text_to_use The text to display
     * @param {number} x The X Coordinate, native
     * @param {number} y The Y Coordinate, native
     * @param {number} size The size of the text, default to 20
     * @param {number} degrees The angle to set, default to horizontal
     * @param {string} color The Color of the text, default to black
     */
    static textCenter(text_to_use, x, y, size = 20, degrees = 0, color = "black"){
        push();
        fill(color);
        textSize(size);
        translate(x, y);
        rotate(degrees);
        text(text_to_use, -textWidth(text_to_use) / 2, textSize() / 4);
        pop();
    }

    /**
     * Puts text on the screen where the coordinates are the top left of the textbox
     * @param {string} text_to_use The text to display
     * @param {number} x The X Coordinate, native
     * @param {number} y The Y Coordinate, native
     * @param {number} size The size of the text, default to 20
     * @param {number} degrees The angle to set, default to horizontal
     * @param {string} color The Color of the text, default to black
     */
    static textCorner(text_to_use, x, y, size = 20, degrees = 0, color = "black"){
        push();
        fill(color);
        textSize(size);
        translate(x, y);
        rotate(degrees);
        text(text_to_use, 0, 0);
        pop();
    }

    /**
     * Gets a random number within the bounds
     * @param {number} lowerBound The Lowest that this can return
     * @param {number} upperBound The Max that this can return 
     * @returns 
     */
    static random(lowerBound, upperBound){
        return (Math.random() * (upperBound - lowerBound)) + lowerBound;
    }

    /**
     * Gets an array of points that represens the corners of the box. Starts with Top Right and goes goes clockwise
     * @param {number} w Width of the box
     * @param {number} h Height of the box 
     * @returns an array of points that represents the corners of the box
     */
    static getCenterBoxCorners(w = width, h = height){
        var corners = [
            new Point(w / 2, h / 2),
            new Point(w / 2, -h / 2),
            new Point(-w / 2, -h / 2),
            new Point(-w / 2, h / 2)
        ];

        return corners;
    }

    /**
     * Draws a line between two points in cartesian coordinates
     * @param {Point} pointA Starting Point
     * @param {Point} pointB Ending Point
     */
    static drawLine(pointA, pointB){
        line(
            pointA.getNativeX(),
            pointA.getNativeY(),

            pointB.getNativeX(),
            pointB.getNativeY()
        );
    }

    /**
     * Draws a rectangle where the coordinates are the center of the rectangle, chain with pop and push to edit style
     * @param {number} x X coordinate of the rectangle, native
     * @param {number} y Y coordinate of the rectangle, native
     * @param {number} w Width of the rectangle
     * @param {number} h Height of the rectangle
     */
    static rectCenter(x, y, w, h){
        rect(x - (w / 2), y - (h / 2), w, h);
    }

    /**
     * Draws a rectangle where the coordinates are the center of the rectangle, chain with pop and push to edit style
     * @param {number} x X coordinate of the rectangle, cartesian
     * @param {number} y Y coordinate of the rectangle, cartesian
     * @param {number} w Width of the rectangle
     * @param {number} h Height of the rectangle
     * @param {string} color Inner color of the rectangle
     * @param {string} strokeColor Border color of the rectangle
     */
    static rectFromCartesian(x, y, w, h, color="black", strokeColor="black"){
        push();
        fill(color);
        stroke(strokeColor);
        rect(
            this.cartesianToNativeX(x),
            this.cartesianToNativeY(y),
            w,
            h
        );
        pop();
    }

    /**
     * Gets the native coordinates of a cartesian point, represented as a tuple
     * @param {number} x X coordinate, cartestian
     * @param {number} y Y coordinate, cartesian
     * @param {number} w Width of the frame
     * @param {number} h Height of the frame
     * @returns Tuple of the Converted X and Y Coordinates
     */
    static cartesianToNative(x, y, w = width, h = height){
        var xNew = this.cartesianToNativeX(x, w);
        var yNew = this.cartesianToNativeY(y, h);

        return {x: xNew, y: yNew};
    }

    /**
     * Gets the cartesian coordinates of a native point, represented as a tuple
     * @param {number} x X coordinate, native
     * @param {number} y Y coordinate, native
     * @param {number} w Width of the frame
     * @param {number} h Height of the frame
     * @returns Tuple of the Converted X and Y Coordinates
     */
    static nativeToCartesian(x, y, w = width, h = height){
        var xNew = this.nativeToCartesianX(x, w);
        var yNew = this.nativeToCartesianY(y, h);

        return {x: xNew, y: yNew};
    }

    /**
     * Gets the native coordinate of the given cartesian coordinate
     * @param {number} x X coordinate, cartesian
     * @param {number} w Width of the frame
     * @returns The convrted native coordinate
     */
    static cartesianToNativeX(x, w = width){
        return x + Math.round(w / 2);
    }

    /**
     * Gets the native coordinate of the given cartesian coordinate
     * @param {number} x X coordinate, cartesian
     * @param {number} w Width of the frame
     * @returns The converted native coordinate
     */
    static cartesianToNativeY(y, h = height){
        return -y + Math.round(h / 2);
    }

    /**
     * Gets the cartestian coordinate of the given native coordinate
     * @param {number} x X coordinate, native
     * @param {number} w Width of the frame 
     * @returns The converted cartesian coordinate
     */
    static nativeToCartesianX(x, w = width){
        return x - Math.round(w / 2);   
    }

    /**
     * Gets the cartestian coordinate of the given native coordinate
     * @param {number} y Y coordinate, native
     * @param {number} w Width of the frame 
     * @returns The converted cartesian coordinate
     */
    static nativeToCartesianY(y, h = height){
        return -y + Math.round(h / 2);
    }
}