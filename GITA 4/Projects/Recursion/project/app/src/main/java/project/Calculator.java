package project;

import project.util.Utility;

public class Calculator {
    
    public static Double[] getAllDividends(Double dividend, Double divisor, Double[] buffer){
        Double quotient = dividend / divisor;

        buffer = Utility.append(buffer, dividend);
        
        if(dividend / divisor >= 1){
            return getAllDividends(quotient, divisor, buffer);
        } 
        else
            return buffer;

    }

    public static Integer[] generateOddNumbers(Integer n, Integer[] buffer){
        Integer max = (n * 2) - 1;

        if(max >= 1){
            buffer = Utility.append(buffer, max);
            return generateOddNumbers(n - 1, buffer);
        }
        else
            return buffer;
    }

    public static StringBuilder reverseString(StringBuilder input){
        return reverseString(input, 0);
    }

    private static StringBuilder reverseString(StringBuilder input, int index){
        StringBuilder endpointsReversed = input;

        char start = input.charAt(index);
        char end = input.charAt((input.length() - 1) - index);

        endpointsReversed.setCharAt(index, end);
        endpointsReversed.setCharAt((input.length() -1) - index, start);

        if(index >= (input.length() / 2) + (input.length() % 2)){ //if index is greater than half of the length
            return endpointsReversed;
        }
        else
            return reverseString(endpointsReversed, index + 1);
    }

    public static int findSmallestFactor(int number){
        return findSmallestFactor(number, 1);
    }

    private static int findSmallestFactor(int number, int divisor){
        //if divisor goes into number cleanly and its not 1 or itself, then number is not prime
        if(divisor != 1 && number % divisor == 0){
            return divisor;
        }
        else{
            return findSmallestFactor(number, divisor + 1);
        }
    }

    public static int getSum(StringBuilder string){
        return getSum(string, 0);
    }

    private static int getSum(StringBuilder string, int index){
        int add = 0;

        if(index < string.length())
            add = getSum(string, index + 1);
        else
            return 0;

        return Character.getNumericValue(string.charAt(index)) + add;         
    }
}
