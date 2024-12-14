package craps;

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

import craps.GameManager.GameState;
import craps.util.Bar;
import craps.util.CommonConversion;
import craps.util.Constants;
import craps.util.Dice;
import craps.util.Entry;
import craps.util.FieldLabel;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //declare components
    private final DiceManager diceManager = DiceManager.getInstance();
    private final GameManager gameManager = GameManager.getInstance();

    //text to display, width, height
    private final JTextArea outputArea = new JTextArea("", 10, 30);
    private final JTextArea statsArea = new JTextArea("", 10, 30);

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
        if(gameManager.getState() != GameState.ONGOING){
            gameManager.reset();
        }

        int sum  = diceManager.getSum();

        gameManager.playGame(sum);
        
        if(gameManager.getState() == GameState.WON)
            outputArea.setText(
                "CONGRATS, YOU WON BY ROLLING: " + String.valueOf(sum) + Constants.LINEBREAK + 
                "Play another game by clicking Calculate"
            );

        else if(gameManager.getState() == GameState.LOST)
            outputArea.setText(
                "SORRY, BUT YOU LOST BY ROLLING A: " + String.valueOf(sum) + Constants.LINEBREAK + 
                "Play another game by clicking Calculate"
            );

        else
            outputArea.setText(
                "Game State: " + gameManager.getState().toString() + Constants.LINEBREAK +
                "Roll: " + String.valueOf(sum) + Constants.LINEBREAK + 
                "Point to earn: " + String.valueOf(gameManager.getPoints())
            );

        statsArea.setText(gameManager.getStats());

        paint(getGraphics());
    }

    public void addComponents(){

        //text area
        add(outputArea);
        add(statsArea);

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

        statsArea.setEditable(false);
        statsArea.setLineWrap(true);
        statsArea.setWrapStyleWord(true);
    }

}
