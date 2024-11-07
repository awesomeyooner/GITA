package project.util;

public class CommonConversion {
    
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

    public static double  nativeToCartesianX(double  x, double  width){
        double  cartesianX = x - Math.round(width / 2);

        return cartesianX;
    }

    public static double  nativeToCartesianY(double  y, double  height){
        double  cartesianY = -y + Math.round(height / 2);

        return cartesianY;
    }

    public static double  cartesianToNativeX(double  x, double  width){
        double  nativeX = x + Math.round(width / 2);

        return nativeX;
    }

    public static double  cartesianToNativeY(double  y, double  height){
        double  nativeY = -y + Math.round(height / 2);

        return nativeY;
    }
}
