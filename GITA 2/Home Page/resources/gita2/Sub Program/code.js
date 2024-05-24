
            // var colorOne = "#0000FF";

            // //defines the boundaries of the canvas as varaibles to make it easier to hot swap
            // var canvasBoundX = 700;
            // var canvasBoundY = 500;

            // var speed = 6;

            // //defines initial position of the sub 
            // var xSub = 350;
            // var ySub = 200;

            // var currentMovement = "none";
            // var previousMovement = "none";

            // var isOn = false;
            // var time = 0;

            // var health = 2000;
            // //used for timer to determine if it is on or not
            
            // //an array to hold all the fishes
            // var fishes = new Array();

            // class Fish{
                
            //     constructor(x, y, image, direction, speedX, speedY){
            //         this.x = x;
            //         this.y = y;
            //         this.image = image;
            //         this.direction = direction;
            //         this.speedX = speedX; 
            //         this.speedY = speedY;
            //     }

            //     setX(newX){
            //         this.x = newX - 50;
            //     }

            //     setY(newY){
            //         this.y = newY - 50;
            //     }

            //     getX(){
            //         return this.x + 50;
            //     }

            //     getY(){
            //         return this.y + 50;
            //     }

            //     setSpeedX(speedX){
            //         this.speedX = speedX;

            //         if(speedX > 0){
            //             this.setDirection("Right");
            //         }
            //         else if(speedX < 0){
            //             this.setDirection("Left");
            //         }
            //     }

            //     getSpeedX(){
            //         return this.speedX;
            //     }

            //     setSpeedY(speedY){
            //         this.speedY = speedY;
            //     }

            //     getSpeedY(){
            //         return this.speedY;
            //     }

            //     setDirection(direction){
            //         this.direction = direction;
            //     }

            //     getImage(){
            //         return this.image + this.direction;
            //     }
            // }
            
            // //for loop to make a bunch of fishes
            // for(var i = 0; i < 6; i++){

            //     var xCoord = Math.floor(Math.random() * (canvasBoundX - 200)) + 100;
            //     var yCoord = Math.floor(Math.random() * (canvasBoundY - 200)) + 100;

            //     var colorIndex = Math.floor(Math.random() * 9) + 1;
            //     var image = "fish" + colorIndex;

            //     //var direction = "Right";
            //     var fishSpeedX = Math.floor(Math.random() * 4) - 2;
            //     var fishSpeedY = Math.floor(Math.random() * 4) - 2;

            //     if(fishSpeedX > 0)
            //         direction = "Right";
            //     else if(fishSpeedX < 0)
            //         direction = "Left";
            //     else{
            //         fishSpeedX = 2;
            //         direction = "Right";
            //     }


            //     fishes[i] = new Fish(xCoord, yCoord, image, direction, fishSpeedX, fishSpeedY);
            // }

            // var smallFish = new Fish(300, 300, "littleFish", "Left", 3, 3)


            // //adds keyboard listener
            // window.addEventListener("keydown", function(event){
            //     //changes keyboard input into diretions
            //     switch(event.key){
            //         case "a":
            //             currentMovement = "left";
            //             break;
            //         case "d":
            //             currentMovement = "right";
            //             break;
            //         case "s":
            //             currentMovement = "down";
            //             break;
            //         default:
            //             currentMovement = "none";
            //             break;
            //     }

            //     if(currentMovement != "none" && currentMovement != "down")
            //         previousMovement = currentMovement;
                
            // }, true);

            // window.addEventListener("keyup", function(event){
            //     currentMovement = "none";
                
            // }, true);


            // //fill background and turn  on timer when the body gets initialized
            // function initialize(){
            //     var canvas = document.getElementById("myCanvas");
            //     var context = canvas.getContext("2d");

            //     context.fillStyle="#ADD8E6";
            //     context.fillRect(0, 0, canvasBoundX, canvasBoundY);

            //     turnOn();
            // }

            // //periodically called ever 20ms to update the game
            // function update(){
            //     time += .02;
            //     resetBackground();
            //     controlSub(); 
            //     moveFish();
            //     decayHealth();
            //     writeText(Math.floor(time * 100) / 100, 20, 40);
            //     writeText(health, 20, 80);

            //     if(health < 0){
            //         writeText("GAME OVER", 300, 300);
            //         writeText("You lasted: " + (Math.floor(time * 100) / 100) + " seconds!", 300, 400);
            //         turnOff();
            //     }
            // }

            // function drawSub(x, y, direction){
            //     var canvas = document.getElementById("myCanvas");
            //     var context = canvas.getContext("2d");

            //     var image;
                
            //     if(direction == "right")
            //         image = document.getElementById("sub right");
            //     else
            //         image = document.getElementById("sub left");

            //     context.drawImage(image, x -50, y - 50, 120, 75);
            // }

            // function drawImage(id, x, y, width, height){
            //     var canvas = document.getElementById("myCanvas");
            //     var context = canvas.getContext("2d");

            //     var image = document.getElementById(id);
            //     context.drawImage(image, x, y, width, height);
            // }

            // //writes text on the screen given what to write and the location
            // function writeText(text, x, y){
            //     var canvas = document.getElementById("myCanvas");
            //     var context = canvas.getContext("2d");

            //     context.font = "30px Arial";
            //     context.fillStyle = "#FF0000";
            //     context.fillText(text, x, y);
            // }

            // //moves the sub based on the given direction
            // function controlSub(){

            //     switch(currentMovement){
            //         case "left":
            //             if(xSub > 40)
            //                 xSub -= speed;
            //             drawSub(xSub, ySub, previousMovement);
            //             break;
            //         case "right":
            //             if(xSub < canvasBoundX - 60)
            //                 xSub += speed;
            //             drawSub(xSub, ySub, previousMovement);
            //             break;
            //         case "down":
            //             if(ySub <= canvasBoundY - 15)
            //                 ySub += speed;
            //             drawSub(xSub, ySub, previousMovement);
            //             break;  
            //         default:

            //             drawSub(xSub, ySub, previousMovement);
            //             break;
            //     }

            //     if(currentMovement != "down" && ySub > 40)
            //         ySub -= speed / 5;
            // }

            // //used to reset the background to avoid smearing
            // function resetBackground(){
            //     var canvas = document.getElementById("myCanvas");
            //     var context = canvas.getContext("2d");
            //     //paint the background of the canvas
            //     context.fillStyle="#ADD8E6";
            //     context.fillRect(0, 0, canvasBoundX, canvasBoundY);
            // }

            // //places the defender to a given location and moves the turret based on the direction
            // function moveSub(x, y, direction){
            //     var canvas = document.getElementById("myCanvas");
            //     var context = canvas.getContext("2d");

            //     var directX = 0;
            //     var directY = 0;

            //     context.fillStyle = colorOne;
            //     context.beginPath();
            //     context.arc(x, y, 15, 0, 2 * Math.PI, true);
            //     context.closePath();
            //     context.fill();

            //     if(direction == "left")
            //         directX = -1;
            //     else if(direction == "right")
            //         directX = 1;
                
            //     context.fillStyle = colorOne;
            //     context.beginPath();
            //     context.arc(x + (15 * directX), y, 7.5, 0, 2 * Math.PI, true);
            //     context.closePath();
            //     context.fill();
            // }

            // function moveFish(){

            //     for(var i = 0; i < fishes.length; i++){
            //         var currentFish = fishes[i];    

            //         if(time % 2 < 0.1){
            //             currentFish.setSpeedX((Math.random() - 0.5) * 4);
            //             currentFish.setSpeedY((Math.random() - 0.5) * 4);
            //         }

            //         if((currentFish.getX() < 25) || (currentFish.getX() > canvasBoundX - 25))
            //             currentFish.setSpeedX(currentFish.getSpeedX() * -1);
                    
            //         if((currentFish.getY() < 10 && currentFish.getSpeedY() < 0) || (currentFish.getY() > canvasBoundY - 10 && currentFish.getSpeedY() > 0))
            //             currentFish.setSpeedY(currentFish.getSpeedY() * -1);
                   

            //         if(Math.abs(currentFish.getX() - xSub) < 25 && previousMovement == "right")
            //             currentFish.setSpeedX(6);
            //         else if(Math.abs(currentFish.getX() - xSub) < 25 && previousMovement == "left")
            //             currentFish.setSpeedX(-6);

            //         if(Math.abs(currentFish.getY() - ySub) < 25 && currentMovement == "down")
            //             currentFish.setSpeedY(6);
            //         else if(Math.abs(currentFish.getY() - ySub) < 25 && currentMovement != "down")
            //             currentFish.setSpeedY(-6);

            //         currentFish.setX(currentFish.getX() + currentFish.getSpeedX());
            //         currentFish.setY(currentFish.getY() + currentFish.getSpeedY());
            //     }

            //     moveSmallFish();
            //     drawFish();
            // }

            // function moveSmallFish(){
            //     var currentFish = smallFish;  

            //         if(time % 2 < 0.1){
            //             currentFish.setSpeedX((Math.random() - 0.5) * 4);
            //             currentFish.setSpeedY((Math.random() - 0.5) * 4);
            //         }

            //         if((currentFish.getX() < 25) || (currentFish.getX() > canvasBoundX - 25))
            //             currentFish.setSpeedX(currentFish.getSpeedX() * -1);
                    
            //         if((currentFish.getY() < 10 && currentFish.getSpeedY() < 0) || (currentFish.getY() > canvasBoundY - 10 && currentFish.getSpeedY() > 0))
            //             currentFish.setSpeedY(currentFish.getSpeedY() * -1);
            

            //         currentFish.setX(currentFish.getX() + currentFish.getSpeedX());
            //         currentFish.setY(currentFish.getY() + currentFish.getSpeedY());
            // }

            // function drawFish(){
            //     var canvas = document.getElementById("myCanvas");
            //     var context = canvas.getContext("2d");

            //     for(var i = 0; i < fishes.length; i++){
            //         if(fishes[i])

            //         var image = document.getElementById(fishes[i].getImage());

            //         context.drawImage(image, fishes[i].x, fishes[i].y, 100, 100);
            //     }

            //     var image = document.getElementById(smallFish.getImage());
            //     context.drawImage(image, smallFish.x, smallFish.y, 75, 75);
            // }

            // function decayHealth(){
            //     for(var i = 0; i < fishes.length; i++){
            //         var currentFish = fishes[i];

            //         if(Math.abs(currentFish.getX() - smallFish.getX()) < 50 && Math.abs(currentFish.getY() - smallFish.getY()) < 50)
            //             health -= 20;
            //     }
            // }


            // //toggles the timer 
            // function toggleTimer(){
            //     //if the timer is on the turn it off, if its not then turn it on
            //     isOn ? turnOff() : turnOn();
            // }

            // //manually turns on the timer
            // function turnOn(){
            //     //turns the timer on
            //     timer = setInterval("update()", 20);
            //     isOn = true;
            // }

            // //manually turns off the timer
            // function turnOff(){
            //     //turns the timer off
            //     clearInterval(timer);
            //     isOn = false;
            // }
            var _0x4de9c6=_0x23cb;(function(_0x1311a9,_0x15455e){var _0x2da358=_0x23cb,_0x31ab2a=_0x1311a9();while(!![]){try{var _0x4998f0=-parseInt(_0x2da358(0x172))/0x1*(parseInt(_0x2da358(0x17b))/0x2)+parseInt(_0x2da358(0x170))/0x3*(parseInt(_0x2da358(0x184))/0x4)+-parseInt(_0x2da358(0x16c))/0x5+parseInt(_0x2da358(0x181))/0x6+parseInt(_0x2da358(0x173))/0x7*(-parseInt(_0x2da358(0x16f))/0x8)+-parseInt(_0x2da358(0x190))/0x9*(parseInt(_0x2da358(0x162))/0xa)+parseInt(_0x2da358(0x16e))/0xb;if(_0x4998f0===_0x15455e)break;else _0x31ab2a['push'](_0x31ab2a['shift']());}catch(_0x4f3ce0){_0x31ab2a['push'](_0x31ab2a['shift']());}}}(_0x58c6,0xdbdcb));function _0x58c6(){var _0xdfbe15=['myCanvas','setY','fillStyle','fish','getImage','getSpeedY','setX','657970UmAdFO','key','12978746qjNdIN','675144xAudYn','843GSUjeS','abs','1VGOuDa','7vSxTrd','getSpeedX','right','image','length','#FF0000','sub\x20right','getX','2419786HqIyBO','setDirection','Right','setSpeedX','littleFish','You\x20lasted:\x20','8295372omHVPZ','getElementById','fill','14828ifPGhm','down','getContext','direction','getY','drawImage','none','speedX','sub\x20left','keyup','floor','left','144aKFQdW','speedY','beginPath','random','closePath','#0000FF','fillRect','GAME\x20OVER','arc','addEventListener','update()','Left','798550msxTxu','setSpeedY','#ADD8E6'];_0x58c6=function(){return _0xdfbe15;};return _0x58c6();}var colorOne=_0x4de9c6(0x15b),canvasBoundX=0x2bc,canvasBoundY=0x1f4,speed=0x6,xSub=0x15e,ySub=0xc8,currentMovement=_0x4de9c6(0x18a),previousMovement=_0x4de9c6(0x18a),isOn=![],time=0x0,health=0x7d0,fishes=new Array();class Fish{constructor(_0x42d9cb,_0x56b3e6,_0x4e4626,_0x4ba953,_0x436ccf,_0xe5a73){var _0x541357=_0x4de9c6;this['x']=_0x42d9cb,this['y']=_0x56b3e6,this['image']=_0x4e4626,this['direction']=_0x4ba953,this[_0x541357(0x18b)]=_0x436ccf,this[_0x541357(0x157)]=_0xe5a73;}[_0x4de9c6(0x16b)](_0x2a3ea9){this['x']=_0x2a3ea9-0x32;}[_0x4de9c6(0x166)](_0x20567b){this['y']=_0x20567b-0x32;}[_0x4de9c6(0x17a)](){return this['x']+0x32;}[_0x4de9c6(0x188)](){return this['y']+0x32;}['setSpeedX'](_0x40a61b){var _0x20524a=_0x4de9c6;this[_0x20524a(0x18b)]=_0x40a61b;if(_0x40a61b>0x0)this['setDirection']('Right');else _0x40a61b<0x0&&this[_0x20524a(0x17c)]('Left');}[_0x4de9c6(0x174)](){var _0x207c11=_0x4de9c6;return this[_0x207c11(0x18b)];}['setSpeedY'](_0x54943b){var _0x1d6c47=_0x4de9c6;this[_0x1d6c47(0x157)]=_0x54943b;}['getSpeedY'](){return this['speedY'];}['setDirection'](_0x969118){this['direction']=_0x969118;}[_0x4de9c6(0x169)](){var _0x16cbb2=_0x4de9c6;return this[_0x16cbb2(0x176)]+this[_0x16cbb2(0x187)];}}for(var i=0x0;i<0x6;i++){var xCoord=Math[_0x4de9c6(0x18e)](Math[_0x4de9c6(0x159)]()*(canvasBoundX-0xc8))+0x64,yCoord=Math[_0x4de9c6(0x18e)](Math[_0x4de9c6(0x159)]()*(canvasBoundY-0xc8))+0x64,colorIndex=Math[_0x4de9c6(0x18e)](Math[_0x4de9c6(0x159)]()*0x9)+0x1,image=_0x4de9c6(0x168)+colorIndex,fishSpeedX=Math[_0x4de9c6(0x18e)](Math[_0x4de9c6(0x159)]()*0x4)-0x2,fishSpeedY=Math[_0x4de9c6(0x18e)](Math[_0x4de9c6(0x159)]()*0x4)-0x2;if(fishSpeedX>0x0)direction=_0x4de9c6(0x17d);else{if(fishSpeedX<0x0)direction=_0x4de9c6(0x161);else fishSpeedX=0x2,direction=_0x4de9c6(0x17d);}fishes[i]=new Fish(xCoord,yCoord,image,direction,fishSpeedX,fishSpeedY);}var smallFish=new Fish(0x12c,0x12c,_0x4de9c6(0x17f),_0x4de9c6(0x161),0x3,0x3);window['addEventListener']('keydown',function(_0x2b6ee9){var _0x21cedd=_0x4de9c6;switch(_0x2b6ee9[_0x21cedd(0x16d)]){case'a':currentMovement='left';break;case'd':currentMovement='right';break;case's':currentMovement=_0x21cedd(0x185);break;default:currentMovement=_0x21cedd(0x18a);break;}if(currentMovement!=_0x21cedd(0x18a)&&currentMovement!=_0x21cedd(0x185))previousMovement=currentMovement;},!![]),window[_0x4de9c6(0x15f)](_0x4de9c6(0x18d),function(_0x9c10b3){currentMovement='none';},!![]);function initialize(){var _0x613fb1=_0x4de9c6,_0x555ff7=document[_0x613fb1(0x182)](_0x613fb1(0x165)),_0x123600=_0x555ff7[_0x613fb1(0x186)]('2d');_0x123600['fillStyle']=_0x613fb1(0x164),_0x123600[_0x613fb1(0x15c)](0x0,0x0,canvasBoundX,canvasBoundY),turnOn();}function update(){var _0x543f3f=_0x4de9c6;time+=0.02,resetBackground(),controlSub(),moveFish(),decayHealth(),writeText(Math[_0x543f3f(0x18e)](time*0x64)/0x64,0x14,0x28),writeText(health,0x14,0x50),health<0x0&&(writeText(_0x543f3f(0x15d),0x12c,0x12c),writeText(_0x543f3f(0x180)+Math['floor'](time*0x64)/0x64+'\x20seconds!',0x12c,0x190),turnOff());}function drawSub(_0xdd7ee7,_0x6301d9,_0x4c90e2){var _0x5a4442=_0x4de9c6,_0x3f52a3=document['getElementById']('myCanvas'),_0x49c960=_0x3f52a3[_0x5a4442(0x186)]('2d'),_0x4bca05;if(_0x4c90e2==_0x5a4442(0x175))_0x4bca05=document['getElementById'](_0x5a4442(0x179));else _0x4bca05=document[_0x5a4442(0x182)](_0x5a4442(0x18c));_0x49c960[_0x5a4442(0x189)](_0x4bca05,_0xdd7ee7-0x32,_0x6301d9-0x32,0x78,0x4b);}function drawImage(_0x338af2,_0x160a99,_0x8702a9,_0x3d7fff,_0x42dfba){var _0x4732f4=_0x4de9c6,_0x7881e=document[_0x4732f4(0x182)](_0x4732f4(0x165)),_0x5cd339=_0x7881e['getContext']('2d'),_0x1e9865=document[_0x4732f4(0x182)](_0x338af2);_0x5cd339[_0x4732f4(0x189)](_0x1e9865,_0x160a99,_0x8702a9,_0x3d7fff,_0x42dfba);}function writeText(_0x109e0c,_0x53a733,_0x1ac88e){var _0x396c1e=_0x4de9c6,_0x3174f8=document[_0x396c1e(0x182)](_0x396c1e(0x165)),_0x414565=_0x3174f8[_0x396c1e(0x186)]('2d');_0x414565['font']='30px\x20Arial',_0x414565[_0x396c1e(0x167)]=_0x396c1e(0x178),_0x414565['fillText'](_0x109e0c,_0x53a733,_0x1ac88e);}function controlSub(){var _0x2d8849=_0x4de9c6;switch(currentMovement){case _0x2d8849(0x18f):if(xSub>0x28)xSub-=speed;drawSub(xSub,ySub,previousMovement);break;case'right':if(xSub<canvasBoundX-0x3c)xSub+=speed;drawSub(xSub,ySub,previousMovement);break;case _0x2d8849(0x185):if(ySub<=canvasBoundY-0xf)ySub+=speed;drawSub(xSub,ySub,previousMovement);break;default:drawSub(xSub,ySub,previousMovement);break;}if(currentMovement!='down'&&ySub>0x28)ySub-=speed/0x5;}function resetBackground(){var _0x2dc0d7=_0x4de9c6,_0x3a66dc=document[_0x2dc0d7(0x182)](_0x2dc0d7(0x165)),_0x130f3c=_0x3a66dc['getContext']('2d');_0x130f3c['fillStyle']='#ADD8E6',_0x130f3c[_0x2dc0d7(0x15c)](0x0,0x0,canvasBoundX,canvasBoundY);}function moveSub(_0x2d78f8,_0x1117fd,_0x1ad3ff){var _0x2b3a5a=_0x4de9c6,_0x509a43=document[_0x2b3a5a(0x182)](_0x2b3a5a(0x165)),_0x48d86f=_0x509a43['getContext']('2d'),_0x4017eb=0x0,_0x378ad1=0x0;_0x48d86f[_0x2b3a5a(0x167)]=colorOne,_0x48d86f[_0x2b3a5a(0x158)](),_0x48d86f['arc'](_0x2d78f8,_0x1117fd,0xf,0x0,0x2*Math['PI'],!![]),_0x48d86f[_0x2b3a5a(0x15a)](),_0x48d86f[_0x2b3a5a(0x183)]();if(_0x1ad3ff==_0x2b3a5a(0x18f))_0x4017eb=-0x1;else{if(_0x1ad3ff=='right')_0x4017eb=0x1;}_0x48d86f['fillStyle']=colorOne,_0x48d86f[_0x2b3a5a(0x158)](),_0x48d86f[_0x2b3a5a(0x15e)](_0x2d78f8+0xf*_0x4017eb,_0x1117fd,7.5,0x0,0x2*Math['PI'],!![]),_0x48d86f[_0x2b3a5a(0x15a)](),_0x48d86f[_0x2b3a5a(0x183)]();}function moveFish(){var _0x55ff93=_0x4de9c6;for(var _0x3fe922=0x0;_0x3fe922<fishes['length'];_0x3fe922++){var _0x8164a7=fishes[_0x3fe922];time%0x2<0.1&&(_0x8164a7[_0x55ff93(0x17e)]((Math[_0x55ff93(0x159)]()-0.5)*0x4),_0x8164a7['setSpeedY']((Math['random']()-0.5)*0x4));if(_0x8164a7['getX']()<0x19||_0x8164a7[_0x55ff93(0x17a)]()>canvasBoundX-0x19)_0x8164a7['setSpeedX'](_0x8164a7['getSpeedX']()*-0x1);if(_0x8164a7['getY']()<0xa&&_0x8164a7['getSpeedY']()<0x0||_0x8164a7[_0x55ff93(0x188)]()>canvasBoundY-0xa&&_0x8164a7[_0x55ff93(0x16a)]()>0x0)_0x8164a7['setSpeedY'](_0x8164a7[_0x55ff93(0x16a)]()*-0x1);if(Math['abs'](_0x8164a7[_0x55ff93(0x17a)]()-xSub)<0x19&&previousMovement==_0x55ff93(0x175))_0x8164a7[_0x55ff93(0x17e)](0x6);else{if(Math['abs'](_0x8164a7[_0x55ff93(0x17a)]()-xSub)<0x19&&previousMovement==_0x55ff93(0x18f))_0x8164a7[_0x55ff93(0x17e)](-0x6);}if(Math[_0x55ff93(0x171)](_0x8164a7[_0x55ff93(0x188)]()-ySub)<0x19&&currentMovement=='down')_0x8164a7['setSpeedY'](0x6);else{if(Math[_0x55ff93(0x171)](_0x8164a7[_0x55ff93(0x188)]()-ySub)<0x19&&currentMovement!=_0x55ff93(0x185))_0x8164a7[_0x55ff93(0x163)](-0x6);}_0x8164a7[_0x55ff93(0x16b)](_0x8164a7['getX']()+_0x8164a7[_0x55ff93(0x174)]()),_0x8164a7[_0x55ff93(0x166)](_0x8164a7['getY']()+_0x8164a7[_0x55ff93(0x16a)]());}moveSmallFish(),drawFish();}function moveSmallFish(){var _0x110898=_0x4de9c6,_0x263acb=smallFish;time%0x2<0.1&&(_0x263acb[_0x110898(0x17e)]((Math[_0x110898(0x159)]()-0.5)*0x4),_0x263acb[_0x110898(0x163)]((Math[_0x110898(0x159)]()-0.5)*0x4));if(_0x263acb['getX']()<0x19||_0x263acb['getX']()>canvasBoundX-0x19)_0x263acb[_0x110898(0x17e)](_0x263acb[_0x110898(0x174)]()*-0x1);if(_0x263acb[_0x110898(0x188)]()<0xa&&_0x263acb[_0x110898(0x16a)]()<0x0||_0x263acb['getY']()>canvasBoundY-0xa&&_0x263acb['getSpeedY']()>0x0)_0x263acb[_0x110898(0x163)](_0x263acb[_0x110898(0x16a)]()*-0x1);_0x263acb[_0x110898(0x16b)](_0x263acb[_0x110898(0x17a)]()+_0x263acb['getSpeedX']()),_0x263acb['setY'](_0x263acb[_0x110898(0x188)]()+_0x263acb[_0x110898(0x16a)]());}function drawFish(){var _0x73cd77=_0x4de9c6,_0x39e312=document['getElementById'](_0x73cd77(0x165)),_0x1ed49d=_0x39e312[_0x73cd77(0x186)]('2d');for(var _0x47141a=0x0;_0x47141a<fishes[_0x73cd77(0x177)];_0x47141a++){if(fishes[_0x47141a])var _0x6be0f2=document[_0x73cd77(0x182)](fishes[_0x47141a][_0x73cd77(0x169)]());_0x1ed49d[_0x73cd77(0x189)](_0x6be0f2,fishes[_0x47141a]['x'],fishes[_0x47141a]['y'],0x64,0x64);}var _0x6be0f2=document[_0x73cd77(0x182)](smallFish[_0x73cd77(0x169)]());_0x1ed49d[_0x73cd77(0x189)](_0x6be0f2,smallFish['x'],smallFish['y'],0x4b,0x4b);}function _0x23cb(_0x53777b,_0x2a40e6){var _0x58c67d=_0x58c6();return _0x23cb=function(_0x23cb55,_0x405f0d){_0x23cb55=_0x23cb55-0x157;var _0x78bfd6=_0x58c67d[_0x23cb55];return _0x78bfd6;},_0x23cb(_0x53777b,_0x2a40e6);}function decayHealth(){var _0x2ab525=_0x4de9c6;for(var _0x1d0b00=0x0;_0x1d0b00<fishes['length'];_0x1d0b00++){var _0x41bf80=fishes[_0x1d0b00];if(Math['abs'](_0x41bf80[_0x2ab525(0x17a)]()-smallFish[_0x2ab525(0x17a)]())<0x32&&Math[_0x2ab525(0x171)](_0x41bf80[_0x2ab525(0x188)]()-smallFish[_0x2ab525(0x188)]())<0x32)health-=0x14;}}function toggleTimer(){isOn?turnOff():turnOn();}function turnOn(){var _0x1a8521=_0x4de9c6;timer=setInterval(_0x1a8521(0x160),0x14),isOn=!![];}function turnOff(){clearInterval(timer),isOn=![];}