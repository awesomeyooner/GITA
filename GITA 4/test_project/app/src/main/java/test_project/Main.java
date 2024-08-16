package test_project;

import javax.imageio.ImageIO;
import javax.swing.*;

import java.awt.*;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

/*
 * Name: Aaron Yoon
 * Date: Aug 16
 * Project: this project teachs how to code labels and how to format them
 */

public class Main {
    
    public static void main(String[] args){
        JFrame.setDefaultLookAndFeelDecorated(true);

        //create a new frame called my_frame 
        JFrame frame = new JFrame("my_frame");

        //set the size of the frame
        frame.setSize(new Dimension(500, 500));

        //create a close button
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        //declare some labels for the frame
        JLabel labelOne = new JLabel("This is my label");
        JLabel labelTwo = new JLabel("This is my OTHER label");

        //declare a font for the labels
        Font headlineOneFont = new Font("Arial", Font.BOLD, 36);
        Font headlineTwoFont = new Font("Arial", Font.BOLD, 24);
        Font standardFont = new Font("Arial", Font.PLAIN, 12);

        //set the layout of the the frame, determines how components look on the frame
        frame.setLayout(new FlowLayout());

        //apply settings to labelOne
        labelOne.setFont(headlineOneFont);
        labelOne.setOpaque(true);
        labelOne.setBackground(Color.BLACK);
        labelOne.setForeground(Color.BLUE);

        //apply settings to labelTwo
        labelTwo.setFont(headlineTwoFont);
        labelTwo.setOpaque(true);
        labelTwo.setBackground(Color.ORANGE);
        labelTwo.setForeground(Color.BLUE);

        //add the labels to the frame   
        frame.add(labelOne);
        frame.add(labelTwo);

        //make the frame visible
        frame.setVisible(true);

        //set backgorund
        frame.getContentPane().setBackground(Color.RED);
        
    }
}
