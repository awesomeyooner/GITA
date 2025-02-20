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
    private final Inventory inventory = new Inventory();
 
    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //field labels
    private final FieldLabel itemField = new FieldLabel("Item: ", false);
    private final FieldLabel priceField = new FieldLabel("Price: ", true);
    private final FieldLabel quantityField = new FieldLabel("Quantity: ", true);
    private final FieldLabel satisfactionField = new FieldLabel("Satisfaction: ", true);
    private final FieldLabel qualityField = new FieldLabel("Quality: ", true);

    private final FieldLabel[] fields = {itemField, priceField, quantityField, satisfactionField, qualityField};
    
    //text areas
    private final TextArea outputArea = new TextArea("", 40, 70);
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

        addProducts();
    }

    public void addProducts(){
        inventory.addNewProduct("hammer", 15.95, 100, 1, 1);
        inventory.addNewProduct("saw", 24.50, 15, 1, 1);
        inventory.addNewProduct("drill", 139.75, 25, 1, 1);
        inventory.addNewProduct("vise", 87.65, 10, 1, 1);
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

        String item = itemField.getText();
        double price = priceField.getDouble();
        int quantity = (int)quantityField.getDouble();
        int satisfaction = (int)satisfactionField.getDouble();
        int quality = (int)qualityField.getDouble();

        inventory.addNewProduct(item, price, quantity, satisfaction, quality);

        outputArea.setText(inventory.toString());
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
