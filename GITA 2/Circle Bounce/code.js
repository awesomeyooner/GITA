 //makes variables for each circle
 var moveXOne = 10*1;
 var moveYOne = 10*1;

 var moveXTwo = -10*1;
 var moveYTwo = -10*1;

 var colorOne = "#0000FF";
 var colorTwo = "#FF0000";

 //defines the boundaries of the canvas as varaibles to make it easier to hot swap
 var canvasBoundX = 500;
 var canvasBoundY = 200;

 //places circles in random locations
 var xCoordOne = Math.floor(Math.random() * (canvasBoundX - 100)) + 50;
 var yCoordOne = Math.floor(Math.random() * (canvasBoundY - 100)) + 50;

 var xCoordTwo = Math.floor(Math.random() * (canvasBoundX - 100)) + 50;
 var yCoordTwo = Math.floor(Math.random() * (canvasBoundY - 100)) + 50;

 var isOn = false;
 //used for timer to determine if it is on or not
 

 //paints a circle on the canvas
 function drawCircle(){
     var canvas = document.getElementById("myCanvas");
     var context = canvas.getContext("2d");
     //paint the background of the canvas
     context.fillStyle="#ADD8E6";
     context.fillRect(0, 0, canvasBoundX, canvasBoundY);

     //draw the circle one
     context.fillStyle = colorOne;
     context.beginPath();
     context.arc(xCoordOne, yCoordOne, 15, 0, 2 * Math.PI, true);
     context.closePath();
     context.fill();

     //draw circle two
     context.fillStyle = colorTwo;
     context.beginPath();
     context.arc(xCoordTwo, yCoordTwo, 15, 0, 2 * Math.PI, true);
     context.closePath();
     context.fill();
 }
 

 function move(){
     //momves circle ~10px

     //if circle hits horizontal edge then change x direction
     if(xCoordOne > (canvasBoundX - 15) || xCoordOne < 15){
         //moveXOne = -Math.sign(moveXOne) * Math.floor(Math.random() * 10);
         moveXOne *= -1;
     }
     
     //if circle hits vertical edge then change y direction
     if(yCoordOne > (canvasBoundY - 15) || yCoordOne < 15){
         //moveYOne = -Math.sign(moveYOne) * Math.floor(Math.random() * 10);
         moveYOne *= -1;
     }

     if(xCoordTwo > (canvasBoundX - 15) || xCoordTwo < 15){
         //moveXOne = -Math.sign(moveXOne) * Math.floor(Math.random() * 10);
         moveXTwo *= -1;
     }
     
     if(yCoordTwo > (canvasBoundY - 15) || yCoordTwo < 15){
         //moveYOne = -Math.sign(moveYOne) * Math.floor(Math.random() * 10);
         moveYTwo *= -1;
     }

     //if the circle contact then change direction for both circles and toggle the color
     if(contact()){
         moveXOne *= -1;
         moveYOne *= -1;
         moveXTwo *= -1;
         moveYTwo *= -1;

         toggleColor();
     }

     //change the coordinates of the circles
     xCoordOne += moveXOne;
     yCoordOne += moveYOne;

     xCoordTwo += moveXTwo;
     yCoordTwo += moveYTwo;

     //moves cirlces to new coordinates
     drawCircle();
 }

 function contact(){
     //if the circles are within a circle threshold then return true
     return Math.abs(xCoordOne - xCoordTwo) <= 20 && Math.abs(yCoordOne - yCoordTwo) <= 20;
 }

 function toggleColor(){
     //if the color is blue then make it green, if no then make it blue
     (colorOne == "#0000FF") ? colorOne = "#008000" : colorOne = "#0000FF";

     //if the color is red then make it purple, if not then make it red
     (colorTwo == "#FF0000") ? colorTwo = "#800080" : colorTwo = "#FF0000";
 }

 function toggleTimer(){
     //if the timer is on the turn it off, if its not then turn it on
     isOn ? turnOff() : turnOn();
 }

 function turnOn(){
     //turns the timer on
     timer = setInterval("move()", 50);
     isOn = true;
 }

 function turnOff(){
     //turns the timer off
     clearInterval(timer);
     isOn = false;
 }