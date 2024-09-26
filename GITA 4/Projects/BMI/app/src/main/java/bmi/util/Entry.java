package bmi.util;

public class Entry {

    public String name;
    public double heightMeters;
    public double weightKilos;
    public double bmi;
    
    public Entry(String name, double heightInches, double weightPounds){
        this.name = name;
        this.heightMeters = CommonConversion.inchesToMeters(heightInches);
        this.weightKilos = CommonConversion.poundToKilos(weightPounds);

        bmi = weightKilos / (Math.pow(heightMeters, 2));
    }

    public String toText(){
        return name + "   " + CommonConversion.round(bmi, 2) + Constants.LINEBREAK;
    }


}
