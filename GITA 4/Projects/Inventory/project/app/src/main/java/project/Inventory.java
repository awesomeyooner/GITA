package project;

import java.util.ArrayList;

public class Inventory {

    private ArrayList<Product> products;

    public Inventory(){
        products = new ArrayList<>();
    }

    public void addNewProduct(String item, double price, int quantity){
        //preconditions
        if(item.isBlank() || item == null)
            throw new IllegalArgumentException("Item is not a proper name!");
    
        if(price < 0)
            throw new IllegalArgumentException("Price cannot be negative!");

        if(quantity < 0)
            throw new IllegalArgumentException("Quantity cannot be negative!");

        //create product object
        Product product = new Product(item.toLowerCase(), price, quantity);

        int insertIndex = 0;

        //alphabet check
        for(int i = 0; i < products.size(); i++){
            
            Product compared = products.get(i);

            boolean skip = false;
            boolean breakLoop = false;

            for(int c = 0; c < Math.min(product.getItem().length(), compared.getItem().length()); c++){
                char comparedChar = compared.getItem().charAt(c);
                char newChar = product.getItem().charAt(c);

                //if the two chars are equal, then skip to the next char
                if((int)newChar == (int)comparedChar){
                    continue;
                }   

                //if newChar is greater than comparedChar, then skip over the current product
                else if((int)newChar > (int)comparedChar){
                    skip = true;

                    //if this is the last product youre comparing, then just add the new product to the end of the list
                    if(i == products.size() - 1){
                        insertIndex = i + 1;
                    }

                    break;
                }

                //if newChar is closer to A than comparedChar, then insert at current i and break the search loop
                else if((int)newChar < (int)comparedChar){
                    insertIndex = i;
                    breakLoop = true;
                    break;
                }
            }

            if(skip)
                continue;

            if(breakLoop)
                break;
        }
        
        products.add(insertIndex, product);
    }

    public ArrayList<String> getLowStockedProducts(int threshold){
        ArrayList<String> lowProducts = new ArrayList<>();

        for(Product product : products){
            if(product.getQuantity() < threshold)
                lowProducts.add(product.getItem());
        }

        return lowProducts;
    }

    public ArrayList<String> mustOrder(){
        return getLowStockedProducts(20);
    }

    public String toString(){

        String tab = "\t" + "-" + "\t";

        String output = 
            "Item" + tab + "Price" + tab + "Quantity" + "\n" +
            "===========================================" + "\n";

        for(Product product : products){
            output += product.toString() + "\n";
        }

        output += "\n" + "Must Order:" + "\n";

        for(String product : mustOrder()){
            output += product + "\n";
        }

        return output;  
    }
}
