package craps;

import java.util.HashMap;
import java.util.Map;

import craps.util.Constants;

public class GameManager {
    
    public enum GameState{
        ONGOING,
        WON,
        LOST
    }

    public enum Outcome{
        SEVEN_ELEVEN(GameState.WON),
        POINTS(GameState.WON),
        
        CRAPS(GameState.LOST),
        UNLUCKY_SEVEN(GameState.LOST);

        public final GameState state;

        private Outcome(GameState state){
            this.state = state;
        }
    }

    private static GameManager instance = new GameManager();

    private GameState state = GameState.ONGOING;

    private int points = 0;

    private HashMap<Outcome, Integer> possibilities = new HashMap<>();

    public GameManager(){
        initHashmap();
    }

    public static GameManager getInstance(){
        return instance;
    }

    private void initHashmap(){
        for(Outcome outcome : Outcome.values()){
            possibilities.put(outcome, 0);
        }
    }

    public HashMap<Outcome, Integer> getPossibilities(){
        return possibilities;
    }

    public GameState getState(){
        return state;
    }

    public int getPoints(){
        return points;
    }

    public void setState(GameState newState){
        state = newState;
    }

    public void playGame(int sum){
        if((sum == 7 && isFirstRoll()) || sum == 11)
            update(Outcome.SEVEN_ELEVEN);
        else if(isFirstRoll() && (sum == 2 || sum == 3 || sum == 12))
            update(Outcome.CRAPS);
        else if(sum == points)
            update(Outcome.POINTS);
        else if(sum == 7 && points != 0)
            update(Outcome.UNLUCKY_SEVEN);
        else if(isFirstRoll())
            points += sum;   
    }

    private boolean isFirstRoll(){
        return points == 0;
    }

    private void update(Outcome outcome){
        setState(outcome.state);
        possibilities.put(outcome, possibilities.get(outcome) + 1);
    }

    public void reset(){
        setState(GameState.ONGOING);
        points = 0;
    }

    public String getStats(){
        String output = "";

        for(Map.Entry<Outcome, Integer> entry : possibilities.entrySet()){
            output += entry.getKey().toString() + ": " + entry.getValue().toString() + Constants.LINEBREAK;
        }

        return output;
    }
}
