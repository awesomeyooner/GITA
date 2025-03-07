package project.util;

import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

public class Button extends JButton{

    private Runnable action;
    
    public Button(String text, Runnable action){
        super(text);

        this.action = action;
    }

    public Button(String text){
        super(text);
    }

    public void run(Object source){
        if(source == this && action != null)
            action.run();
    }

    public void bind(Runnable action){
        this.action = action;
    }

    public void initialize(JFrame frame, ActionListener actionListener){
        frame.add(this);
        this.addActionListener(actionListener);
    }
}
