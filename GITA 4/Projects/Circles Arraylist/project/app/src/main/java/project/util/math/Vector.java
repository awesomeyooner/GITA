package project.util.math;

public class Vector {
    
    private double dx, dy;

    public Vector(double dx, double dy){
        this.dx = dx;
        this.dy = dy;
    }

    public Vector(){
        this(0, 0);
    }

    public Vector getUnitVector(){
        double magnitude = getMagnitude();

        if(magnitude == 0)
            return new Vector();
            
        return new Vector(getX() / magnitude, getY() / magnitude);
    }

    public double getX(){
        return dx;
    }

    public double getY(){
        return dy;
    }

    public double getAngle(){
        return Math.atan2(dy, dx);
    }

    public double getMagnitude(){
        return Math.sqrt((dx * dx) + (dy * dy));
    }

    public Vector times(double scalar){
        return new Vector(getX() * scalar, getY() * scalar);
    }

    public Vector timesX(double scalar){
        return new Vector(getX() * scalar, getY());
    }

    public Vector timesY(double scalar){
        return new Vector(getX(), getY() * scalar);
    }
}
