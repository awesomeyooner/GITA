var canvas = null;
var context = null;

var canvasBoundX = 1450;
var canvasBoundY = 600;

var xOffset = 50;
var yOffset = 50;

let timer = setInterval("update()", 1);
var isOn = false;
var ticks = 0;
var level = 1;

var respawnBehavior = "random";

const mouse = new Mouse(0, 0);
const castle = new Castle(canvasBoundX, canvasBoundY);
const graveyard = new Graveyard(canvasBoundX, canvasBoundY);

//===zombies=====
var zombieCap = 100;
const zombies = new Array();

class Manager{
    static get TIMESTAMP(){
        return ticks;
    }

    static get LEVEL(){
        return level;
    }
}

for(var i = 0; i < zombieCap; i++){
    zombies[i] = new Zombie(canvasBoundX, canvasBoundY);
    zombies[i].id = i;
}

//=====knights====
var knightCap = 20;
const knights = new Array();

for(var i = 0; i < knightCap; i++){
    knights[i] = new Knight(canvasBoundX, canvasBoundY);
    knights[i].id = i;
}

//======turrets=====
var turretCap = 5;
const turrets = new Array();

for(var i = 0; i < turretCap; i++){
    turrets[i] = new Turret(canvasBoundX, canvasBoundY);
    turrets[i].id = i;
}

//==========Input Handles================
window.addEventListener("keypress", function(event){
    
    switch(event.key){
        case "q":
            slap();
            break;

        case " ":
            respawnBehavior = "random";
            respawnManually();
            break;

        case "r":
            mouse.toggleMode();
            break;

        case "e":
            respawnBehavior = "mouse";
            respawnManually();
            break;

        case "t":
            castle.toggleStatus();
            break;

        case "f":
            scatterKnights();
            break;
            
    }
},
true);

function respawn(){
    if(ticks % 50 == 0){
        for(zombie of zombies){
            if(!zombie.isAlive){
                zombie.respawnAround(
                    Math.random() * Math.PI + (Math.PI * 3/4),
                    300,  
                    graveyard);
                break;
            }
        }
    }

    var knightProc = Castle.isEnraged ? 100 : 200; //spawn faster if its enraged

    if(ticks % knightProc == 0){
        for(knight of knights){
            if(!knight.isAlive){
                knight.respawnAround(
                    Math.random() * Math.PI - (Math.PI * 1/4),
                    200,
                    castle);
                break;
            }
        }
    }
}

function respawnManually(){
    if(mouse.mode == "zombie"){
        for(zombie of zombies){
            if(!zombie.isAlive){
                if(respawnBehavior == "random")
                    zombie.respawn(true);
                    
                else if(respawnBehavior == "mouse"){
                    zombie.respawn(false)
                    zombie.place(mouse.x, mouse.y);
                }
                break;
            }
        }
    }
    else if(mouse.mode == "knight"){
        for(knight of knights){
            if(!knight.isAlive){
                if(respawnBehavior == "random")
                    knight.respawn(true);
                else if(respawnBehavior == "mouse"){
                    knight.respawn(false);
                    knight.place(mouse.x, mouse.y);
                }
                break;
            }
        }
    }
    else if(mouse.mode == "turret"){
        for(turret of turrets){
            if(!turret.isAlive){
                if(respawnBehavior == "random")
                    turret.respawn(true);
                else if(respawnBehavior == "mouse"){
                    turret.respawn(false);
                    turret.place(mouse.x, mouse.y);
                }
                break;
            }
        }
    }
}

function scatterKnights(objects){
    for(knight of knights){
        if(!knight.isAlive)
            continue;

        knight.scatter();
    }
}

function slap(){
    for(zombie of zombies){
        if(mouse.isHoveringOver(zombie) && zombie.isAlive){
            zombie.internalHealth -= 1;
            break;
        }
    }
}

function toggleBehavior(){
    if(respawnBehavior == "random")
        respawnBehavior = "mouse";
    else 
        respawnBehavior = "random";
}

function whileClick(){
    mouse.clicked = true;
}

function whileNotClicked(){
    mouse.clicked = false;
}

function updateMouse(event){
    mouse.x = (event.clientX - xOffset) - (canvasBoundX / 2);
    mouse.y = -((event.clientY - yOffset) - (canvasBoundY / 2));
}
//========================================

function update(){
    ticks += 1;
    
    resetBackground();
    updateEntities();
    checkState();
    logData();
    respawn();
    checkMouse();
}

function initialize(){
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");

    for(zombie of zombies){
        zombie.initialize(context, canvas);
        zombie.kill();
    }

    for(knight of knights){
        knight.initialize(context, canvas);
        knight.kill();
    }

    for(turret of turrets){
        turret.initialize(context, canvas);
        turret.kill();
    }

    castle.initialize(context, canvas);
    castle.place(-canvasBoundX / 2 + 100, -canvasBoundY / 2 + 100);

    graveyard.initialize(context, canvas);
    graveyard.place(canvasBoundX / 2 - 75, canvasBoundY / 2 - 75);

    //turnOn();
    resetBackground();
}

function checkMouse(){

    if(mouse.mode == "zombie"){
        for(zombie of zombies){
            if(mouse.isClickedOn(zombie) && zombie.isAlive && !mouse.isBinded){
                mouse.isBinded = true;
                mouse.bindID = zombie.id;
                zombie.isBinded = true;
                break;
            }
        }

        if(mouse.clicked && mouse.isBinded && mouse.bindID >= 0)
            zombies[mouse.bindID].place(mouse.x, mouse.y);
        else{
            if(mouse.bindID >= 0)
                zombies[mouse.bindID].isBinded = false;
            mouse.bindID = -1;
            mouse.isBinded = false;
        }
    }   

    else if(mouse.mode == "knight"){
        for(knight of knights){
            if(mouse.isClickedOn(knight) && knight.isAlive && !mouse.isBinded){
                mouse.isBinded = true;
                mouse.bindID = knight.id;
                knight.isBinded = true;
                break;
            }
        }

        if(mouse.clicked && mouse.isBinded && mouse.bindID >= 0)
            knights[mouse.bindID].place(mouse.x, mouse.y);
        else{
            if(mouse.bindID >= 0)
                knights[mouse.bindID].isBinded = false;
            mouse.bindID = -1;
            mouse.isBinded = false;
        }
    }

    else if(mouse.mode == "turret"){
        for(turret of turrets){
            if(mouse.isClickedOn(turret) && turret.isAlive && !mouse.isBinded){
                mouse.isBinded = true;
                mouse.bindID = turret.id;
                turret.isBinded = true;
                break;
            }
        }

        if(mouse.clicked && mouse.isBinded && mouse.bindID >= 0)
            turrets[mouse.bindID].place(mouse.x, mouse.y);
        else{
            if(mouse.bindID >= 0)
                turrets[mouse.bindID].isBinded = false;
            mouse.bindID = -1;
            mouse.isBinded = false;
        }
    }
}

function checkState(){
    if(!castle.isAlive){
        turnOff();
        resetBackground();
        writeTextCartesian("Zombies Win!", 0, 0);
        writeTextCartesian("Final Score: " + ticks, 0, 100);
    }
    
    else if(!graveyard.isAlive){
        //turnOff();
        //resetBackground();
        //writeTextCartesian("Knights Win!", 0, 0);
        for(zombie of zombies){
            zombie.healthCap += 5;
            zombie.speed += 0.25;
        }

        reset();
        level++;
    }
}

function reset(){
    for(zombie of zombies){
        zombie.kill();
    }

    for(knight of knights){
        knight.kill();
    }

    for(turret of turrets){
        turret.kill();
    }

    //castle.internalHealth = castle.healthCap;
    graveyard.internalHealth = graveyard.healthCap;

    turnOn();
}

function logData(){
    /*
    var knightsAlive = 0;

    for(knight of knights){
        if(knight.isAlive)
            knightsAlive++;
    }

    writeText("Knights Alive: " + knightsAlive, 50, 50);

    //=========================================
    var zombiesAlive = 0;

    for(zombie of zombies){
        if(zombie.isAlive)
            zombiesAlive++;
    }

    writeText("Zombies Alive: " + zombiesAlive, 50, 100);
    //======================================== 
    var turretsAlive = 0;

    for(turret of turrets){
        if(turret.isAlive)
            turretsAlive++;
    }

    writeText("Turrets Alive: " + turretsAlive, 50, 150);
    */

    //============================================
    writeText("Mode: " + mouse.mode, 10, 50);
    writeText("Behavior: " + respawnBehavior, 10, 100);
    writeText("Ticks: " + ticks, 10, 200);
    writeText("Level: " + Manager.LEVEL, 1300, 550);
}

function updateEntities(){
    castle.update(zombies);
    graveyard.update(knights);

    for(zombie of zombies){
        zombie.update(castle);
    }

    for(knight of knights){
        knight.update(zombies, graveyard);
    }

    for(turret of turrets){
        turret.update(zombies);
    }
}

function writeText(text, x, y){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    context.font = "30px Arial";
    context.fillStyle = "#FF0000";
    context.fillText(text, x, y);
}

function writeTextCartesian(text, x, y){
    //(this.x + (this.canvasX / 2)) - (this.size / 2), 
    //-(this.y - (this.canvasY / 2)) - (this.size / 2), 
    writeText(
        text,
        x + (canvasBoundX / 2),
        -(y - (canvasBoundY / 2))
    )
}

function resetBackground(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    //paint the background of the canvas
    context.fillStyle="#FBEEAC"; //"#ADD8E6";
    context.fillRect(0, 0, canvasBoundX, canvasBoundY);
}

function toggleTimer(){
    //if the timer is on the turn it off, if its not then turn it on
    isOn ? turnOff() : turnOn();
}

//manually turns on the timer
function turnOn(){
    turnOff();
    //turns the timer on
    timer = setInterval("update()", 1);
    isOn = true;
}

//manually turns off the timer
function turnOff(){
    //turns the timer off
    clearInterval(timer);
    isOn = false;
}