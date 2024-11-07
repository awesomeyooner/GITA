package project.util;

import java.awt.Graphics;

import project.Entity;
import java.awt.Color;
import javax.swing.JFrame;

public class Defender extends Entity{

    private Bullet bullets[] = new Bullet[20];
    
    public Defender(int width, int height){
        super(width, height, true);

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

        graphics.setColor(Color.GREEN);

        graphics.fillRect(
            getNativeX(frame.getWidth()) - Math.round(getWidth() / 2),
            getNativeY(frame.getHeight()) - Math.round(getHeight() / 2),
            getWidth(),
            getHeight()
        );

        
    }
    
}
