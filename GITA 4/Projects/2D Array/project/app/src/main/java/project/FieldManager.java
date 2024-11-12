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
    private final FieldLabel rowField = new FieldLabel("Rows: ", true);
    private final FieldLabel columnField = new FieldLabel("Columns: ", true);

    private final FieldLabel[] fields = {rowField, columnField};

    //project specific
    private final int maxCellValue = 100;
    private final int lowestCellValue = 1;
    private int grid[][];
    private int occurences[] = new int[maxCellValue];

    //text to display, width, height
    private final JTextArea summaryArea = new JTextArea("" + Constants.LINEBREAK, 10, 30);
    private final JTextArea occurenceArea = new JTextArea("" + Constants.LINEBREAK, 10, 75);

    //button
    private final JButton btnAdd = new JButton("Calculate");

    public FieldManager(){
        //Put titlebar on frame
        super("Test Scores");

        //apply settings
        configureSettings();
        
        //add components to the frame
        addComponents();

        resetOccurences();
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

    public void resetOccurences(){
        for(int i = lowestCellValue; i < maxCellValue; i++){
            occurences[i] = 0;
        }
    }

    public void fillArray(int rows, int columns){

        grid = new int[rows][columns];

        for(int r = 0; r < rows; r++){ //for every row

            for(int c = 0; c < columns; c++){ //for each cell within this row
                int rng = (int)((Math.random() * (maxCellValue - lowestCellValue)) + lowestCellValue); //create a random number

                grid[r][c] =  rng; //set the cell equal to the random number
            }
        }
    }

    public void handleCalculate(){
        String error = FieldLabel.getAccumulatedErrors(fields);

        if(error != null){
            summaryArea.setText(error);
            return;
        }

        int rows = (int)rowField.getDouble();
        int columns = (int)columnField.getDouble();

        if(rows <= 0 || columns <= 0){
            summaryArea.setText("Please put a number greater than 0");
            return;
        }
        resetOccurences();
        fillArray(rows, columns);

        int highest = lowestCellValue;
        int lowest = maxCellValue;
        int total = 0;
        int elements = rows * columns; //rows times columns

        for(int[] row : grid){
            for(int cell : row){
                if(cell > highest)
                    highest = cell;

                if(cell < lowest)
                    lowest = cell;

                total += cell;

                occurences[cell] += 1;
            }
        }

        summaryArea.setText(
            "Highest: " + highest + "\n" +
            "Lowest: " + lowest + "\n" +
            "Average: " + CommonConversion.round((double)total / (double)elements, 3) + "\n"
        );

        occurenceArea.setText("Occurences of Each Value: " + "\n");

        for(int index = lowestCellValue; index < maxCellValue; index++){
            if(occurences[index] == 0)
                continue;
                
            occurenceArea.append(index + ": " + occurences[index] + Constants.TAB);
        }
    }

    public void addComponents(){

        //add components to the frame
        for(FieldLabel field : fields){
            field.label.setHorizontalAlignment(SwingConstants.RIGHT);
            field.add(panel);
            field.addListener(this);
        }

        //text area
        add(summaryArea);
        add(occurenceArea);

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
        summaryArea.setEditable(false);
        summaryArea.setLineWrap(true);
        summaryArea.setWrapStyleWord(true);

        occurenceArea.setEditable(false);
        occurenceArea.setLineWrap(true);
        occurenceArea.setWrapStyleWord(true);
    }

}
