package project;

import java.awt.Graphics;

import javax.swing.JFrame;

import project.util.entities.Entity;

public class Circle extends Entity{
    
    public Circle(int size){
        super(size, size, true);
    }

    @Override
    public void update(JFrame frame, Graphics graphics) {
        super.update(frame, graphics);

        if(isOutOfBoundsHorizontal(frame.getWidth()))
            this.setHeading(this.getHeading().timesX(-1));
        
        if(isOutOfBoundsVertical(frame.getHeight()))
            this.setHeading(this.getHeading().timesY(-1));
    }
}
