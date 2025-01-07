package project;

import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingConstants;
import javax.swing.SwingUtilities;

import project.util.Button;
import project.util.FieldLabel;
import project.util.TextArea;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //field labels
    private final FieldLabel stringFirstField = new FieldLabel("First String: ", false);
    private final FieldLabel stringSecondField = new FieldLabel("Second String: ", false);

    private final FieldLabel startIndexFirstField = new FieldLabel("Start Index String One: ", true);
    private final FieldLabel endIndexFirstField = new FieldLabel("End Index String One: ", true);
    private final FieldLabel startIndexSecondField = new FieldLabel("Start Index String Two: ", true);
    private final FieldLabel endIndexSecondField = new FieldLabel("End Index String Two: ", true);

    private final FieldLabel subSearchField = new FieldLabel("Substring Search: ", false);

    private final FieldLabel[] fields = {
        stringFirstField,
        stringSecondField,

        startIndexFirstField,
        endIndexFirstField,

        startIndexSecondField,
        endIndexSecondField,

        subSearchField
    };

    //text areas
    private final TextArea outputArea = new TextArea();
    
    private final TextArea[] textAreas = {outputArea};

    //button
    private final Button actionButton = new Button("Action!", this::action);

    private final Button[] buttons = {actionButton};


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

        String firstString = stringFirstField.getText();
        String secondString = stringSecondField.getText();

        int startIndexFirst = (int)startIndexFirstField.getDouble();

        outputArea.setText(
            "Original Strings" + "\n" +
            "First String: " + firstString + "\n" +
            "Second String: " + secondString + "\n" +
            "\n" +
            "String Lengths" + "\n" + 
            "First Length: " + String.valueOf(firstString.length()) + "\n" + 
            "Second Length: " + String.valueOf(secondString.length()) + "\n" +
            "\n"
        );
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
