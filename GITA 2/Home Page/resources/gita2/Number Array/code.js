//Programmer: Aaron Yoon
//Project: calculate certain things about numbers in an array
//Date: 12/12/23

//declare an array object to hold integers
var numberArray = new Array();
	
var arrayCap = 1000;
	
	function calculate()
	{	
         var myNumbers = "";

         var inputNum = inputForm.textBox.value;

         var highest = 0;
         var lowest = 100;
         var total = 0;
         var even = 0;
         var odd = 0;
         var inputAppeared = false;
         var position = 0;
         var totalInputCount = 0;

         //searching for something 
        for(var i = 0; i < numberArray.length; i++){
            //make a variable to make things easier 
            currentNumber = numberArray[i];

            //adds the current number to the total to find average later
            total += currentNumber;

            //if the current number is divisable by 2, then it is even. If it isnt then it is odd
            if(currentNumber % 2 == 0)
                even++;
            else
                odd++;

            //if the current number is higher than the current highest number, then make that the new highest
            if(currentNumber > highest)
                highest = currentNumber;
            
            //if the current number is lower than the current lowest number, then make that the new lowest
            if(currentNumber < lowest)
                lowest = currentNumber;

            //if the current number is equal to the input num then add to the total input appearances,
            //if the position has not been changed yet then change it;
            if(currentNumber == inputNum){
                totalInputCount++;
                
                if(!inputAppeared){
                    inputAppeared = true;
                    position = i;
                }
            }
            
        }
        
        //have if the number was not in the array then say it was not in the array instead of saying -1 as the position
		var positionText = inputAppeared ? position.toString() : "Not in array";

        //output the text
		document.outputForm.txaoutputField.value =
			"Chosen Number: " + inputNum + "\n" +
            "First Position: " + positionText + "\n" + 
            "Total Chosen Number Appearances: " + totalInputCount + "\n" +
            "Highest Number Found: " + highest + "\n" +
            "Lowest Number Found: " + lowest + "\n" +
            "Average Value: " + (total / 1000) + "\n" + 
            "Odd Numbers: " + odd + "\n" +
            "Even Numbers: " + even + "\n";

	
	}

    function resetArray(){
        //resets the array
        for(var i = 0; i < arrayCap; i++){
            numberArray[i] = Math.floor(Math.random() * 1000) + 1;
         }
    }