//

            //makes variables
        
            var colorOne = "#0000FF";

            //defines the boundaries of the canvas as varaibles to make it easier to hot swap
            var canvasBoundX = 700;
            var canvasBoundY = 500;

            var defenderBoundX = canvasBoundX * 0.15;
            var defenderBoundY = canvasBoundY * 0.15;

            var score = 0;

            var spawnRate = 0;

            var defender = new Defender(canvasBoundX / 2, canvasBoundY / 2, 6, "none", "none", 10);

            var mouse = new Mouse(0, 0);

            var bullets = new Array();

            for(var i = 0; i < 20; i++){
                bullets[i] = new Bullet(0, 0, 1, 1, false);
            }

            var enemies = new Array();

            for(var i = 0; i < 10; i++){
                enemies[i] = new Enemy(Math.floor(Math.random() * canvasBoundX), Math.floor(Math.random() * canvasBoundY), 10, 1, 3);
            }

            //array to access all bullets currently in existence

            var isOn = false;
            //used for timer to determine if it is on or not
            
            //adds keyboard listener
            window.addEventListener("keydown", function(event){
                //changes keyboard input into diretions
                switch(event.key){
                    case "a":
                        defender.currentMovement = "left";
                        break;
                    case "d":
                        defender.currentMovement = "right";
                        break;
                    case "w":
                        defender.currentMovement = "up";
                        break;
                    case "s":
                        defender.currentMovement = "down";
                        break;
                    default:
                        defender.currentMovement = "none";
                        break;
                }

                if(defender.currentMovement != "none")
                    defender.previousMovement = defender.currentMovement;
                
            }, true);

            window.addEventListener("keyup", function(event){
                defender.currentMovement = "none";
                writeText(event.key, 20, 20);
                
            }, true);

            function updateMouse(event){

                mouse.x = (event.clientX - 350) - (canvasBoundX / 2);
                mouse.y = -((event.clientY - 100) - (canvasBoundY / 2));
            } 


            //fill background and turn  on timer when the body gets initialized
            function initialize(){
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");

                context.fillStyle="#ADD8E6";
                context.fillRect(0, 0, canvasBoundX, canvasBoundY);

                turnOn();
            }

            //periodically called ever 20ms to update the game
            function update(){
                resetBackground();
                moveDef();
                moveBullet();
                moveEnemies();
                updateLogic();
            
                writeText("Health: " + defender.health, 20, 40);
                writeText("Score: " + score, 0, 100);
            }

            //writes text on the screen given what to write and the location
            function writeText(text, x, y){
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");

                context.font = "30px Arial";
                context.fillStyle = "#FF0000";
                context.fillText(text, x, y);
            }

            //moves the bullet across the screen based on the direction
            function moveBullet(){
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");

                for(var i = 0; i < bullets.length; i++){
                    var currentBullet = bullets[i];

                    if(currentBullet.x > canvasBoundX || currentBullet.x < 0 || currentBullet.y > canvasBoundY || currentBullet.y < 0)
                        currentBullet.isActive = false;

                    if(currentBullet.isActive){
                        currentBullet.move();

                        context.fillStyle = "#FF0000";
                        context.beginPath();
                        context.arc(bullets[i].x, bullets[i].y, 8, 0, 2 * Math.PI, true);
                        context.closePath();
                        context.fill();
                    }
                }
            }

            //toggles firing the bullet
            function fireBullet(){
                for(var i = 0; i < bullets.length; i++){
                    var currentBullet = bullets[i];

                    if(!currentBullet.isActive){
                        currentBullet.x = defender.x;
                        currentBullet.y = defender.y;

                        var deltaX = mouse.x - (defender.x - (canvasBoundX / 2));
                        var deltaY = mouse.y - (-defender.y + canvasBoundY / 2);
                        var theta = Math.atan(deltaY / deltaX);

                        
                        if(deltaX <= 0){
                            theta += Math.PI;
                        }

                        currentBullet.speedX = 10 * Math.cos(theta);
                        currentBullet.speedY = -10 * Math.sin(theta);
                        currentBullet.isActive = true;

                        break;
                    }
                }
            }

            function moveEnemies(){
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");

                for(var i = 0; i < enemies.length; i++){
                    var currentEnemy = enemies[i];

                    if(currentEnemy.isAlive()){
                        var pointX = defender.x - (canvasBoundX / 2);
                        var pointY = -(defender.y - (canvasBoundY / 2));

                        var deltaX = (currentEnemy.x - (canvasBoundX / 2)) - pointX;
                        var deltaY = -(currentEnemy.y - (canvasBoundY / 2)) - pointY;

                        if(deltaX == 0)
                            deltaX = 0.00001;

                        if(deltaY == 0)
                            deltaY = 0.00001;

                        var distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
       
                        var basedTheta = Math.atan(deltaY / deltaX);
                        var theta = basedTheta;

                        if(deltaX >= 0)
                            theta = basedTheta + Math.PI;

                        currentEnemy.x += currentEnemy.speed * Math.cos(theta);
                        currentEnemy.y -= currentEnemy.speed * Math.sin(theta);
                        currentEnemy.size = 300 / Math.sqrt(distance);

                        //writeText(distance, 0, 100);

                        context.fillStyle = "yellow";
                        context.beginPath();
                        context.arc(currentEnemy.x, currentEnemy.y, currentEnemy.size, 0, 2 * Math.PI, true);
                        context.closePath();
                        context.fill();
                    }
                }
            }

            function updateLogic(){
                checkBulletCollision();
                checkEnemyCollision();
                respawnEnemy();

            }

            function checkBulletCollision(){
                for(var i = 0; i < bullets.length; i++){

                    var currentBullet = bullets[i];

                    for(var e = 0; e < enemies.length; e++){
                        var currentEnemy = enemies[e];

                        var deltaX = currentBullet.x - currentEnemy.x;
                        var deltaY = currentBullet.y - currentEnemy.y;

                        var distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

                        if(currentBullet.isActive && currentEnemy.isAlive()){
                            if(distance <= currentEnemy.size){
                                currentBullet.isActive = false;

                                currentEnemy.health--;
                                score += 10;

                                if(!currentEnemy.isAlive())
                                    score += 100;
                            }
                        }
                    }
                }
            }

            function checkEnemyCollision(){
                for(var i = 0; i < enemies.length; i++){
                    var currentEnemy = enemies[i];

                    var pointX = defender.x - (canvasBoundX / 2);
                    var pointY = -(defender.y - (canvasBoundY / 2));

                    var deltaX = (currentEnemy.x - (canvasBoundX / 2)) - pointX;
                    var deltaY = -(currentEnemy.y - (canvasBoundY / 2)) - pointY;

                    var distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));
                
                    if(currentEnemy.isAlive()){
                        if(distance < currentEnemy.size){
                            currentEnemy.health = 0;
                            defender.health--;
                        }
                    }
                }

                if(defender.health <= 0){
                    alert("You Lose!");
                    turnOff();
                }
            }

            function respawnEnemy(){
                spawnRate += 0.02;

                if(spawnRate >= 0.75){
                    for(var i = 0; i < enemies.length; i++){
                        var currentEnemy = enemies[i];
                        
                        if(!currentEnemy.isAlive()){
                            currentEnemy.health = 3;
                            currentEnemy.x = Math.floor(Math.random() * canvasBoundX);
                            currentEnemy.y = Math.floor(Math.random() * canvasBoundY);
                            break;
                        }
                    }

                    spawnRate = 0;
                }

            }



            //moves the tank based on the given direction
            function moveDef(){
                var movement = defender.currentMovement;
                switch(movement){
                    case "left":
                        if(defender.x > 20 +((canvasBoundX / 2) - defenderBoundX))
                            defender.x -= defender.speed;
                        moveDefender(defender.x, defender.y, defender.previousMovement);
                        break;
                    case "right":
                        if(defender.x < ((canvasBoundX / 2) + defenderBoundX) - 20)
                            defender.x += defender.speed;
                        moveDefender(defender.x, defender.y, defender.previousMovement);
                        break;
                    case "up":
                        if(defender.y >= 20 + ((canvasBoundY / 2) - defenderBoundY))
                            defender.y -= defender.speed;
                        moveDefender(defender.x, defender.y, defender.previousMovement);
                        break;
                    case "down":
                        if(defender.y <= ((canvasBoundY / 2) + defenderBoundY) - 20)
                            defender.y += defender.speed;
                        moveDefender(defender.x, defender.y, defender.previousMovement);
                        break;
                    default:
                        moveDefender(defender.x, defender.y, defender.previousMovement);
                        break;

                }
            }

            //used to reset the background to avoid smearing
            function resetBackground(){
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");
                //paint the background of the canvas
                context.fillStyle="#ADD8E6";
                context.fillRect(0, 0, canvasBoundX, canvasBoundY);

                context.beginPath();
                context.moveTo((canvasBoundX / 2) - defenderBoundX, (canvasBoundY / 2) - defenderBoundY);
                context.lineTo((canvasBoundX / 2) - defenderBoundX, (canvasBoundY / 2) + defenderBoundY);
                context.stroke();

                context.beginPath();
                context.moveTo((canvasBoundX / 2) + defenderBoundX, (canvasBoundY / 2) - defenderBoundY);
                context.lineTo((canvasBoundX / 2) + defenderBoundX, (canvasBoundY / 2) + defenderBoundY);
                context.stroke();

                context.beginPath();
                context.moveTo((canvasBoundX / 2) - defenderBoundX, (canvasBoundY / 2) - defenderBoundY);
                context.lineTo((canvasBoundX / 2) + defenderBoundX, (canvasBoundY / 2) - defenderBoundY);
                context.stroke();

                context.beginPath();
                context.moveTo((canvasBoundX / 2) - defenderBoundX, (canvasBoundY / 2) + defenderBoundY);
                context.lineTo((canvasBoundX / 2) + defenderBoundX, (canvasBoundY / 2) + defenderBoundY);
                context.stroke();
            }

            //places the defender to a given location and moves the turret based on the direction
            function moveDefender(x, y, direction){
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");

                var directX = 0;
                var directY = 0;

                context.fillStyle = colorOne;
                context.beginPath();
                context.arc(x, y, 15, 0, 2 * Math.PI, true);
                context.closePath();
                context.fill();

                if(direction == "up")
                    directY = -1;
                else if(direction == "down")
                    directY = 1;
                else if(direction == "left")
                    directX = -1;
                else if(direction == "right")
                    directX = 1;
                
                context.fillStyle = colorOne;
                context.beginPath();
                context.arc(x + (15 * directX), y + (15 * directY), 7.5, 0, 2 * Math.PI, true);
                context.closePath();
                context.fill();
            }

            //toggles the timer 
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

            