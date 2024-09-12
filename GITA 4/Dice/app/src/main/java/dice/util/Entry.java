package dice.util;

import java.util.HashMap;

public class Entry {

    public int rolls;
    public double possibility;

    public Entry(int rolls, double possibility){
        this.rolls = rolls;
        this.possibility = possibility;
    }

    public Entry addRoll(){
        rolls++;
        return this;
    }

    public Entry addPossibility(int totalRolls){
        possibility = rolls / totalRolls;
        return this;
    }

    public double getPossibility(int totalRolls){
        possibility = 100 * (rolls / (double)totalRolls);
        return CommonConversion.round(possibility, 2);
    }


}
