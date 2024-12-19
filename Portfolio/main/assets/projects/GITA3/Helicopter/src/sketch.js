
var mouse = new Mouse();
var keyboard = new KeyboardController();

var gameManager = new GameManager();

function setup() {
  createCanvas(1600, 800);
  //angleMode(DEGREES);
  frameRate(60);

  keyboard.initialize(window);
  keyboard.configureBinding("c", () => print("hello"));

  // mouse.configureBinding(() => print("PRESS"), MouseState.ON_PRESS);
  // mouse.configureBinding(() => print("RELEASE"), MouseState.ON_RELEASE);
  // mouse.configureBinding(() => print("NEUTRAL"), MouseState.WHILE_UP);
  // mouse.configureBinding(() => print("HELD"), MouseState.WHILE_DOWN);

  gameManager.initialize();
}

function draw(){
  background(220);

  mouse.update(mouseIsPressed);

  gameManager.moveHelicopter(keyboard.getHeading().getUnitVector());

  gameManager.update();
}

function logData(){
  for(var key of keyboard.getKeys().keys()){
    print(key + ": " + keyboard.getKeys().get(key));
  }
}