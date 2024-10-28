package project;

import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.lang.constant.Constable;
import java.util.ArrayList;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.SwingConstants;

import project.util.CommonConversion;
import project.util.Constants;
import project.util.Entry;
import project.util.FieldLabel;

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //declare components
    private final FieldLabel nTestsField = new FieldLabel("Number of Scores: ", true);

    private final FieldLabel[] fields = {nTestsField};
    private final ArrayList<Entry> entries = new ArrayList<>();

    //text to display, width, height
    private final JTextArea forwardArea = new JTextArea("", 10, 30);
    private final JTextArea reverseArea = new JTextArea("", 10, 30);
    private final JTextArea summaryArea = new JTextArea("" + Constants.LINEBREAK, 10, 30);


    //button
    private final JButton btnAdd = new JButton("Calculate");

    public FieldManager(){
        //Put titlebar on frame
        super("Test Scores");

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
        Object action = event.getSource();
        
        if(action == btnAdd)
            handleCalculate();
    }

    public void handleCalculate(){
        String error = FieldLabel.getAccumulatedErrors(fields);

        if(error != null){
            summaryArea.setText(error);
            return;
        }

        entries.removeAll(entries);

        for(int i = 0; i < (int)nTestsField.getDouble(); i++){
            appendEntry();
            update();
        }
        
    }

    public void appendEntry(){
        entries.add(new Entry(CommonConversion.round((Math.random() * 50 + 50), 2)));
    
        forwardArea.setText("");
        reverseArea.setText("");

        for(int i = 0; i < entries.size(); i++){
            forwardArea.append(entries.get(i).toText());
            reverseArea.append(entries.get((entries.size() - 1) - i).toText());
        }


    }

    public void update(){
        double highest = 0;

        for(Entry entry : entries){
            if(entry.score > highest)
                highest = entry.score;
        }

        double average = CommonConversion.round(Entry.getAccumulatedScore(entries) / entries.size(), 2);

        summaryArea.setText(
            "Highest Score: " + highest + Constants.LINEBREAK +
            "Average: " + average + Constants.LINEBREAK + 
            "Total Scores: " + entries.size()
        );
    }

    public void addComponents(){

        //add components to the frame
        for(FieldLabel field : fields){
            field.label.setHorizontalAlignment(SwingConstants.RIGHT);
            field.add(panel);
            field.addListener(this);
        }

        //text area
        add(forwardArea);
        add(reverseArea);

        add(summaryArea);

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
        forwardArea.setEditable(false);
        forwardArea.setLineWrap(true);
        forwardArea.setWrapStyleWord(true);
        
        reverseArea.setEditable(false);
        reverseArea.setLineWrap(true);
        reverseArea.setWrapStyleWord(true);

        summaryArea.setEditable(false);
        summaryArea.setLineWrap(true);
        summaryArea.setWrapStyleWord(true);
    }

}
