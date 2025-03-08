package project;

public class IteratedIndexedValue<T> extends IteratedValue<T>{
    
    public int index;

    /**
     * Creates a new IteratedValue object used to store data with the iterations used to get to that value
     * @param iterations the number of iterations to start at
     * @param index the index of where this value is at
     * @param value the initial value
     */
    public IteratedIndexedValue(int iterations, int index, T value){
        super(iterations, value);

        this.index = index;
    }

    /**
     * Creates a new IteratedIndexedValue object used to store data with the iterations used to get to that value and the index
     * @param index the index of where this value is at
     * @param value the initial value
     */
    public IteratedIndexedValue(int index, T value){
        super(value);
        this.index = index;
    }

    /**
     * Creates a new IteratedIndexedValue object used to store data with the iterations used to get to that value and the index
     * @param value the initial value
     */
    public IteratedIndexedValue(T value){
        super(value);
    }

    public IteratedIndexedValue<T> withIndex(int newIndex){
        index = newIndex;
        return this;
    }

    @Override
    public String toString() {
        String iterationString = "Iterations: " + String.valueOf(iterations);
        String indexString = "Index: " + String.valueOf(index);
        String valueString = "Value: " + String.valueOf(value);

        return iterationString + "\t" + indexString + "\t" + valueString;
    }
}
