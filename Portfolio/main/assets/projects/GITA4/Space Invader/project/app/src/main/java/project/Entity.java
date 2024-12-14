package project;

import project.util.Point;
import project.util.Vector;

import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.Graphics;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.lang.constant.Constable;
import java.util.ArrayList;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.SwingConstants;
import javax.swing.Timer;

import project.util.CommonConversion;
import project.util.Constants;

public class Entity extends Point{

    private boolean isActive;

    private int width, height;

    private Vector movement = new Vector();
    
    public Entity(int width, int height, boolean active){
        super(0, 0);
        this.width = width;
        this.height = height;
        this.isActive = active;
    }

    public void update(JFrame frame, Graphics graphics){
        if(!isActive())
            return;

        move();
    }

    public static boolean areActive(Entity[] entities){
        boolean allDead = true;

        for(Entity entity : entities){
            if(entity.isActive()){
                allDead = false;
            }
        }

        return !allDead;
    }

    public boolean isActive(){
        return isActive;
    }

    public void setActive(boolean active){
        isActive = active;
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

    public void move(Vector heading){
        this.setX((int)(getCartesianX() + heading.getX()));
        this.setY((int)(getCartesianY() + heading.getY()));
    }

    public void move(double dx, double dy){
        move(new Vector(dx, dy));
    }

    public boolean isOutOfBounds(int width, int height){
        if(getCartesianX() > width / 2 || getCartesianX() < -width / 2)
            return true;
        
        if(getCartesianY() > height / 2 || getCartesianY() < -height / 2)
            return true;

        return false;
    }

    public boolean collides(Entity entity){
        double deltaX = Math.abs(getCartesianX() - entity.getCartesianX());
        double deltaY = Math.abs(getCartesianY() - entity.getCartesianY());

        if(deltaX < Math.abs(getWidth() - entity.getWidth()) && deltaY < Math.abs(getHeight() - entity.getHeight())){
            return true;
        }
        else
            return false;
    }
}
