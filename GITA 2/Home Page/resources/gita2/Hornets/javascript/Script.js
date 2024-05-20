var canvas = null;
var context = null;

var canvasBoundX = 700;
var canvasBoundY = 500;

var isOn = false;

var hornetCap = 10;
var hornets = new Array();
var meat;

var image = new Image();

var mouse = new Mouse(0, 0);

window.addEventListener("keydown", function(event){
    if(event.key == " ")
        onSpace();
},
true);

function onSpace(){
    for(var i = 0; i < hornets.length; i++){
        var currentHornet = hornets[i];

        if(!currentHornet.isActive){
            currentHornet.respawn();
            break;
        }
    }
}

function update(){
    resetBackground();

    var numAlive = 0;

    for(var i = 0; i < hornets.length; i++){
        var currentHornet = hornets[i];

        currentHornet.update(meat, hornets);

        if(currentHornet.isActive)
            numAlive++;

        if(currentHornet.isStung(hornets)){
            currentHornet.isActive = false;
        }

        if(currentHornet.touchesMeat(meat)){
            currentHornet.strength += 5;

            meat.respawn();
        }

    }

    writeText("Hornets Active: " + numAlive, 0, 50);

    meat.update();
    //meat.place(mouse.x, mouse.y);

    
}

function initialize(){
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");

    for(var i = 0; i < hornetCap; i++){
        hornets[i] = new Hornet(canvasBoundX, canvasBoundY);
        hornets[i].canvas = canvas;
        hornets[i].context = context;
    }

    meat = new Meat(canvasBoundX, canvasBoundY);
    meat.context = context;
    meat.canvas = canvas;

    turnOn();
    resetBackground();
}

function writeText(text, x, y){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.font = "30px Arial";
    context.fillStyle = "#FF0000";
    context.fillText(text, x, y);
}

function drawImage(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.drawImage(image, 50, 50, 50, 50);
}

function resetBackground(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    //paint the background of the canvas
    context.fillStyle="#ADD8E6";
    context.fillRect(0, 0, canvasBoundX, canvasBoundY);
}

function updateMouse(event){
    mouse.x = (event.clientX - 350) - (canvasBoundX / 2);
    mouse.y = -((event.clientY - 100) - (canvasBoundY / 2));
}

function toggleTimer(){
    //if the timer is on the turn it off, if its not then turn it on
    isOn ? turnOff() : turnOn();
}

//manually turns on the timer
function turnOn(){
    //turns the timer on
    timer = setInterval("update()", 20);
    isOn = true;
}

//manually turns off the timer
function turnOff(){
    //turns the timer off
    clearInterval(timer);
    isOn = false;
}