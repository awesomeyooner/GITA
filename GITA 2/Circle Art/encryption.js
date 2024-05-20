//makes variables for each circle

var colorMain = "#0000FF";
var colorShade = "808080";

//defines the boundaries of the canvas as varaibles to make it easier to hot swap
var canvasBoundX = 500;
var canvasBoundY = 500;

var currentAngle = 0;

var angleCap = 2 * Math.PI;

//paints a circle on the canvas
function drawCircle(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    currentAngle = 0;

    angleCap = inputForm.circles.value * (Math.PI / 3);
    //paint the background of the canvas
    context.fillStyle="#ADD8E6";
    context.fillRect(0, 0, canvasBoundX, canvasBoundY);

    //draw the main circle;
    context.strokeStyle = colorMain;
    context.beginPath();
    context.arc(canvasBoundX / 2, canvasBoundY / 2, 200, 0, 2 * Math.PI, true);
    context.closePath();
    context.stroke();

    context.strokeStyle = colorMain;
    context.beginPath();
    context.arc(canvasBoundX / 2, canvasBoundY / 2, 75, 0, 2 * Math.PI, true);
    context.closePath();
    context.stroke();

    for(var i = 0; i < angleCap; i += Math.PI / 3){
        context.strokeStyle = colorMain;
        context.beginPath();
        context.arc((canvasBoundX / 2) + (100 * Math.cos(currentAngle)), (canvasBoundY / 2) - (100 * Math.sin(currentAngle)), 100, 0, 2 * Math.PI, true);
        context.closePath();
        context.stroke();
        
        currentAngle += Math.PI / 3;
    }
    
}