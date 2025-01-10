package project.util.helpers;

import java.awt.Color;
import java.awt.Frame;
import java.awt.Graphics;

public class Utility {
    
    public static void drawCircle(Graphics graphics, Frame frame, int x, int y, int width, int height){
        graphics.fillArc(
            (int)(x - (width / 2)), 
            (int)(y - (height / 2)), 
            width, 
            height, 
            0,
            360
        );
    }

    public static double random(double lowerBound, double upperBound){
        return (Math.random() * (upperBound - lowerBound)) + lowerBound;
    }
}
