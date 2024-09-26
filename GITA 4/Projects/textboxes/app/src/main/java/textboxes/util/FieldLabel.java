package textboxes.util;

import java.awt.event.ActionListener;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

public class FieldLabel {
    
    public final JTextField field;
    public final JLabel label;

    public FieldLabel(String text, int size){
        field = new JTextField(size);
        label = new JLabel(text);
    }

    public void add(JFrame frame){
        frame.add(field);
        frame.add(label);
    }

    public void addListener(ActionListener frame){
        field.addActionListener(frame);
    }
}
