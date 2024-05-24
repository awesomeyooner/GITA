// //

//             //makes variables
        
//             var colorOne = "#0000FF";

//             //defines the boundaries of the canvas as varaibles to make it easier to hot swap
//             var canvasBoundX = 700;
//             var canvasBoundY = 500;

//             var defenderBoundX = canvasBoundX * 0.15;
//             var defenderBoundY = canvasBoundY * 0.15;

//             var score = 0;

//             var spawnRate = 0;

//             var defender = new Defender(canvasBoundX / 2, canvasBoundY / 2, 6, "none", "none", 10);

//             var mouse = new Mouse(0, 0);

//             var bullets = new Array();

//             for(var i = 0; i < 20; i++){
//                 bullets[i] = new Bullet(0, 0, 1, 1, false);
//             }

//             var enemies = new Array();

//             for(var i = 0; i < 10; i++){
//                 enemies[i] = new Enemy(Math.floor(Math.random() * canvasBoundX), Math.floor(Math.random() * canvasBoundY), 10, 1, 3);
//             }

//             //array to access all bullets currently in existence

//             var isOn = false;
//             //used for timer to determine if it is on or not
            
//             //adds keyboard listener
//             window.addEventListener("keydown", function(event){
//                 //changes keyboard input into diretions
//                 switch(event.key){
//                     case "a":
//                         defender.currentMovement = "left";
//                         break;
//                     case "d":
//                         defender.currentMovement = "right";
//                         break;
//                     case "w":
//                         defender.currentMovement = "up";
//                         break;
//                     case "s":
//                         defender.currentMovement = "down";
//                         break;
//                     default:
//                         defender.currentMovement = "none";
//                         break;
//                 }

//                 if(defender.currentMovement != "none")
//                     defender.previousMovement = defender.currentMovement;
                
//             }, true);

//             window.addEventListener("keyup", function(event){
//                 defender.currentMovement = "none";
//                 writeText(event.key, 20, 20);
                
//             }, true);

//             function updateMouse(event){

//                 mouse.x = (event.clientX - 350) - (canvasBoundX / 2);
//                 mouse.y = -((event.clientY - 100) - (canvasBoundY / 2));
//             } 


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
//                 moveDef();
//                 moveBullet();
//                 moveEnemies();
//                 updateLogic();
            
//                 writeText("Health: " + defender.health, 20, 40);
//                 writeText("Score: " + score, 0, 100);
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
//                 var canvas = document.getElementById("myCanvas");
//                 var context = canvas.getContext("2d");

//                 for(var i = 0; i < bullets.length; i++){
//                     var currentBullet = bullets[i];

//                     if(currentBullet.x > canvasBoundX || currentBullet.x < 0 || currentBullet.y > canvasBoundY || currentBullet.y < 0)
//                         currentBullet.isActive = false;

//                     if(currentBullet.isActive){
//                         currentBullet.move();

//                         context.fillStyle = "#FF0000";
//                         context.beginPath();
//                         context.arc(bullets[i].x, bullets[i].y, 8, 0, 2 * Math.PI, true);
//                         context.closePath();
//                         context.fill();
//                     }
//                 }
//             }

//             //toggles firing the bullet
//             function fireBullet(){
//                 for(var i = 0; i < bullets.length; i++){
//                     var currentBullet = bullets[i];

//                     if(!currentBullet.isActive){
//                         currentBullet.x = defender.x;
//                         currentBullet.y = defender.y;

//                         var deltaX = mouse.x - (defender.x - (canvasBoundX / 2));
//                         var deltaY = mouse.y - (-defender.y + canvasBoundY / 2);
//                         var theta = Math.atan(deltaY / deltaX);

                        
//                         if(deltaX <= 0){
//                             theta += Math.PI;
//                         }

//                         currentBullet.speedX = 10 * Math.cos(theta);
//                         currentBullet.speedY = -10 * Math.sin(theta);
//                         currentBullet.isActive = true;

//                         break;
//                     }
//                 }
//             }

//             function moveEnemies(){
//                 var canvas = document.getElementById("myCanvas");
//                 var context = canvas.getContext("2d");

//                 for(var i = 0; i < enemies.length; i++){
//                     var currentEnemy = enemies[i];

//                     if(currentEnemy.isAlive()){
//                         var pointX = defender.x - (canvasBoundX / 2);
//                         var pointY = -(defender.y - (canvasBoundY / 2));

//                         var deltaX = (currentEnemy.x - (canvasBoundX / 2)) - pointX;
//                         var deltaY = -(currentEnemy.y - (canvasBoundY / 2)) - pointY;

//                         if(deltaX == 0)
//                             deltaX = 0.00001;

//                         if(deltaY == 0)
//                             deltaY = 0.00001;

//                         var distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
       
//                         var basedTheta = Math.atan(deltaY / deltaX);
//                         var theta = basedTheta;

//                         if(deltaX >= 0)
//                             theta = basedTheta + Math.PI;

//                         currentEnemy.x += currentEnemy.speed * Math.cos(theta);
//                         currentEnemy.y -= currentEnemy.speed * Math.sin(theta);
//                         currentEnemy.size = 300 / Math.sqrt(distance);

//                         //writeText(distance, 0, 100);

//                         context.fillStyle = "yellow";
//                         context.beginPath();
//                         context.arc(currentEnemy.x, currentEnemy.y, currentEnemy.size, 0, 2 * Math.PI, true);
//                         context.closePath();
//                         context.fill();
//                     }
//                 }
//             }

//             function updateLogic(){
//                 checkBulletCollision();
//                 checkEnemyCollision();
//                 respawnEnemy();

//             }

//             function checkBulletCollision(){
//                 for(var i = 0; i < bullets.length; i++){

//                     var currentBullet = bullets[i];

//                     for(var e = 0; e < enemies.length; e++){
//                         var currentEnemy = enemies[e];

//                         var deltaX = currentBullet.x - currentEnemy.x;
//                         var deltaY = currentBullet.y - currentEnemy.y;

//                         var distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

//                         if(currentBullet.isActive && currentEnemy.isAlive()){
//                             if(distance <= currentEnemy.size){
//                                 currentBullet.isActive = false;

//                                 currentEnemy.health--;
//                                 score += 10;

//                                 if(!currentEnemy.isAlive())
//                                     score += 100;
//                             }
//                         }
//                     }
//                 }
//             }

//             function checkEnemyCollision(){
//                 for(var i = 0; i < enemies.length; i++){
//                     var currentEnemy = enemies[i];

//                     var pointX = defender.x - (canvasBoundX / 2);
//                     var pointY = -(defender.y - (canvasBoundY / 2));

//                     var deltaX = (currentEnemy.x - (canvasBoundX / 2)) - pointX;
//                     var deltaY = -(currentEnemy.y - (canvasBoundY / 2)) - pointY;

//                     var distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
                
//                     if(currentEnemy.isAlive()){
//                         if(distance < currentEnemy.size){
//                             currentEnemy.health = 0;
//                             defender.health--;
//                         }
//                     }
//                 }

//                 if(defender.health <= 0){
//                     alert("You Lose!");
//                     turnOff();
//                 }
//             }

//             function respawnEnemy(){
//                 spawnRate += 0.02;

//                 if(spawnRate >= 0.75){
//                     for(var i = 0; i < enemies.length; i++){
//                         var currentEnemy = enemies[i];
                        
//                         if(!currentEnemy.isAlive()){
//                             currentEnemy.health = 3;
//                             currentEnemy.x = Math.floor(Math.random() * canvasBoundX);
//                             currentEnemy.y = Math.floor(Math.random() * canvasBoundY);
//                             break;
//                         }
//                     }

//                     spawnRate = 0;
//                 }

//             }



//             //moves the tank based on the given direction
//             function moveDef(){
//                 var movement = defender.currentMovement;
//                 switch(movement){
//                     case "left":
//                         if(defender.x > 20 +((canvasBoundX / 2) - defenderBoundX))
//                             defender.x -= defender.speed;
//                         moveDefender(defender.x, defender.y, defender.previousMovement);
//                         break;
//                     case "right":
//                         if(defender.x < ((canvasBoundX / 2) + defenderBoundX) - 20)
//                             defender.x += defender.speed;
//                         moveDefender(defender.x, defender.y, defender.previousMovement);
//                         break;
//                     case "up":
//                         if(defender.y >= 20 + ((canvasBoundY / 2) - defenderBoundY))
//                             defender.y -= defender.speed;
//                         moveDefender(defender.x, defender.y, defender.previousMovement);
//                         break;
//                     case "down":
//                         if(defender.y <= ((canvasBoundY / 2) + defenderBoundY) - 20)
//                             defender.y += defender.speed;
//                         moveDefender(defender.x, defender.y, defender.previousMovement);
//                         break;
//                     default:
//                         moveDefender(defender.x, defender.y, defender.previousMovement);
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

//                 context.beginPath();
//                 context.moveTo((canvasBoundX / 2) - defenderBoundX, (canvasBoundY / 2) - defenderBoundY);
//                 context.lineTo((canvasBoundX / 2) - defenderBoundX, (canvasBoundY / 2) + defenderBoundY);
//                 context.stroke();

//                 context.beginPath();
//                 context.moveTo((canvasBoundX / 2) + defenderBoundX, (canvasBoundY / 2) - defenderBoundY);
//                 context.lineTo((canvasBoundX / 2) + defenderBoundX, (canvasBoundY / 2) + defenderBoundY);
//                 context.stroke();

//                 context.beginPath();
//                 context.moveTo((canvasBoundX / 2) - defenderBoundX, (canvasBoundY / 2) - defenderBoundY);
//                 context.lineTo((canvasBoundX / 2) + defenderBoundX, (canvasBoundY / 2) - defenderBoundY);
//                 context.stroke();

//                 context.beginPath();
//                 context.moveTo((canvasBoundX / 2) - defenderBoundX, (canvasBoundY / 2) + defenderBoundY);
//                 context.lineTo((canvasBoundX / 2) + defenderBoundX, (canvasBoundY / 2) + defenderBoundY);
//                 context.stroke();
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

            
var _0x286dc6=_0x11b5;(function(_0x3ae7b0,_0x36bd71){var _0x5fd658=_0x11b5,_0x4c3e1e=_0x3ae7b0();while(!![]){try{var _0x1997dd=parseInt(_0x5fd658(0x203))/0x1*(parseInt(_0x5fd658(0x212))/0x2)+parseInt(_0x5fd658(0x1f4))/0x3+-parseInt(_0x5fd658(0x1ff))/0x4+-parseInt(_0x5fd658(0x225))/0x5+-parseInt(_0x5fd658(0x1f0))/0x6*(-parseInt(_0x5fd658(0x224))/0x7)+-parseInt(_0x5fd658(0x21d))/0x8+parseInt(_0x5fd658(0x1fb))/0x9*(-parseInt(_0x5fd658(0x20d))/0xa);if(_0x1997dd===_0x36bd71)break;else _0x4c3e1e['push'](_0x4c3e1e['shift']());}catch(_0x5919a0){_0x4c3e1e['push'](_0x4c3e1e['shift']());}}}(_0x3159,0x5fed6));var colorOne=_0x286dc6(0x216),canvasBoundX=0x2bc,canvasBoundY=0x1f4,defenderBoundX=canvasBoundX*0.15,defenderBoundY=canvasBoundY*0.15,score=0x0,spawnRate=0x0,defender=new Defender(canvasBoundX/0x2,canvasBoundY/0x2,0x6,_0x286dc6(0x1fa),_0x286dc6(0x1fa),0xa),mouse=new Mouse(0x0,0x0),bullets=new Array();for(var i=0x0;i<0x14;i++){bullets[i]=new Bullet(0x0,0x0,0x1,0x1,![]);}var enemies=new Array();for(var i=0x0;i<0xa;i++){enemies[i]=new Enemy(Math[_0x286dc6(0x1fd)](Math['random']()*canvasBoundX),Math['floor'](Math[_0x286dc6(0x209)]()*canvasBoundY),0xa,0x1,0x3);}var isOn=![];window[_0x286dc6(0x21f)](_0x286dc6(0x1f3),function(_0xb567a2){var _0x44b4a0=_0x286dc6;switch(_0xb567a2[_0x44b4a0(0x20e)]){case'a':defender[_0x44b4a0(0x213)]=_0x44b4a0(0x215);break;case'd':defender[_0x44b4a0(0x213)]='right';break;case'w':defender[_0x44b4a0(0x213)]='up';break;case's':defender[_0x44b4a0(0x213)]='down';break;default:defender[_0x44b4a0(0x213)]=_0x44b4a0(0x1fa);break;}if(defender[_0x44b4a0(0x213)]!=_0x44b4a0(0x1fa))defender[_0x44b4a0(0x221)]=defender[_0x44b4a0(0x213)];},!![]),window[_0x286dc6(0x21f)]('keyup',function(_0x27e773){var _0x323a06=_0x286dc6;defender[_0x323a06(0x213)]='none',writeText(_0x27e773[_0x323a06(0x20e)],0x14,0x14);},!![]);function updateMouse(_0x44d8f3){var _0x121053=_0x286dc6;mouse['x']=_0x44d8f3[_0x121053(0x1f8)]-0x15e-canvasBoundX/0x2,mouse['y']=-(_0x44d8f3['clientY']-0x64-canvasBoundY/0x2);}function initialize(){var _0x2b522e=_0x286dc6,_0x381d9c=document[_0x2b522e(0x219)](_0x2b522e(0x20b)),_0x3b5bcb=_0x381d9c[_0x2b522e(0x21b)]('2d');_0x3b5bcb['fillStyle']=_0x2b522e(0x205),_0x3b5bcb[_0x2b522e(0x220)](0x0,0x0,canvasBoundX,canvasBoundY),turnOn();}function update(){var _0x16dba3=_0x286dc6;resetBackground(),moveDef(),moveBullet(),moveEnemies(),updateLogic(),writeText('Health:\x20'+defender[_0x16dba3(0x210)],0x14,0x28),writeText('Score:\x20'+score,0x0,0x64);}function writeText(_0x5b8f47,_0xc90315,_0x3ab26f){var _0x465046=_0x286dc6,_0x5de941=document[_0x465046(0x219)](_0x465046(0x20b)),_0x12dead=_0x5de941[_0x465046(0x21b)]('2d');_0x12dead[_0x465046(0x21e)]=_0x465046(0x1fe),_0x12dead['fillStyle']=_0x465046(0x20f),_0x12dead[_0x465046(0x1f7)](_0x5b8f47,_0xc90315,_0x3ab26f);}function moveBullet(){var _0x3f8a0d=_0x286dc6,_0x4ed489=document[_0x3f8a0d(0x219)](_0x3f8a0d(0x20b)),_0x48cf57=_0x4ed489[_0x3f8a0d(0x21b)]('2d');for(var _0x3b403b=0x0;_0x3b403b<bullets[_0x3f8a0d(0x200)];_0x3b403b++){var _0x205a85=bullets[_0x3b403b];if(_0x205a85['x']>canvasBoundX||_0x205a85['x']<0x0||_0x205a85['y']>canvasBoundY||_0x205a85['y']<0x0)_0x205a85[_0x3f8a0d(0x223)]=![];_0x205a85['isActive']&&(_0x205a85[_0x3f8a0d(0x222)](),_0x48cf57[_0x3f8a0d(0x1f9)]=_0x3f8a0d(0x20f),_0x48cf57[_0x3f8a0d(0x207)](),_0x48cf57['arc'](bullets[_0x3b403b]['x'],bullets[_0x3b403b]['y'],0x8,0x0,0x2*Math['PI'],!![]),_0x48cf57[_0x3f8a0d(0x206)](),_0x48cf57['fill']());}}function fireBullet(){var _0x33e403=_0x286dc6;for(var _0x1a5874=0x0;_0x1a5874<bullets['length'];_0x1a5874++){var _0x3ea4e4=bullets[_0x1a5874];if(!_0x3ea4e4[_0x33e403(0x223)]){_0x3ea4e4['x']=defender['x'],_0x3ea4e4['y']=defender['y'];var _0x5615eb=mouse['x']-(defender['x']-canvasBoundX/0x2),_0x3d97ef=mouse['y']-(-defender['y']+canvasBoundY/0x2),_0x9bdc43=Math[_0x33e403(0x204)](_0x3d97ef/_0x5615eb);_0x5615eb<=0x0&&(_0x9bdc43+=Math['PI']);_0x3ea4e4[_0x33e403(0x226)]=0xa*Math[_0x33e403(0x21a)](_0x9bdc43),_0x3ea4e4[_0x33e403(0x208)]=-0xa*Math['sin'](_0x9bdc43),_0x3ea4e4[_0x33e403(0x223)]=!![];break;}}}function moveEnemies(){var _0x3a91fa=_0x286dc6,_0x27cbd8=document[_0x3a91fa(0x219)](_0x3a91fa(0x20b)),_0x2bb741=_0x27cbd8['getContext']('2d');for(var _0x217007=0x0;_0x217007<enemies[_0x3a91fa(0x200)];_0x217007++){var _0x5da1bf=enemies[_0x217007];if(_0x5da1bf[_0x3a91fa(0x211)]()){var _0x530990=defender['x']-canvasBoundX/0x2,_0x4fcaa1=-(defender['y']-canvasBoundY/0x2),_0x18818c=_0x5da1bf['x']-canvasBoundX/0x2-_0x530990,_0x45bcbd=-(_0x5da1bf['y']-canvasBoundY/0x2)-_0x4fcaa1;if(_0x18818c==0x0)_0x18818c=0.00001;if(_0x45bcbd==0x0)_0x45bcbd=0.00001;var _0x42bcfb=Math[_0x3a91fa(0x218)](_0x18818c*_0x18818c+_0x45bcbd*_0x45bcbd),_0x52ee50=Math['atan'](_0x45bcbd/_0x18818c),_0x42cefd=_0x52ee50;if(_0x18818c>=0x0)_0x42cefd=_0x52ee50+Math['PI'];_0x5da1bf['x']+=_0x5da1bf[_0x3a91fa(0x202)]*Math[_0x3a91fa(0x21a)](_0x42cefd),_0x5da1bf['y']-=_0x5da1bf[_0x3a91fa(0x202)]*Math[_0x3a91fa(0x1f5)](_0x42cefd),_0x5da1bf[_0x3a91fa(0x201)]=0x12c/Math[_0x3a91fa(0x218)](_0x42bcfb),_0x2bb741[_0x3a91fa(0x1f9)]=_0x3a91fa(0x20a),_0x2bb741[_0x3a91fa(0x207)](),_0x2bb741[_0x3a91fa(0x214)](_0x5da1bf['x'],_0x5da1bf['y'],_0x5da1bf[_0x3a91fa(0x201)],0x0,0x2*Math['PI'],!![]),_0x2bb741[_0x3a91fa(0x206)](),_0x2bb741[_0x3a91fa(0x1f6)]();}}}function updateLogic(){checkBulletCollision(),checkEnemyCollision(),respawnEnemy();}function checkBulletCollision(){var _0x1b07cd=_0x286dc6;for(var _0x23cb6a=0x0;_0x23cb6a<bullets[_0x1b07cd(0x200)];_0x23cb6a++){var _0x55c83c=bullets[_0x23cb6a];for(var _0x123036=0x0;_0x123036<enemies[_0x1b07cd(0x200)];_0x123036++){var _0x199012=enemies[_0x123036],_0x5e972a=_0x55c83c['x']-_0x199012['x'],_0x2cd3fe=_0x55c83c['y']-_0x199012['y'],_0x2bc90e=Math[_0x1b07cd(0x218)](_0x5e972a*_0x5e972a+_0x2cd3fe*_0x2cd3fe);if(_0x55c83c[_0x1b07cd(0x223)]&&_0x199012[_0x1b07cd(0x211)]()){if(_0x2bc90e<=_0x199012['size']){_0x55c83c[_0x1b07cd(0x223)]=![],_0x199012['health']--,score+=0xa;if(!_0x199012[_0x1b07cd(0x211)]())score+=0x64;}}}}}function _0x3159(){var _0x2d8be0=['sqrt','getElementById','cos','getContext','right','983808YrtrLS','font','addEventListener','fillRect','previousMovement','move','isActive','7arxxQV','1461040sobyGW','speedX','668130GuuIhU','update()','stroke','keydown','2213787Jgxrys','sin','fill','fillText','clientX','fillStyle','none','9IQXoGY','lineTo','floor','30px\x20Arial','612156TREViQ','length','size','speed','77gpiLhT','atan','#ADD8E6','closePath','beginPath','speedY','random','yellow','myCanvas','moveTo','499970IhfASY','key','#FF0000','health','isAlive','4204rZVGua','currentMovement','arc','left','#0000FF','down'];_0x3159=function(){return _0x2d8be0;};return _0x3159();}function checkEnemyCollision(){var _0x28bb53=_0x286dc6;for(var _0x25541c=0x0;_0x25541c<enemies[_0x28bb53(0x200)];_0x25541c++){var _0x51a35d=enemies[_0x25541c],_0x219988=defender['x']-canvasBoundX/0x2,_0xf2f7ba=-(defender['y']-canvasBoundY/0x2),_0x5cd87c=_0x51a35d['x']-canvasBoundX/0x2-_0x219988,_0x4679b1=-(_0x51a35d['y']-canvasBoundY/0x2)-_0xf2f7ba,_0x10b3de=Math[_0x28bb53(0x218)](_0x5cd87c*_0x5cd87c+_0x4679b1*_0x4679b1);_0x51a35d[_0x28bb53(0x211)]()&&(_0x10b3de<_0x51a35d['size']&&(_0x51a35d[_0x28bb53(0x210)]=0x0,defender[_0x28bb53(0x210)]--));}defender[_0x28bb53(0x210)]<=0x0&&(alert('You\x20Lose!'),turnOff());}function respawnEnemy(){var _0x3f6bf2=_0x286dc6;spawnRate+=0.02;if(spawnRate>=0.75){for(var _0x21234d=0x0;_0x21234d<enemies[_0x3f6bf2(0x200)];_0x21234d++){var _0x2ff230=enemies[_0x21234d];if(!_0x2ff230[_0x3f6bf2(0x211)]()){_0x2ff230[_0x3f6bf2(0x210)]=0x3,_0x2ff230['x']=Math['floor'](Math['random']()*canvasBoundX),_0x2ff230['y']=Math['floor'](Math[_0x3f6bf2(0x209)]()*canvasBoundY);break;}}spawnRate=0x0;}}function moveDef(){var _0x2114c3=_0x286dc6,_0x543a0c=defender[_0x2114c3(0x213)];switch(_0x543a0c){case'left':if(defender['x']>0x14+(canvasBoundX/0x2-defenderBoundX))defender['x']-=defender['speed'];moveDefender(defender['x'],defender['y'],defender[_0x2114c3(0x221)]);break;case'right':if(defender['x']<canvasBoundX/0x2+defenderBoundX-0x14)defender['x']+=defender[_0x2114c3(0x202)];moveDefender(defender['x'],defender['y'],defender[_0x2114c3(0x221)]);break;case'up':if(defender['y']>=0x14+(canvasBoundY/0x2-defenderBoundY))defender['y']-=defender[_0x2114c3(0x202)];moveDefender(defender['x'],defender['y'],defender[_0x2114c3(0x221)]);break;case _0x2114c3(0x217):if(defender['y']<=canvasBoundY/0x2+defenderBoundY-0x14)defender['y']+=defender[_0x2114c3(0x202)];moveDefender(defender['x'],defender['y'],defender[_0x2114c3(0x221)]);break;default:moveDefender(defender['x'],defender['y'],defender[_0x2114c3(0x221)]);break;}}function _0x11b5(_0x228a5f,_0x2c38bf){var _0x3159fb=_0x3159();return _0x11b5=function(_0x11b50,_0x4e2e18){_0x11b50=_0x11b50-0x1f0;var _0x4a8191=_0x3159fb[_0x11b50];return _0x4a8191;},_0x11b5(_0x228a5f,_0x2c38bf);}function resetBackground(){var _0x5b4856=_0x286dc6,_0x48bbd1=document[_0x5b4856(0x219)](_0x5b4856(0x20b)),_0x9b5c37=_0x48bbd1[_0x5b4856(0x21b)]('2d');_0x9b5c37[_0x5b4856(0x1f9)]=_0x5b4856(0x205),_0x9b5c37[_0x5b4856(0x220)](0x0,0x0,canvasBoundX,canvasBoundY),_0x9b5c37[_0x5b4856(0x207)](),_0x9b5c37[_0x5b4856(0x20c)](canvasBoundX/0x2-defenderBoundX,canvasBoundY/0x2-defenderBoundY),_0x9b5c37[_0x5b4856(0x1fc)](canvasBoundX/0x2-defenderBoundX,canvasBoundY/0x2+defenderBoundY),_0x9b5c37[_0x5b4856(0x1f2)](),_0x9b5c37[_0x5b4856(0x207)](),_0x9b5c37[_0x5b4856(0x20c)](canvasBoundX/0x2+defenderBoundX,canvasBoundY/0x2-defenderBoundY),_0x9b5c37[_0x5b4856(0x1fc)](canvasBoundX/0x2+defenderBoundX,canvasBoundY/0x2+defenderBoundY),_0x9b5c37[_0x5b4856(0x1f2)](),_0x9b5c37[_0x5b4856(0x207)](),_0x9b5c37[_0x5b4856(0x20c)](canvasBoundX/0x2-defenderBoundX,canvasBoundY/0x2-defenderBoundY),_0x9b5c37[_0x5b4856(0x1fc)](canvasBoundX/0x2+defenderBoundX,canvasBoundY/0x2-defenderBoundY),_0x9b5c37[_0x5b4856(0x1f2)](),_0x9b5c37['beginPath'](),_0x9b5c37['moveTo'](canvasBoundX/0x2-defenderBoundX,canvasBoundY/0x2+defenderBoundY),_0x9b5c37['lineTo'](canvasBoundX/0x2+defenderBoundX,canvasBoundY/0x2+defenderBoundY),_0x9b5c37['stroke']();}function moveDefender(_0x550967,_0x5139bd,_0x348016){var _0x4eea1b=_0x286dc6,_0x1b953b=document[_0x4eea1b(0x219)](_0x4eea1b(0x20b)),_0x4617a0=_0x1b953b['getContext']('2d'),_0x117b9f=0x0,_0x30f358=0x0;_0x4617a0['fillStyle']=colorOne,_0x4617a0[_0x4eea1b(0x207)](),_0x4617a0[_0x4eea1b(0x214)](_0x550967,_0x5139bd,0xf,0x0,0x2*Math['PI'],!![]),_0x4617a0[_0x4eea1b(0x206)](),_0x4617a0[_0x4eea1b(0x1f6)]();if(_0x348016=='up')_0x30f358=-0x1;else{if(_0x348016==_0x4eea1b(0x217))_0x30f358=0x1;else{if(_0x348016==_0x4eea1b(0x215))_0x117b9f=-0x1;else{if(_0x348016==_0x4eea1b(0x21c))_0x117b9f=0x1;}}}_0x4617a0[_0x4eea1b(0x1f9)]=colorOne,_0x4617a0[_0x4eea1b(0x207)](),_0x4617a0['arc'](_0x550967+0xf*_0x117b9f,_0x5139bd+0xf*_0x30f358,7.5,0x0,0x2*Math['PI'],!![]),_0x4617a0['closePath'](),_0x4617a0[_0x4eea1b(0x1f6)]();}function toggleTimer(){isOn?turnOff():turnOn();}function turnOn(){var _0x24a35f=_0x286dc6;timer=setInterval(_0x24a35f(0x1f1),0x14),isOn=!![];}function turnOff(){clearInterval(timer),isOn=![];}