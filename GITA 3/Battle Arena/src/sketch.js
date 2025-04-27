const gameManager = GameManager.getInstance();

function setup() {
  createCanvas(1600, 800);
  //angleMode(DEGREES);
  frameRate(60);

  Keyboard.initialize(window);

  Mouse.configureBinding(() => gameManager.player.shoot(Mouse.get().getVector(gameManager.player)), MouseState.ON_PRESS);
  // Mouse.configureBinding(() => gameManager.player.shootWithAutoAim(EnemyManager.getInstance().enemies), MouseState.ON_PRESS);
  
  Keyboard.configureBinding(" ", () => gameManager.player.shoot(Mouse.get().getVector(gameManager.player)), BindType.WHILE_PRESSED);
  // Keyboard.configureBinding(" ", () => gameManager.player.shootWithAutoAim(EnemyManager.getInstance().enemies), BindType.WHILE_PRESSED);

  Keyboard.configureBinding("q", () => EnemyManager.getInstance().respawnOneEnemy(Mouse.get().copy()), BindType.ON_PRESS);
  Keyboard.configureBinding("e", () => EnemyManager.getInstance().respawnOneEnemy(Mouse.get().copy()), BindType.WHILE_PRESSED);

  Keyboard.configureBinding("r", () => gameManager.player.placeBarricade(Mouse.get().copy()), BindType.ON_PRESS);
  Keyboard.configureBinding("f", () => gameManager.player.placeBarricade(Mouse.get().copy()), BindType.WHILE_PRESSED);
  
  // Keyboard.configureBinding("s", () => gameManager.player.crouching = true, BindType.ON_PRESS);
  // Keyboard.configureBinding("s", () => gameManager.player.crouching = false, BindType.ON_RELEASE);

  // Mouse.configureBinding(() => gameManager.player.shoot(new Vector(1, 0)), MouseState.ON_PRESS);
  // Keyboard.configureBinding(" ", () => gameManager.player.shoot(new Vector(1, 0)), BindType.WHILE_PRESSED);
  // Keyboard.configureBinding("e", () => gameManager.player.launchBomb(new Vector(1, 1)), BindType.ON_PRESS);
  // Keyboard.configureBinding("f", () => gameManager.player.launchBomb(new Vector(1, 1)), BindType.WHILE_PRESSED);

  // Keyboard.configureBinding("q", () => gameManager.enemyManager.spawnEnemy(), BindType.ON_PRESS);

  // Keyboard.configureBinding("r", () => gameManager.enemyManager.removeFeet(), BindType.ON_PRESS);

  // Mouse.configureBinding(() => print("RELEASE"), MouseState.ON_RELEASE);
  // Mouse.configureBinding(() => print("NEUTRAL"), MouseState.WHILE_UP);
  // Mouse.configureBinding(() => print("HELD"), MouseState.WHILE_DOWN);

  gameManager.initialize();
}

function draw(){
  Mouse.update(mouseIsPressed);
  Keyboard.update();

  gameManager.player.setHeading(Keyboard.getHeading(), true);

  gameManager.update();
}