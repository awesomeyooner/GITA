package project;

import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Arrays;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingConstants;

import project.DataManager.IteratedValue;
import project.util.Button;
import project.util.FieldLabel;
import project.util.TextArea;
import project.util.Utility;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //program specific
    private DataManager dataManager = new DataManager(5000, 1, 5000);
 
    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //field labels
    private final FieldLabel sizeField = new FieldLabel("Size: ", true);
    private final FieldLabel iterationsField = new FieldLabel("Iterations: ", true);
    private final FieldLabel[] fields = {sizeField, iterationsField};
    
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

        dataManager.populateWithRandomData(size, 1, 5000);
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
        if(outputArea.displayError(iterationsField.getError()))
            return;

        outputArea.setText("");

        int iterations = (int)iterationsField.getDouble();

        repetitiveSearch(iterations);
    }

    public void repetitiveSearch(int iterations){
        int totalLinearIterations = 0;
        int totalBinaryIterations = 0;
        int totalSuccessfulFinds = 0;

        int totalLinearFailures = 0;
        int totalBinaryFailures = 0;

        int low = 1;
        int high = 5000;

        //repeated test
        for(int i = 0; i < iterations; i++){

            //choose a random number to find
            int random = (int)Utility.random(low, high);

            //objects to store results
            IteratedValue<Integer> resultLinear = dataManager.findNumberLinear(random);
            IteratedValue<Integer> resultBinary = dataManager.findNumberBinary(random);
            
            //how many iterations it took to find the target
            int iterationsLinear = resultLinear.iterations;
            int iterationsBinary = resultBinary.iterations;

            //index of each found target
            int indexLinear = resultLinear.value;
            int indexBinary = resultBinary.value;

            if(indexLinear == -1)
                totalLinearFailures++;

            if(indexBinary == -1)
                totalBinaryFailures++;

            //if either fail to find their targets, then skip this iteration. If only one fails, then crash the program anyways
            if(indexLinear == -1 && indexBinary == -1)
                continue;

            //update statistical varaibles
            totalSuccessfulFinds++;
            totalLinearIterations += iterationsLinear;
            totalBinaryIterations += iterationsBinary;
        }

        double averageIterationsLinear = (double)totalLinearIterations / (double)totalSuccessfulFinds;
        double averageIterationsBinary = (double)totalBinaryIterations / (double)totalSuccessfulFinds;

        outputArea.append(
            "Total: " + totalSuccessfulFinds + "\n" +
            "Avg Linear: " + averageIterationsLinear + "\n" +
            "Avg Binary: " + averageIterationsBinary + "\n" +
            "Linear Fails: " + totalLinearFailures + "\n" +
            "Binary Fails: " + totalBinaryFailures
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
