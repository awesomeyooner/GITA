package project.util;

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

    public <T> void displayArray(String header, T[] array){
        setText(header);

        for(T item : array){
            append(item.toString());
        }
    }

    public <T> void displayArray(T[] array){
        displayArray("", array);
    }
}
