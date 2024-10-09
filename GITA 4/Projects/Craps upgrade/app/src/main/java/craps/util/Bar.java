package craps.util;

import java.awt.FlowLayout;
import java.awt.Graphics;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.lang.constant.Constable;
import java.util.ArrayList;

import javax.swing.JButton;
import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.SwingConstants;

import java.awt.Color;

public class Bar extends JComponent{
    
    public int x;
    public int y;

    public int width;
    public int height;

    public Color color;

    public Bar(int x, int y, int width, int height, Color color){
        this.x = x;
        this.y = y;
        
        this.height = height;
        this.width = width;

        this.color = color;
    }

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.setColor(color);

        g.fillRect(
            x, 
            y, 
            width, 
            height
        );
    }


}
