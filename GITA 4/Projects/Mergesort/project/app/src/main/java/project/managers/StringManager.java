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

            String current = unsorted[i];
            String previous = unsorted[i - 1];

            //positive if the first is higher up than the parameter
            //negative if the first is lesser (closer to A) than the parameter
            //zero if they are the same
            int lexiDelta = current.toLowerCase().compareTo(previous.toLowerCase());

            //if current is CLOSER TO A than previous
            boolean lesser = lexiDelta < 0;

            if(!lesser){
                buffer[i] = current;
                System.out.println("Not Inserted");
                Utility.printArray(buffer);
            }
            else{
                for(int j = 0; j < buffer.length; j++){
                    if(buffer[j] == null)
                        continue;

                    String currentBuffer = buffer[j];
                    
                    int lexiDeltaBuffer = current.toLowerCase().compareTo(currentBuffer.toLowerCase());

                    boolean lesserBuffer = lexiDeltaBuffer < 0;

                    if(lesserBuffer){
                        buffer = Utility.insertAt(buffer, current, j);
                        System.out.println("Insert" + current);
                        Utility.printArray(buffer);
                        break;
                    }
                }
            }
        }

        return buffer;
    }
}
