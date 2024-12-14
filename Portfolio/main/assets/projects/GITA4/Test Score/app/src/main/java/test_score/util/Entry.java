package test_score.util;

import java.util.ArrayList;
import java.util.HashMap;

import org.checkerframework.checker.units.qual.radians;

public class Entry {

    public double score;

    public Entry(double score){
        this.score = score;
    }

    public String getLetterGrade(){

        switch((int)(score / 10)){
            case 10: case 9: 
                return "A";
            case 8:
                return "B";
            case 7:
                return "C";
            case 6:
                return "D";

            default:
                return "F";
        }
    }

    public String toText(){
        return 
        "Score: " + score + Constants.TAB + 
        "Grade: " + getLetterGrade() + Constants.LINEBREAK;
    }

    public static double getAccumulatedScore(ArrayList<Entry> entries){
        double sum = 0;
        
        for(Entry entry : entries){
            sum += entry.score;
        }

        return sum;
    }
}
