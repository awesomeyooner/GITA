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

    public enum ProgramState{
        ENTER_STRINGS("Enter Two Strings: "),

        ENTER_INDEXES_FIRST("Enter Start and End Indexes for First String: "),
        ENTER_INDEXES_SECOND("Enter Start and End Indexes for Second String: "),

        ENTER_SUBSTRINGS("Enter Two Substrings for each of your Original Strings: "),

        FINISHED("Click Action to Reset!");

        private final String prompt;
        private ProgramState(String prompt){
            this.prompt = prompt;
        }
    }

    private ProgramState state = ProgramState.ENTER_STRINGS;

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //field labels
    private final FieldLabel inputFieldA = new FieldLabel("Enter: ", false);
    private final FieldLabel inputFieldB = new FieldLabel("Enter: ", false);
    private final FieldLabel[] fields = {inputFieldA, inputFieldB};

    //text areas
    private final TextArea outputArea = new TextArea();
    private final TextArea[] textAreas = {outputArea};

    //button
    private final Button actionButton = new Button("Action!", this::action);
    private final Button[] buttons = {actionButton};

    private boolean actionPressed = false;

    private final Thread inputThread = new Thread(() -> {
        
        while(true){
            if(actionPressed){
                actionPressed = false;
            }

            


            try{
                Thread.sleep(10);
            } 
            catch(InterruptedException exception){
                exception.printStackTrace();
            }
        }
    
    });

    public FieldManager(){
        //Put titlebar on frame
        super("Button Application");

        //apply settings
        configureSettings();
        
        //add components to the frame
        addComponents();

        inputThread.start();
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

        actionPressed = true;

        switch(state){
            case ENTER_STRINGS:
                state = ProgramState.ENTER_INDEXES_FIRST;
                break;

            case ENTER_INDEXES_FIRST:
                state = ProgramState.ENTER_INDEXES_SECOND;
                break;

            case ENTER_INDEXES_SECOND:
                state = ProgramState.ENTER_SUBSTRINGS;
                break;

            case ENTER_SUBSTRINGS:
                state = ProgramState.FINISHED;
                break;

            case FINISHED:
                reset();
                break;
        }
    }

    public void reset(){
        state = ProgramState.ENTER_STRINGS;

        inputFieldA.toggleValidCondition(false);
        inputFieldB.toggleValidCondition(false);

        inputFieldA.toggleVisibility(true);
        inputFieldB.toggleVisibility(true);

        outputArea.setText(state.prompt);
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
