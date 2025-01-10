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
import project.util.Utility;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    public enum ProgramState{
        ENTER_STRINGS("Enter Two Strings: "),

        ENTER_INDEXES_FIRST("Enter Start and End Indexes for First String: "),
        ENTER_INDEXES_SECOND("Enter Start and End Indexes for Second String: "),

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
    private final TextArea outputArea = new TextArea("", 50, 50);
    private final TextArea[] textAreas = {outputArea};

    //button
    private final Button actionButton = new Button("Action!", this::action);
    private final Button[] buttons = {actionButton};

    private boolean actionPressed = false;

    private final Thread inputThread = new Thread(() -> {
        
        while(true){

            String stringA = "";
            String stringB = "";

            int startIndexA = 0;
            int startIndexB = 0;

            int endIndexA = 0;
            int endIndexB = 0;

            String substringSearchA = "";
            String substringSearchB = "";
            
            while(state == ProgramState.ENTER_STRINGS){
                Utility.sleep(10);

                if(!actionPressed)
                    continue;

                actionPressed = false;
                
                stringA = inputFieldA.getText();
                stringB = inputFieldB.getText();

                outputArea.append("\n" + stringA);
                outputArea.append("\n" + stringB);

                outputArea.append("\n" + "\n" + "String Lengths: ");
                outputArea.append("\n" + "String A Length: " + stringA.length());
                outputArea.append("\n" + "String B Length: " + stringB.length());

                outputArea.append("\n" + "\n" + "Substring Extraction: ");
                inputFieldA.label.setText("\n" + "Enter Start Index for String A");
                inputFieldB.label.setText("Enter End Index for String A");
                FieldLabel.clearFields(fields);

                state = ProgramState.ENTER_INDEXES_FIRST;
                outputArea.append("\n" + "\n" + state.prompt);
            }

            while(state == ProgramState.ENTER_INDEXES_FIRST){
                Utility.sleep(10);

                if(!actionPressed)
                    continue;

                actionPressed = false;

                startIndexA = (int)inputFieldA.getDouble();
                endIndexA = (int)inputFieldB.getDouble();

                outputArea.append("\n" + String.format("Start A: %d", startIndexA));
                outputArea.append("\t" + String.format("End A: %d", endIndexA));

                try{
                    substringSearchA = stringA.substring(startIndexA, endIndexA);
                    outputArea.append("\n" + "Substring in A: " + substringSearchA);
                }
                catch(Exception exception){
                    outputArea.append("\n" + "Could not find substring for A");
                    exception.printStackTrace();
                }

                inputFieldA.label.setText("\n" + "Enter Start Index for String B");
                inputFieldB.label.setText("Enter End Index for String B");
                FieldLabel.clearFields(fields);

                state = ProgramState.ENTER_INDEXES_SECOND;
                outputArea.append("\n" + "\n" + state.prompt);
            }

            while(state == ProgramState.ENTER_INDEXES_SECOND){
                Utility.sleep(10);

                if(!actionPressed)
                    continue;

                actionPressed = false;

                startIndexB = (int)inputFieldA.getDouble();
                endIndexB = (int)inputFieldB.getDouble();

                outputArea.append("\n" + String.format("Start A: %d", startIndexB));
                outputArea.append("\t" + String.format("End A: %d", endIndexB));

                try{
                    substringSearchB = stringB.substring(startIndexB, endIndexB);
                    outputArea.append("\n" + "Substring in B: " + substringSearchB);
                }
                catch(Exception exception){
                    outputArea.append("\n" + "Could not find substring for B");
                    exception.printStackTrace();
                }

                outputArea.append("\n" + "\n" + "String Equality: ");
                outputArea.append("\n" + "Are Strings Equal?: " + stringA.equals(stringB));

                outputArea.append("\n" + "\n" + "Lexicographical Comparison: ");

                int lexi = stringA.compareTo(stringB);

                if(lexi == 0)
                    outputArea.append("\n" + "Both Strings are Lexicongraphically the Same");
                else if(lexi < 0)
                    outputArea.append("\n" + "String A is less than String B");
                else if(lexi > 0)
                    outputArea.append("\n" + "String A is greater than String B");

                FieldLabel.clearFields(fields);
                inputFieldA.toggleVisibility(false);
                inputFieldB.toggleVisibility(false);

                state = ProgramState.FINISHED;
                outputArea.append("\n" + "\n" + state.prompt);
            }

            while(state == ProgramState.FINISHED){
                Utility.sleep(10);

                if(!actionPressed)
                    continue;

                actionPressed = false;

                reset();
            }
            

            Utility.sleep(10);
        }
    
    });

    public FieldManager(){
        //Put titlebar on frame
        super("Button Application");

        //apply settings
        configureSettings();
        
        //add components to the frame
        addComponents();

        reset();
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
        if(state != ProgramState.FINISHED && FieldLabel.getAccumulatedErrors(fields) != null)
            return;

        actionPressed = true;
    }

    public void reset(){
        state = ProgramState.ENTER_STRINGS;

        inputFieldA.toggleValidCondition(false);
        inputFieldB.toggleValidCondition(false);

        inputFieldA.toggleVisibility(true);
        inputFieldB.toggleVisibility(true);

        inputFieldA.label.setText("Enter String A: ");
        inputFieldB.label.setText("Enter String B: ");

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
        setSize(1000, 1000);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());
    }

}
