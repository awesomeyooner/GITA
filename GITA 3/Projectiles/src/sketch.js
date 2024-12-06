
var mouse = new Mouse();
var keyboard = new KeyboardController();

var gameManager = new GameManager();

function setup() {
  createCanvas(1600, 800);
  frameRate(60);

  keyboard.initialize(window);
  keyboard.configureBinding(" ", () => gameManager.getPlayer().shoot(mouse.getVector(gameManager.getPlayer()).getUnitVector()));

  mouse.configureBinding(() => gameManager.getPlayer().shoot(mouse.getVector(gameManager.getPlayer()).getUnitVector()), MouseState.ON_PRESS);
  // mouse.configureBinding(() => print("RELEASE"), MouseState.ON_RELEASE);
  // mouse.configureBinding(() => print("NEUTRAL"), MouseState.WHILE_UP);
  // mouse.configureBinding(() => print("HELD"), MouseState.WHILE_DOWN);

  gameManager.initialize();
}

function draw(){
  background(220);

  mouse.update(mouseIsPressed);
  keyboard.update();

  gameManager.getPlayer().setHeading(keyboard.getHeading(), true);
  //gameManager.getEnemy().setHeading(keyboard.getHeading(), true);

  gameManager.update();
}