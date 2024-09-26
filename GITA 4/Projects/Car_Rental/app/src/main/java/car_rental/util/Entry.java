package car_rental.util;

import java.util.HashMap;

public class Entry {

    public enum UserEntry{
        NAME,
        ADDRESS,
        CITY,
        STATE,
        ZIP_CODE
    }

    public enum CarEntry{
        INITIAL_ODOM,
        FINAL_ODOM,
        DAYS
    }

    public HashMap<UserEntry, String> userInfo = new HashMap<>();
    public HashMap<CarEntry, Double> carInfo = new HashMap<>();
    
    public Entry(){}

    public String toText(){
        return "Name: " + userInfo.get(UserEntry.NAME) + Constants.LINEBREAK +
        "Address: " + userInfo.get(UserEntry.ADDRESS) + Constants.LINEBREAK +
        "City: " + userInfo.get(UserEntry.CITY) + Constants.LINEBREAK +
        "State: " + userInfo.get(UserEntry.STATE) + Constants.LINEBREAK +
        "Zip Code: " + userInfo.get(UserEntry.ZIP_CODE) + Constants.LINEBREAK +
        "Total Miles: " + getMiles() + Constants.LINEBREAK +
        "Total Price: " + "$" + getPrice() + Constants.LINEBREAK + 
        Constants.LINEBREAK;
    }

    public double getMiles(){
        return CommonConversion.round(
            carInfo.get(CarEntry.FINAL_ODOM) - carInfo.get(CarEntry.INITIAL_ODOM),
            3
        );
    }

    public double getPrice(){
        return CommonConversion.round(
            (getMiles() * 1.25) + (carInfo.get(CarEntry.DAYS) * 150.00),
            2  
        );
    }

}
