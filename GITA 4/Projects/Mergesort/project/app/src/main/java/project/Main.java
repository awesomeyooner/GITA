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
        FieldManager.initialize();

        //test();
    }

    public static void test(){
        String[] arrayA = {"Z", "B", "A", "C", "E", "D", "F"};
        String[] arrayB = {"Z", "B", "A", "C", "E", "D", "F"};

        String[] sorted = StringManager.mergeSortAZ(arrayA, arrayB);

        Utility.printArray(sorted);
    }
}
 