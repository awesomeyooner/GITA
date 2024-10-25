package project;

import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.Graphics;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.lang.constant.Constable;
import java.util.ArrayList;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.SwingConstants;
import javax.swing.Timer;

import project.util.CommonConversion;
import project.util.Constants;
import project.util.Defender;
import project.util.Invader;
import project.util.Vector;

public class GameManager {

    private final KeyboardController controller = KeyboardController.getInstance();
    
    private static GameManager instance = new GameManager();

    private final Defender defender = new Defender(100, 75);

    private final Invader invaders[] = new Invader[10];

    // private final Invader invader = new Invader(100, 100, true);

    public GameManager(){
        configureBinding();
    }

    public void initialize(JFrame frame){

        for(int i = 0; i < 10; i++){
            invaders[i] = new Invader(100, 100, true);

            invaders[i].setX(((i + 1) * (int)(invaders[i].getWidth() * 1.5)) + -frame.getWidth() / 2);
            invaders[i].setY((int)(-invaders[i].getWidth() * 1.5) + frame.getHeight() / 2);

            invaders[i].setHeading(new Vector(2, 0));
        }

        defender.setX(0);
        defender.setY(200 + -frame.getHeight() / 2);
    }

    public void configureBinding(){
        controller.configureBinding(" ", defender::shoot);
    }

    public static GameManager getInstance(){
        return instance;
    }

    public void update(JFrame frame, Graphics graphics){
        controller.update();

        defender.setHeading(controller.getHeading().times(10));
        defender.update(frame, graphics);

        for(Invader invader : invaders){
            if(invader.isOutOfBounds(frame.getWidth(), frame.getHeight())){
                invader.setY(invader.getCartesianY() - (int)(invader.getHeight() * 1.5));
                invader.setHeading(invader.getHeading().times(-1));
            }
    
            invader.update(frame, graphics);

            checkCollisions(invader);
        }
    }

    public void checkCollisions(Invader invader){
        if(!invader.isActive())
            return;

        if(defender.getBullet().collides(invader)){
            defender.getBullet().setActive(false);
            invader.setActive(false);
        }
    }
}
