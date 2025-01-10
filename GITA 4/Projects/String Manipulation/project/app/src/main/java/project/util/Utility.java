package project.util;

public class Utility {
    
    /**
     * Rounds input to the nearest decimal
     * @param input the number you want to round
     * @param decimals how many decimals you want, 1 will be to the tenths, 2 will be hundreths and so on
     * @return the number but rounded
     */
    public static double round(double input, int decimals){
        return (double)((int)(input * Math.pow(10, decimals))) / Math.pow(10, decimals);
    }
    
    public static double inchesToMeters(double inches){
        return inches * 0.0254;
    }

    public static double poundToKilos(double pounds){
        return pounds * 0.454;
    }

    public static <T> void append(T[] array, T thingToAppend){
        for(int i = 0; i < array.length; i++){
            if(array[i] == null){
                array[i] = thingToAppend;
                break;
            }
        }
    }

    public static <T> void pop(T[] array){
        for(int i = array.length; i >= 0; i--){
            if(array[i] != null){
                array[i] = null;
                break;
            }
        }
    }

    public static void sleep(int millis){
        try{
            Thread.sleep(10);
        } 
        catch(InterruptedException exception){
            exception.printStackTrace();
        }
    }
}
