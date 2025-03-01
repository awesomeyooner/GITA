package project;

import java.util.Arrays;

import project.DataManager.IteratedValue;
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

        // test();
    }

    public static void test(){
        int totalLinearIterations = 0;
        int totalBinaryIterations = 0;
        int totalSuccessfulFinds = 0;

        int totalLinearFailures = 0;
        int totalBinaryFailures = 0;

        int size = 5000;
        int low = 1;
        int high = 5000;

        //create a data buffer of <size> size
        int[] data = new int[size];

        //fill data buffer with random data
        for(int i = 0; i < size; i++){
            data[i] = (int)Utility.random(low, high);
        }

        int[] sorted = data.clone();
        Arrays.sort(sorted);

        //number of test iterations
        int iterations = 5000;

        //repeated test
        for(int i = 0; i < iterations; i++){

            //choose a random number to find
            int random = (int)Utility.random(low, high);

            //objects to store results
            IteratedValue<Integer> resultLinear = DataManager.findNumberLinear(data, new IteratedValue<Integer>(random), 0);
            IteratedValue<Integer> resultBinary = DataManager.findNumberBinary(sorted, new IteratedValue<Integer>(random), 0, data.length - 1);
            
            //how many iterations it took to find the target
            int iterationsLinear = resultLinear.iterations;
            int iterationsBinary = resultBinary.iterations;

            //index of each found target
            int indexLinear = resultLinear.value;
            int indexBinary = resultBinary.value;

            if(indexLinear == -1)
                totalLinearFailures++;

            if(indexBinary == -1)
                totalBinaryFailures++;

            //if either fail to find their targets, then skip this iteration. If only one fails, then crash the program anyways
            if(indexLinear == -1 && indexBinary == -1)
                continue;

            //update statistical varaibles
            totalSuccessfulFinds++;
            totalLinearIterations += iterationsLinear;
            totalBinaryIterations += iterationsBinary;

            //the value of the target (should be equal to "random")
            int valueLinear = sorted[indexLinear];
            int valueBinary = sorted[indexBinary];

            //booleans for test conditions
            boolean indexEquals = indexLinear == indexBinary;
            boolean valuesEqual = valueLinear == random && valueBinary == random;
        }

        double averageIterationsLinear = (double)totalLinearIterations / (double)totalSuccessfulFinds;
        double averageIterationsBinary = (double)totalBinaryIterations / (double)totalSuccessfulFinds;

        System.out.println(
            "Total: " + totalSuccessfulFinds + "\n" +
            "Avg Linear: " + averageIterationsLinear + "\n" +
            "Avg Binary: " + averageIterationsBinary + "\n" +
            "Linear Fails: " + totalLinearFailures + "\n" +
            "Binary Fails: " + totalBinaryFailures
        );
    }
}
