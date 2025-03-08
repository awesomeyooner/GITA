package project.managers;

import javax.swing.text.Utilities;

import project.util.Utility;

public class StringManager {
    
    public static String[] sortAZ(String[] unsorted){
        String[] buffer = new String[unsorted.length];

        for(int i = 0; i < unsorted.length; i++){
            if(unsorted[i] == null)
                continue;

            if(i == 0){
                buffer[0] = unsorted[0];
                continue;
            }

            String currentUnsorted = unsorted[i];

            for(int j = 0; j < buffer.length; j++){
                if(buffer[j] == null)
                    continue;

                String currentBuffer = buffer[j];
                
                //positive if the first is higher up than the parameter
                //negative if the first is lesser (closer to A) than the parameter
                //zero if they are the same
                int lexiDelta = currentUnsorted.toLowerCase().compareTo(currentBuffer.toLowerCase());

                boolean lesser = lexiDelta < 0;

                if(lesser){
                    buffer = Utility.insertAt(buffer, currentUnsorted, j);
                    break;
                }

                if(j != buffer.length - 1 && Utility.atEndOfArray(buffer, j)){
                    buffer = Utility.append(buffer, currentUnsorted);
                    break;
                }
            }
        }

        return buffer;
    }

    public static String[] sortZA(String[] unsorted){
        String[] buffer = new String[unsorted.length];

        for(int i = 0; i < unsorted.length; i++){
            if(unsorted[i] == null)
                continue;

            if(i == 0){
                buffer[0] = unsorted[0];
                continue;
            }

            String currentUnsorted = unsorted[i];

            for(int j = 0; j < buffer.length; j++){
                if(buffer[j] == null)
                    continue;

                String currentBuffer = buffer[j];
                
                //positive if the first is higher up than the parameter
                //negative if the first is lesser (closer to A) than the parameter
                //zero if they are the same
                int lexiDelta = currentUnsorted.toLowerCase().compareTo(currentBuffer.toLowerCase());

                boolean greater = lexiDelta > 0;

                if(greater){
                    buffer = Utility.insertAt(buffer, currentUnsorted, j);
                    break;
                }

                if(j != buffer.length - 1 && Utility.atEndOfArray(buffer, j)){
                    buffer = Utility.append(buffer, currentUnsorted);
                    break;
                }
            }
        }

        return buffer;
    }

    //This is incredibly inefficient! I wish to change this in the future
    public static String[] mergeArrays(String[] a, String[] b){
        String[] buffer = new String[a.length + b.length];

        for(int i = 0; i < a.length; i++){
            buffer = Utility.append(buffer, a[i]);
        }

        for(int i = 0; i < b.length; i++){
            buffer = Utility.append(buffer, b[i]);
        }

        return buffer;
    }

    public static String[] mergeSortAZ(String[] a, String[] b){
        return sortAZ(mergeArrays(a, b));
    }

    public static String[] mergeSortZA(String[] a, String[] b){
        return sortZA(mergeArrays(a, b));
    }
}
