class Utility{

    static getDistance(one, two){
        return Math.sqrt(
            Math.pow(one.x - two.x, 2) + Math.pow(one.y - two.y, 2)
        );
    }

    static toCartesian(x, y, maxX, maxY){
        return {
            x : this.toCartesianX(x, maxX),
            y : this.toCartesianY(y, maxY)
        };
    }
    
    static toCartesianX(x, maxX){
        return x + (maxX /2);
    }

    static toCartesianY(y, maxY){
        return -(y - (maxY / 2));
    }

    static greenToRedGradient(input, max){
        //green is 00FF00
        var percent = (input / max); //make it from 0 to 1

        var redVariance = Math.floor((1 - percent) * 100);
        var greenVariance = Math.floor(percent * 100);

        var red = "00";
        var green = "00";

        if(percent == 1)
            green = "FF";
        else{
            if(greenVariance < 10)
                green = "0" + greenVariance.toString();
            else
                green = greenVariance.toString();
        }

        if(percent == 0)
            red == "FF";
        else{
            if(redVariance < 10)    
                red = "0" + redVariance.toString();
            else    
                red = redVariance.toString();
        }

        return "#" + red + green + "00";
    }

    static log(input, max){

        
        var percent = (input / max); //make it from 0 to 1

        var redVariance = Math.floor((1 - percent) * 100);
        var greenVariance = Math.floor(Math.pow(percent, 2) * 100);

        var red = "00";
        var green = "00";

        if(percent == 1)
            green = "FF";
        else{
            if(greenVariance < 10)
                green = "0" + greenVariance.toString();
            else
                green = greenVariance.toString();
        }

        if(percent < 1)
            red = "FF";
        else{
            if(redVariance < 10)    
                red = "0" + redVariance.toString();
            else    
                red = redVariance.toString();
        }

        return "#" + red + green + "00";
    }
}
