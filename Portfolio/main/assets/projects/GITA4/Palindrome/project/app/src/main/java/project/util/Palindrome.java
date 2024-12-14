package project.util;

public class Palindrome{
    
    private String value;

    public Palindrome(String value){
        this.value = value;
    }

    public boolean isEmpty(){
        return value == null;
    }

    public String getValue(){
        return value;
    }

    public void setValue(String newValue){
        value = newValue;
    }

    public String simplify(){
        return value.toLowerCase().replace(" ", ""); //make lowercase, then remove all spaces
    }
    
    public boolean isPalindrome(){
        String reversed = new StringBuilder(simplify()).reverse().toString();

        return reversed.equals(simplify());
    }
}
