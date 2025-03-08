package project;

import java.util.Arrays;

import project.managers.NumericManager;
import project.util.Utility;

public class DataManager {

    private int[] unsorted;
    private int[] sorted;
    
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
            boolean isNonZero = unsorted.length != 0;
            
            return isNonZero;
        }
        //if the exception is thrown, then its empty
        catch(NullPointerException e){
            return false;
        }
    }

    public void setData(int[] array){
        unsorted = array.clone();

        sorted = unsorted.clone();
        Arrays.sort(sorted);
    }

    public int[] getUnsortedData(){
        return unsorted;
    }

    public int[] getSortedData(){
        return sorted;
    }

    public void populateWithRandomData(int size, int low, int high){
        unsorted = new int[size];

        for(int i = 0; i < size; i++){
            int random = (int)Utility.random((double)low, (double)high);

            unsorted[i] = random;
        }

        sorted = unsorted.clone();
        Arrays.sort(sorted);
    }

    public void populateWithSystematicData(int size, int start){
        unsorted = new int[size];

        for(int i = 0; i < size; i++){
            unsorted[i] = i + start;
        }

        sorted = unsorted.clone();
    }
    
    public IteratedValue<Integer> findNumberBinary(int find){
        return NumericManager.findNumberBinary(sorted, new IteratedValue<Integer>(find), 0, sorted.length - 1);
    }

    public IteratedValue<Integer> findNumberLinear(int find){
        return NumericManager.findNumberLinear(unsorted, find);
    }
}
