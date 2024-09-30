package n_factorial;

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

import n_factorial.util.Bar;
import n_factorial.util.CommonConversion;
import n_factorial.util.Constants;
import n_factorial.util.Dice;
import n_factorial.util.Entry;
import n_factorial.util.FieldLabel;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    private final FieldLabel nField = new FieldLabel("Enter n: ", true);

    private final FieldLabel[] fields = {nField};

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
            calculate();
    }

    public void calculate(){
        int n = (int)nField.getDouble();

        String summation = String.valueOf(getSummation(n));
        String evenSummation = String.valueOf(getEvenSummation(n));
        String oddSummation = String.valueOf(getOddSummation(n));
        String factorial = String.valueOf(getFactorial(n));

        outputArea.setText(
            "Summation: " + summation + Constants.LINEBREAK + 
            "Summation of even: " + evenSummation + Constants.LINEBREAK + 
            "Summation of odd: " + oddSummation + Constants.LINEBREAK +
            "Factorial: " + factorial
        );
    }

    public int getSummation(int n){
        int sum = 0;

        for(int i = 1; i < n + 1; i++){
            sum += i;
        }

        return sum;
    }

    public int getEvenSummation(int n){
        int sum = 0;

        for(int i = 1; i < n + 1; i++){
            sum += 2 * i;
        }

        return sum;
    }

    public int getOddSummation(int n){
        int sum = 0;

        for(int i = 1; i < n + 1; i++){
            sum += (2 * i) - 1;
        }

        return sum;
    }

    public int getFactorial(int n){
        int factorial = 1;

        for(int i = 1; i < n + 1; i++){
            factorial *= i;
        }

        return factorial;
    }

    public void addComponents(){
        for(FieldLabel field : fields){
            field.label.setHorizontalAlignment(SwingConstants.RIGHT);
            field.add(panel);
            field.addListener(this);
        }

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
