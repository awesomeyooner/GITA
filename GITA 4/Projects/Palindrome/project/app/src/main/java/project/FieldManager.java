package project;

import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.Graphics;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.lang.constant.Constable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.SwingConstants;

import project.util.Bar;
import project.util.Button;
import project.util.CommonConversion;
import project.util.Constants;
import project.util.Dice;
import project.util.Entry;
import project.util.FieldLabel;
import project.util.Palindrome;
import project.util.TextArea;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //declare components
    private final FieldLabel nStringsField = new FieldLabel("Array Size: ", true);
    private final FieldLabel enterStringField = new FieldLabel("Enter String: ", false);

    private final FieldLabel[] fields = {nStringsField, enterStringField};

    //text to display, width, height
    private final TextArea inputArea = new TextArea();
    private final TextArea outputArea = new TextArea();

    private final TextArea[] textAreas = {inputArea, outputArea};

    //button
    private final Button pushButton = new Button("Push!", this::push);
    private final Button popButton = new Button("Pop!", this::pop);
    private final Button analyzeButton = new Button("Analyze!", this::analyze);

    private final Button[] buttons = {pushButton, popButton, analyzeButton};

    //project specific stuff
    private String[] strings;

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

    public void changeArraySize(){

        int n = (int)nStringsField.getDouble();

        if(strings != null && n == strings.length)
            return;

        strings = new String[n];
    }

    public void displayOutputArray(Set<String> actual, Set<String> not){

        outputArea.setText("Palindromes:" + "\n");

        for(String string : actual){
            outputArea.append(string + "\n");
        }

        outputArea.append("\n" + "Not Palindromes:" + "\n");

        for(String string : not){
            outputArea.append(string + "\n");
        }
    }

    public void push(){

        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        changeArraySize();

        String requestedString = enterStringField.getText();

        for(int i = 0; i < strings.length; i++){

            if(strings[i] == null){
                strings[i] = requestedString;
                break;
            }

        }

        inputArea.displayArray("Array Contents:", strings);
        analyze();
    }

    public void pop(){
     
        for(int i = strings.length - 1; i >= 0; i--){
            if(strings[i] != null){
                strings[i] = null;
                break;
            }
        }

        inputArea.displayArray("Array Contents:", strings);
        analyze();
    }

    public void analyze(){

        Set<String> actualPalindromes = new HashSet<>();
        Set<String> notPalindromes = new HashSet<>();
        
        for(String string : strings){

            if(string == null)
                continue;

            Palindrome palindrome = new Palindrome(string);

            if(palindrome.isPalindrome())
                actualPalindromes.add(palindrome.getValue());
            else
                notPalindromes.add(palindrome.getValue());
            
        }

        outputArea.displayArray("Palindromes:", );

        //displayOutputArray(actualPalindromes, notPalindromes);

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
        setSize(500, 500);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());
    }

}
