package dice;

import java.util.HashMap;
import java.util.Map;

import dice.util.Bar;
import dice.util.Dice;
import dice.util.Entry;

import java.awt.Color;


public class DiceManager {

    private final HashMap<Integer, Entry> possibilities = new HashMap<>();
    
    private final Dice diceA = new Dice(6);
    private final Dice diceB = new Dice(6);

    private final Dice[] die = {diceA, diceB};

    private static DiceManager instance = new DiceManager();
    
    public DiceManager(){
        int totalSides = 0;

        for(Dice dice : die){
            totalSides += dice.getSides();
        }

        for(int i = die.length; i <= totalSides; i++){
            //iniitalize hashmap with values of 0 for each possibility
            possibilities.put(i, new Entry(0, 0));
        }
    }
    
    public static DiceManager getInstance(){
        return instance;
    }

    public void roll(){
        int rollA = diceA.roll();
        int rollB = diceB.roll();

        int sum = rollA + rollB;

        possibilities.put(sum, possibilities.get(sum).addRoll());
    }

    public HashMap<Integer, Entry> getPossibilities(){
        return possibilities;
    }

    public String getOutput(){
        String output = "";

        for(Map.Entry<Integer, Entry> entry : possibilities.entrySet()){
            output += "Roll: " + entry.getKey().toString() + "    Times Rolled: " + entry.getValue().rolls + "     %" + entry.getValue().getPossibility(diceA.getRolls()) + "\n";
        }

        return output;
    }

    
}
