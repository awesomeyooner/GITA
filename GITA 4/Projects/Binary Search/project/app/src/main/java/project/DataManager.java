package project;

import java.util.Arrays;

import project.util.Utility;

public class DataManager {

    public static class IteratedValue<T>{
        public int iterations;
        public T value;

        public IteratedValue(int iterations, T value){
            this.iterations = iterations;
            this.value = value;
        }

        public IteratedValue(T value){
            this(0, value);
        }

        public IteratedValue<T> update(T newValue){
            value = newValue;
            iterations++;

            return this;
        }

        public IteratedValue<T> update(){
            iterations++;
            return this;
        }
    }

    private int[] data;
    
    /**
     * Creates a new DataManager Object and fills the array with RANDOM data from low to high
     * @param size size of the data buffer
     */
    public DataManager(int size, int low, int high){
        populateWithRandomData(size, low, high);
    }

    /**
     * Creates a new DataManager Object and fills the array with DEFINED data, increments from "start"
     * @param size size of the data buffer
     * @param start the initial value (data[i])
     */
    public DataManager(int size, int start){
        populateWithSystematicData(size, start);
    }

    public DataManager(int[] array){
        setData(array);
    }

    public boolean isPopulated(){
        try{
            boolean isNonZero = data.length != 0;
            
            return isNonZero;
        }
        //if the exception is thrown, then its empty
        catch(NullPointerException e){
            return false;
        }
    }

    public void setData(int[] array){
        data = array.clone();
    }

    public int[] getData(){
        return data;
    }

    public void populateWithRandomData(int size, int low, int high){
        data = new int[size];

        for(int i = 0; i < size; i++){
            int random = (int)Utility.random((double)low, (double)high);

            data[i] = random;
        }
    }

    public void populateWithSystematicData(int size, int start){
        data = new int[size];

        for(int i = 0; i < size; i++){
            data[i] = i + start;
        }
    }
    
    public IteratedValue<Integer> findNumberBinary(int find){
        int[] copy = data.clone();

        Arrays.sort(copy);

        return findNumberBinary(copy, new IteratedValue<Integer>(find), 0, data.length - 1);
    }

    public static IteratedValue<Integer> findNumberBinary(int[] array, IteratedValue<Integer> find, int low, int high){
        find.update();
        
        int index = (low + high) / 2;

        boolean equal = array[index] == find.value;

        boolean lesser = array[index] < find.value;

        //if you're at the last number and its not equal, return -1 indicating nothing has been found
        if(low > high)
            return new IteratedValue<Integer>(find.iterations, -1);
        else if(equal)
            return new IteratedValue<Integer>(find.iterations, index);
        else{
            if(lesser)
                return findNumberBinary(array, find, index + 1, high);
            else
                return findNumberBinary(array, find, low, index - 1);
        }
    }

    public IteratedValue<Integer> findNumberLinear(int find){
        return findNumberLinear(data, new IteratedValue<Integer>(find), 0);
    }

    public static IteratedValue<Integer> findNumberLinear(int[] array, IteratedValue<Integer> find, int index){
        if(index < 0)
            throw new IllegalArgumentException("index cannot be negative!");

        find.update();

        boolean equal = array[index] == find.value;

        //if you're at the last number and its not equal, return -1 indicating nothing has been found
        if(index == array.length - 1 && !equal)
            return new IteratedValue<Integer>(find.iterations, -1);
        else if(equal)
            return new IteratedValue<Integer>(find.iterations, index);
        else
            return findNumberLinear(array, find, index + 1);
    }

}
