package loops;

import javax.imageio.ImageIO;
import javax.swing.*;

import java.awt.*;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

public class Main extends JFrame implements ActionListener{
	
	
	//declare our components or fields
	//a field is a global level variable
	
	
	JTextArea txaOutput = new JTextArea("",10,30);
	JButton btnDo = new JButton("Do Loop");
	JButton btnWhile = new JButton("Definite While Loop");
	JButton btnWhile2 = new JButton("Indefinite While Loop");
	JButton btnFor = new JButton("For Loops");
	JButton btnArray = new JButton("Using Arrays");
	
	JPanel pnlMain = new JPanel();
	
	
	
	//main is the first method that runs
public static void main(String[]args) {
		
		//declare our frame which is a form
	Main frame = new Main();
		frame.setSize(700,600);
		//frame.setLayout(new GridLayout(0,2));
		frame.setLayout(new FlowLayout());
		
		frame.setVisible(true);
		
		
		//JFrame jframe = new JFrame("My JFrame Title");
	}
	
	
	//Declare a constructor for the project
	//The constructor initializes the object
	public Main() {
		
		//put a title bar on the frame
		super("Button Application");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		//set our layout manager
		
		
		pnlMain.add(btnDo);
		//button for array
		pnlMain.add(btnWhile);
		pnlMain.add(btnWhile2);
		pnlMain.add(btnFor);
		pnlMain.add(btnArray);
		//add the text Area
		pnlMain.add(txaOutput);
		add(pnlMain);
		//pnlMain.pack();
		setContentPane(pnlMain);
		//add the listeners
		btnDo.addActionListener(this);
		btnWhile.addActionListener(this);
		btnWhile2.addActionListener(this);
		btnFor.addActionListener(this);
		btnArray.addActionListener(this);
		
		
		
		
		
		
		
	}
	
	//when you push the button, the code comes here
	public void actionPerformed(ActionEvent event) {
		
		//listen for which button being pressed
		Object objSource = event.getSource();
		int myRandom =0;
		String messageString= "";
		
		if(objSource == btnDo)
		{
			
		}
		else if(objSource == btnWhile) 
		{
			
		}
		else if(objSource == btnWhile2)
		{
			
		}
		else if(objSource == btnFor) {

            int largest = 0;
			
			for(int i = 0; i < 10; i++){
                int random = (int)(Math.random() * 1000000) + 1;

                messageString += random + "\n";

                if(random > largest)
                    largest = random;

              
            }

            messageString += "largest number: " + largest + "\n";

            txaOutput.setText(messageString);
			
		}
		if(objSource == btnArray)
		{
			
			
		}
		
			
		}
			
			
			
			
		
		
	}

	

//last brace of project
