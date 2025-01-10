package project.util.lib;

import javax.imageio.ImageIO;
import javax.swing.*;

import com.google.common.base.Supplier;
import com.google.common.collect.HashMultimap;
import com.google.common.util.concurrent.Runnables;

import project.util.math.Vector;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.awt.event.*;

public class KeyboardController implements KeyListener{

    public enum BindType{
        ON_PRESS,
        ON_RELEASE,
        
        WHILE_PRESSED,
        WHILE_RELEASED
    }

    public static class Keybind{

        public final String key;
        public final Runnable action;
        public final BindType bindType;

        public boolean state = false;
        public boolean previousState = false;

        public Keybind(String key, Runnable action, BindType bindType){
            this.key = key;
            this.action = action;
            this.bindType = bindType;
        }

        public void refresh(boolean newState){
            previousState = state;
            state = newState;
        }
    }

    private HashMap<String, Boolean> keys = new HashMap<>();
    private HashMap<String, Keybind> bindings = new HashMap<>();

    private static KeyboardController instance = new KeyboardController();

    public static KeyboardController getInstance(){
        return instance;
    }

    public void initialize(JFrame frame){
        frame.addKeyListener(instance);
    }
    
    @Override
    public void keyPressed(KeyEvent event) {
        String currentKey = String.valueOf(event.getKeyChar());

        keys.put(currentKey, true);
    }

    @Override
    public void keyReleased(KeyEvent event) {
        String currentKey = String.valueOf(event.getKeyChar());

        keys.put(currentKey, false);
    }

    @Override
    public void keyTyped(KeyEvent event) {
        
    }

    public void printKeys(){
        for(String key : keys.keySet()){
            System.out.println(key + ": " + keys.get(key));
        }
    }

    public Vector getHeading(){
        double x = 0;
        double y = 0;

        for(String key : keys.keySet()){
            if(!keys.get(key)) // if its not pressed
                continue;

            if(key.equals("w"))
                y += 1;
            else if(key.equals("s"))
                y -= 1;

            else if(key.equals("a"))
                x -= 1;
            else if(key.equals("d"))
                x += 1;
        }

        return new Vector(x, y).getUnitVector();
    }

    public void update(){

        for(String key : bindings.keySet()){
            if(keys.get(key) == null || bindings.get(key) == null) // if its null
                continue;

            //refresh the state of the binding
            bindings.get(key).refresh(keys.get(key));

            Keybind bind = bindings.get(key);
            
            switch(bind.bindType){
                case BindType.ON_PRESS:
                    if(bind.state && !bind.previousState) //if pressed and previously not pressed
                        bind.action.run();
                    break;

                case BindType.ON_RELEASE:
                    if(!bind.state && bind.previousState) //if not pressed and previously pressed
                        bind.action.run();
                    break;

                case BindType.WHILE_PRESSED:
                    if(bind.state) //if its pressed
                        bind.action.run();
                    break;

                case BindType.WHILE_RELEASED:
                    if(!bind.state) //if not pressed
                        bind.action.run();
                    break;
            }
        }
    }

    public void configureBinding(String key, Runnable action, BindType keyState){
        bindings.put(key, new Keybind(key, action, keyState));
    }

    public HashMap<String, Boolean> getKeys(){
        return keys;
    }
}
