package project;

import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingConstants;

import project.util.Button;
import project.util.FieldLabel;
import project.util.TextArea;
import project.util.Utility;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));
    

    //field labels
    private final FieldLabel inputField = new FieldLabel("Enter String: ", false);

    private final FieldLabel[] fields = {inputField};


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

        String input = inputField.getText();
        String modifiedInput = input.toLowerCase();

        Integer[] indices = new Integer[input.length()];
        
        //find where bob is 
        for(int i = 1; i < modifiedInput.length() - 1; i++){ //not start nor end
            char previous = modifiedInput.charAt(i - 1);
            char current = modifiedInput.charAt(i);
            char next = modifiedInput.charAt(i + 1);

            if(previous == 'b' && current == 'o' && next == 'b'){
                Utility.append(indices, i);
            }
        }

        //remove bob
        StringBuilder stringHelper = new StringBuilder(input);
        
        for(int i = 0; i < indices.length; i++){
            Integer index = indices[i];

            if(index == null)
                continue;

            stringHelper.deleteCharAt(index.intValue() - 1 - (i * 3)); //delete b
            stringHelper.deleteCharAt(index.intValue() - 1 - (i * 3)); //delete o
            stringHelper.deleteCharAt(index.intValue() - 1 - (i * 3)); //delete b

            stringHelper.append(input.charAt(index - 1)); //add b
            stringHelper.append(input.charAt(index)); //add o
            stringHelper.append(input.charAt(index + 1)); //add b
        }   

        outputArea.setText("Input: " + input + "\n");
        outputArea.append("Output: " + stringHelper.toString());
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
