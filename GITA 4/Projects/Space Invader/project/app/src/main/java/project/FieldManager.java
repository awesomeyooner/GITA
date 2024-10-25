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

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    private Timer timer = new Timer(20, this);

    private static FieldManager instance = new FieldManager();

    public FieldManager(){
        //Put titlebar on frame
        super("Button Application");

        //apply settings
        configureSettings();
        
        //add components to the frame

        addKeyListener(KeyboardController.getInstance());

        timer.start();
    }

    public static void initialize(){
        GameManager.getInstance().initialize(instance);
    }

    //listen for button click
    @Override
    public void actionPerformed(ActionEvent event){
        paint(getGraphics());
    }

    @Override
    public void paint(Graphics graphics) {
        super.paint(graphics);

        GameManager.getInstance().update(this, graphics);
    }

    public void configureSettings(){

        //frame
        setSize(1920, 1280);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        
    }

}
