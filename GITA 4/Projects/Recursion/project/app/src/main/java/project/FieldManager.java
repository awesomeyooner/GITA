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

        double dividend = inputField.getDouble();
        double divisor = 3;

        double maxDividends = (dividend / divisor) + 1;

        Double[] dividends = Calculator.getAllDividends(inputField.getDouble(), divisor, new Double[(int)maxDividends]);
        
        for(Double number : dividends){
            if(number == null)
                continue;

            outputArea.append("\n" + String.valueOf(Utility.round(number, 2)));
        }
    });

    private final Button oddNumberButton = new Button("Generate Odd Numbers!", () -> {
        inputField.toggleValidCondition(true);

        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        outputArea.setText("Generating Odd Numbers!!");
        Integer n = (int)inputField.getDouble();
        Integer[] oddNumbers = Calculator.generateOddNumbers(n, new Integer[n]);

        for(Integer number : oddNumbers){
            outputArea.append("\n" + number.toString());
        }
    });

    private final Button factorButton = new Button("Find Least Common Factor!", () -> {
        inputField.toggleValidCondition(true);

        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        outputArea.setText("Finding Least Common Factor!");
        
        int input = (int)inputField.getDouble();
        int lcf = Calculator.findSmallestFactor(input);

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
        
        outputArea.append("\n" + String.valueOf(Calculator.getSum(new StringBuilder(inputField.getText()))));
    });

    private final Button reverseString = new Button("Reverse String!", () -> {
        inputField.toggleValidCondition(false);

        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        outputArea.setText("Reversing String!");
        
        outputArea.append("\n" + Calculator.reverseString(new StringBuilder(inputField.getText())).toString());
    });

    private final Button actionButton = new Button("Action!", this::action);


    private final Button[] buttons = {divideButton, oddNumberButton, factorButton, sumationButton, reverseString};

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
