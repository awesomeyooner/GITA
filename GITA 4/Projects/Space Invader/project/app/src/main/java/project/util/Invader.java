package project.util;

import project.Entity;
import java.awt.Graphics;

import project.Entity;
import java.awt.Color;
import javax.swing.JFrame;

public class Invader extends Entity{

    private int health;

    public Invader(int width, int height, int health, boolean isActive){
        super(width, height, isActive);

        this.health = health;
    }

    public int getHealth(){
        return health;
    }

    public void setHealth(int health){
        this.health = health;
        
        if(this.health <= 0)
            setActive(false);
    }

    @Override
    public void update(JFrame frame, Graphics graphics) {
        super.update(frame, graphics);

        if(!isActive())
            return;

        if(health == 1)
            graphics.setColor(Color.RED);
        else if(health == 2)
            graphics.setColor(Color.ORANGE);
        else if(health == 3)
            graphics.setColor(Color.YELLOW);
        else
            graphics.setColor(Color.PINK);

        graphics.fillRect(
            getNativeX(frame.getWidth()) - Math.round(getWidth() / 2),
            getNativeY(frame.getHeight()) - Math.round(getHeight() / 2),
            getWidth(),
            getHeight()
        );

        
    }
}
