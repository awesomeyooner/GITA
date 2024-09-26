package payroll;

import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.lang.constant.Constable;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.SwingConstants;

import payroll.util.Constants;
import payroll.util.FieldLabel;

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //declare components
    private final FieldLabel nameField = new FieldLabel("Name: ", 20);
    private final FieldLabel hourField = new FieldLabel("Hours: ", 20);
    private final FieldLabel rateField = new FieldLabel("Wage Rate: ", 20);

    private final FieldLabel[] fields = {nameField, hourField, rateField};

    //text to display, width, height
    private final JTextArea outputArea = new JTextArea("", 10, 30);

    //button
    private final JButton btnAdd = new JButton("Calculate");

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
        Object action = event.getSource();
        
        if(action == btnAdd)
            handleCalculate();
    }

    public void handleCalculate(){
        //declare local variables
        String output;

        String name = nameField.getText();
        double rate = Double.parseDouble(rateField.getText());
        double hours = Double.parseDouble(hourField.getText());

        double totalPay = (double)((int)(rate * hours * 100)) / 100; //to hundreths

        output = 
            "Name: " + name + Constants.LINEBREAK +
            "Pay: " + "$" + String.valueOf(totalPay) + Constants.LINEBREAK +
            "==============================";

        for(FieldLabel field : fields){
            field.clearText();
        }

        outputArea.append(output);
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
    }

}
