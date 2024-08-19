package textboxes;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

import textboxes.util.Constants;
import textboxes.util.FieldLabel;

public class FieldManager extends JFrame implements ActionListener{

    //declare components
    FieldLabel nameField = new FieldLabel("Name:", 20);
    FieldLabel departmentField = new FieldLabel("Department: ", 20);
    FieldLabel phoneField = new FieldLabel("Phone: ", 5);

    //text to display, width, height
    JTextArea txaPhoneList = new JTextArea("Department  |  Name  |  Phone" + "\n", 10, 30);

    JButton btnAdd = new JButton("Add to List");

    //declare variables to hold information
    String department, name, phone;

    public FieldManager(){
        //Put titlebar on frame
        super("Button Application");

        //apply settings
        configureFrame();
        
        //add components to the frame
        addComponents();
    }

    //listen for button click
    @Override
    public void actionPerformed(ActionEvent event){
        Object objSource = event.getSource();
        
        if(objSource == btnAdd)
            handleAdd();
    }

    public void handleAdd(){
        String output;

        //grab information from textboxes
        name = nameField.field.getText();
        department = departmentField.field.getText();
        phone = phoneField.field.getText();

        output = department + Constants.TAB + name + Constants.TAB + phone;

        //output to textarea
        txaPhoneList.append(output + "\n");
    }

    public void addComponents(){
        //add components to the frame

        //name
        add(new JLabel("Name: "));
        add(txtName);
        txtName.addActionListener(this);

        //department
        add(new JLabel("Department: "));
        add(txtDepartment);
        txtDepartment.addActionListener(this);

        //phone
        add(new JLabel("Phone: "));
        add(txtPhone);
        txtPhone.addActionListener(this);
        add(txaPhoneList);

        //button
        add(btnAdd);
        btnAdd.addActionListener(this);
    }

    public void configureFrame(){
        //apply settings
        setSize(500, 500);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());
    }

}
