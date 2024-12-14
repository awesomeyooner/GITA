package test_score;

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

import test_score.util.CommonConversion;
import test_score.util.Constants;
import test_score.util.Entry;
import test_score.util.FieldLabel;

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //declare components
    private final FieldLabel scoreField = new FieldLabel("Score: ", true);

    private final FieldLabel[] fields = {scoreField};
    private final ArrayList<Entry> entries = new ArrayList<>();

    //text to display, width, height
    private final JTextArea outputArea = new JTextArea("", 10, 30);
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
        //declare local variables
        String error = FieldLabel.getAccumulatedErrors(fields);

        if(error != null){
            outputArea.setText(error);
            return;
        }

        appendEntry();
        update();
        
    }

    public void appendEntry(){
        entries.add(new Entry(scoreField.getDouble()));

        outputArea.setText("");

        for(Entry entry : entries){
            outputArea.append(entry.toText());
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
        add(outputArea);

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
        outputArea.setEditable(false);
        outputArea.setLineWrap(true);
        outputArea.setWrapStyleWord(true);

        summaryArea.setEditable(false);
        summaryArea.setLineWrap(true);
        summaryArea.setWrapStyleWord(true);
    }

}
