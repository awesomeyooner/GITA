package car_rental.util;

import java.awt.event.ActionListener;
import java.util.function.Supplier;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class FieldLabel {

    public final JTextField field;
    public final JLabel label;
    public final String error;
    
    public final Supplier<Boolean> validCondition;

    public FieldLabel(String text, int size, boolean useNumeric){
        field = new JTextField(size);
        label = new JLabel(text);
        error = "Please enter " + label.getText() + Constants.LINEBREAK;

        validCondition = useNumeric ? this::isDouble : this::hasText;
    }

    public FieldLabel(String text, boolean useNumeric){
        this(text, 20, useNumeric);
    }

    public FieldLabel(String text){
        this(text, 20, false);
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

    public double getDouble(){
        return Double.parseDouble(getText());
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

    public boolean isInt(){
        try{
            Integer.parseInt(getText());
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

    public static String getAccumulatedErrors(FieldLabel[] fields){
        String output = "";

        for(FieldLabel field : fields){
            if(field.validCondition != null){
                if(field.validCondition.get())
                    continue;
                else
                    output += field.error;
            }
            else
                continue;
        }

        if(output.equals(""))
            return null;

        return output;
    }
}
