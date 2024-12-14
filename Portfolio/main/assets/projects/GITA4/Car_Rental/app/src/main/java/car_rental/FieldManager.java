package car_rental;

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

import car_rental.util.CommonConversion;
import car_rental.util.Constants;
import car_rental.util.Entry;
import car_rental.util.FieldLabel;
import car_rental.util.Entry.CarEntry;
import car_rental.util.Entry.UserEntry;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //declare components
    private final FieldLabel nameField = new FieldLabel("Name: ");
    private final FieldLabel addressField = new FieldLabel("Address: ");
    private final FieldLabel cityField = new FieldLabel("City: ");
    private final FieldLabel stateField = new FieldLabel("State: ");
    private final FieldLabel zipCodeField = new FieldLabel("Zip Code: ");
    private final FieldLabel initialOdomField = new FieldLabel("Beginning Odometer: ", true);
    private final FieldLabel finalOdomField = new FieldLabel("Final Odometer: ", true);
    private final FieldLabel daysField = new FieldLabel("Days: ", true);

    private final FieldLabel[] fields = {
        nameField,
        addressField,
        cityField,
        stateField,
        zipCodeField,
        initialOdomField,
        finalOdomField,
        daysField
    };

    private final ArrayList<Entry> entries = new ArrayList<>();

    //text to display, width, height
    private final JTextArea outputArea = new JTextArea("Please Enter Your Credentials" + Constants.LINEBREAK, 10, 30);

    private final JTextArea summaryArea = new JTextArea("" + Constants.LINEBREAK, 10, 30);

    //button
    private final JButton actionButton = new JButton("Calculate");

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
        
        if(objSource == actionButton)
            handleCalculate();
    }

    public void handleCalculate(){
        String error = FieldLabel.getAccumulatedErrors(fields);

        if(error != null){
            outputArea.setText(error);
            return;
        }

        appendEntry();
        updateSummary();
    }

    public void appendEntry(){
        Entry entry = new Entry();

            entry.userInfo.put(UserEntry.NAME, nameField.getText());
            entry.userInfo.put(UserEntry.ADDRESS, addressField.getText());
            entry.userInfo.put(UserEntry.CITY, cityField.getText());
            entry.userInfo.put(UserEntry.STATE, stateField.getText());
            entry.userInfo.put(UserEntry.ZIP_CODE, zipCodeField.getText());
            
            entry.carInfo.put(CarEntry.INITIAL_ODOM, initialOdomField.getDouble());
            entry.carInfo.put(CarEntry.FINAL_ODOM, finalOdomField.getDouble());
            entry.carInfo.put(CarEntry.DAYS, daysField.getDouble());

        entries.add(entry);

        outputArea.setText("");
        FieldLabel.clearFields(fields);

        for(Entry current : entries){
            outputArea.append(current.toText());
        }
    }

    public void updateSummary(){
        double totalPrice = 0;
        int cars = 0;
        double averagePrice;

        for(Entry entry : entries){
            totalPrice += entry.getPrice();
            cars++;
        }

        averagePrice = totalPrice / cars;

        summaryArea.setText(
            "Total Income: $" + CommonConversion.round(totalPrice, 2) + Constants.LINEBREAK + 
            "Total Cars Returned: " + cars + Constants.LINEBREAK + 
            "Average Price: $" + CommonConversion.round(averagePrice, 2)
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

        //summary of all customers
        add(summaryArea);

        //panel
        add(panel);

        //button
        add(actionButton);
        actionButton.addActionListener(this);
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
