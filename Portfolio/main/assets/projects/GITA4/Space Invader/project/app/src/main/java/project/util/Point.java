package project.util;

public class Point {
    
    private int x;
    private int y;

    public Point(int x, int y){
        this.x = x;
        this.y = y;
    }

    public Point(){
        this(0, 0);
    }

    public void setX(int newX){
        x = newX;
    }

    public void setY(int newY){
        y = newY;
    }

    public int getCartesianX(){
        return x;
    }

    public int getCartesianY(){
        return y;
    }

    public int getNativeX(int width){
        return CommonConversion.cartesianToNativeX(x, width);
    }

    public int getNativeY(int height){
        return CommonConversion.cartesianToNativeY(y, height);
    }

    public double getDistance(Point point){
        int deltaX = getCartesianX() - point.getCartesianX();
        int deltaY = getCartesianY() - point.getCartesianY();

        return Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
    }
}
