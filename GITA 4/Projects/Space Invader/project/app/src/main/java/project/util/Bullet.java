package project.util;

import java.awt.Graphics;

import javax.swing.JFrame;

import project.Entity;
import java.awt.Color;

public class Bullet extends Entity{


    public Bullet(int width, int height, boolean isActive){
        super(width, height, isActive);
    }

    @Override
    public void update(JFrame frame, Graphics graphics) {
        super.update(frame, graphics);

        if(!isActive())
            return;
            
        graphics.setColor(Color.GREEN);

        graphics.fillRect(
            getNativeX(frame.getWidth()) - Math.round(getWidth() / 2),
            getNativeY(frame.getHeight()) - Math.round(getHeight() / 2),
            getWidth(),
            getHeight()
        );

        if(isOutOfBounds(frame.getWidth(), frame.getHeight()))
            setActive(false);
    }
}
