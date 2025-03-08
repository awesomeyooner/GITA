package project;

import java.util.Arrays;

import project.managers.AlphabeticManager;
import project.managers.StringManager;
import project.util.Utility;

/*
 * Name: Aaron Yoon
 * Date: Sept 3
 * Project: this project simulates dice rolling.
 */

public class Main {
    
    public static void main(String[] args){
        //First method to run 
        //FieldManager.initialize();

       // test();

       System.out.println("c".compareTo("z"));
    }

    public static void test(){
        String[] array = {"Z", "B", "A", "C", "E", "D", "F"};
        String[] sorted = StringManager.sortAZ(array);

        System.out.println("\n");

        for(String string : sorted){
            System.out.println(string);
        }

        System.out.println("\n");

        // String find = "Cucumber";
        // IteratedIndexedValue<String> output = AlphabeticManager.findStringBinary(array, find);

        // System.out.println(output);
        
        // System.out.println(array[output.index]);
    }
}
 