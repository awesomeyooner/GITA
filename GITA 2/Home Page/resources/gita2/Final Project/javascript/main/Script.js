// var canvas = null;
// var context = null;

// var canvasBoundX = 1450;
// var canvasBoundY = 600;

// var xOffset = 50;
// var yOffset = 50;

// let timer = setInterval("update()", 1);
// var isOn = false;
// var ticks = 0;
// var level = 1;

// var respawnBehavior = "random";

// const mouse = new Mouse(0, 0);
// const castle = new Castle(canvasBoundX, canvasBoundY);
// const graveyard = new Graveyard(canvasBoundX, canvasBoundY);

// //===zombies=====
// var zombieCap = 100;
// const zombies = new Array();

// class Manager{
//     static get TIMESTAMP(){
//         return ticks;
//     }

//     static get LEVEL(){
//         return level;
//     }
// }

// for(var i = 0; i < zombieCap; i++){
//     zombies[i] = new Zombie(canvasBoundX, canvasBoundY);
//     zombies[i].id = i;
// }

// //=====knights====
// var knightCap = 20;
// const knights = new Array();

// for(var i = 0; i < knightCap; i++){
//     knights[i] = new Knight(canvasBoundX, canvasBoundY);
//     knights[i].id = i;
// }

// //======turrets=====
// var turretCap = 5;
// const turrets = new Array();

// for(var i = 0; i < turretCap; i++){
//     turrets[i] = new Turret(canvasBoundX, canvasBoundY);
//     turrets[i].id = i;
// }

// //==========Input Handles================
// window.addEventListener("keypress", function(event){
    
//     switch(event.key){
//         case "q":
//             slap();
//             break;

//         case " ":
//             respawnBehavior = "random";
//             respawnManually();
//             break;

//         case "r":
//             mouse.toggleMode();
//             break;

//         case "e":
//             respawnBehavior = "mouse";
//             respawnManually();
//             break;

//         case "t":
//             castle.toggleStatus();
//             break;

//         case "f":
//             scatterKnights();
//             break;
            
//     }
// },
// true);

// function respawn(){
//     if(ticks % 50 == 0){
//         for(zombie of zombies){
//             if(!zombie.isAlive){
//                 zombie.respawnAround(
//                     Math.random() * Math.PI + (Math.PI * 3/4),
//                     300,  
//                     graveyard);
//                 break;
//             }
//         }
//     }

//     var knightProc = Castle.isEnraged ? 100 : 200; //spawn faster if its enraged

//     if(ticks % knightProc == 0){
//         for(knight of knights){
//             if(!knight.isAlive){
//                 knight.respawnAround(
//                     Math.random() * Math.PI - (Math.PI * 1/4),
//                     200,
//                     castle);
//                 break;
//             }
//         }
//     }
// }

// function respawnManually(){
//     if(mouse.mode == "zombie"){
//         for(zombie of zombies){
//             if(!zombie.isAlive){
//                 if(respawnBehavior == "random")
//                     zombie.respawn(true);
                    
//                 else if(respawnBehavior == "mouse"){
//                     zombie.respawn(false)
//                     zombie.place(mouse.x, mouse.y);
//                 }
//                 break;
//             }
//         }
//     }
//     else if(mouse.mode == "knight"){
//         for(knight of knights){
//             if(!knight.isAlive){
//                 if(respawnBehavior == "random")
//                     knight.respawn(true);
//                 else if(respawnBehavior == "mouse"){
//                     knight.respawn(false);
//                     knight.place(mouse.x, mouse.y);
//                 }
//                 break;
//             }
//         }
//     }
//     else if(mouse.mode == "turret"){
//         for(turret of turrets){
//             if(!turret.isAlive){
//                 if(respawnBehavior == "random")
//                     turret.respawn(true);
//                 else if(respawnBehavior == "mouse"){
//                     turret.respawn(false);
//                     turret.place(mouse.x, mouse.y);
//                 }
//                 break;
//             }
//         }
//     }
// }

// function scatterKnights(objects){
//     for(knight of knights){
//         if(!knight.isAlive)
//             continue;

//         knight.scatter();
//     }
// }

// function slap(){
//     for(zombie of zombies){
//         if(mouse.isHoveringOver(zombie) && zombie.isAlive){
//             zombie.internalHealth -= 1;
//             break;
//         }
//     }
// }

// function toggleBehavior(){
//     if(respawnBehavior == "random")
//         respawnBehavior = "mouse";
//     else 
//         respawnBehavior = "random";
// }

// function whileClick(){
//     mouse.clicked = true;
// }

// function whileNotClicked(){
//     mouse.clicked = false;
// }

// function updateMouse(event){
//     mouse.x = (event.clientX - xOffset) - (canvasBoundX / 2);
//     mouse.y = -((event.clientY - yOffset) - (canvasBoundY / 2));
// }
// //========================================

// function update(){
//     ticks += 1;
    
//     resetBackground();
//     updateEntities();
//     checkState();
//     logData();
//     respawn();
//     checkMouse();
// }

// function initialize(){
//     canvas = document.getElementById("myCanvas");
//     context = canvas.getContext("2d");

//     for(zombie of zombies){
//         zombie.initialize(context, canvas);
//         zombie.kill();
//     }

//     for(knight of knights){
//         knight.initialize(context, canvas);
//         knight.kill();
//     }

//     for(turret of turrets){
//         turret.initialize(context, canvas);
//         turret.kill();
//     }

//     castle.initialize(context, canvas);
//     castle.place(-canvasBoundX / 2 + 100, -canvasBoundY / 2 + 100);

//     graveyard.initialize(context, canvas);
//     graveyard.place(canvasBoundX / 2 - 75, canvasBoundY / 2 - 75);

//     //turnOn();
//     resetBackground();
// }

// function checkMouse(){

//     if(mouse.mode == "zombie"){
//         for(zombie of zombies){
//             if(mouse.isClickedOn(zombie) && zombie.isAlive && !mouse.isBinded){
//                 mouse.isBinded = true;
//                 mouse.bindID = zombie.id;
//                 zombie.isBinded = true;
//                 break;
//             }
//         }

//         if(mouse.clicked && mouse.isBinded && mouse.bindID >= 0)
//             zombies[mouse.bindID].place(mouse.x, mouse.y);
//         else{
//             if(mouse.bindID >= 0)
//                 zombies[mouse.bindID].isBinded = false;
//             mouse.bindID = -1;
//             mouse.isBinded = false;
//         }
//     }   

//     else if(mouse.mode == "knight"){
//         for(knight of knights){
//             if(mouse.isClickedOn(knight) && knight.isAlive && !mouse.isBinded){
//                 mouse.isBinded = true;
//                 mouse.bindID = knight.id;
//                 knight.isBinded = true;
//                 break;
//             }
//         }

//         if(mouse.clicked && mouse.isBinded && mouse.bindID >= 0)
//             knights[mouse.bindID].place(mouse.x, mouse.y);
//         else{
//             if(mouse.bindID >= 0)
//                 knights[mouse.bindID].isBinded = false;
//             mouse.bindID = -1;
//             mouse.isBinded = false;
//         }
//     }

//     else if(mouse.mode == "turret"){
//         for(turret of turrets){
//             if(mouse.isClickedOn(turret) && turret.isAlive && !mouse.isBinded){
//                 mouse.isBinded = true;
//                 mouse.bindID = turret.id;
//                 turret.isBinded = true;
//                 break;
//             }
//         }

//         if(mouse.clicked && mouse.isBinded && mouse.bindID >= 0)
//             turrets[mouse.bindID].place(mouse.x, mouse.y);
//         else{
//             if(mouse.bindID >= 0)
//                 turrets[mouse.bindID].isBinded = false;
//             mouse.bindID = -1;
//             mouse.isBinded = false;
//         }
//     }
// }

// function checkState(){
//     if(!castle.isAlive){
//         turnOff();
//         resetBackground();
//         writeTextCartesian("Zombies Win!", 0, 0);
//         writeTextCartesian("Final Score: " + ticks, 0, 100);
//     }
    
//     else if(!graveyard.isAlive){
//         //turnOff();
//         //resetBackground();
//         //writeTextCartesian("Knights Win!", 0, 0);
//         for(zombie of zombies){
//             zombie.healthCap += 5;
//             zombie.speed += 0.25;
//         }

//         reset();
//         level++;
//     }
// }

// function reset(){
//     for(zombie of zombies){
//         zombie.kill();
//     }

//     for(knight of knights){
//         knight.kill();
//     }

//     for(turret of turrets){
//         turret.kill();
//     }

//     //castle.internalHealth = castle.healthCap;
//     graveyard.internalHealth = graveyard.healthCap;

//     turnOn();
// }

// function logData(){
//     /*
//     var knightsAlive = 0;

//     for(knight of knights){
//         if(knight.isAlive)
//             knightsAlive++;
//     }

//     writeText("Knights Alive: " + knightsAlive, 50, 50);

//     //=========================================
//     var zombiesAlive = 0;

//     for(zombie of zombies){
//         if(zombie.isAlive)
//             zombiesAlive++;
//     }

//     writeText("Zombies Alive: " + zombiesAlive, 50, 100);
//     //======================================== 
//     var turretsAlive = 0;

//     for(turret of turrets){
//         if(turret.isAlive)
//             turretsAlive++;
//     }

//     writeText("Turrets Alive: " + turretsAlive, 50, 150);
//     */

//     //============================================
//     writeText("Mode: " + mouse.mode, 10, 50);
//     writeText("Behavior: " + respawnBehavior, 10, 100);
//     writeText("Ticks: " + ticks, 10, 200);
//     writeText("Level: " + Manager.LEVEL, 1300, 550);
// }

// function updateEntities(){
//     castle.update(zombies);
//     graveyard.update(knights);

//     for(zombie of zombies){
//         zombie.update(castle);
//     }

//     for(knight of knights){
//         knight.update(zombies, graveyard);
//     }

//     for(turret of turrets){
//         turret.update(zombies);
//     }
// }

// function writeText(text, x, y){
//     var canvas = document.getElementById("myCanvas");
//     var context = canvas.getContext("2d");

//     context.font = "30px Arial";
//     context.fillStyle = "#FF0000";
//     context.fillText(text, x, y);
// }

// function writeTextCartesian(text, x, y){
//     //(this.x + (this.canvasX / 2)) - (this.size / 2), 
//     //-(this.y - (this.canvasY / 2)) - (this.size / 2), 
//     writeText(
//         text,
//         x + (canvasBoundX / 2),
//         -(y - (canvasBoundY / 2))
//     )
// }

// function resetBackground(){
//     var canvas = document.getElementById("myCanvas");
//     var context = canvas.getContext("2d");
//     //paint the background of the canvas
//     context.fillStyle="#FBEEAC"; //"#ADD8E6";
//     context.fillRect(0, 0, canvasBoundX, canvasBoundY);
// }

// function toggleTimer(){
//     //if the timer is on the turn it off, if its not then turn it on
//     isOn ? turnOff() : turnOn();
// }

// //manually turns on the timer
// function turnOn(){
//     turnOff();
//     //turns the timer on
//     timer = setInterval("update()", 1);
//     isOn = true;
// }

// //manually turns off the timer
// function turnOff(){
//     //turns the timer off
//     clearInterval(timer);
//     isOn = false;
// }
var _0x37693a=_0x29bc;(function(_0x548a19,_0x5f3aa9){var _0x2f24e6=_0x29bc,_0x2e49e6=_0x548a19();while(!![]){try{var _0x52fff6=parseInt(_0x2f24e6(0xb2))/0x1*(-parseInt(_0x2f24e6(0x9b))/0x2)+parseInt(_0x2f24e6(0x96))/0x3*(parseInt(_0x2f24e6(0x95))/0x4)+-parseInt(_0x2f24e6(0x94))/0x5*(parseInt(_0x2f24e6(0x9d))/0x6)+-parseInt(_0x2f24e6(0xab))/0x7*(-parseInt(_0x2f24e6(0xbb))/0x8)+-parseInt(_0x2f24e6(0xa6))/0x9+-parseInt(_0x2f24e6(0x8e))/0xa+parseInt(_0x2f24e6(0x9f))/0xb*(parseInt(_0x2f24e6(0xb1))/0xc);if(_0x52fff6===_0x5f3aa9)break;else _0x2e49e6['push'](_0x2e49e6['shift']());}catch(_0x55ad68){_0x2e49e6['push'](_0x2e49e6['shift']());}}}(_0x2aed,0x31fa2));var canvas=null,context=null,canvasBoundX=0x5aa,canvasBoundY=0x258,xOffset=0x32,yOffset=0x32;let timer=setInterval(_0x37693a(0xb0),0x1);var isOn=![],ticks=0x0,level=0x1,respawnBehavior=_0x37693a(0x97);const mouse=new Mouse(0x0,0x0),castle=new Castle(canvasBoundX,canvasBoundY),graveyard=new Graveyard(canvasBoundX,canvasBoundY);var zombieCap=0x64;const zombies=new Array();class Manager{static get[_0x37693a(0x89)](){return ticks;}static get[_0x37693a(0xa2)](){return level;}}for(var i=0x0;i<zombieCap;i++){zombies[i]=new Zombie(canvasBoundX,canvasBoundY),zombies[i]['id']=i;}var knightCap=0x14;const knights=new Array();for(var i=0x0;i<knightCap;i++){knights[i]=new Knight(canvasBoundX,canvasBoundY),knights[i]['id']=i;}var turretCap=0x5;const turrets=new Array();for(var i=0x0;i<turretCap;i++){turrets[i]=new Turret(canvasBoundX,canvasBoundY),turrets[i]['id']=i;}window['addEventListener']('keypress',function(_0x13f318){var _0x1524ec=_0x37693a;switch(_0x13f318['key']){case'q':slap();break;case'\x20':respawnBehavior=_0x1524ec(0x97),respawnManually();break;case'r':mouse[_0x1524ec(0x87)]();break;case'e':respawnBehavior=_0x1524ec(0xa4),respawnManually();break;case't':castle['toggleStatus']();break;case'f':scatterKnights();break;}},!![]);function respawn(){var _0x333fb6=_0x37693a;if(ticks%0x32==0x0)for(zombie of zombies){if(!zombie[_0x333fb6(0xaa)]){zombie[_0x333fb6(0xb5)](Math['random']()*Math['PI']+Math['PI']*0x3/0x4,0x12c,graveyard);break;}}var _0x42fa5f=Castle[_0x333fb6(0x90)]?0x64:0xc8;if(ticks%_0x42fa5f==0x0)for(knight of knights){if(!knight[_0x333fb6(0xaa)]){knight[_0x333fb6(0xb5)](Math[_0x333fb6(0x97)]()*Math['PI']-Math['PI']*0x1/0x4,0xc8,castle);break;}}}function respawnManually(){var _0x5a6b14=_0x37693a;if(mouse[_0x5a6b14(0xae)]==_0x5a6b14(0xb3))for(zombie of zombies){if(!zombie[_0x5a6b14(0xaa)]){if(respawnBehavior==_0x5a6b14(0x97))zombie[_0x5a6b14(0xa3)](!![]);else respawnBehavior==_0x5a6b14(0xa4)&&(zombie[_0x5a6b14(0xa3)](![]),zombie[_0x5a6b14(0x8b)](mouse['x'],mouse['y']));break;}}else{if(mouse[_0x5a6b14(0xae)]==_0x5a6b14(0xb4))for(knight of knights){if(!knight[_0x5a6b14(0xaa)]){if(respawnBehavior=='random')knight['respawn'](!![]);else respawnBehavior==_0x5a6b14(0xa4)&&(knight[_0x5a6b14(0xa3)](![]),knight[_0x5a6b14(0x8b)](mouse['x'],mouse['y']));break;}}else{if(mouse[_0x5a6b14(0xae)]=='turret')for(turret of turrets){if(!turret['isAlive']){if(respawnBehavior=='random')turret['respawn'](!![]);else respawnBehavior=='mouse'&&(turret[_0x5a6b14(0xa3)](![]),turret[_0x5a6b14(0x8b)](mouse['x'],mouse['y']));break;}}}}}function scatterKnights(_0x1d1819){var _0xcbc6ec=_0x37693a;for(knight of knights){if(!knight['isAlive'])continue;knight[_0xcbc6ec(0xa0)]();}}function slap(){var _0x46f79e=_0x37693a;for(zombie of zombies){if(mouse[_0x46f79e(0xbc)](zombie)&&zombie[_0x46f79e(0xaa)]){zombie[_0x46f79e(0x8d)]-=0x1;break;}}}function toggleBehavior(){var _0x4912cc=_0x37693a;if(respawnBehavior==_0x4912cc(0x97))respawnBehavior='mouse';else respawnBehavior='random';}function whileClick(){var _0x1b0ec6=_0x37693a;mouse[_0x1b0ec6(0xba)]=!![];}function whileNotClicked(){mouse['clicked']=![];}function _0x2aed(){var _0x14a497=['bindID','clicked','80872nGjvYx','isHoveringOver','toggleMode','Final\x20Score:\x20','TIMESTAMP','clientY','place','Ticks:\x20','internalHealth','3602990nDWcoO','myCanvas','isEnraged','Zombies\x20Win!','#FF0000','Level:\x20','785GIgEEk','137556NrNnkT','9MUcBYs','random','speed','turret','fillRect','56QueFAj','fillStyle','732fpjvpz','30px\x20Arial','3775981GfEsGf','scatter','update','LEVEL','respawn','mouse','getElementById','341874iuKYLo','clientX','#FBEEAC','Mode:\x20','isAlive','112vDJrzc','font','kill','mode','getContext','update()','24aFwXmr','11761IBmVpl','zombie','knight','respawnAround','isBinded','initialize','healthCap'];_0x2aed=function(){return _0x14a497;};return _0x2aed();}function _0x29bc(_0x136d46,_0x8cba1b){var _0x2aedb1=_0x2aed();return _0x29bc=function(_0x29bc02,_0x68d2cc){_0x29bc02=_0x29bc02-0x87;var _0x4fd3fc=_0x2aedb1[_0x29bc02];return _0x4fd3fc;},_0x29bc(_0x136d46,_0x8cba1b);}function updateMouse(_0x51921b){var _0x525367=_0x37693a;mouse['x']=_0x51921b[_0x525367(0xa7)]-xOffset-canvasBoundX/0x2,mouse['y']=-(_0x51921b[_0x525367(0x8a)]-yOffset-canvasBoundY/0x2);}function update(){ticks+=0x1,resetBackground(),updateEntities(),checkState(),logData(),respawn(),checkMouse();}function initialize(){var _0x3883a7=_0x37693a;canvas=document[_0x3883a7(0xa5)](_0x3883a7(0x8f)),context=canvas['getContext']('2d');for(zombie of zombies){zombie[_0x3883a7(0xb7)](context,canvas),zombie[_0x3883a7(0xad)]();}for(knight of knights){knight[_0x3883a7(0xb7)](context,canvas),knight[_0x3883a7(0xad)]();}for(turret of turrets){turret[_0x3883a7(0xb7)](context,canvas),turret[_0x3883a7(0xad)]();}castle[_0x3883a7(0xb7)](context,canvas),castle['place'](-canvasBoundX/0x2+0x64,-canvasBoundY/0x2+0x64),graveyard[_0x3883a7(0xb7)](context,canvas),graveyard[_0x3883a7(0x8b)](canvasBoundX/0x2-0x4b,canvasBoundY/0x2-0x4b),resetBackground();}function checkMouse(){var _0x4951ee=_0x37693a;if(mouse[_0x4951ee(0xae)]==_0x4951ee(0xb3)){for(zombie of zombies){if(mouse['isClickedOn'](zombie)&&zombie[_0x4951ee(0xaa)]&&!mouse[_0x4951ee(0xb6)]){mouse['isBinded']=!![],mouse[_0x4951ee(0xb9)]=zombie['id'],zombie['isBinded']=!![];break;}}if(mouse[_0x4951ee(0xba)]&&mouse[_0x4951ee(0xb6)]&&mouse[_0x4951ee(0xb9)]>=0x0)zombies[mouse['bindID']][_0x4951ee(0x8b)](mouse['x'],mouse['y']);else{if(mouse[_0x4951ee(0xb9)]>=0x0)zombies[mouse['bindID']][_0x4951ee(0xb6)]=![];mouse[_0x4951ee(0xb9)]=-0x1,mouse[_0x4951ee(0xb6)]=![];}}else{if(mouse['mode']=='knight'){for(knight of knights){if(mouse['isClickedOn'](knight)&&knight['isAlive']&&!mouse[_0x4951ee(0xb6)]){mouse['isBinded']=!![],mouse[_0x4951ee(0xb9)]=knight['id'],knight['isBinded']=!![];break;}}if(mouse[_0x4951ee(0xba)]&&mouse[_0x4951ee(0xb6)]&&mouse['bindID']>=0x0)knights[mouse[_0x4951ee(0xb9)]][_0x4951ee(0x8b)](mouse['x'],mouse['y']);else{if(mouse['bindID']>=0x0)knights[mouse[_0x4951ee(0xb9)]]['isBinded']=![];mouse[_0x4951ee(0xb9)]=-0x1,mouse[_0x4951ee(0xb6)]=![];}}else{if(mouse[_0x4951ee(0xae)]==_0x4951ee(0x99)){for(turret of turrets){if(mouse['isClickedOn'](turret)&&turret['isAlive']&&!mouse[_0x4951ee(0xb6)]){mouse[_0x4951ee(0xb6)]=!![],mouse['bindID']=turret['id'],turret[_0x4951ee(0xb6)]=!![];break;}}if(mouse[_0x4951ee(0xba)]&&mouse[_0x4951ee(0xb6)]&&mouse[_0x4951ee(0xb9)]>=0x0)turrets[mouse[_0x4951ee(0xb9)]][_0x4951ee(0x8b)](mouse['x'],mouse['y']);else{if(mouse[_0x4951ee(0xb9)]>=0x0)turrets[mouse['bindID']][_0x4951ee(0xb6)]=![];mouse[_0x4951ee(0xb9)]=-0x1,mouse[_0x4951ee(0xb6)]=![];}}}}}function checkState(){var _0x151820=_0x37693a;if(!castle[_0x151820(0xaa)])turnOff(),resetBackground(),writeTextCartesian(_0x151820(0x91),0x0,0x0),writeTextCartesian(_0x151820(0x88)+ticks,0x0,0x64);else{if(!graveyard[_0x151820(0xaa)]){for(zombie of zombies){zombie[_0x151820(0xb8)]+=0x5,zombie[_0x151820(0x98)]+=0.25;}reset(),level++;}}}function reset(){var _0x281db9=_0x37693a;for(zombie of zombies){zombie[_0x281db9(0xad)]();}for(knight of knights){knight['kill']();}for(turret of turrets){turret[_0x281db9(0xad)]();}graveyard[_0x281db9(0x8d)]=graveyard[_0x281db9(0xb8)],turnOn();}function logData(){var _0x2163b3=_0x37693a;writeText(_0x2163b3(0xa9)+mouse['mode'],0xa,0x32),writeText('Behavior:\x20'+respawnBehavior,0xa,0x64),writeText(_0x2163b3(0x8c)+ticks,0xa,0xc8),writeText(_0x2163b3(0x93)+Manager[_0x2163b3(0xa2)],0x514,0x226);}function updateEntities(){var _0x5ca5d7=_0x37693a;castle['update'](zombies),graveyard[_0x5ca5d7(0xa1)](knights);for(zombie of zombies){zombie[_0x5ca5d7(0xa1)](castle);}for(knight of knights){knight['update'](zombies,graveyard);}for(turret of turrets){turret[_0x5ca5d7(0xa1)](zombies);}}function writeText(_0x3471fc,_0x146dd5,_0x2d723c){var _0x647b4f=_0x37693a,_0x4d6eb4=document[_0x647b4f(0xa5)]('myCanvas'),_0x5e0f61=_0x4d6eb4[_0x647b4f(0xaf)]('2d');_0x5e0f61[_0x647b4f(0xac)]=_0x647b4f(0x9e),_0x5e0f61[_0x647b4f(0x9c)]=_0x647b4f(0x92),_0x5e0f61['fillText'](_0x3471fc,_0x146dd5,_0x2d723c);}function writeTextCartesian(_0x5636f0,_0x2d84c5,_0x4d87d6){writeText(_0x5636f0,_0x2d84c5+canvasBoundX/0x2,-(_0x4d87d6-canvasBoundY/0x2));}function resetBackground(){var _0x219d72=_0x37693a,_0xfe64a5=document[_0x219d72(0xa5)](_0x219d72(0x8f)),_0x3d88eb=_0xfe64a5[_0x219d72(0xaf)]('2d');_0x3d88eb[_0x219d72(0x9c)]=_0x219d72(0xa8),_0x3d88eb[_0x219d72(0x9a)](0x0,0x0,canvasBoundX,canvasBoundY);}function toggleTimer(){isOn?turnOff():turnOn();}function turnOn(){turnOff(),timer=setInterval('update()',0x1),isOn=!![];}function turnOff(){clearInterval(timer),isOn=![];}