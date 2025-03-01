package project;

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
        // FieldManager.initialize();

        test();
    }

    public static void test(){
        int totalLinearIterations = 0;
        int totalBinaryIterations = 0;
        int totalSuccessfulFinds = 0;

        int max = 5000;

        //create a data buffer of <max> size
        int[] data = new int[max];

        //fill data buffer with random data
        for(int i = 0; i < max; i++){
            data[i] = (int)Utility.random(1, max);
        }

        //create data manager class to handle the array
        DataManager dataManager = new DataManager(data);

        //number of test iterations
        int iterations = 5000;

        //repeated test
        for(int i = 0; i < iterations; i++){

            //choose a random number to find
            int random = (int)Utility.random(1, max);

            //objects to store results
            IteratedValue<Integer> resultLinear = dataManager.findNumberLinear(data, new IteratedValue<Integer>(random), 0);
            IteratedValue<Integer> resultBinary = dataManager.findNumberBinary(data, new IteratedValue<Integer>(random), 0, data.length - 1);
            
            //how many iterations it took to find the target
            int iterationsLinear = resultLinear.iterations;
            int iterationsBinary = resultBinary.iterations;

            //index of each found target
            int indexLinear = resultLinear.value;
            int indexBinary = resultBinary.value;

            //if either fail to find their targets, then skip this iteration. If only one fails, then crash the program anyways
            if(indexLinear == -1 && indexBinary == -1)
                continue;

            //update statistical varaibles
            totalSuccessfulFinds++;
            totalLinearIterations = iterationsLinear;
            totalBinaryIterations = iterationsBinary;

            //the value of the target (should be equal to "random")
            int valueLinear = dataManager.getData()[indexLinear];
            int valueBinary = dataManager.getData()[indexBinary];

            //booleans for test conditions
            boolean indexEquals = indexLinear == indexBinary;
            boolean valuesEqual = valueLinear == random && valueBinary == random;
        }

        int averageIterationsLinear = totalLinearIterations / totalSuccessfulFinds;
        int averageIterationsBinary = totalBinaryIterations / totalSuccessfulFinds;

        System.out.println(
            "Avg Linear: " + averageIterationsLinear + "\n" +
            "Avg Binary: " + averageIterationsBinary
        );
    }


}
