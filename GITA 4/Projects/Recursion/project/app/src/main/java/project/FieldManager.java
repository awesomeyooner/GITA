package project;

import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Iterator;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingConstants;
import javax.swing.SwingUtilities;

import project.util.Button;
import project.util.FieldLabel;
import project.util.TextArea;
import project.util.Utility;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //program specific
 
    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //field labels
    private final FieldLabel inputField = new FieldLabel("Input: ", true);
    private final FieldLabel[] fields = {inputField};
    
    //text areas
    private final TextArea outputArea = new TextArea("", 20, 20);
    private final TextArea[] textAreas = {outputArea};

    //button
    private final Button divideButton = new Button("Divide!", () -> {
        inputField.toggleValidCondition(true);

        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        outputArea.setText("Dividing Recursively!");
        recursivelyDivide(inputField.getDouble(), 3);
    });

    private final Button oddNumberButton = new Button("Generate Odd Numbers!", () -> {
        inputField.toggleValidCondition(true);

        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        outputArea.setText("Generating Odd Numbers!!");
        generateOddNumbers((int)inputField.getDouble());
    });

    private final Button factorButton = new Button("Find Least Common Factor!", () -> {
        inputField.toggleValidCondition(true);

        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        outputArea.setText("Finding Least Common Factor!");
        
        int input = (int)inputField.getDouble();
        int lcf = findSmallestFactor(input);

        if(lcf == input)
            outputArea.append("\n" + String.valueOf(input) + " is Prime!");
        else    
            outputArea.append("\n" + String.valueOf(lcf));
    });

    private final Button sumationButton = new Button("Get Summation!", () -> {
        inputField.toggleValidCondition(true);

        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        outputArea.setText("Getting Summation!");
        
        outputArea.append("\n" + String.valueOf(getSum(new StringBuilder(inputField.getText()))));
    });

    private final Button actionButton = new Button("Action!", this::action);


    private final Button[] buttons = {divideButton, oddNumberButton, factorButton, sumationButton, actionButton};

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
        
        for(Button button : buttons){
            button.run(objSource);
        }
    }

    public void action(){
        inputField.toggleValidCondition(false);

        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        outputArea.setText("");
        
        outputArea.append(reverseString(new StringBuilder(inputField.getText())).toString());
    }

    public void recursivelyDivide(double dividend, double divisor){
        double quotient = dividend / divisor;

        outputArea.append("\n" + String.valueOf(Utility.round(dividend, 2)));

        if(dividend / divisor >= 1){
            recursivelyDivide(quotient, divisor);
        } 

    }

    public Integer[] generateOddNumbers(Integer n, Integer[] buffer){
        Integer max = (n * 2) - 1;

        if(max >= 1){
            buffer = Utility.append(buffer, max);
            outputArea.append("\n" + String.valueOf(max));
            generateOddNumbers(n - 1);
        }
    }

    public void generateOddNumbers(int n){
        int max = (n * 2) - 1;

        if(max >= 1){
            outputArea.append("\n" + String.valueOf(max));
            generateOddNumbers(n - 1);
        }
    }

    public StringBuilder reverseString(StringBuilder input){
        return reverseString(input, 0);
    }

    public StringBuilder reverseString(StringBuilder input, int index){
        StringBuilder endpointsReversed = input;

        char start = input.charAt(index);
        char end = input.charAt((input.length() - 1) - index);

        endpointsReversed.setCharAt(index, end);
        endpointsReversed.setCharAt((input.length() -1) - index, start);

        if(index >= (input.length() / 2) + (input.length() % 2)){ //if index is greater than half of the length
            return endpointsReversed;
        }
        else
            return reverseString(endpointsReversed, index + 1);
    }

    public int findSmallestFactor(int number){
        return findSmallestFactor(number, 1);
    }

    private int findSmallestFactor(int number, int divisor){
        //if divisor goes into number cleanly and its not 1 or itself, then number is not prime
        if(divisor != 1 && number % divisor == 0){
            return divisor;
        }
        else{
            return findSmallestFactor(number, divisor + 1);
        }
    }

    public int getSum(StringBuilder string){
        return getSum(string, 0);
    }

    public int getSum(StringBuilder string, int index){
        int add = 0;

        if(index < string.length())
            add = getSum(string, index + 1);
        else
            return 0;

        return Character.getNumericValue(string.charAt(index)) + add;         
    }

    public void addComponents(){
        
        //add fields
        for(FieldLabel field : fields){
            field.label.setHorizontalAlignment(SwingConstants.RIGHT);
            field.add(panel);
            field.addListener(this);
        }

        //add buttons
        for(Button button : buttons){
            button.initialize(this, this);
        }

        //add text area
        for(TextArea textArea : textAreas){
            add(textArea);
            textArea.configureDefault();
        }

        //panel
        add(panel);
    }

    public void configureSettings(){
        //frame
        setSize(1000, 1000);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());
    }

}
