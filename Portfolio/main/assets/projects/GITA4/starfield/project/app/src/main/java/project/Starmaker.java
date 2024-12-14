package project;

public class Starmaker {

    public enum Shape{
        DOWN_RIGHT,
        UP_RIGHT,
        UP_LEFT
    }

    String[][] grid = new String[10][10];

    private int length, width;
    
    public Starmaker(int length, int width){
        this.length = length;
        this.width = width;

        fillGrid();
    }

    public void fillGrid(){

        for(int i = 0; i < length; i++){

            for(int j = 0; j < width; j++){
                grid[i][j] = " ";
            }
        }

    }

    public String createShape(Shape shape){

        fillGrid();

        switch(shape){

            case DOWN_RIGHT:
            
                for(int i = 0; i < length; i++){

                    for(int j = 0; j < i; j++){
                        grid[i][j] = "*";
                    }
                }

                break;

            case UP_RIGHT:

                for(int i = 0; i < length; i++){

                    for(int j = 0; j < length - i; j++){
                        grid[i][j] = "*";
                    }
                }

                break;

            case UP_LEFT:

                for(int i = 0; i < length; i++){

                    for(int j = 0; j < length - i; j++){
                        grid[i][j + i] = "*";
                    }
                }

                break;
        }

        return formatGrid();
    }

    public String formatGrid(){
        String output = "";

        for(String[] row : grid){
            for(String cell : row){
                output += cell;
            }

            output += "\n";
        }

        return output;
    }


}
