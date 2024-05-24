// //

//             //makes variables
//             var invaderSpeedX = 5;
//             var invaderSpeedY = 40;

//             var invaderHealth = 10;

//             var colorOne = "#0000FF";

//             //defines the boundaries of the canvas as varaibles to make it easier to hot swap
//             var canvasBoundX = 700;
//             var canvasBoundY = 500;

//             var speed = 6;

//             var xDef = 350;
//             var yDef = 450;

//             var xInvaders = 350;
//             var yInvaders = 50;

//             var targetX =  Math.floor(Math.random() * (canvasBoundX - 100)) + 50;
//             var targetY =  Math.floor(Math.random() * (canvasBoundY - 100)) + 50;
//             var targetActive = true;

//             var currentMovement = "none";
//             var previousMovement = "none";

//             var bulletShot = false;
//             var bulletX = 0;
//             var bulletY = 0;
//             var bulletDirection = "none";

//             var timestamp = 0;
//             var totalTime = 60000;
//             var totalShots = 0;
//             var targetsHit = 0;

//             var isOn = false;
//             //used for timer to determine if it is on or not
            
//             //adds keyboard listener
//             window.addEventListener("keydown", function(event){
//                 //changes keyboard input into diretions
//                 switch(event.key){
//                     case "a":
//                         currentMovement = "left";
//                         break;
//                     case "d":
//                         currentMovement = "right";
//                         break;
//                     case "w":
//                         currentMovement = "up";
//                         break;
//                     case "s":
//                         currentMovement = "down";
//                         break;
//                     default:
//                         currentMovement = "none";
//                         break;
//                 }

//                 if(currentMovement != "none")
//                     previousMovement = currentMovement;
                
//             }, true);

//             window.addEventListener("keyup", function(event){
//                 currentMovement = "none";
                
//             }, true);


//             //fill background and turn  on timer when the body gets initialized
//             function initialize(){
//                 var canvas = document.getElementById("myCanvas");
//                 var context = canvas.getContext("2d");

//                 context.fillStyle="#ADD8E6";
//                 context.fillRect(0, 0, canvasBoundX, canvasBoundY);

//                 turnOn();
//             }

//             //periodically called ever 20ms to update the game
//             function update(){
//                 resetBackground();
//                 writeText(timestamp / 1000, 10, 50);
//                 writeText(totalTime / 1000, 10, 100);
//                 writeText("Total Shots: " + totalShots, 500, 50);
//                 writeText("Points: " + targetsHit, 500, 90);
//                 moveDef();
//                 drawTarget();
//                 moveBullet();
//                 timestamp += 20;
//                 totalTime -= 20;

//                 if(totalTime <= 0){
//                     toggleTimer();
//                     resetBackground();
//                     writeText("Game Over!", canvasBoundX / 2, canvasBoundY / 2);
//                 }
//             }

//             //writes text on the screen given what to write and the location
//             function writeText(text, x, y){
//                 var canvas = document.getElementById("myCanvas");
//                 var context = canvas.getContext("2d");

//                 context.font = "30px Arial";
//                 context.fillStyle = "#FF0000";
//                 context.fillText(text, x, y);
//             }

//             //moves the bullet across the screen based on the direction
//             function moveBullet(){
//                 if(bulletShot == true){
//                     var canvas = document.getElementById("myCanvas");
//                     var context = canvas.getContext("2d");

//                     if(bulletDirection == "left")
//                         bulletX -= 10;
//                     else if(bulletDirection == "right")
//                         bulletX += 10;
//                     else if(bulletDirection == "down")
//                         bulletY += 10;
//                     else if(bulletDirection == "up")
//                         bulletY -= 10;
//                     else
//                         bulletX -= 10;

//                     context.fillStyle = "#FF0000";
//                     context.beginPath();
//                     context.arc(bulletX, bulletY, 8, 0, 2 * Math.PI, true);
//                     context.closePath();
//                     context.fill();

//                     //if the bullet hits anything reset it
//                     if(bulletY <= 10 || bulletY >= canvasBoundY - 10 || bulletX <= 10 || bulletX >= canvasBoundX - 10 || hitTarget()){
//                         context.strokeStyle = "#ADD8E6";
//                         context.stroke();
//                         bulletShot = false; 
//                     }

//                     //if it hits the target specifically then reset the target
//                     if(hitTarget()){
//                         targetActive = false;
//                         targetsHit++;
//                         placeTarget();
//                     }
//                 }
//             }

//             //places the target to the given coordinate
//             function drawTarget(){
//                 var canvas = document.getElementById("myCanvas");
//                 var context = canvas.getContext("2d");

//                 if(targetActive){
//                     context.fillStyle = "#FF0000";
//                     context.beginPath();
//                     context.arc(targetX, targetY, 16, 0, 2 * Math.PI, true);
//                     context.closePath();
//                     context.fill();

//                     context.fillStyle = "#FFFFFF";
//                     context.beginPath();
//                     context.arc(targetX, targetY, 12, 0, 2 * Math.PI, true);
//                     context.closePath();
//                     context.fill();

//                     context.fillStyle = "#FF0000";
//                     context.beginPath();
//                     context.arc(targetX, targetY, 8, 0, 2 * Math.PI, true);
//                     context.closePath();
//                     context.fill();

//                     context.fillStyle = "#FFFFFF";
//                     context.beginPath();
//                     context.arc(targetX, targetY, 4, 0, 2 * Math.PI, true);
//                     context.closePath();
//                     context.fill();

//                     if(timestamp > 1500){
//                         targetActive = false;
//                         placeTarget();
//                     }
//                 }
//             }

//             //redraws the target at a different location
//             function placeTarget(){
//                 if(!targetActive){
//                     targetX = Math.floor(Math.random() * (canvasBoundX - 100)) + 50;
//                     targetY = Math.floor(Math.random() * (canvasBoundY - 100)) + 50;

//                     timestamp = 0;
//                     targetActive = true;
//                 }
//             }

//             //toggles firing the bullet
//             function fireBullet(){
//                 if(!bulletShot){
//                     bulletX = xDef;
//                     bulletY = yDef;
//                     bulletDirection = previousMovement;
//                     totalShots++;
//                 }

//                 bulletShot = true;
                
//             }

//             //moves the tank based on the given direction
//             function moveDef(){
//                 switch(currentMovement){
//                     case "left":
//                         if(xDef > 20)
//                             xDef -= speed;
//                         moveDefender(xDef, yDef, previousMovement);
//                         break;
//                     case "right":
//                         if(xDef < canvasBoundX - 20)
//                             xDef += speed;
//                         moveDefender(xDef, yDef, previousMovement);
//                         break;
//                     case "up":
//                         if(yDef >= 20)
//                             yDef -= speed;
//                         moveDefender(xDef, yDef, previousMovement);
//                         break;
//                     case "down":
//                         if(yDef <= canvasBoundY - 20)
//                             yDef += speed;
//                         moveDefender(xDef, yDef, previousMovement);
//                         break;
//                     default:
//                         moveDefender(xDef, yDef, previousMovement);
//                         break;

//                 }
//             }

//             //used to reset the background to avoid smearing
//             function resetBackground(){
//                 var canvas = document.getElementById("myCanvas");
//                 var context = canvas.getContext("2d");
//                 //paint the background of the canvas
//                 context.fillStyle="#ADD8E6";
//                 context.fillRect(0, 0, canvasBoundX, canvasBoundY);
//             }

//             //places the defender to a given location and moves the turret based on the direction
//             function moveDefender(x, y, direction){
//                 var canvas = document.getElementById("myCanvas");
//                 var context = canvas.getContext("2d");

//                 var directX = 0;
//                 var directY = 0;

//                 context.fillStyle = colorOne;
//                 context.beginPath();
//                 context.arc(x, y, 15, 0, 2 * Math.PI, true);
//                 context.closePath();
//                 context.fill();

//                 if(direction == "up")
//                     directY = -1;
//                 else if(direction == "down")
//                     directY = 1;
//                 else if(direction == "left")
//                     directX = -1;
//                 else if(direction == "right")
//                     directX = 1;
                
//                 context.fillStyle = colorOne;
//                 context.beginPath();
//                 context.arc(x + (15 * directX), y + (15 * directY), 7.5, 0, 2 * Math.PI, true);
//                 context.closePath();
//                 context.fill();
//             }

//             //returns true if the bullet is within the hitbox of the target
//             function hitTarget(){
//                 return Math.abs(bulletX - targetX) < 16 && Math.abs(bulletY - targetY) < 16;
//             }

//             //toggles the timer 
//             function toggleTimer(){
//                 //if the timer is on the turn it off, if its not then turn it on
//                 isOn ? turnOff() : turnOn();
//             }

//             //manually turns on the timer
//             function turnOn(){
//                 //turns the timer on
//                 timer = setInterval("update()", 20);
//                 isOn = true;
//             }

//             //manually turns off the timer
//             function turnOff(){
//                 //turns the timer off
//                 clearInterval(timer);
//                 isOn = false;
//             }
function _0x2802(_0x3a3938,_0x36f900){var _0x19986b=_0x1998();return _0x2802=function(_0x28022e,_0x5aa255){_0x28022e=_0x28022e-0x188;var _0x316430=_0x19986b[_0x28022e];return _0x316430;},_0x2802(_0x3a3938,_0x36f900);}function _0x1998(){var _0x4a1eda=['left','#FFFFFF','1102638kfaPkb','right','floor','fillText','getContext','down','fill','font','update()','6996059NRETTv','18HYxPFZ','30px\x20Arial','8CtFzTl','stroke','fillStyle','2128305WtaJiZ','beginPath','2743950vITHGR','#FF0000','Points:\x20','arc','random','#0000FF','fillRect','getElementById','#ADD8E6','none','abs','6tzgSQl','Total\x20Shots:\x20','myCanvas','addEventListener','2828190xfKZDI','keydown','544430BRYBKM','closePath','6265672FqFlxj'];_0x1998=function(){return _0x4a1eda;};return _0x1998();}var _0x29cdce=_0x2802;(function(_0x4cec4c,_0x273cb0){var _0x5af966=_0x2802,_0x1ae016=_0x4cec4c();while(!![]){try{var _0x4d9d27=-parseInt(_0x5af966(0x1a3))/0x1+parseInt(_0x5af966(0x18d))/0x2+-parseInt(_0x5af966(0x18b))/0x3+parseInt(_0x5af966(0x1a0))/0x4+parseInt(_0x5af966(0x19e))/0x5*(parseInt(_0x5af966(0x198))/0x6)+parseInt(_0x5af966(0x1ac))/0x7*(-parseInt(_0x5af966(0x188))/0x8)+parseInt(_0x5af966(0x1ad))/0x9*(parseInt(_0x5af966(0x19c))/0xa);if(_0x4d9d27===_0x273cb0)break;else _0x1ae016['push'](_0x1ae016['shift']());}catch(_0x4b2902){_0x1ae016['push'](_0x1ae016['shift']());}}}(_0x1998,0xc3a7f));var invaderSpeedX=0x5,invaderSpeedY=0x28,invaderHealth=0xa,colorOne=_0x29cdce(0x192),canvasBoundX=0x2bc,canvasBoundY=0x1f4,speed=0x6,xDef=0x15e,yDef=0x1c2,xInvaders=0x15e,yInvaders=0x32,targetX=Math[_0x29cdce(0x1a5)](Math[_0x29cdce(0x191)]()*(canvasBoundX-0x64))+0x32,targetY=Math[_0x29cdce(0x1a5)](Math[_0x29cdce(0x191)]()*(canvasBoundY-0x64))+0x32,targetActive=!![],currentMovement='none',previousMovement=_0x29cdce(0x196),bulletShot=![],bulletX=0x0,bulletY=0x0,bulletDirection=_0x29cdce(0x196),timestamp=0x0,totalTime=0xea60,totalShots=0x0,targetsHit=0x0,isOn=![];window[_0x29cdce(0x19b)](_0x29cdce(0x19d),function(_0x353ddf){var _0x2401e1=_0x29cdce;switch(_0x353ddf['key']){case'a':currentMovement=_0x2401e1(0x1a1);break;case'd':currentMovement=_0x2401e1(0x1a4);break;case'w':currentMovement='up';break;case's':currentMovement=_0x2401e1(0x1a8);break;default:currentMovement=_0x2401e1(0x196);break;}if(currentMovement!=_0x2401e1(0x196))previousMovement=currentMovement;},!![]),window[_0x29cdce(0x19b)]('keyup',function(_0x136b5f){var _0x70d05d=_0x29cdce;currentMovement=_0x70d05d(0x196);},!![]);function initialize(){var _0x5f50a4=_0x29cdce,_0x3d95c7=document[_0x5f50a4(0x194)](_0x5f50a4(0x19a)),_0x5db2eb=_0x3d95c7[_0x5f50a4(0x1a7)]('2d');_0x5db2eb[_0x5f50a4(0x18a)]=_0x5f50a4(0x195),_0x5db2eb[_0x5f50a4(0x193)](0x0,0x0,canvasBoundX,canvasBoundY),turnOn();}function update(){var _0x7c34be=_0x29cdce;resetBackground(),writeText(timestamp/0x3e8,0xa,0x32),writeText(totalTime/0x3e8,0xa,0x64),writeText(_0x7c34be(0x199)+totalShots,0x1f4,0x32),writeText(_0x7c34be(0x18f)+targetsHit,0x1f4,0x5a),moveDef(),drawTarget(),moveBullet(),timestamp+=0x14,totalTime-=0x14,totalTime<=0x0&&(toggleTimer(),resetBackground(),writeText('Game\x20Over!',canvasBoundX/0x2,canvasBoundY/0x2));}function writeText(_0x21f089,_0x1606f8,_0x38ea07){var _0x4fb3e0=_0x29cdce,_0x42aade=document[_0x4fb3e0(0x194)](_0x4fb3e0(0x19a)),_0x1758a0=_0x42aade[_0x4fb3e0(0x1a7)]('2d');_0x1758a0[_0x4fb3e0(0x1aa)]=_0x4fb3e0(0x1ae),_0x1758a0[_0x4fb3e0(0x18a)]=_0x4fb3e0(0x18e),_0x1758a0[_0x4fb3e0(0x1a6)](_0x21f089,_0x1606f8,_0x38ea07);}function moveBullet(){var _0x5606bc=_0x29cdce;if(bulletShot==!![]){var _0x314b28=document[_0x5606bc(0x194)](_0x5606bc(0x19a)),_0x3318cf=_0x314b28['getContext']('2d');if(bulletDirection==_0x5606bc(0x1a1))bulletX-=0xa;else{if(bulletDirection==_0x5606bc(0x1a4))bulletX+=0xa;else{if(bulletDirection==_0x5606bc(0x1a8))bulletY+=0xa;else{if(bulletDirection=='up')bulletY-=0xa;else bulletX-=0xa;}}}_0x3318cf[_0x5606bc(0x18a)]=_0x5606bc(0x18e),_0x3318cf[_0x5606bc(0x18c)](),_0x3318cf[_0x5606bc(0x190)](bulletX,bulletY,0x8,0x0,0x2*Math['PI'],!![]),_0x3318cf[_0x5606bc(0x19f)](),_0x3318cf[_0x5606bc(0x1a9)](),(bulletY<=0xa||bulletY>=canvasBoundY-0xa||bulletX<=0xa||bulletX>=canvasBoundX-0xa||hitTarget())&&(_0x3318cf['strokeStyle']=_0x5606bc(0x195),_0x3318cf[_0x5606bc(0x189)](),bulletShot=![]),hitTarget()&&(targetActive=![],targetsHit++,placeTarget());}}function drawTarget(){var _0x3141f3=_0x29cdce,_0x1b256a=document[_0x3141f3(0x194)](_0x3141f3(0x19a)),_0x30086e=_0x1b256a[_0x3141f3(0x1a7)]('2d');targetActive&&(_0x30086e[_0x3141f3(0x18a)]=_0x3141f3(0x18e),_0x30086e[_0x3141f3(0x18c)](),_0x30086e[_0x3141f3(0x190)](targetX,targetY,0x10,0x0,0x2*Math['PI'],!![]),_0x30086e[_0x3141f3(0x19f)](),_0x30086e[_0x3141f3(0x1a9)](),_0x30086e[_0x3141f3(0x18a)]=_0x3141f3(0x1a2),_0x30086e[_0x3141f3(0x18c)](),_0x30086e['arc'](targetX,targetY,0xc,0x0,0x2*Math['PI'],!![]),_0x30086e[_0x3141f3(0x19f)](),_0x30086e['fill'](),_0x30086e[_0x3141f3(0x18a)]=_0x3141f3(0x18e),_0x30086e[_0x3141f3(0x18c)](),_0x30086e[_0x3141f3(0x190)](targetX,targetY,0x8,0x0,0x2*Math['PI'],!![]),_0x30086e[_0x3141f3(0x19f)](),_0x30086e['fill'](),_0x30086e['fillStyle']=_0x3141f3(0x1a2),_0x30086e[_0x3141f3(0x18c)](),_0x30086e[_0x3141f3(0x190)](targetX,targetY,0x4,0x0,0x2*Math['PI'],!![]),_0x30086e[_0x3141f3(0x19f)](),_0x30086e[_0x3141f3(0x1a9)](),timestamp>0x5dc&&(targetActive=![],placeTarget()));}function placeTarget(){var _0x43148e=_0x29cdce;!targetActive&&(targetX=Math[_0x43148e(0x1a5)](Math[_0x43148e(0x191)]()*(canvasBoundX-0x64))+0x32,targetY=Math['floor'](Math[_0x43148e(0x191)]()*(canvasBoundY-0x64))+0x32,timestamp=0x0,targetActive=!![]);}function fireBullet(){!bulletShot&&(bulletX=xDef,bulletY=yDef,bulletDirection=previousMovement,totalShots++),bulletShot=!![];}function moveDef(){var _0x1270ef=_0x29cdce;switch(currentMovement){case _0x1270ef(0x1a1):if(xDef>0x14)xDef-=speed;moveDefender(xDef,yDef,previousMovement);break;case _0x1270ef(0x1a4):if(xDef<canvasBoundX-0x14)xDef+=speed;moveDefender(xDef,yDef,previousMovement);break;case'up':if(yDef>=0x14)yDef-=speed;moveDefender(xDef,yDef,previousMovement);break;case'down':if(yDef<=canvasBoundY-0x14)yDef+=speed;moveDefender(xDef,yDef,previousMovement);break;default:moveDefender(xDef,yDef,previousMovement);break;}}function resetBackground(){var _0x5480c4=_0x29cdce,_0x1b055d=document[_0x5480c4(0x194)](_0x5480c4(0x19a)),_0x5953f0=_0x1b055d[_0x5480c4(0x1a7)]('2d');_0x5953f0[_0x5480c4(0x18a)]='#ADD8E6',_0x5953f0[_0x5480c4(0x193)](0x0,0x0,canvasBoundX,canvasBoundY);}function moveDefender(_0x49ab6c,_0xf85a7e,_0x19c28e){var _0x43cb9f=_0x29cdce,_0x5cd673=document['getElementById']('myCanvas'),_0x2fae4a=_0x5cd673['getContext']('2d'),_0x547753=0x0,_0x39726f=0x0;_0x2fae4a[_0x43cb9f(0x18a)]=colorOne,_0x2fae4a[_0x43cb9f(0x18c)](),_0x2fae4a[_0x43cb9f(0x190)](_0x49ab6c,_0xf85a7e,0xf,0x0,0x2*Math['PI'],!![]),_0x2fae4a['closePath'](),_0x2fae4a[_0x43cb9f(0x1a9)]();if(_0x19c28e=='up')_0x39726f=-0x1;else{if(_0x19c28e==_0x43cb9f(0x1a8))_0x39726f=0x1;else{if(_0x19c28e==_0x43cb9f(0x1a1))_0x547753=-0x1;else{if(_0x19c28e==_0x43cb9f(0x1a4))_0x547753=0x1;}}}_0x2fae4a['fillStyle']=colorOne,_0x2fae4a[_0x43cb9f(0x18c)](),_0x2fae4a[_0x43cb9f(0x190)](_0x49ab6c+0xf*_0x547753,_0xf85a7e+0xf*_0x39726f,7.5,0x0,0x2*Math['PI'],!![]),_0x2fae4a[_0x43cb9f(0x19f)](),_0x2fae4a[_0x43cb9f(0x1a9)]();}function hitTarget(){var _0x3dc68c=_0x29cdce;return Math[_0x3dc68c(0x197)](bulletX-targetX)<0x10&&Math[_0x3dc68c(0x197)](bulletY-targetY)<0x10;}function toggleTimer(){isOn?turnOff():turnOn();}function turnOn(){var _0x34cf6a=_0x29cdce;timer=setInterval(_0x34cf6a(0x1ab),0x14),isOn=!![];}function turnOff(){clearInterval(timer),isOn=![];}