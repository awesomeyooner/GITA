var canvasWidth = 750;
var canvasHeight = 750;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background("black");
  
  putText("Aaron Yoon", 0, 0, "red", 50, 0, false);
  
  putText("Robotics", 10, 10, "blue", 30, 20);
  putText("Computer Science", 20, 20, "orange", 20, 90);
  putText("Coding", 30, 30, "yellow", 30, 20);
  putText("Firearms", 40, 40, "green", 50, 30);
  putText("Computers", 50, 50, "blue", 50, 20);
  
  putText("SBC", 60, 60, "purple", 50, -20);
  putText("Linux", 70, 70, "pink", 50, -40);
  putText("Engineering", 80, 80, "red", 50, -50);
  putText("Korean", 90, 90, "orange", 50, -120); 
  putText("Adventure Time", 100, 100, "yellow", 50, 0);
  
  putText("3D Printing", 110, -110, "green", 50, 0);
  putText("Embedded Software", 120, -120, "blue", 50, 0);
  putText("PCB Manufacturing", 130, -130, "purple", 50, 0);
  putText("CAD", 140, -140, "magenta", 50, 0);
  putText("Simulation", 150, -150, "pink", 50, 0);
  
  putText("Movies", -10, 10, "olive", 50, 0);
  putText("Drones", -20, 20, "skyblue", 50, 0);
  putText("Cars", -30, 30, "blue", 50, 0);
  putText("Overwatch", -40, 40, "red", 50, 0);
  putText("Minecraft", -50, 50, "yellow", 50, 0);
  
  putText("Synthetic Life", -70, -70, "red", 50, 0);
  putText("Semi Trucks", -80, -70, "orange", 50, 0);
  putText("Planes", -90, -70, "yellow", 50, 0);
  putText("Autonomous Systems", -100, -90, "green", 50, 0);
  putText("Spongebob Squarepants", -110, -110, "blue", 50, 0);
  
  putText("Rover", -120, 0, "purple", 50, 0);
  putText("Patrick Star", -130, 0, "magenta", 50, 0);
  putText("Polar bears", -140, 0, "pink", 50, 0);
  putText("Beavers", 150, 0, "red", 50, 0);
  putText("Water", 160, 0, "orange", 50, 0);
}

function draw() {

}

function putText(words, x, y, color, size = 30, rotation = 0, randomize = true){
  if(randomize){
    size = random(10, 20);
    x = random(-300, 300);
    y = random(-300, 300);
    rotation = random(-180, 180);
  }
  
  push();
  fill(color);
  textSize(size);
  textAlign(CENTER);
  translate(centerToCorner(x, y).cornerX, centerToCorner(x, y, size).cornerY);
  angleMode(DEGREES);
  rotate(rotation);
  text(words, 0, 0);
  pop();
  
}

function centerToCorner(x, y, width = canvasWidth, height = canvasHeight){
  var cornerX = Math.round(x + (width / 2));
  var cornerY = Math.round((-y) + (height / 2));
  
  return {cornerX, cornerY};
}