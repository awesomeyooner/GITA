package project.util;

import java.awt.Graphics;

import project.Entity;
import java.awt.Color;
import javax.swing.JFrame;

public class Defender extends Entity{

    private Bullet bullet = new Bullet(10, 40, false);
    
    public Defender(int width, int height){
        super(width, height, true);

        bullet.setHeading(new Vector(0, 20));
    }

    public Bullet getBullet(){
        return bullet;
    }

    public void shoot(){
        if(!bullet.isActive()){
            bullet.setX(getCartesianX());
            bullet.setY(getCartesianY());
            bullet.setActive(true);
        }
    }

    @Override
    public void update(JFrame frame, Graphics graphics) {
        super.update(frame, graphics);

        if(!isActive())
            return;

        bullet.update(frame, graphics);

        graphics.setColor(Color.GREEN);

        graphics.fillRect(
            getNativeX(frame.getWidth()) - Math.round(getWidth() / 2),
            getNativeY(frame.getHeight()) - Math.round(getHeight() / 2),
            getWidth(),
            getHeight()
        );

        
    }
    
}
