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

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));
    

    //field labels
    private final FieldLabel myField = new FieldLabel("My Field: ", true);

    private final FieldLabel[] fields = {myField};


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
