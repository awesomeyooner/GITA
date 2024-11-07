package project.util;

public class Point {
    
    private double x;
    private double y;

    public Point(double x, double y){
        this.x = x;
        this.y = y;
    }

    public Point(){
        this(0, 0);
    }

    public void setX(double newX){
        x = newX;
    }

    public void setY(double newY){
        y = newY;
    }

    public double getCartesianX(){
        return x;
    }

    public double getCartesianY(){
        return y;
    }

    public double getNativeX(double width){
        return CommonConversion.cartesianToNativeX(x, width);
    }

    public double getNativeY(double height){
        return CommonConversion.cartesianToNativeY(y, height);
    }

    public Vector getVector(){
        return getVector(new Point()); //origin
    }

    public Vector getVector(Point point){
        double deltaX = getCartesianX() - point.getCartesianX();
        double deltaY = getCartesianY() - point.getCartesianY();

        return new Vector(deltaX, deltaY);
    }

    public double getDistance(Point point){
        double deltaX = getCartesianX() - point.getCartesianX();
        double deltaY = getCartesianY() - point.getCartesianY();

        return Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    }
}
