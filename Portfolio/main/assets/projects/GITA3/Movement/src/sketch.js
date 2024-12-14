
var mouse = new Mouse();

var keyboard = new KeyboardController();

var character = new Entity(40);

function setup() {
  createCanvas(1280, 720);
  frameRate(60);

  keyboard.initialize(window);

  keyboard.configureBinding("c", () => print("hello"));
}

function draw(){
  background(220);

  mouse.update(mouseIsPressed);
  keyboard.update();

  character.setHeading(keyboard.getHeading().times(5));

  character.update();

  //logData();
}

function logData(){
  for(var key of keyboard.getKeys().keys()){
    print(key + ": " + keyboard.getKeys().get(key));
  }
}

function mousePressed(){

}
