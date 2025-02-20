package project;

public class QualityControl extends Product{

    private int satisfaction;
    private int quality;
    
    public QualityControl(String name, double price, int quantity, int satisfaction, int quality){
        super(name, price, quantity);

        if(satisfaction < 1 || satisfaction > 10)
            throw new IllegalArgumentException("Satisfaction needs to be from 1-10!");
        if(quality < 1 || quality > 10)
            throw new IllegalArgumentException("Quality needs to be from 1-10!");

        this.satisfaction = satisfaction;
        this.quality = quality;
    }

    public int getSatisfaction(){
        return satisfaction;
    }

    public int getQuality(){
        return quality;
    }

    @Override
    public String toString() {
        String tab = "\t" + "-" + "\t";

        String output = 
            getItem() + tab +
            "$" + String.valueOf(getPrice()) + tab +
            String.valueOf(getQuantity()) + tab +
            String.valueOf(getSatisfaction()) + tab + 
            String.valueOf(getQuality());

        return output;
    }
}
