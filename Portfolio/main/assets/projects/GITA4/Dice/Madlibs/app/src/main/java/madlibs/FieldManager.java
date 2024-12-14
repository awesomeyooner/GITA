package madlibs;

import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.SwingConstants;

import madlibs.util.FieldLabel;

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //declare components
    private final FieldLabel mainNameField = new FieldLabel("Name:", 20);
    private final FieldLabel lovedNounField = new FieldLabel("Noun (plural): ", 20);
    private final FieldLabel lovedVerbedField = new FieldLabel("Verb: ", 20);
    private final FieldLabel collapsedVerbingField = new FieldLabel("Verb-ing: ", 20);
    private final FieldLabel nounHeroField = new FieldLabel("Noun: ", 20);
    private final FieldLabel placeField = new FieldLabel("Place: ", 20);
    private final FieldLabel verbedAliveField = new FieldLabel("Verb'd: ", 20);
    private final FieldLabel foodNounField = new FieldLabel("Food: ", 20);
    private final FieldLabel slapNameField = new FieldLabel("Another Name: ", 20);
    private final FieldLabel drinkField = new FieldLabel("Drink: ", 20);

    private final FieldLabel[] fields = {
        mainNameField,
        lovedNounField,
        lovedVerbedField,
        collapsedVerbingField,
        nounHeroField,
        placeField,
        verbedAliveField,
        foodNounField,
        slapNameField,
        drinkField
    };

    //text to display, width, height
    private final JTextArea storyArea = new JTextArea("", 10, 30);

    //button
    private final JButton btnAdd = new JButton("Create Story!");

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
        
        if(objSource == btnAdd)
            handleAdd();

    }

    public void handleAdd(){
        String output = "";

        boolean allEntriesFilled = true;

        //check if all boxes are filled
        for(FieldLabel field : fields){
            //if the field does not have anything in it, declare warning
            if(!field.hasText()){
                output += "Please enter for: " + field.label.getText() + "\n";
                allEntriesFilled = false;
            }
        }

        if(allEntriesFilled){
            output = "There once was a person named " + mainNameField.getText() + 
            " who loved " + lovedNounField.getText() + 
            " so much that they " + lovedVerbedField.getText() + 
            " until they couldnt anymore. They collapsed on the floor, " + collapsedVerbingField.getText() +
            ", until a " + nounHeroField.getText() +
            " came to save the day. The " + nounHeroField.getText() +
            " then went over to the " + placeField.getText() +
            " and was " + verbedAliveField.getText() +
            " until they came back alive. They woke up and stuffed a bunch of " + foodNounField.getText() + 
            " into their mouth until they couldn't fit anymore inside. " + slapNameField.getText() +
            " slapped all the " + foodNounField.getText() +
            " out of their mouth and ate it for themselves, but they shared a " + drinkField.getText() +
            " together";
        }


        //output to textarea
        storyArea.setText(output);
    }

    public void addComponents(){

        //add components to the frame
        for(FieldLabel field : fields){
            field.label.setHorizontalAlignment(SwingConstants.RIGHT);
            field.add(panel);
            field.addListener(this);
        }
        
        //story
        add(storyArea);
        

        //panel
        add(panel);

        //button
        add(btnAdd);
        btnAdd.addActionListener(this);
    }

    public void configureSettings(){

        //frame
        setSize(500, 500);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());

        //text area
        storyArea.setEditable(false);
        storyArea.setLineWrap(true);
        storyArea.setWrapStyleWord(true);
    }

}
