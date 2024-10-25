package project.util;

import project.Entity;
import java.awt.Graphics;

import project.Entity;
import java.awt.Color;
import javax.swing.JFrame;

public class Invader extends Entity{

    public Invader(int width, int height, boolean isActive){
        super(width, height, isActive);
    }

    @Override
    public void update(JFrame frame, Graphics graphics) {
        super.update(frame, graphics);

        if(!isActive())
            return;

        graphics.setColor(Color.RED);

        graphics.fillRect(
            getNativeX(frame.getWidth()) - Math.round(getWidth() / 2),
            getNativeY(frame.getHeight()) - Math.round(getHeight() / 2),
            getWidth(),
            getHeight()
        );

        
    }
}
