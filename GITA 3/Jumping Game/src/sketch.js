
var mouse = new Mouse();
var keyboard = new KeyboardController();

var gameManager = new GameManager();

function setup() {
  createCanvas(1600, 800);
  //angleMode(DEGREES);
  frameRate(60);

  keyboard.initialize(window);
  
  keyboard.configureBinding("w", () => gameManager.player.jump(), BindType.WHILE_PRESSED);
  
  keyboard.configureBinding("s", () => gameManager.player.crouching = true, BindType.ON_PRESS);
  keyboard.configureBinding("s", () => gameManager.player.crouching = false, BindType.ON_RELEASE);

  mouse.configureBinding(() => gameManager.player.shoot(new Vector(1, 0)), MouseState.ON_PRESS);
  keyboard.configureBinding(" ", () => gameManager.player.shoot(new Vector(1, 0)), BindType.WHILE_PRESSED);
  keyboard.configureBinding("e", () => gameManager.player.launchBomb(new Vector(1, 1)), BindType.ON_PRESS);
  keyboard.configureBinding("f", () => gameManager.player.launchBomb(new Vector(1, 1)), BindType.WHILE_PRESSED);

  keyboard.configureBinding("q", () => gameManager.enemyManager.spawnEnemy(), BindType.ON_PRESS);

  keyboard.configureBinding("r", () => gameManager.enemyManager.removeFeet(), BindType.ON_PRESS);

  // mouse.configureBinding(() => print("RELEASE"), MouseState.ON_RELEASE);
  // mouse.configureBinding(() => print("NEUTRAL"), MouseState.WHILE_UP);
  // mouse.configureBinding(() => print("HELD"), MouseState.WHILE_DOWN);

  gameManager.initialize();
}

function draw(){
  mouse.update(mouseIsPressed);
  keyboard.update();

  gameManager.update();
}

function logData(){
  for(var key of keyboard.getKeys().keys()){
    print(key + ": " + keyboard.getKeys().get(key));
  }
}