package test_project;

/*
 * Name: Aaron Yoon
 * Date: Aug 16
 * Project: this project teachs how to code labels and how to format them
 */

public class Main {
    
    public static void main(String[] args){
        // MyThing bob = new MyThing(4);

        // System.out.println(bob.value);

        // modify(bob);

        // System.out.println(bob.value);

        String oldSeq = "0000011";
        String segment = "11";

        String newSeq = "";

        for(int i = 0; i < oldSeq.length() - 1; i++){
            String sub = oldSeq.substring(i, i + 2);
            
            if(sub.equals(segment)){
                String pre = oldSeq.substring(0, i);
                String post = oldSeq.substring(i + 2, oldSeq.length());
                newSeq = pre + post;
                break;
            }
        }

        System.out.println(newSeq);
    }

    public static void modify(MyThing thing){
        thing.value = 100;
    }

    public static class MyThing{

        public double value;

        public MyThing(double value){
            this.value = value;
        }


    }
}
