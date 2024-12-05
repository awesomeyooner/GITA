package project.util;

import java.util.Arrays;

import javax.swing.JTextArea;

public class TextArea extends JTextArea{
    

    public TextArea(String text, int rows, int columns){
        super(text, rows, columns);
    }

    public TextArea(String text){
        this(text, 10, 30);
    }

    public TextArea(){
        this("");
    }

    public void configureDefault(){
        setEditable(false);
        setLineWrap(true);
        setWrapStyleWord(true);
    }

    /**
     * 
     * @param error
     * @return returns true if there actually were errors present
     */
    public boolean displayError(String error){
        if(error == null)
            return false;

        else{
            setText(error);
            return true;
        }
    }

    public <T> void displayArray(String header, Iterable<T> array, boolean reset){
        if(reset)
            setText(header + "\n");
        else
            append(header + "\n");

        for(T item : array){
            if(item == null)
                continue;

            append(item.toString() + "\n");
        }
    }

    public <T> void displayArray(String header, Iterable<T> array){
        displayArray(header, array, true);
    }

    public <T> void displayArray(Iterable<T> array, boolean reset){
        displayArray("", array, reset);
    }

    public <T> void displayArray(Iterable<T> array){
        displayArray("", array, true);
    }

    //===============================================

    public <T> void displayArray(String header, T[] array, boolean reset){
        displayArray(header, Arrays.asList(array), reset);
    }

    public <T> void displayArray(String header, T[] array){
        displayArray(header, array, true);
    }
    
    public <T> void displayArray(T[] array, boolean reset){
        displayArray("", array, reset);
    }

    public <T> void displayArray(T[] array){
        displayArray(array);
    }

}
