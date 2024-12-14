
var mouse = new Mouse();

var keyboard = new KeyboardController();

var ball;

function setup() {
  createCanvas(1280, 720);
  frameRate(60);

  ball = new BouncyBall(100);

  keyboard.initialize(window);

  keyboard.configureBinding("c", () => print("hello"));
}

function draw(){
  background(220);

  ball.update();
  //logData();
}

function logData(){
  for(var key of keyboard.getKeys().keys()){
    print(key + ": " + keyboard.getKeys().get(key));
  }
}

function mousePressed(){

}
