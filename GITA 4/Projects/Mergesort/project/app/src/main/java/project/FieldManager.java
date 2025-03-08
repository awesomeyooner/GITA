package project;

import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Arrays;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingConstants;

import project.managers.AlphabeticManager;
import project.managers.StringManager;
import project.util.Button;
import project.util.FieldLabel;
import project.util.TextArea;
import project.util.Utility;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //program specific
    private String[] fruits;
    private String[] vegetables;

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //field labels
    private final FieldLabel sizeField = new FieldLabel("Size: ", true);
    private final FieldLabel itemField = new FieldLabel("Item: ", false);
    private final FieldLabel[] fields = {sizeField, itemField};
    
    //text areas
    private final TextArea outputArea = new TextArea("", 40, 70);
    private final TextArea[] textAreas = {outputArea};

    //button
    private final Button clearButton = new Button("Clear Arrays!", () -> {
        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        int size = sizeField.getInt();

        fruits = new String[size];
        vegetables = new String[size];

        outputFruitsAndVegetables();
    });

    private final Button appendFruitButton = new Button("Append Fruit!", () -> {
        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        int size = sizeField.getInt();
        String item = itemField.getText();

        if(fruits == null || fruits.length != size)
            fruits = new String[size];
        
        fruits = Utility.append(fruits, item);

        outputFruitsAndVegetables();
    });

    private final Button appendVegetableButton = new Button("Append Vegetable!", () -> {
        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        int size = sizeField.getInt();
        String item = itemField.getText();

        if(vegetables == null || vegetables.length != size)
            vegetables = new String[size];
        
        vegetables = Utility.append(vegetables, item);

        outputFruitsAndVegetables();
    });

    private final Button searchButton = new Button("Search Item!", () -> {
        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        String find = itemField.getText();

        int indexFruits = AlphabeticManager.findStringBinary(StringManager.sortAZ(fruits), find).index;
        int indexVegetables = AlphabeticManager.findStringBinary(StringManager.sortAZ(vegetables), find).index;

        outputFruitsAndVegetables();

        outputArea.append("-----------------------" + "\n");

        if(indexFruits == -1 && indexVegetables == -1)
            outputArea.append("Did not find " + find + " in either arrays");
        else{
            if(indexFruits != -1)
                outputArea.append("Found " + find + " in Fruits!");
            if(indexVegetables != -1)
                outputArea.append("Found " + find + " in Vegetables!");
        }
        
    });

    private final Button[] buttons = {clearButton, appendFruitButton, appendVegetableButton, searchButton};

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
        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;
    }

    public void outputFruitsAndVegetables(){
        outputArea.setText("");

        if(fruits != null){
            outputArea.append("Sorted Fruits:" + "\n");
            outputArea.append(Utility.arrayToString(StringManager.sortAZ(fruits)));
        }

        outputArea.append("-----------------------" + "\n");

        if(vegetables != null){
            outputArea.append("Sorted Vegetables:" + "\n");
            outputArea.append(Utility.arrayToString(StringManager.sortAZ(vegetables)));
        }

        outputArea.append("-----------------------" + "\n");

        if(fruits != null && vegetables != null){
            outputArea.append("Sorted and Merged:" + "\n");
            outputArea.append(Utility.arrayToString(StringManager.mergeSortAZ(fruits, vegetables)));
        }

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
