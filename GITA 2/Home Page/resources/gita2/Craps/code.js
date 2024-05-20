
        //programmer: Aaron Yoon
        //Project: craps simulation
        //date: 10/16/23


        //defines variables for start of the game
        var points = 0 + 0;
        var isFirstRoll = true;
        //^^ used to determine win and lose conditions and when to apply them
        
	    function roll()
	    {
            //make each dice roll a variable
            var leftRoll = Math.floor((Math.random() * 6) + 1); 
            var rightRoll = Math.floor((Math.random() * 6) + 1); 
            var sum = leftRoll + rightRoll;
           
            //output rolls and the sum of the rolls to labels
            document.getElementById("leftLabel").innerHTML = leftRoll;
            document.getElementById("rightLabel").innerHTML = rightRoll;
            document.getElementById("sumLabel").innerHTML = sum;

            
            
            //checks roll and changes the image of the dice that corresponds to the roll
            if(leftRoll == 1)
                leftDice.src = "resources/dice1.png";
            else if(leftRoll == 2)
                leftDice.src = "resources/dice2.png";
            else if(leftRoll == 3)
                leftDice.src = "resources/dice3.png";
            else if(leftRoll == 4)
                leftDice.src = "resources/dice4.png";
            else if(leftRoll == 5)
                leftDice.src = "resources/dice5.png";
            else if(leftRoll == 6)
                leftDice.src = "resources/dice6.png";

            if(rightRoll == 1)
                rightDice.src = "resources/dice1.png";
            else if(rightRoll == 2)
                rightDice.src = "resources/dice2.png";
            else if(rightRoll == 3)
                rightDice.src = "resources/dice3.png";
            else if(rightRoll == 4)
                rightDice.src = "resources/dice4.png";
            else if(rightRoll == 5)
                rightDice.src = "resources/dice5.png";
            else if(rightRoll == 6)
                rightDice.src = "resources/dice6.png";
      
            //first chunk is only if this is the first roll to determine certain win conditions
            if(isFirstRoll){
                //if you roll a 7 or 11 then you win
                if(sum == 7 || sum == 11){
                    //pops up a message and resets the game
                    alert("You Win! Resetting-----");
                    resetGame();
                    
                }
                //if you roll a 2, 3, or 12 then you lose
                else if(sum == 2 || sum == 3 || sum == 12){
                    //pops up a message and resets the game
                    alert("You Lose! Resetting-----");
                    resetGame();
                }

                else{
                    //if you dont win or lose, you keep on going and you get points for what you rolled
                    points = sum;
                    isFirstRoll = false;
                    //changes the first roll condition to false because it is no longer teh first roll
                }
            }

            else{
                //if its not your first roll, then you only lose if you get a 7 or win if you get your point
                if(sum == 7){
                    alert("You Lose! Resetting-----");
                    resetGame();
                }
                else if(points == sum){
                    alert("You Win! Resetting-----");
                    resetGame();
                }
            }

            
            
            document.outputForm.outputBox.value = "Point to win:" + points;
            //outputs points to the textbox
	    }

        function resetGame(){
            //resets everything back to what it was originally, points to 0, it is the first roll
            points = 0;
            isFirstRoll = true;
            document.outputForm.outputBox.value = "Point to win:" + points;
        }
