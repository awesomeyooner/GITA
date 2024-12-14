package dice;

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

import dice.util.Bar;
import dice.util.CommonConversion;
import dice.util.Constants;
import dice.util.Dice;
import dice.util.Entry;
import dice.util.FieldLabel;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //declare components
    private final DiceManager diceManager = DiceManager.getInstance();

    //text to display, width, height
    private final JTextArea outputArea = new JTextArea("", 10, 30);

    //button
    private final JButton actionButton = new JButton("Calculate");

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
        
        if(objSource == actionButton)
            rollDice();
    }

    public void rollDice(){
        for(int i = 0; i < 50; i++){
            diceManager.roll();
        }
        
        outputArea.setText(diceManager.getOutput());

        paint(getGraphics());
    }

    public void addComponents(){

        //text area
        add(outputArea);

        //panel
        add(panel);

        //button
        add(actionButton);
        actionButton.addActionListener(this);
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
