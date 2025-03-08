package project.managers;

import project.IteratedIndexedValue;

public class AlphabeticManager {

    //Linear Search Suite
    public static IteratedIndexedValue<String> findStringLinear(String[] array, String find){
        return findStringLinear(array, new IteratedIndexedValue<String>(find), 0);
    }

    public static IteratedIndexedValue<String> findStringLinear(String[] array, IteratedIndexedValue<String> find, int index){
        if(index < 0)
            throw new IllegalArgumentException("Index cannot be less than 0!");

        find.update();

        boolean equal = array[index].equals(find.value);

        //if the wanted is FOUND
        if(equal)
            return find.withIndex(index);

        //if it wasnt found and youre either at the last index or OOB
        else if(index >= array.length - 1)
            return find.withIndex(-1);
        
        //if wanted has not been found and you're still within bounds
        else
            return findStringLinear(array, find, index + 1);

    }

    public static IteratedIndexedValue<String> findStringBinary(String[] sorted, String find){
        return findStringBinary(sorted, new IteratedIndexedValue<String>(find), 0, sorted.length - 1);
    }

    //Binary Search Suite
    public static IteratedIndexedValue<String> findStringBinary(String[] sorted, IteratedIndexedValue<String> find, int low, int high){
        find.update();

        int index = (low + high) / 2;

        String current = sorted[index].toLowerCase();
        String wanted = find.value.toLowerCase();

        //positive if the first is higher up than the parameter
        //negative if the first is lesser (closer to A) than the parameter
        //zero if they are the same
        int lexiDelta = current.compareTo(wanted);

        boolean equal = lexiDelta == 0;
        
        //current < wanted, when current is CLOSER to A than wanted
        boolean lesser = lexiDelta < 0;

        //if you're at the last number and its not equal, return -1 indicating nothing has been found
        if(low > high)
            return find.withIndex(-1);
        else if(equal)
            return find.withIndex(index);
        else{
            if(lesser)
                return findStringBinary(sorted, find, index + 1, high);
            else
                return findStringBinary(sorted, find, low, index - 1);
        }
    }
}
