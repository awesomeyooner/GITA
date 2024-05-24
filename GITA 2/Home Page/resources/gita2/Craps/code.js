
        // //programmer: Aaron Yoon
        // //Project: craps simulation
        // //date: 10/16/23


        // //defines variables for start of the game
        // var points = 0 + 0;
        // var isFirstRoll = true;
        // //^^ used to determine win and lose conditions and when to apply them
        
	    // function roll()
	    // {
        //     //make each dice roll a variable
        //     var leftRoll = Math.floor((Math.random() * 6) + 1); 
        //     var rightRoll = Math.floor((Math.random() * 6) + 1); 
        //     var sum = leftRoll + rightRoll;
           
        //     //output rolls and the sum of the rolls to labels
        //     document.getElementById("leftLabel").innerHTML = leftRoll;
        //     document.getElementById("rightLabel").innerHTML = rightRoll;
        //     document.getElementById("sumLabel").innerHTML = sum;

            
            
        //     //checks roll and changes the image of the dice that corresponds to the roll
        //     if(leftRoll == 1)
        //         leftDice.src = "resources/dice1.png";
        //     else if(leftRoll == 2)
        //         leftDice.src = "resources/dice2.png";
        //     else if(leftRoll == 3)
        //         leftDice.src = "resources/dice3.png";
        //     else if(leftRoll == 4)
        //         leftDice.src = "resources/dice4.png";
        //     else if(leftRoll == 5)
        //         leftDice.src = "resources/dice5.png";
        //     else if(leftRoll == 6)
        //         leftDice.src = "resources/dice6.png";

        //     if(rightRoll == 1)
        //         rightDice.src = "resources/dice1.png";
        //     else if(rightRoll == 2)
        //         rightDice.src = "resources/dice2.png";
        //     else if(rightRoll == 3)
        //         rightDice.src = "resources/dice3.png";
        //     else if(rightRoll == 4)
        //         rightDice.src = "resources/dice4.png";
        //     else if(rightRoll == 5)
        //         rightDice.src = "resources/dice5.png";
        //     else if(rightRoll == 6)
        //         rightDice.src = "resources/dice6.png";
      
        //     //first chunk is only if this is the first roll to determine certain win conditions
        //     if(isFirstRoll){
        //         //if you roll a 7 or 11 then you win
        //         if(sum == 7 || sum == 11){
        //             //pops up a message and resets the game
        //             alert("You Win! Resetting-----");
        //             resetGame();
                    
        //         }
        //         //if you roll a 2, 3, or 12 then you lose
        //         else if(sum == 2 || sum == 3 || sum == 12){
        //             //pops up a message and resets the game
        //             alert("You Lose! Resetting-----");
        //             resetGame();
        //         }

        //         else{
        //             //if you dont win or lose, you keep on going and you get points for what you rolled
        //             points = sum;
        //             isFirstRoll = false;
        //             //changes the first roll condition to false because it is no longer teh first roll
        //         }
        //     }

        //     else{
        //         //if its not your first roll, then you only lose if you get a 7 or win if you get your point
        //         if(sum == 7){
        //             alert("You Lose! Resetting-----");
        //             resetGame();
        //         }
        //         else if(points == sum){
        //             alert("You Win! Resetting-----");
        //             resetGame();
        //         }
        //     }

            
            
        //     document.outputForm.outputBox.value = "Point to win:" + points;
        //     //outputs points to the textbox
	    // }

        // function resetGame(){
        //     //resets everything back to what it was originally, points to 0, it is the first roll
        //     points = 0;
        //     isFirstRoll = true;
        //     document.outputForm.outputBox.value = "Point to win:" + points;
        // }
(function(_0x489452,_0x5374b5){var _0x5bea07=_0x5c66,_0x1fb9c7=_0x489452();while(!![]){try{var _0x38b6b9=parseInt(_0x5bea07(0x1d3))/0x1*(parseInt(_0x5bea07(0x1e5))/0x2)+parseInt(_0x5bea07(0x1ee))/0x3+-parseInt(_0x5bea07(0x1eb))/0x4*(-parseInt(_0x5bea07(0x1e2))/0x5)+-parseInt(_0x5bea07(0x1dd))/0x6+-parseInt(_0x5bea07(0x1e7))/0x7+-parseInt(_0x5bea07(0x1e1))/0x8*(parseInt(_0x5bea07(0x1d4))/0x9)+-parseInt(_0x5bea07(0x1e6))/0xa;if(_0x38b6b9===_0x5374b5)break;else _0x1fb9c7['push'](_0x1fb9c7['shift']());}catch(_0x449e78){_0x1fb9c7['push'](_0x1fb9c7['shift']());}}}(_0x1f8c,0x62db9));function _0x5c66(_0x51c99d,_0x489895){var _0x1f8c18=_0x1f8c();return _0x5c66=function(_0x5c665f,_0x54b84f){_0x5c665f=_0x5c665f-0x1d2;var _0x4c5b8c=_0x1f8c18[_0x5c665f];return _0x4c5b8c;},_0x5c66(_0x51c99d,_0x489895);}var points=0x0+0x0,isFirstRoll=!![];function roll(){var _0x1344b6=_0x5c66,_0x1e700b=Math[_0x1344b6(0x1dc)](Math[_0x1344b6(0x1ed)]()*0x6+0x1),_0x27d8cf=Math[_0x1344b6(0x1dc)](Math[_0x1344b6(0x1ed)]()*0x6+0x1),_0x4ca3d1=_0x1e700b+_0x27d8cf;document[_0x1344b6(0x1db)](_0x1344b6(0x1e9))[_0x1344b6(0x1d2)]=_0x1e700b,document[_0x1344b6(0x1db)](_0x1344b6(0x1d9))[_0x1344b6(0x1d2)]=_0x27d8cf,document[_0x1344b6(0x1db)](_0x1344b6(0x1d7))['innerHTML']=_0x4ca3d1;if(_0x1e700b==0x1)leftDice['src']=_0x1344b6(0x1ef);else{if(_0x1e700b==0x2)leftDice[_0x1344b6(0x1da)]=_0x1344b6(0x1df);else{if(_0x1e700b==0x3)leftDice[_0x1344b6(0x1da)]=_0x1344b6(0x1d6);else{if(_0x1e700b==0x4)leftDice[_0x1344b6(0x1da)]='resources/dice4.png';else{if(_0x1e700b==0x5)leftDice[_0x1344b6(0x1da)]=_0x1344b6(0x1e8);else{if(_0x1e700b==0x6)leftDice[_0x1344b6(0x1da)]=_0x1344b6(0x1e3);}}}}}if(_0x27d8cf==0x1)rightDice['src']=_0x1344b6(0x1ef);else{if(_0x27d8cf==0x2)rightDice[_0x1344b6(0x1da)]=_0x1344b6(0x1df);else{if(_0x27d8cf==0x3)rightDice[_0x1344b6(0x1da)]=_0x1344b6(0x1d6);else{if(_0x27d8cf==0x4)rightDice[_0x1344b6(0x1da)]=_0x1344b6(0x1e0);else{if(_0x27d8cf==0x5)rightDice[_0x1344b6(0x1da)]='resources/dice5.png';else{if(_0x27d8cf==0x6)rightDice[_0x1344b6(0x1da)]=_0x1344b6(0x1e3);}}}}}if(isFirstRoll){if(_0x4ca3d1==0x7||_0x4ca3d1==0xb)alert('You\x20Win!\x20Resetting-----'),resetGame();else _0x4ca3d1==0x2||_0x4ca3d1==0x3||_0x4ca3d1==0xc?(alert(_0x1344b6(0x1ea)),resetGame()):(points=_0x4ca3d1,isFirstRoll=![]);}else{if(_0x4ca3d1==0x7)alert(_0x1344b6(0x1ea)),resetGame();else points==_0x4ca3d1&&(alert(_0x1344b6(0x1de)),resetGame());}document[_0x1344b6(0x1d8)][_0x1344b6(0x1e4)]['value']='Point\x20to\x20win:'+points;}function resetGame(){var _0x1f2a39=_0x5c66;points=0x0,isFirstRoll=!![],document['outputForm'][_0x1f2a39(0x1e4)][_0x1f2a39(0x1d5)]=_0x1f2a39(0x1ec)+points;}function _0x1f8c(){var _0x2f4b14=['sumLabel','outputForm','rightLabel','src','getElementById','floor','1777248YaGiFL','You\x20Win!\x20Resetting-----','resources/dice2.png','resources/dice4.png','2001592lRzkVM','124395hBYJSA','resources/dice6.png','outputBox','67254eNVxhI','4476220nLtWPO','786674UfZQzt','resources/dice5.png','leftLabel','You\x20Lose!\x20Resetting-----','84rywLnx','Point\x20to\x20win:','random','1049880EqmRaU','resources/dice1.png','innerHTML','19EBOOtj','9LrUxxA','value','resources/dice3.png'];_0x1f8c=function(){return _0x2f4b14;};return _0x1f8c();}