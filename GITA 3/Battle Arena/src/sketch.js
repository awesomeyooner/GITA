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

  Keyboard.configureBinding("q", () => EnemyManager.getInstance().respawnOne(Mouse.get().copy()), BindType.ON_PRESS);
  Keyboard.configureBinding("e", () => EnemyManager.getInstance().respawnOne(Mouse.get().copy()), BindType.WHILE_PRESSED);

  Keyboard.configureBinding("r", () => gameManager.player.placeBarricade(Mouse.get().copy()), BindType.ON_PRESS);
  Keyboard.configureBinding("f", () => gameManager.player.placeBarricade(Mouse.get().copy()), BindType.WHILE_PRESSED);

  Keyboard.configureBinding("t", () => gameManager.player.turretManager.respawnOne(Mouse.get().copy()), BindType.ON_PRESS);

  // Keyboard.configureBinding("g", () => EnemyManager.getInstance().respawnOneAroundPoint(gameManager.enemyFortress, 100), BindType.WHILE_PRESSED);
  gameManager.initialize();
}

function draw(){
  Mouse.update(mouseIsPressed);
  Keyboard.update();

  gameManager.player.setHeading(Keyboard.getHeading(), true);

  gameManager.update();
}