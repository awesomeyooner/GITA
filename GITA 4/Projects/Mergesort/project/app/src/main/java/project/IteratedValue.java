package project;

public class IteratedValue<T>{
    public int iterations;
    public T value;

    /**
     * Creates a new IteratedValue object used to store data with the iterations used to get to that value
     * @param iterations the number of iterations to start at
     * @param value the initial value
     */
    public IteratedValue(int iterations, T value){
        this.iterations = iterations;
        this.value = value;
    }

    /**
     * Creates a new IteratedValue object used to store data with the iterations used to get to that value
     * @param value the initial value
     */
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

    public IteratedValue<T> withValue(T newValue){
        value = newValue;
        return this;
    }

    public IteratedValue<T> withIterations(int newIterations){
        iterations = newIterations;
        return this;
    }

    @Override
    public String toString() {
        String iterationString = "Iterations: " + String.valueOf(iterations);
        String valueString = "Value: " + String.valueOf(value);

        return iterationString + "\t" + valueString;
    }
}