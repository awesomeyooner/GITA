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

    public static <T> T[] append(T[] array, T thingToAppend){
        for(int i = 0; i < array.length; i++){
            if(array[i] == null){
                array[i] = thingToAppend;
                break;
            }
        }

        return array;
    }

    public static <T> T[] pop(T[] array){
        for(int i = array.length - 1; i >= 0; i--){
            if(array[i] != null){
                array[i] = null;
                break;
            }
        }

        return array;
    }

    public static <T> T[] insertAt(T[] array, T insert, int index){
        
        for(int i = array.length - 1; i >= index; i--){
            if(array[i] == null)
                continue;

            array[i + 1] = array[i];
        }

        array[index] = insert;

        return array;
    }

    public static <T> boolean atEndOfArray(T[] array, int index){
        return array[index + 1] == null;
    }

    public static <T> void printArray(T[] array){
        for(T value : array){
            System.out.println(value);
        }
    }

    public static double random(double lower, double upper){
        return (Math.random() * (upper - lower)) + lower;
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
