package project;

public class Student extends PersonClass{

    private double gpa;
    
    public Student(String first, String last, String address, String city, String state, String zip, String phone, double gpa){
        super(first, last, address, city, state, zip, phone);
        this.gpa = gpa;
    }

    public double getGPA(){
        return gpa;
    }

    @Override
    public String getPhone() {
        return strPhone + "x2222";
    }
}
