package bmi;

import java.awt.FlowLayout;
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

import bmi.util.CommonConversion;
import bmi.util.Constants;
import bmi.util.Entry;
import bmi.util.FieldLabel;

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //declare components
    private final FieldLabel nameField = new FieldLabel("Name: ", 20);
    private final FieldLabel weightField = new FieldLabel("Weight (lbs): ", 20);
    private final FieldLabel heightField = new FieldLabel("Height (in): ", 20); 

    private final FieldLabel[] fields = {nameField, weightField, heightField};

    private final ArrayList<Entry> entries = new ArrayList<>();

    //text to display, width, height
    private final JTextArea outputArea = new JTextArea("Name    |   BMI" + Constants.LINEBREAK, 10, 30);

    //button
    private final JButton actionButton = new JButton("Calculate");

    private static FieldManager instance;

    public FieldManager(){
        //Put titlebar on frame
        super("Button Application");

        //apply settings
        configureSettings();
        
        //add components to the frame
        addComponents();
    }

    public static void initialize(){
        instance = new FieldManager();
    }

    //listen for button click
    @Override
    public void actionPerformed(ActionEvent event){
        Object objSource = event.getSource();
        
        if(objSource == actionButton)
            handleCalculate();
    }

    public void handleCalculate(){

        boolean entriesAreValid = true;
        
        String errorOutput = "";

        String name = "";
        double weight = 0;
        double height = 0;

        Entry entry;

        if(nameField.hasText())
            name = nameField.getText();
        else{
            errorOutput = "Please enter your name!";
            entriesAreValid = false;
        }
        
        if(weightField.isDouble())
            weight = Double.parseDouble(weightField.getText());
        else{
            errorOutput += "\n" + "Please enter your weight!";
            entriesAreValid = false;
        }

        if(heightField.isDouble())
            height = Double.parseDouble(heightField.getText());
        else{
            errorOutput += "\n" + "Please enter your height!";
            entriesAreValid = false;
        }

        if(entriesAreValid){
            entry = new Entry(name, height, weight);
            entries.add(entry);

            outputArea.setText("Name    |   BMI" + Constants.LINEBREAK);

            for(Entry current : entries){
                outputArea.append(current.toText());
            }
        }
        else{
            outputArea.setText(errorOutput);
        }

        FieldLabel.clearFields(fields);
    }

    public void addComponents(){

        //add components to the frame
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
