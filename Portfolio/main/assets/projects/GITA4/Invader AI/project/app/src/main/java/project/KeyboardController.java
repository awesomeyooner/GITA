package project;

import javax.imageio.ImageIO;
import javax.swing.*;

import com.google.common.base.Supplier;
import com.google.common.collect.HashMultimap;
import com.google.common.util.concurrent.Runnables;

import project.util.Vector;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.awt.event.*;

public class KeyboardController implements KeyListener{

    private HashMap<String, Boolean> keys = new HashMap<>();
    private HashMap<String, Runnable> bindings = new HashMap<>();

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
        
        // for(String key : keys.keySet()){

        //     if(key.equals(currentKey))
        //         keys.put(key, false);
        // }

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

        for(String binding : bindings.keySet()){
            if(keys.get(binding) == null || !keys.get(binding)) // if its not pressed
                continue;

            bindings.get(binding).run();
        }
    }

    public void configureBinding(String key, Runnable method){
        bindings.put(key, method);
    }

    public HashMap<String, Boolean> getKeys(){
        return keys;
    }
}
