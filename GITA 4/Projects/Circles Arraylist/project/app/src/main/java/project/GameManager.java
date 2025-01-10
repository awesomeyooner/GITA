package project;

import java.awt.Graphics;
import java.util.ArrayList;

import javax.swing.JFrame;

import project.util.entities.Entity;
import project.util.helpers.Utility;
import project.util.lib.KeyboardController;
import project.util.lib.MouseController;
import project.util.lib.KeyboardController.BindType;
import project.util.lib.MouseController.MouseEvent;
import project.util.math.Vector;

public class GameManager {

    private final KeyboardController controller = KeyboardController.getInstance();
    private final MouseController mouse = MouseController.getInstance();
    
    private static GameManager instance = new GameManager();

    private ArrayList<Circle> circles = new ArrayList<>();

    public GameManager(){
        configureBinding();
    }

    public void initialize(JFrame frame){

        controller.initialize(frame);
        mouse.initialize(frame);
    }

    public void configureBinding(){
        //controller.configureBinding(" ", () -> defender.shoot(mouse.getPoint().getVector(defender).getUnitVector().times(20)));
        // mouse.configureBinding(
        //     MouseEvent.ON_CLICK, 
        //     this::addEntity
        // );

        controller.configureBinding(
            "a",
            this::addEntity,
            BindType.ON_PRESS
        );

        controller.configureBinding(
            "r",
            this::removeEntity,
            BindType.ON_PRESS
        );
    }

    public static GameManager getInstance(){
        return instance;
    }

    public void update(JFrame frame, Graphics graphics){
        controller.update();
        mouse.update(frame);

        for(Circle circle : circles){
            if(circle == null)
                continue;
            
            circle.update(frame, graphics);
        }
    }

    public void addEntity(){
        Circle circle = new Circle(100);
        circle.set(mouse.getPoint());
        
        double dx = Utility.random(-5, 5);
        double dy = Utility.random(-5, 5);

        circle.setHeading(new Vector(dx, dy));

        circles.add(circle);
    }

    public void removeEntity(){
        for(int i = 0; i < circles.size(); i++){
            if(circles.get(i) == null)
                continue;

            if(circles.get(i).collides(mouse.getPoint()))
                circles.remove(i);
                
        }
    }
}
