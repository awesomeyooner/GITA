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
    
    public IteratedValue<Integer> findNumberBinary(int find){
        int[] copy = data.clone();

        Arrays.sort(copy);

        return findNumberBinary(copy, new IteratedValue<Integer>(find), 0, data.length - 1);
    }

    public IteratedValue<Integer> findNumberBinary(int[] array, IteratedValue<Integer> find, int low, int high){
        find.update();
        
        int index = (low + high) / 2;

        boolean equal = array[index] == find.value;

        boolean greater = array[index] > find.value;

        //if you're at the last number and its not equal, return -1 indicating nothing has been found
        if(low > high)
            return new IteratedValue<Integer>(find.iterations, -1);
        else if(equal)
            return new IteratedValue<Integer>(find.iterations, index);
        else{
            if(!greater)
                return findNumberBinary(array, find, index + 1, high);
            else
                return findNumberBinary(array, find, low, index - 1);
        }
    }

    public IteratedValue<Integer> findNumberLinear(int find){
        int[] copy = data.clone();

        Arrays.sort(copy);

        return findNumberLinear(copy, new IteratedValue<Integer>(find), 0);
    }

    public IteratedValue<Integer> findNumberLinear(int[] array, IteratedValue<Integer> find, int index){
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
