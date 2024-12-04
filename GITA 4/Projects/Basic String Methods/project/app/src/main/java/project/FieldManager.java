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

    //declare components
    private final FieldLabel arraySizeField = new FieldLabel("Array Size: ", true);
    private final FieldLabel pushStringField = new FieldLabel("Push String: ", false);

    private final FieldLabel[] fields = {arraySizeField, pushStringField};

    //program specific stuff
    private String[] strings = {};

    //text to display, width, height
    private final JTextArea inputArea = new JTextArea("", 10, 30);
    private final JTextArea outputArea = new JTextArea("", 10, 30);

    //button
    private final JButton actionButton = new JButton("Action!");
    private final JButton popButton = new JButton("Pop!");
    private final JButton pushButton = new JButton("Push!");
    private final JButton resetArrayButton = new JButton("Reset Array");

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
            action();
        else if(objSource == popButton)
            popArray();
        else if(objSource == pushButton)
            pushArray();
        else if(objSource == resetArrayButton)
            resetArray();
    }

    public void action(){
        if(strings.length == 0){
            outputArea.setText("Array has a length of 0!");
            return;
        }
        else if(strings[0] == null){
            outputArea.setText("First Index is Null!");
            return;
        }

        String amalgamatedUppercase = "";//strings[0].toUpperCase() + "\n";
        String amalgamatedLowercase = "";//strings[0].toLowerCase() + "\n";

        String shortest = strings[0];
        String longest = strings[0];

        int highestMatches = 0;

        for(int i = 0; i < strings.length; i++){
            String current = strings[i];

            if(current == null)
                continue;

            amalgamatedUppercase += current.toUpperCase() + "\n";
            amalgamatedLowercase += current.toLowerCase() + "\n";

            if(current.length() > longest.length())
                longest = current;
            
            if(current.length() < shortest.length())
                shortest = current;

            int matches = 0;

            for(int j = 0; j < strings.length; j++){
                String compare = strings[j];

                if(compare == null || j == i)
                    continue;

                if(current.length() == compare.length())
                    matches++;
            }

            if(matches > highestMatches){
                highestMatches = matches;
            }
        }

        outputArea.setText("");
        outputArea.append(
            "Uppercase: " + "\n" +
            amalgamatedUppercase + "\n" +

            "Lowercase: " + "\n" + 
            amalgamatedLowercase + "\n" + 

            "# of Strings Equal Length: " + (highestMatches + 1) + "\n" +

            "Longest: " + longest + "\n" +
            "Shortest: " + shortest + "\n" + 
            "Concatenation: " + (longest.concat(shortest))
        );


    }

    public void updateInputArea(){
        inputArea.setText("Elements: " + String.valueOf(strings.length) + "\n");

        for(String index : strings){
            if(index == null)
                continue;

            inputArea.append(index + "\n");
        }
    }

    public void popArray(){
        for(int i = strings.length - 1; i > -1; i--){
            String currentString = strings[i];

            if(currentString == null)
                continue;

            strings[i] = null;
            break;
        }

        updateInputArea();
    }

    public void pushArray(){
        String error = pushStringField.getError();

        if(error != null){
            outputArea.setText(error);
            return;
        }

        if(arraySizeField.getError() == null && (int)arraySizeField.getDouble() != strings.length)
            resetArray();

        String stringToAdd = pushStringField.getText();

        for(int i = 0; i < strings.length; i++){
            String currentString = strings[i];

            if(currentString == null){
                strings[i] = stringToAdd;
                break;
            }
        }

        //puts text to the inputArea
        updateInputArea();
    }

    public void resetArray(){
        String error = arraySizeField.getError();

        if(error != null){
            outputArea.setText(error);
            return;
        }

        //creates a new array with the given size
        strings = new String[(int)arraySizeField.getDouble()];
    }

    public void addComponents(){

        //add components to frame
        for(FieldLabel field : fields){
            field.label.setHorizontalAlignment(SwingConstants.RIGHT);
            field.add(panel);
            field.addListener(this);
        }

        //text area
        add(outputArea);
        add(inputArea);

        //panel
        add(panel);

        //button
        add(actionButton);
        actionButton.addActionListener(this);

        add(popButton);
        popButton.addActionListener(this);

        add(pushButton);
        pushButton.addActionListener(this);

        add(resetArrayButton);
        resetArrayButton.addActionListener(this);
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

        inputArea.setEditable(false);
        inputArea.setLineWrap(true);
        inputArea.setWrapStyleWord(true);
    }

}
