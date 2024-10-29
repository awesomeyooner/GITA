
var mouse = new Mouse();
var keyboard = new KeyboardController();

function setup() {
  createCanvas(1280, 720);
  frameRate(60);

  keyboard.initialize(window);
  keyboard.configureBinding("c", () => print("hello"));

  mouse.configureBinding(() => print("PRESS"), MouseState.ON_PRESS);
  mouse.configureBinding(() => print("RELEASE"), MouseState.ON_RELEASE);
  mouse.configureBinding(() => print("NEUTRAL"), MouseState.WHILE_UP);
  mouse.configureBinding(() => print("HELD"), MouseState.WHILE_DOWN);
}

function draw(){
  background(220);

  mouse.update(mouseIsPressed);
}

function logData(){
  for(var key of keyboard.getKeys().keys()){
    print(key + ": " + keyboard.getKeys().get(key));
  }
}