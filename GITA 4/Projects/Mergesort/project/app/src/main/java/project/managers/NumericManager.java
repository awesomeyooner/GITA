package project.managers;

import project.IteratedValue;

public class NumericManager {
    
    //Binary Search Suite
    public static IteratedValue<Integer> findNumberBinary(int[] sorted, int find){
        return findNumberBinary(sorted, new IteratedValue<Integer>(find), 0, sorted.length - 1);
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

    //Linear Search Suite
    public static IteratedValue<Integer> findNumberLinear(int[] array, int find){
        return findNumberLinear(array, new IteratedValue<Integer>(find), 0);
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
