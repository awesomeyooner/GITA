
var mouse = new Mouse();
var keyboard = new KeyboardController();

var gameManager = new GameManager();

function setup() {
  createCanvas(1600, 800);
  //angleMode(DEGREES);
  frameRate(60);

  keyboard.initialize(window);
  
  keyboard.configureBinding("w", () => gameManager.player.jump(), BindType.ON_PRESS);
  
  keyboard.configureBinding("s", () => {
    gameManager.player.crouching = true;
    print("press");
  }, BindType.ON_PRESS);

  keyboard.configureBinding("s", () => {
    gameManager.player.crouching = false;
    print("release");
  }, BindType.ON_RELEASE);
  //keyboard.configureBinding("c", () => print("hello"));

  // mouse.configureBinding(() => gameManager.getHelicopter().shoot(new Vector(0, -1)), MouseState.ON_PRESS);
  // mouse.configureBinding(() => print("RELEASE"), MouseState.ON_RELEASE);
  // mouse.configureBinding(() => print("NEUTRAL"), MouseState.WHILE_UP);
  // mouse.configureBinding(() => print("HELD"), MouseState.WHILE_DOWN);

  gameManager.initialize();
}

function draw(){
  mouse.update(mouseIsPressed);
  keyboard.update();

  // gameManager.player.setWantedHeading(keyboard.getHeading().getUnitVector(), true);

  gameManager.update();
}

function logData(){
  for(var key of keyboard.getKeys().keys()){
    print(key + ": " + keyboard.getKeys().get(key));
  }
}