package project.util;

import java.awt.Graphics;

import project.util.entities.Bullet;
import project.util.entities.Entity;
import project.util.helpers.Utility;
import project.util.math.Vector;

import java.awt.Color;
import javax.swing.JFrame;

public class Defender extends Entity{

    private Bullet bullets[] = new Bullet[20];
    
    public Defender(int width, int height){
        this(width, height, 1, true);
    }

    public Defender(int width, int height, int health){
        this(width, height, health, true);
    }

    public Defender(int width, int height, int health, boolean isActive){
        super(width, height, health, isActive);

        for(int i = 0; i < bullets.length; i++){
            bullets[i] = new Bullet(20, 20, false);
        }
    }

    public Bullet[] getBullets(){
        return bullets;
    }

    public void shoot(Vector heading){
        for(Bullet bullet : bullets){
            if(!bullet.isActive()){
                bullet.setHeading(heading);
                bullet.setX(getCartesianX());
                bullet.setY(getCartesianY());
                bullet.setActive(true);
                break;
            }
        }
    }

    @Override
    public void update(JFrame frame, Graphics graphics) {
        super.update(frame, graphics);

        if(!isActive())
            return;

        for(Bullet bullet : bullets){
            bullet.update(frame, graphics);
        }

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
