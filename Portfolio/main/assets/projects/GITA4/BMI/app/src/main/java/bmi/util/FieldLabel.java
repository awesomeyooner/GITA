package bmi.util;

import java.awt.event.ActionListener;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class FieldLabel {
    
    public final JTextField field;
    public final JLabel label;

    public FieldLabel(String text, int size){
        field = new JTextField(size);
        label = new JLabel(text);
    }

    public void add(JFrame frame){
        frame.add(label);
        frame.add(field);
    }

    public void add(JPanel panel){
        panel.add(label);
        panel.add(field);
    }

    public void addListener(ActionListener frame){
        field.addActionListener(frame);
    }

    public String getText(){
        return field.getText();
    }

    public void clearText(){
        field.setText("");
    }

    public boolean hasText(){
        return !getText().equals("");
    }

    public boolean isDouble(){
        try{
            Double.parseDouble(getText());
        }
        catch(NumberFormatException exception){
            return false;
        }

        return true;
    }

    public static void clearFields(FieldLabel[] fields){
        for(FieldLabel field : fields){
            field.clearText();
        }
    }
}
