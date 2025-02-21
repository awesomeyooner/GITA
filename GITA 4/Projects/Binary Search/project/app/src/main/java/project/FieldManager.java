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

    //program specific
    DataManager dataManager = new DataManager(5000);
 
    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //field labels
    private final FieldLabel sizeField = new FieldLabel("Size: ", true);

    private final FieldLabel[] fields = {sizeField};
    
    //text areas
    private final TextArea outputArea = new TextArea("", 40, 70);
    private final TextArea[] textAreas = {outputArea};

    //button
    private final Button actionButton = new Button("Action!", this::action);

    private final Button populateButton = new Button("Populate!", () -> {
        if(outputArea.displayError(FieldLabel.getAccumulatedErrors(fields)))
            return;

        int size = (int)sizeField.getDouble();

        outputArea.setText("Creating Array with size: " + String.valueOf(size));

        dataManager.populateData(size);
    });


    private final Button[] buttons = {actionButton, populateButton};

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

        outputArea.setText("");

        iterateRecursive(5000);
        iterateBinary(5000);
    }

    public void iterateBinary(int loops){
        int totalIterations = 0;
        int successfulFinds = 0;
        
        for(int i = 0; i < loops; i ++){
            int find = (int)Utility.random(1, 5000);

            int indexFound = dataManager.findNumberBinary(find);

            int numIterations = indexFound;

            if(indexFound == -1)
                continue;
            // else{
            //     totalIterations += iterations;
            //     successfulFinds++;
            // }
        }

        int averageIterations = totalIterations / successfulFinds;

        outputArea.append(
            "Successful Finds: " + successfulFinds + "\n" + 
            "Average Iterations: " + averageIterations
        );
    }

    public void iterateRecursive(int loops){
        int totalIterations = 0;
        int successfulFinds = 0;
        
        for(int i = 0; i < loops; i ++){
            int find = (int)Utility.random(1, 5000);

            int iterations = dataManager.findNumberLinear(find);

            if(iterations == -1)
                continue;
            else{
                totalIterations += iterations;
                successfulFinds++;
            }
        }

        int averageIterations = totalIterations / successfulFinds;

        outputArea.append(
            "Successful Finds: " + successfulFinds + "\n" + 
            "Average Iterations: " + averageIterations
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
        setSize(1000, 1000);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());
    }

}
