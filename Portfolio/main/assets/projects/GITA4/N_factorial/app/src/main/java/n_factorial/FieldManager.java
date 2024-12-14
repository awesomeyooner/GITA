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
    private final JTextArea outputArea = new JTextArea("", 10, 100);

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

        Entry summation = getSummation(n);
        Entry evenSummation = getEvenSummation(n);
        Entry oddSummation = getOddSummation(n);
        Entry factorial = getFactorial(n);

        outputArea.setText(
            "Summation: " + summation.output + Constants.LINEBREAK + 
            "Summation of even: " + evenSummation.output + Constants.LINEBREAK + 
            "Summation of odd: " + oddSummation.output + Constants.LINEBREAK +
            "Factorial: " + factorial.output
        );
    }

    public Entry getSummation(int n){
        int sum = 0;
        String output = "";

        for(int i = 1; i < n + 1; i++){
            sum += i;

            output += i + " + ";
        }

        output += " = " + sum;

        return new Entry(sum, output);
    }

    public Entry getEvenSummation(int n){
        int sum = 0;
        String output = "";

        for(int i = 1; i < n + 1; i++){
            sum += 2 * i;

            output += (2 * i) + " + ";
        }

        output += " = " + sum;

        return new Entry(sum, output);
    }

    public Entry getOddSummation(int n){
        int sum = 0;
        String output = "";

        for(int i = 1; i < n + 1; i++){
            sum += (2 * i) - 1;

            output += ((2 * i) - 1) + " + ";
        }

        output += " = " + sum;

        return new Entry(sum, output);
    }

    public Entry getFactorial(int n){
        int factorial = 1;
        String output = "";

        for(int i = 1; i < n + 1; i++){
            factorial *= i;

            output += i + " * ";
        }

        output += " = " + factorial;

        return new Entry(factorial, output);
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
