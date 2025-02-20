package project;

import javax.imageio.ImageIO;
import javax.swing.*;

import java.awt.*;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.text.NumberFormat;

public class PersonApp extends JFrame implements ActionListener{

	//Declare components and objects
		TextField txtLName = new TextField(15);
		TextField txtFName = new TextField(15);
		TextField txtAddress = new TextField(15);
		TextField txtCity = new TextField(15);
		TextField txtState = new TextField(15);
		TextField txtZip = new TextField(15);
		TextField txtPhone = new TextField(15);
		
		//add a new textbox for the GPA
		TextField txtGPA = new TextField(5);

		TextArea txaOutput = new TextArea(10, 60);
		
		Button btnAdd = new Button("Add");
		Button btnDisplay = new Button("Display");
		
		//Array of type PersonClass
		//It will contain 3 people with 7 attributes each
		//PersonClass[] personInfo = new PersonClass[3];
		
		//replace PersonClass with Student
		Student[] personInfo = new Student[3];
		
		
		int personCount = 0;
		
	
	public static void main(String[] args)
	{
		// TODO Auto-generated method stub
		//declare our frame which is a form
		PersonApp frame = new PersonApp();
		frame.setSize(500,500);
		frame.setVisible(true);
	}
	public PersonApp()
	{
		
		//put a title bar on the frame
		super("Button Application");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		//set our layout manager
		setLayout(new FlowLayout());
		add(new Label("Last Name:"));
		add(txtLName);
		add(new Label("First Name:"));
		add(txtFName);
	
		add(new Label("Address"));
		add(txtAddress);
		add(new Label("City"));
		add(txtCity);
		add(new Label("State"));
		add(txtState);
		add(new Label("Zip"));
		add(txtZip);
		add(new Label("Phone:"));
		add(txtPhone);
        
        add(new Label("GPA: "));
        add(txtGPA);
		
		
            
		

		add(btnAdd);
		add(btnDisplay);
		add(txaOutput);
		
		btnAdd.addActionListener(this);
		btnDisplay.addActionListener(this);

		txtLName.requestFocus();
	
}

public void actionPerformed(ActionEvent ae)
{
            
	
    Object objSource = ae.getSource();
    
	if(objSource ==btnAdd)
	{
    	   //adds a new person's info to personInfo array
		if(personCount < personInfo.length)
		{
		//personInfo[personCount]=new PersonClass(txtFName.getText(),txtLName.getText(),txtAddress.getText(),txtCity.getText(),
    			   				//txtState.getText(),txtZip.getText(),txtPhone.getText());
			
		//add the additional textbox to the code
		//because the constructor takes 8 arugments
		personInfo[personCount] = new Student(txtFName.getText(),
				txtLName.getText(),txtAddress.getText(),txtCity.getText(),
	   				txtState.getText(),txtZip.getText(),
	   				txtPhone.getText(),
                    Double.parseDouble(txtGPA.getText()));
			
			personCount++;
		}
		txtFName.setText("");
		txtLName.setText("");
		txtAddress.setText("");
		txtCity.setText("");
		txtState.setText("");
		txtZip.setText("");
		txtPhone.setText("");
		
		//clear GPA text box
		txtGPA.setText("");
		
     }
       else if(objSource == btnDisplay)
       {
    	   String messageString ="";
    	   //concatenates all three person's and their properties.
    	   for(int i=0; i< personInfo.length;i++)
    	   {
    		   messageString += "Name: " + personInfo[i].getFName() + "  " + personInfo[i].getLName() + "  " + "Phone: " + personInfo[i].getPhone() + "\n" ; 
    		   
    	   }

    	   txaOutput.append(messageString);
					 
           


       }


	}

}