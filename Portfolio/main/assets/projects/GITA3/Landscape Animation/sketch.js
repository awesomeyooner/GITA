var time = 0;

var isAnimation = false;

var button;

function setup() {
  createCanvas(750, 700);
  angleMode(DEGREES);
  
  button = createButton("toggle");
  button.mousePressed(togglePage);
  button.position(0, 0);
}

function draw() {
  if(isAnimation)
    runAnimation();
  else
    runTitle();
}

function togglePage(){
  isAnimation = !isAnimation;
}
  
function runTitle(){
  background("blue");
  
  fill("red");
  textSize(60);
  text("Click Toggle!", width / 4, height / 2);
}

function runAnimation(){
  time += ((1 / 60) * 1000) / 20;
  
  background(220);
  
  scaleSky();
  drawSun();
  drawMoon();
  
  drawFish(
    width + 100,
    30 + (height / 2), 
    100,
    0.75,
    5,
    2
  );
  
  drawFish(
    width + 300,
    50 + (height / 2), 
    200,
    0.75,
    20
  );
  
  drawSea();
  
  
  drawBuoy(
    width + 10, 
    40 + (height  / 2),
    0,
    1
  );
  
  drawBuoy(
    width + 200, 
    20 + (height  / 2), 
    20,
    0.5
  );
  
  drawBuoy(
    width + 600, 
    10 + (height  / 2), 
    70,
    0.75
  );
  
  drawBoat(
    0 + (width / 2), 
    120 + (height / 2)
  );
}

function drawFish(x, y, jumpHeight, size = 1, offset = 0, speed = 1){
  x += time;
  
  x %= width + 100;
  
  push();
  stroke("black");
  strokeWeight(0);
  fill("gray");
  translate(x, y);
  rotate(speed * time + offset);
  ellipse(0, jumpHeight, 60 * size, 30 * size);
  pop();
  
  push();
  stroke("black");
  strokeWeight(0);
  fill("gray");
  translate(x, y);
  rotate(speed * time + offset);
  
  triangle(
    (20 * size) + (30 * size), (-15 * size) + jumpHeight, 
    (20 * size) + (30 * size), (15 * size) + jumpHeight, 
    (-20 * size) + 30, 0 + jumpHeight
  );
  
  pop();
}

function drawBoat(x, y){
  push();
  stroke("black");
  strokeWeight(0);
  fill("brown");
  translate(x, y);
  arc(0, 0, 200, 120, 0, 180);
  pop();
  
  push();
  stroke("black");
  strokeWeight(0);
  fill("brown");
  translate(x - 10, y - 100);
  rect(0, 0, 20, 100);
  pop();
  
  push();
  stroke("black");
  strokeWeight(0);
  fill("white");
  translate(x - 10, y - 100);
  triangle(
    0, 10,
    0, -70,
    100, 10
  );
  pop();
  
  push();
  stroke("black");
  strokeWeight(0);
  fill("tan");
  translate(x + 4, y + 40);
  rotate(-8 * time);
  rect(-4, -40, 8, 80);
  pop();
  
  push();
  stroke("black");
  strokeWeight(0);
  fill("tan");
  translate(x + 4, y + 40);
  rotate(-8 * time);
  rect(-40, -4, 80, 8);
  pop();
}

function drawBuoy(x, y, offset = 0, size = 1){
  x += time;
  
  x %= width + 100;

  
  //x and y are global offsets to time
  push();
  stroke("black");
  strokeWeight(0);
  fill("red");
  translate(x, y);
  rotate(30 * sin(time + offset));
  ellipse(0, 0, 90 * size, 30 * size);
  pop();
  
  push();
  stroke("black");
  strokeWeight(0);
  fill("red");
  translate(x, y);
  rotate(30 * sin(time + offset));
  rect(-20 * size, -70 * size, 40 * size, 70 * size);
  pop();
}

function scaleSky(){
  push();
  stroke("black");
  strokeWeight(0);
  fill(0, 0, 127.5 * (-sin(time) + 1));
  rect(0, 0, width, height / 2);
  pop();
}

function drawSun(){
  push();
  stroke("black");
  strokeWeight(0);
  fill(255, 204, 0);
  translate(width / 2, height / 2);
  rotate(time);
  circle(300, 0, 100);
  pop();
}

function drawMoon(){
  push();
  stroke("black");
  strokeWeight(0);
  fill("lightgray");
  translate(width / 2, height / 2);
  rotate(time);
  circle(-300, 0, 100);
  pop();
}

function drawSea(){
  push();
  stroke("black");
  strokeWeight(0);
  fill("teal");
  rect(0, height / 2, width, height / 2);
  pop();
}
