package project;

import java.util.ArrayList;

public class Inventory {

    private ArrayList<QualityControl> products;

    public Inventory(){
        products = new ArrayList<>();
    }

    public void addNewProduct(String item, double price, int quantity, int satisfaction, int quality){

        //create product object
        QualityControl product = new QualityControl(item.toLowerCase(), price, quantity, satisfaction, quality);

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

        for(QualityControl product : products){
            if(product.getQuantity() < threshold)
                lowProducts.add(product.getItem());
        }

        return lowProducts;
    }

    public ArrayList<String> getPoorProducts(int satisfactionThreshold, int qualityThreshold){
        ArrayList<String> poorProducts = new ArrayList<>();

        for(QualityControl product : products){
            if(product.getSatisfaction() < satisfactionThreshold || product.getQuality() < qualityThreshold)
                poorProducts.add(product.getItem());
        }

        return poorProducts;
    }

    public ArrayList<String> mustOrder(){
        return getLowStockedProducts(20);
    }

    public ArrayList<String> poorProducts(){
        return getPoorProducts(5, 5);
    }

    public String toString(){

        //quick macro
        String tab = "\t" + "-" + "\t";

        //header
        String output = 
            "Item" + tab + "Price" + tab + "Quantity" + tab + "Satisfaction" + tab + "Qualtiy" + "\n" + "=" + "\n";

        //list out all products
        for(Product product : products){
            output += product.toString() + "\n";
        }

        //=========================

        //header for must order
        output += "\n" + "Must Order:" + "\n" + "=" + "\n";
 
        //list out must order products
        for(String product : mustOrder()){
            output += product + "\n";
        }

        //==========================

        //header for products that are doing bad
        output += "\n" + "Poor Products:" + "\n" + "=" + "\n";

        //list out each one
        for(String product : poorProducts()){
            output += product + "\n";
        }

        return output;  
    }
}
