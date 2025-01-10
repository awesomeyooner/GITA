package project.util.entities;

import project.util.helpers.Utility;
import project.util.math.Point;
import project.util.math.Vector;

import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JFrame;

import org.checkerframework.checker.units.qual.min;

public class Entity extends Point{

    public boolean isActive;
    public int width, height;
    public int health;
    private int maximumHealth;

    private Vector movement = new Vector();
    
    public Entity(int width, int height, int health, boolean active){
        super(0, 0);
        this.width = width;
        this.height = height;
        maximumHealth = health;
        this.health = health;
        this.isActive = active;
    }

    public Entity(int width, int height, boolean active){
        this(width, height, 1, active);
    }

    public void update(JFrame frame, Graphics graphics){
        if(health <= 0)
            isActive = false;

        if(!isActive)
            return;

        move();
        draw(frame, graphics);
    }

    public void draw(JFrame frame, Graphics graphics){
        graphics.setColor(Color.BLUE);

        Utility.drawCircle(
            graphics, frame, 
            (int)getNativeX(frame.getWidth()), 
            (int)getNativeY(frame.getHeight()), 
            (int)getWidth(), 
            (int)getHeight()
        );
    }

    public static boolean areActive(Entity[] entities){
        boolean allDead = true;

        for(Entity entity : entities){
            if(entity.isActive){
                allDead = false;
            }
        }

        return !allDead;
    }

    public void reset(Point point){
        setX(point.getCartesianX());
        setY(point.getCartesianY());

        health = maximumHealth;
        isActive = true;
    }

    public void reset(){
        health = maximumHealth;
        isActive = true;
    }

    public int getWidth(){
        return width;
    }

    public int getHeight(){
        return height;
    }

    public void setWidth(int newWidth){
        width = newWidth;
    }

    public void setHeight(int newHeight){
        height = newHeight;
    }

    public void setHeading(Vector heading){
        movement = heading;
    }

    public Vector getHeading(){
        return movement;
    }

    public void move(){
        move(movement);
    }

    public void set(Point newPoint){
        this.setX(newPoint.getCartesianX());
        this.setY(newPoint.getCartesianY());
    }

    public void move(Vector heading){
        this.setX((getCartesianX() + heading.getX()));
        this.setY((getCartesianY() + heading.getY()));
    }

    public void move(double dx, double dy){
        move(new Vector(dx, dy));
    }

    public boolean isOutOfBoundsHorizontal(int width){
        if(getCartesianX() > (width / 2) - (this.width / 2) || getCartesianX() < -((width / 2) - (this.width / 2)))
            return true;
        else
            return false;
    }

    public boolean isOutOfBoundsVertical(int height){
        if(getCartesianY() > (height / 2) - (this.height / 2) || getCartesianY() < -((height / 2) - (this.height / 2)))
            return true;
        else
            return false;
    }

    public boolean isOutOfBounds(int width, int height){
        return isOutOfBoundsHorizontal(width) || isOutOfBoundsVertical(height);
    }

    public boolean collides(Entity entity){
        // double deltaX = Math.abs(getCartesianX() - entity.getCartesianX());
        // double deltaY = Math.abs(getCartesianY() - entity.getCartesianY());

        // if(deltaX < Math.abs(getWidth() - entity.getWidth()) && deltaY < Math.abs(getHeight() - entity.getHeight())){
        //     return true;
        // }
        // else
        //     return false;

        double minDistance = (getWidth() + entity.getWidth() + getHeight() + entity.getHeight()) / 4;

        return getDistance(entity) < minDistance;
    }

    public boolean collides(Point point){
        double minDistance = Math.max(getHeight(), getWidth());

        return getDistance(point) < minDistance;
    }
}
