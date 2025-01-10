package project;

import java.awt.Graphics;
import javax.swing.JFrame;

import project.util.lib.KeyboardController;
import project.util.lib.MouseController;
import project.util.lib.KeyboardController.BindType;
import project.util.lib.MouseController.MouseEvent;

public class GameManager {

    private final KeyboardController controller = KeyboardController.getInstance();
    private final MouseController mouse = MouseController.getInstance();
    
    private static GameManager instance = new GameManager();

    public GameManager(){
        configureBinding();
    }

    public void initialize(JFrame frame){

        controller.initialize(frame);
        mouse.initialize(frame);
    }

    public void configureBinding(){
        //controller.configureBinding(" ", () -> defender.shoot(mouse.getPoint().getVector(defender).getUnitVector().times(20)));
        mouse.configureBinding(
            MouseEvent.ON_CLICK, 
            () -> System.out.println("Mouse Clicked!")
        );

        controller.configureBinding(
            "a",
            () -> System.out.println("a"),
            BindType.ON_PRESS
        );
    }

    public static GameManager getInstance(){
        return instance;
    }

    public void update(JFrame frame, Graphics graphics){
        controller.update();
        mouse.update(frame);
    }
}
