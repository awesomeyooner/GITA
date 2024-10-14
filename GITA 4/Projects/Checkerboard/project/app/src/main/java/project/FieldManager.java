package project;

import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.Graphics;
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

import project.util.Bar;
import project.util.CommonConversion;
import project.util.Constants;
import project.util.Dice;
import project.util.Entry;
import project.util.FieldLabel;
import project.util.Constants.BoardConstants;

//Programmer: Aaron Yoon
//Date: August 27
//Project: Car rental simulator 

public class FieldManager extends JFrame implements ActionListener{

    //declare panel
    private final JPanel panel = new JPanel(new GridLayout(0, 2));

    //declare components
    private final FieldLabel columnsField = new FieldLabel("Columns:");
    private final FieldLabel rowsField = new FieldLabel("Rows:");

    private final FieldLabel fields[] = {columnsField, rowsField};

    //button
    private final JButton actionButton = new JButton("Calculate");

    public FieldManager(){
        //Put titlebar on frame
        super("Button Application");

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
        Object objSource = event.getSource();
        
        if(objSource == actionButton)
            action();
    }

    @Override
    public void update(Graphics graphics) {
        paint(graphics);
    }  

    @Override
    public void paint(Graphics graphics) {
        super.paint(graphics);

        if(rowsField.isInt() && columnsField.isInt())
            drawCheckerboard(graphics, (int)rowsField.getDouble(), (int)columnsField.getDouble());
    }

    public void action(){
        repaint();
    }

    public void drawCheckerboard(Graphics graphics, int rows, int cols){

        for(int row = 0; row < rows; row++){

            for(int cell = 0; cell < cols; cell++){
                
                if(cell % 2 == 1){
                    if(row % 2 == 0)
                        graphics.setColor(Color.WHITE);
                    else
                        graphics.setColor(Color.BLACK);
                }
                else{
                    if(row % 2 == 0)
                        graphics.setColor(Color.BLACK);
                    else
                        graphics.setColor(Color.WHITE);
                }

                graphics.fillRect(
                    100 + BoardConstants.CELL_SIZE * row, 
                    100 + BoardConstants.CELL_SIZE * cell, 
                    BoardConstants.CELL_SIZE, 
                    BoardConstants.CELL_SIZE
                );

            }
        }
    }

    public void addComponents(){

        //panel
        add(panel);

        //button
        add(actionButton);
        actionButton.addActionListener(this);

        for(FieldLabel field : fields){
            field.label.setHorizontalAlignment(SwingConstants.RIGHT);
            field.add(panel);
            field.addListener(this);
        }
    }

    public void configureSettings(){
        //frame
        setSize(500, 500);
        setVisible(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new FlowLayout());
    }

}
