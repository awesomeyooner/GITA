package project;

import java.awt.Graphics;
import java.awt.Color;
import javax.swing.JFrame;

import project.util.entities.Entity;
import project.util.helpers.Utility;

public class Invader extends Entity{

    public Invader(int width, int height, int health, boolean isActive){
        super(width, height, health, isActive);
    }

    @Override
    public void update(JFrame frame, Graphics graphics) {
        super.update(frame, graphics);

        if(!isActive())
            return;

        if(getHealth() == 1)
            graphics.setColor(Color.RED);
        else if(getHealth() == 2)
            graphics.setColor(Color.ORANGE);
        else if(getHealth() == 3)
            graphics.setColor(Color.YELLOW);
        else
            graphics.setColor(Color.PINK);

        Utility.drawCircle(
            graphics, frame, 
            (int)getNativeX(frame.getWidth()), 
            (int)getNativeY(frame.getHeight()), 
            (int)getWidth(), 
            (int)getHeight()
        );

    }
}
