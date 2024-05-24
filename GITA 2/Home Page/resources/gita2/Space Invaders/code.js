// //makes variables for each circle
// var invaderSpeedX = 5;
// var invaderSpeedY = 40;

// var invaderHealth = 10;

// var colorOne = "#0000FF";
// var colorTwo = "#FF0000";

// //defines the boundaries of the canvas as varaibles to make it easier to hot swap
// var canvasBoundX = 700;
// var canvasBoundY = 500;

// var speed = 6;

// //places circles in random locations
// var xCoordOne = Math.floor(Math.random() * (canvasBoundX - 100)) + 50;
// var yCoordOne = Math.floor(Math.random() * (canvasBoundY - 100)) + 50;

// var xCoordTwo = Math.floor(Math.random() * (canvasBoundX - 100)) + 50;
// var yCoordTwo = Math.floor(Math.random() * (canvasBoundY - 100)) + 50;

// var xDef = 350;
// var yDef = 450;

// var xInvaders = 350;
// var yInvaders = 50;

// var currentMovement = "none";

// var bulletShot = false;
// var initialPositionX = 0;
// var bulletY = 0;

// var isOn = false;
// //used for timer to determine if it is on or not

// window.addEventListener("keydown", function(event){
    

//     switch(event.key){
//         case "a":
//             currentMovement = "left";
//             break;
//         case "d":
//             currentMovement = "right";
//             break;
//         default:
//             currentMovement = "none";
//             break;
//     }
    
// }, true);

// window.addEventListener("keyup", function(event){
//     currentMovement = "none";
    
// }, true);


// function initialize(){
//     var canvas = document.getElementById("myCanvas");
//     var context = canvas.getContext("2d");

//     context.fillStyle="#ADD8E6";
//     context.fillRect(0, 0, canvasBoundX, canvasBoundY);

//     turnOn();
// }

// function update(){
//     resetBackground();
//     writeText(invaderHealth);
//     moveDef();
//     moveBullet();
//     moveInvaders();
//     checkWinLoss();

// }

// function checkWinLoss(){
//     if(invaderHealth <= 0){
//             resetBackground();
//             writeText("You Win!");
//             toggleTimer();
//         }
    
//     if(yInvaders >= 400){
//         resetBackground();
//             writeText("You Lose!");
//             toggleTimer();
//     }
// }

// //for debugging
// function writeText(text){
//     var canvas = document.getElementById("myCanvas");
//     var context = canvas.getContext("2d");

//     context.font = "30px Arial";
//     context.fillStyle = "#FF0000";
//     context.fillText(text, 10, 50);
// }

// function moveBullet(){
//     if(bulletShot == true){
//         var canvas = document.getElementById("myCanvas");
//         var context = canvas.getContext("2d");

//         bulletY -= 10;

//         context.lineWidth = 5;
//         context.strokeStyle = "red";
//         context.beginPath();
//         context.moveTo(initialPositionX, bulletY);
//         context.lineTo(initialPositionX, bulletY - 20);
//         context.stroke();

//         if(bulletY <= 10 || hitInvader()){
//             context.strokeStyle = "#ADD8E6";
//             context.stroke();
//             bulletShot = false; 
//         }

//         if(hitInvader())
//             invaderHealth -= 1;
//     }
// }

// function fireBullet(){
//     if(!bulletShot){
//         initialPositionX = xDef;
//         bulletY = yDef;
//     }

//     bulletShot = true;
    
// }

// function moveDef(){
//     switch(currentMovement){
//         case "left":
//             if(xDef > 20)
//                 xDef -= speed;
//             moveDefender(xDef, yDef, -1);
//             break;
//         case "right":
//             if(xDef < canvasBoundX - 20)
//                 xDef += speed;
//             moveDefender(xDef, yDef, 1);
//             break;
//         default:
//             moveDefender(xDef, yDef, 0);
//             break;

//     }
// }

// function resetBackground(){
//     var canvas = document.getElementById("myCanvas");
//     var context = canvas.getContext("2d");
//     //paint the background of the canvas
//     context.fillStyle="#ADD8E6";
//     context.fillRect(0, 0, canvasBoundX, canvasBoundY);
// }

// function moveDefender(x, y, direction){
//     var canvas = document.getElementById("myCanvas");
//     var context = canvas.getContext("2d");

//     context.fillStyle = colorOne;
//     context.beginPath();
//     context.arc(x, y, 15, 0, 2 * Math.PI, true);
//     context.closePath();
//     context.fill();
    
//     context.fillStyle = colorOne;
//     context.beginPath();
//     context.arc(x + (15 * direction), y, 7.5, 0, 2 * Math.PI, true);
//     context.closePath();
//     context.fill();
// }

// function moveInvaders(){
//     var canvas = document.getElementById("myCanvas");
//     var context = canvas.getContext("2d");

//     context.fillStyle = "#FFFFFF";
//     context.beginPath();
//     context.arc(xInvaders, yInvaders, 40, 0, 2 * Math.PI, true);
//     context.closePath();
//     context.fill();

//     if(xInvaders >= canvasBoundX - 40 || xInvaders <= 40){
//         invaderSpeedX *= -1;
//         yInvaders += invaderSpeedY;
//     }
//     xInvaders += invaderSpeedX;
// }

// function hitInvader(){
//      return (Math.abs(xInvaders - initialPositionX) <= 40 && Math.abs(yInvaders - bulletY) <= 40)
// }

// //paints a circle on the canvas
// function drawCircle(){
//     var canvas = document.getElementById("myCanvas");
//     var context = canvas.getContext("2d");
//     //paint the background of the canvas
//     context.fillStyle="#ADD8E6";
//     context.fillRect(0, 0, canvasBoundX, canvasBoundY);

//     //draw the circle one
//     context.fillStyle = colorOne;
//     context.beginPath();
//     context.arc(xCoordOne, yCoordOne, 15, 0, 2 * Math.PI, true);
//     context.closePath();
//     context.fill();

//     //draw circle two
//     context.fillStyle = colorTwo;
//     context.beginPath();
//     context.arc(xCoordTwo, yCoordTwo, 15, 0, 2 * Math.PI, true);
//     context.closePath();
//     context.fill();
// }


// function move(){
//     //momves circle ~10px

//     //if circle hits horizontal edge then change x direction
//     if(xCoordOne > (canvasBoundX - 15) || xCoordOne < 15){
//         //moveXOne = -Math.sign(moveXOne) * Math.floor(Math.random() * 10);
//         moveXOne *= -1;
//     }
    
//     //if circle hits vertical edge then change y direction
//     if(yCoordOne > (canvasBoundY - 15) || yCoordOne < 15){
//         //moveYOne = -Math.sign(moveYOne) * Math.floor(Math.random() * 10);
//         moveYOne *= -1;
//     }

//     if(xCoordTwo > (canvasBoundX - 15) || xCoordTwo < 15){
//         //moveXOne = -Math.sign(moveXOne) * Math.floor(Math.random() * 10);
//         moveXTwo *= -1;
//     }
    
//     if(yCoordTwo > (canvasBoundY - 15) || yCoordTwo < 15){
//         //moveYOne = -Math.sign(moveYOne) * Math.floor(Math.random() * 10);
//         moveYTwo *= -1;
//     }

//     //if the circle contact then change direction for both circles and toggle the color
//     if(contact()){
//         moveXOne *= -1;
//         moveYOne *= -1;
//         moveXTwo *= -1;
//         moveYTwo *= -1;

//         toggleColor();
//     }

//     //change the coordinates of the circles
//     xCoordOne += moveXOne;
//     yCoordOne += moveYOne;

//     xCoordTwo += moveXTwo;
//     yCoordTwo += moveYTwo;

//     //moves cirlces to new coordinates
//     drawCircle();
// }

// function contact(){
//     //if the circles are within a circle threshold then return true
//     return Math.abs(xCoordOne - xCoordTwo) <= 20 && Math.abs(yCoordOne - yCoordTwo) <= 20;
// }

// function toggleColor(){
//     //if the color is blue then make it green, if no then make it blue
//     (colorOne == "#0000FF") ? colorOne = "#008000" : colorOne = "#0000FF";

//     //if the color is red then make it purple, if not then make it red
//     (colorTwo == "#FF0000") ? colorTwo = "#800080" : colorTwo = "#FF0000";
// }

// function toggleTimer(){
//     //if the timer is on the turn it off, if its not then turn it on
//     isOn ? turnOff() : turnOn();
// }

// function turnOn(){
//     //turns the timer on
//     timer = setInterval("update()", 20);
//     isOn = true;
// }

// function turnOff(){
//     //turns the timer off
//     clearInterval(timer);
//     isOn = false;
// }
var _0x2d65fa=_0x3f93;(function(_0x2f4ebc,_0x6b9d54){var _0x1788b9=_0x3f93,_0x1c9e7b=_0x2f4ebc();while(!![]){try{var _0x44e2f6=parseInt(_0x1788b9(0x125))/0x1+-parseInt(_0x1788b9(0x12f))/0x2+-parseInt(_0x1788b9(0x12a))/0x3*(-parseInt(_0x1788b9(0x148))/0x4)+parseInt(_0x1788b9(0x127))/0x5*(-parseInt(_0x1788b9(0x122))/0x6)+parseInt(_0x1788b9(0x146))/0x7*(parseInt(_0x1788b9(0x13b))/0x8)+parseInt(_0x1788b9(0x145))/0x9*(parseInt(_0x1788b9(0x132))/0xa)+parseInt(_0x1788b9(0x124))/0xb*(parseInt(_0x1788b9(0x138))/0xc);if(_0x44e2f6===_0x6b9d54)break;else _0x1c9e7b['push'](_0x1c9e7b['shift']());}catch(_0x59d3d7){_0x1c9e7b['push'](_0x1c9e7b['shift']());}}}(_0xc915,0xee186));var invaderSpeedX=0x5,invaderSpeedY=0x28,invaderHealth=0xa,colorOne='#0000FF',colorTwo=_0x2d65fa(0x14b),canvasBoundX=0x2bc,canvasBoundY=0x1f4,speed=0x6,xCoordOne=Math[_0x2d65fa(0x13d)](Math[_0x2d65fa(0x144)]()*(canvasBoundX-0x64))+0x32,yCoordOne=Math['floor'](Math['random']()*(canvasBoundY-0x64))+0x32,xCoordTwo=Math['floor'](Math[_0x2d65fa(0x144)]()*(canvasBoundX-0x64))+0x32,yCoordTwo=Math[_0x2d65fa(0x13d)](Math[_0x2d65fa(0x144)]()*(canvasBoundY-0x64))+0x32,xDef=0x15e,yDef=0x1c2,xInvaders=0x15e,yInvaders=0x32,currentMovement='none',bulletShot=![],initialPositionX=0x0,bulletY=0x0,isOn=![];window[_0x2d65fa(0x137)]('keydown',function(_0x39a0f7){var _0x2c80bb=_0x2d65fa;switch(_0x39a0f7[_0x2c80bb(0x13e)]){case'a':currentMovement='left';break;case'd':currentMovement=_0x2c80bb(0x12b);break;default:currentMovement='none';break;}},!![]),window[_0x2d65fa(0x137)](_0x2d65fa(0x135),function(_0x470ce4){var _0x5976a1=_0x2d65fa;currentMovement=_0x5976a1(0x131);},!![]);function initialize(){var _0x9aaf52=_0x2d65fa,_0x2c95e2=document[_0x9aaf52(0x139)]('myCanvas'),_0x1558df=_0x2c95e2[_0x9aaf52(0x14a)]('2d');_0x1558df['fillStyle']=_0x9aaf52(0x12e),_0x1558df[_0x9aaf52(0x13f)](0x0,0x0,canvasBoundX,canvasBoundY),turnOn();}function update(){resetBackground(),writeText(invaderHealth),moveDef(),moveBullet(),moveInvaders(),checkWinLoss();}function _0xc915(){var _0x4c7831=['beginPath','random','927uGlPKg','396424jGbiLR','red','6702532HRNlru','left','getContext','#FF0000','lineWidth','987726irJwbh','stroke','33XmFpGm','52041UPASHc','moveTo','15gsztfW','strokeStyle','#0000FF','3seLBzV','right','fill','#008000','#ADD8E6','3819988DjUQzt','#FFFFFF','none','103060fyNusS','myCanvas','arc','keyup','closePath','addEventListener','2133084fQumdS','getElementById','update()','8RThXHW','fillStyle','floor','key','fillRect','30px\x20Arial','abs','You\x20Lose!'];_0xc915=function(){return _0x4c7831;};return _0xc915();}function checkWinLoss(){var _0x423e01=_0x2d65fa;invaderHealth<=0x0&&(resetBackground(),writeText('You\x20Win!'),toggleTimer()),yInvaders>=0x190&&(resetBackground(),writeText(_0x423e01(0x142)),toggleTimer());}function writeText(_0x464a4f){var _0x442dea=_0x2d65fa,_0x4f47f8=document['getElementById']('myCanvas'),_0x198d66=_0x4f47f8[_0x442dea(0x14a)]('2d');_0x198d66['font']=_0x442dea(0x140),_0x198d66[_0x442dea(0x13c)]='#FF0000',_0x198d66['fillText'](_0x464a4f,0xa,0x32);}function moveBullet(){var _0x58bf6b=_0x2d65fa;if(bulletShot==!![]){var _0x1b5936=document[_0x58bf6b(0x139)](_0x58bf6b(0x133)),_0x45bdde=_0x1b5936[_0x58bf6b(0x14a)]('2d');bulletY-=0xa,_0x45bdde[_0x58bf6b(0x121)]=0x5,_0x45bdde[_0x58bf6b(0x128)]=_0x58bf6b(0x147),_0x45bdde['beginPath'](),_0x45bdde[_0x58bf6b(0x126)](initialPositionX,bulletY),_0x45bdde['lineTo'](initialPositionX,bulletY-0x14),_0x45bdde[_0x58bf6b(0x123)]();(bulletY<=0xa||hitInvader())&&(_0x45bdde[_0x58bf6b(0x128)]=_0x58bf6b(0x12e),_0x45bdde['stroke'](),bulletShot=![]);if(hitInvader())invaderHealth-=0x1;}}function fireBullet(){!bulletShot&&(initialPositionX=xDef,bulletY=yDef),bulletShot=!![];}function moveDef(){var _0x4ad27b=_0x2d65fa;switch(currentMovement){case _0x4ad27b(0x149):if(xDef>0x14)xDef-=speed;moveDefender(xDef,yDef,-0x1);break;case _0x4ad27b(0x12b):if(xDef<canvasBoundX-0x14)xDef+=speed;moveDefender(xDef,yDef,0x1);break;default:moveDefender(xDef,yDef,0x0);break;}}function resetBackground(){var _0x338ec5=_0x2d65fa,_0x482589=document[_0x338ec5(0x139)](_0x338ec5(0x133)),_0x372480=_0x482589['getContext']('2d');_0x372480[_0x338ec5(0x13c)]=_0x338ec5(0x12e),_0x372480['fillRect'](0x0,0x0,canvasBoundX,canvasBoundY);}function moveDefender(_0x50b6fb,_0x13f06c,_0x117698){var _0x57480d=_0x2d65fa,_0x431999=document[_0x57480d(0x139)]('myCanvas'),_0x1fbc04=_0x431999[_0x57480d(0x14a)]('2d');_0x1fbc04[_0x57480d(0x13c)]=colorOne,_0x1fbc04[_0x57480d(0x143)](),_0x1fbc04[_0x57480d(0x134)](_0x50b6fb,_0x13f06c,0xf,0x0,0x2*Math['PI'],!![]),_0x1fbc04[_0x57480d(0x136)](),_0x1fbc04[_0x57480d(0x12c)](),_0x1fbc04[_0x57480d(0x13c)]=colorOne,_0x1fbc04[_0x57480d(0x143)](),_0x1fbc04[_0x57480d(0x134)](_0x50b6fb+0xf*_0x117698,_0x13f06c,7.5,0x0,0x2*Math['PI'],!![]),_0x1fbc04[_0x57480d(0x136)](),_0x1fbc04[_0x57480d(0x12c)]();}function moveInvaders(){var _0x244196=_0x2d65fa,_0x46577c=document[_0x244196(0x139)]('myCanvas'),_0x4dfe89=_0x46577c[_0x244196(0x14a)]('2d');_0x4dfe89[_0x244196(0x13c)]=_0x244196(0x130),_0x4dfe89[_0x244196(0x143)](),_0x4dfe89['arc'](xInvaders,yInvaders,0x28,0x0,0x2*Math['PI'],!![]),_0x4dfe89['closePath'](),_0x4dfe89['fill'](),(xInvaders>=canvasBoundX-0x28||xInvaders<=0x28)&&(invaderSpeedX*=-0x1,yInvaders+=invaderSpeedY),xInvaders+=invaderSpeedX;}function hitInvader(){return Math['abs'](xInvaders-initialPositionX)<=0x28&&Math['abs'](yInvaders-bulletY)<=0x28;}function drawCircle(){var _0x22296a=_0x2d65fa,_0x538235=document[_0x22296a(0x139)](_0x22296a(0x133)),_0x11df85=_0x538235[_0x22296a(0x14a)]('2d');_0x11df85[_0x22296a(0x13c)]=_0x22296a(0x12e),_0x11df85[_0x22296a(0x13f)](0x0,0x0,canvasBoundX,canvasBoundY),_0x11df85[_0x22296a(0x13c)]=colorOne,_0x11df85['beginPath'](),_0x11df85['arc'](xCoordOne,yCoordOne,0xf,0x0,0x2*Math['PI'],!![]),_0x11df85[_0x22296a(0x136)](),_0x11df85[_0x22296a(0x12c)](),_0x11df85[_0x22296a(0x13c)]=colorTwo,_0x11df85['beginPath'](),_0x11df85[_0x22296a(0x134)](xCoordTwo,yCoordTwo,0xf,0x0,0x2*Math['PI'],!![]),_0x11df85['closePath'](),_0x11df85[_0x22296a(0x12c)]();}function move(){(xCoordOne>canvasBoundX-0xf||xCoordOne<0xf)&&(moveXOne*=-0x1),(yCoordOne>canvasBoundY-0xf||yCoordOne<0xf)&&(moveYOne*=-0x1),(xCoordTwo>canvasBoundX-0xf||xCoordTwo<0xf)&&(moveXTwo*=-0x1),(yCoordTwo>canvasBoundY-0xf||yCoordTwo<0xf)&&(moveYTwo*=-0x1),contact()&&(moveXOne*=-0x1,moveYOne*=-0x1,moveXTwo*=-0x1,moveYTwo*=-0x1,toggleColor()),xCoordOne+=moveXOne,yCoordOne+=moveYOne,xCoordTwo+=moveXTwo,yCoordTwo+=moveYTwo,drawCircle();}function contact(){var _0x4fefce=_0x2d65fa;return Math[_0x4fefce(0x141)](xCoordOne-xCoordTwo)<=0x14&&Math[_0x4fefce(0x141)](yCoordOne-yCoordTwo)<=0x14;}function toggleColor(){var _0x21be3d=_0x2d65fa;colorOne==_0x21be3d(0x129)?colorOne=_0x21be3d(0x12d):colorOne=_0x21be3d(0x129),colorTwo==_0x21be3d(0x14b)?colorTwo='#800080':colorTwo=_0x21be3d(0x14b);}function _0x3f93(_0x1ab3f3,_0x4906e0){var _0xc91569=_0xc915();return _0x3f93=function(_0x3f9310,_0x1af6b4){_0x3f9310=_0x3f9310-0x121;var _0x482832=_0xc91569[_0x3f9310];return _0x482832;},_0x3f93(_0x1ab3f3,_0x4906e0);}function toggleTimer(){isOn?turnOff():turnOn();}function turnOn(){var _0x468316=_0x2d65fa;timer=setInterval(_0x468316(0x13a),0x14),isOn=!![];}function turnOff(){clearInterval(timer),isOn=![];}