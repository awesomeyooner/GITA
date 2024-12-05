
var mouse = new Mouse();
var keyboard = new KeyboardController();

var gameManager = new GameManager();

function setup() {
  createCanvas(1280, 720);
  frameRate(60);

  keyboard.initialize(window);
  keyboard.configureBinding("c", () => print("hello"));

  mouse.configureBinding(() => gameManager.getPlayer().shoot(mouse.getVector(gameManager.getPlayer()).getUnitVector()), MouseState.ON_PRESS);
  // mouse.configureBinding(() => print("RELEASE"), MouseState.ON_RELEASE);
  // mouse.configureBinding(() => print("NEUTRAL"), MouseState.WHILE_UP);
  // mouse.configureBinding(() => print("HELD"), MouseState.WHILE_DOWN);

  gameManager.initialize();
}

function draw(){
  background(220);

  mouse.update(mouseIsPressed);

  gameManager.getPlayer().setHeading(keyboard.getHeading(), true);

  gameManager.update();
}

function logData(){
  // for(var key of keyboard.getKeys().keys()){
  //   print(key + ": " + keyboard.getKeys().get(key));
  // }
  Utility.textCorner("Bullets: " + gameManager.getPlayer().getInactiveBullets(), 20, 100, 30);
  Utility.textCorner("Health: " + gameManager.getPlayer().getHealth(), 20, 50, 30);
}