package project;

import javax.swing.*;

import project.util.CommonConversion;
import project.util.Point;

import java.awt.event.*;

public class MouseController extends MouseAdapter implements MouseMotionListener{

    public enum MouseEvent{
        ON_CLICK,
        ON_RELEASE,
        WHILE_HELD,
        WHILE_RELEASED
    }

    private boolean isClicked = false;

    private Point point = new Point();
    private int internalX, internalY = 0;

    private Runnable onClick;
    private Runnable onRelease;
    private Runnable whileHeld;
    private Runnable whileReleased;

    private static MouseController instance = new MouseController();

    public static MouseController getInstance(){
        return instance;
    }

    public void initialize(JFrame frame){
        frame.addMouseListener(instance);
        frame.addMouseMotionListener(instance);
    }

    public Point getPoint(){
        return point;
    }

    public boolean isClicked(){
        return isClicked;
    }

    public void configureBinding(MouseEvent event, Runnable method){
        switch(event){
            case ON_CLICK:
                onClick = method;
                break;
            case ON_RELEASE:
                onRelease = method;
                break;

            case WHILE_HELD:
                whileHeld = method;
                break;

            case WHILE_RELEASED:
                whileReleased = method;
                break;
        }
    }

    public void update(JFrame frame){
        point.setX(CommonConversion.nativeToCartesianX(internalX, frame.getWidth()));
        point.setY(CommonConversion.nativeToCartesianY(internalY, frame.getHeight()));

        if(isClicked && whileHeld != null)
            whileHeld.run();
        else if(whileReleased != null)
            whileReleased.run();
    }

    @Override
    public void mousePressed(java.awt.event.MouseEvent e) {
        isClicked = true;

        if(onClick != null)
            onClick.run();
    }

    @Override
    public void mouseReleased(java.awt.event.MouseEvent e) {
        isClicked = false;

        if(onRelease != null)
            onRelease.run();
    }

    @Override
    public void mouseMoved(java.awt.event.MouseEvent e) {
        internalX = e.getX();
        internalY = e.getY();
    }
}
