package project.util.entities;

import java.awt.Graphics;

import javax.swing.JFrame;

import project.util.helpers.Utility;

import java.awt.Color;

public class Bullet extends Entity{


    public Bullet(int width, int height, boolean isActive){
        super(width, height, isActive);
    }

    @Override
    public void update(JFrame frame, Graphics graphics) {
        super.update(frame, graphics);

        if(!isActive)
            return;
            
        graphics.setColor(Color.GREEN);

        Utility.drawCircle(
            graphics, frame, 
            (int)getNativeX(frame.getWidth()), 
            (int)getNativeY(frame.getHeight()), 
            (int)getWidth(), 
            (int)getHeight()
        );

        if(isOutOfBounds(frame.getWidth(), frame.getHeight()))
            isActive = false;
    }
}
