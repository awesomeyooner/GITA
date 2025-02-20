package project;

import project.util.Utility;

public class Product {
    private String item;
    private double price;
    private int quantity;

    public Product(String item, double price, int quantity){

        if(item.isBlank() || item == null)
            throw new IllegalArgumentException("Item is not a proper name!");
    
        if(price < 0)
            throw new IllegalArgumentException("Price cannot be negative!");

        if(quantity < 0)
            throw new IllegalArgumentException("Quantity cannot be negative!");

        this.item = item;
        this.price = Utility.round(price, 2);
        this.quantity = quantity;
    }

    public String getItem(){
        return item;
    }

    public double getPrice(){
        return price;
    }

    public int getQuantity(){
        return quantity;
    }

    @Override
    public String toString() {
        String output = 
            item + "\t" + "-" + "\t" +
            "$" + String.valueOf(price) + "\t" + "-" + "\t" +
            String.valueOf(quantity);

        return output;
    }
}
