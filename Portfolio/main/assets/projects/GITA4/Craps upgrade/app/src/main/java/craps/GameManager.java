package craps;

import java.util.HashMap;
import java.util.Map;

import craps.util.Constants;
import craps.util.CommonConversion;

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
        if((isFirstRoll()) && (sum == 11 || sum == 7))
            update(Outcome.SEVEN_ELEVEN);
        else if(isFirstRoll() && (sum == 2 || sum == 3 || sum == 12))
            update(Outcome.CRAPS);
        else if(sum == points)
            update(Outcome.POINTS);
        else if(!isFirstRoll() && sum == 7)
            update(Outcome.UNLUCKY_SEVEN);
        else if(isFirstRoll())
            points += sum;   
    }

    private boolean isFirstRoll(){
        return points == 0;
    }

    public boolean isOngoing(){
        return getState() == GameState.ONGOING;
    }

    private void update(Outcome outcome){
        setState(outcome.state);
        possibilities.put(outcome, possibilities.get(outcome) + 1);
    }

    public void reset(){
        setState(GameState.ONGOING);
        points = 0;
    }

    private int getTotalGamesPlayed(){
        int totalGames = 0;

        for(Map.Entry<Outcome, Integer> entry : possibilities.entrySet()){
            totalGames += entry.getValue().intValue();
        }

        return totalGames;
    }

    private int getWins(){
        int wins = 0;

        for(Map.Entry<Outcome, Integer> entry : possibilities.entrySet()){

            if(entry.getKey().state == GameState.WON)
                wins += entry.getValue().intValue();
        }

        return wins;
    }

    private int getLosses(){
        int losses = 0;

        for(Map.Entry<Outcome, Integer> entry : possibilities.entrySet()){

            if(entry.getKey().state == GameState.LOST)
                losses += entry.getValue().intValue();
        }

        return losses;
    }

    public String getStats(){
        String output = "";

        int totalGames = getTotalGamesPlayed();

        int wins = getWins();
        int losses = getLosses();

        output += "Chances of Winning: " + CommonConversion.round(100 * (double)wins / (double)totalGames, 3) + "%" + "\n";


        return output;
    }
}
