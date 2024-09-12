package dice.util;

public class Dice {
    
    private int sides;
    private double average = 0;
    private int timesRolled = 0;

    public Dice(int sides){
        this.sides = sides;
    }

    public Dice(){
        this(6);
    }

    public int roll(){
        int roll = (int)(Math.random() * (sides)) + 1;

        average += roll;
        timesRolled++;

        return roll;
    }

    public int getSides(){
        return sides;
    }

    public double getAverage(){
        return average;
    }

    public int getRolls(){
        return timesRolled;
    }






}
