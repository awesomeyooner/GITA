package project;

import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Iterator;

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

    //program specific
    private final ArrayList<String> studentNames = new ArrayList<>();

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //field labels
    private final FieldLabel studentField = new FieldLabel("Enter Name: ", false);
    private final FieldLabel indexField = new FieldLabel("Enter Index: ", true);
    private final FieldLabel[] fields = {studentField, indexField};

    //text areas
    private final TextArea outputArea = new TextArea("", 50, 50);
    private final TextArea[] textAreas = {outputArea};

    //button
    private final Button popButton = new Button("Pop!", () -> pop(studentNames.size() - 1));
    private final Button pushButton = new Button("Push!", () -> push(studentNames.size()));

    private final Button pushAtButton = new Button("Push at Index", () -> push((int)indexField.getDouble()));
    private final Button popAtButton = new Button("Pop at Index", () -> pop((int)indexField.getDouble()));

    private final Button searchButton = new Button("Search for Name", () -> {

        if(outputArea.displayError(studentField.getError()))
            return;

        display();

        int index = findStudent(studentField.getText(), studentNames);

        if(index != -1)
            outputArea.append(studentField.getText() + " Found at: " + index);
        else
            outputArea.append(studentField.getText() + " not Found!");
    });

    private final Button countButton = new Button("Find Occourences for Name", () -> {

        if(outputArea.displayError(studentField.getError()))
            return;

        display();

        int occourences = countOccurences(studentField.getText(), studentNames);

        outputArea.append(studentField.getText() + " Found " + occourences + " Times");
    });

    private final Button[] buttons = {popButton, pushButton, pushAtButton, popAtButton, searchButton, countButton};

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

    public void pop(int index){
        if(studentNames.size() == 0 || index > studentNames.size() - 1)
            return;

        studentNames.remove(index);

        display();
    }

    public void push(int index){
        if(outputArea.displayError(studentField.getError()))
            return;

        studentNames.add(index, studentField.getText());
        display();
    }
    
    public int findStudent(String wanted, ArrayList<String> list){

        for(int i = 0; i < list.size(); i++){
            if(list.get(i) == null)
                continue;

            if(wanted.equals(list.get(i)))
                return i;
        }

        return -1;
    }

    public int countOccurences(String wanted, ArrayList<String> list){
        Iterator<String> iterator = list.iterator();

        int occurences = 0;

        while(iterator.hasNext()){
            String name = iterator.next();

            if(name.equals(wanted))
                occurences++;
        }

        return occurences;
    }

    public void display(){
    
        outputArea.setText(studentNames.size() + " Names" + "\n");

        for(String name : studentNames){
            if(name == null)
                continue;

            outputArea.append(name + "\n");
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
