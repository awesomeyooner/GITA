package project;

import java.util.Arrays;

import project.util.Utility;

public class DataManager {

    private int[] data;
    
    public DataManager(int size){
        populateData(size);
    }

    public DataManager(int[] array){
        setData(array);
    }

    public void setData(int[] array){
        data = array.clone();
    }

    public int[] getData(){
        return data;
    }

    public void populateData(int max){
        data = new int[max];

        for(int i = 0; i < max; i++){
            int random = (int)Utility.random(1, (double)max);

            data[i] = random;
        }
    }
    
    public int findNumberBinary(int find){
        int[] copy = data.clone();

        Arrays.sort(copy);

        return findNumberBinary(copy, find, 0, data.length - 1);
    }

    public int findNumberBinary(int[] array, int find, int low, int high){
        
        int index = (low + high) / 2;

        boolean equal = array[index] == find;

        boolean greater = array[index] > find;

        //if you're at the last number and its not equal, return -1 indicating nothing has been found
        if(low > high)
            return -1;
        else if(equal)
            return index;
        else{
            if(!greater)
                return findNumberBinary(array, find, index + 1, high);
            else
                return findNumberBinary(array, find, low, index - 1);
        }
    }

    public int getIterationsOfBinary(int indexFound, int size){
        //iterations = log2(n) - log2(i + 1) + 1
        int iterations = (int)(
            (Math.log10(size) / Math.log10(2)) - (Math.log10(indexFound + 1) / Math.log10(2)) + 1
        );

        return iterations;
    }

    public int getMaxPossibleIterationsOfBinary(int size){
        return (int)(Math.log10(size) / Math.log10(2)) + 1;
    }
    
    public int findNumberLinear(int find){
        int[] copy = data.clone();

        Arrays.sort(copy);

        return findNumberLinear(copy, find, 0);
    }

    public int findNumberLinear(int[] array, int find, int index){
        if(index < 0)
            throw new IllegalArgumentException("index cannot be negative!");

        boolean equal = array[index] == find;

        //if you're at the last number and its not equal, return -1 indicating nothing has been found
        if(index == array.length - 1 && !equal)
            return -1;
        else if(equal)
            return index;
        else
            return findNumberLinear(array, find, index + 1);
    }

}
