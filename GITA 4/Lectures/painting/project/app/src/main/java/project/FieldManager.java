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

import project.util.Bar;
import project.util.CommonConversion;
import project.util.Constants;
import project.util.Dice;
import project.util.Entry;
import project.util.FieldLabel;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //text to display, width, height
    private final JTextArea outputArea = new JTextArea("", 10, 30);

    //button
    private final JButton buttonStart = new JButton("start");
    private final JButton buttonStop = new JButton("stop");

    private Timer timer = new Timer(100, this);

    private int x = 0;
    private int y = 100;
    private int speed = 10;

    public FieldManager(){
        //Put titlebar on frame
        super("Button Application");

        //apply settings
        configureSettings();
        
        //add components to the frame
        addComponents();
    }

    public static void initialize(){
        new FieldManager();
    }

    //listen for button click
    @Override
    public void actionPerformed(ActionEvent event){
        Object objSource = event.getSource();
        
        if(objSource == buttonStart)
            start();
        else if(objSource == buttonStop)
            stop();
            
        if(timer.isRunning()){
            x += speed;
            repaint();
        }
    }


    @Override
    public void update(Graphics graphics) {
        paint(graphics);
    }

    @Override
    public void paint(Graphics graphics) {
        super.paint(graphics);

        graphics.setColor(Color.RED);
        graphics.fillOval(x, y, 50, 50);
    }

    public void start(){
        timer.start();
    }

    public void stop(){
        timer.stop();
    }

    public void addComponents(){

        //text area
        add(outputArea);

        //panel
        add(panel);

        //button
        add(buttonStart);
        buttonStart.addActionListener(this);

        add(buttonStop);
        buttonStop.addActionListener(this);
    }

    public void configureSettings(){

        //frame
        setSize(500, 500);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        //text area
        outputArea.setEditable(false);
        outputArea.setLineWrap(true);
        outputArea.setWrapStyleWord(true);
    }

}
