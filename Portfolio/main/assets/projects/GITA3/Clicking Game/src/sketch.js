
var mouse = new Mouse();
var actionButton;

var slashmanager = new SlashManager(200);
var objectmanager = new ObjectManager(10);
var gamemanager = new GameManager(objectmanager, slashmanager);

var timestamp = 0;

function setup() {
  createCanvas(1280, 720);
  frameRate(60);

  actionButton = createButton("ACTION!");
  actionButton.mousePressed(action);
  actionButton.position(width, 0);
  actionButton.size(100, 100);

  objectmanager.initialize();
}

function action(){
  if(gamemanager.getState() == GameState.TITLE){
      gamemanager.setState(GameState.REVEAL);
      timestamp = millis();
  }

  else if(gamemanager.getState() == GameState.SLASHING)
      gamemanager.setState(GameState.END);
}

function draw(){
  mouse.update(mouseIsPressed);

  gamemanager.update();

  // slashmanager.append(new Point(mouse.getCartesianX(), mouse.getCartesianY()));

  if(mouse.isPressed() && gamemanager.getState() == GameState.SLASHING){
    slashmanager.append(new Point(mouse.getCartesianX(), mouse.getCartesianY()));

    if(slashmanager.isFull())
        gamemanager.setState(GameState.END);
  }

    slashmanager.update();  

  if(gamemanager.getState() == GameState.REVEAL){

    if(millis() - timestamp < 3000){
      objectmanager.update();

    }

    else{
      gamemanager.setState(GameState.LIGHTS_OUT);
    }
  }

  //logData();
}

function logData(){
  text(mouse.getPoint().getCartesianX(), 50, 50);
  text(mouse.getPoint().getCartesianY(), 50, 100);
  text(mouse.isPressed(), 50, 150);
  text(gamemanager.getState(), 50, 200);
}

function mousePressed(){
  if(gamemanager.getState() == GameState.LIGHTS_OUT){
    gamemanager.setState(GameState.SLASHING);
  }

  if(gamemanager.getState() == GameState.SLASHING)
    slashmanager.reset();
}
