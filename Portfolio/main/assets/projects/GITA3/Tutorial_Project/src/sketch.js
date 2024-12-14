var nextButton;
var previousButton;
var actionButton;

var pageIndex = 0;

var pages = new Array();

pages = [
  new Title(),
  new Ingredients(),
  new Assemble(),
  new Admire(),
  new Picture(),
  new Devour()
];

function setup() {
  createCanvas(1280, 720);
  angleMode(DEGREES);
  
  nextButton = createButton("Next");
  nextButton.mousePressed(nextPage);
  nextButton.position(width, 0);
  nextButton.size(100, 100);
  
  previousButton = createButton("Previous");
  previousButton.mousePressed(previousPage);
  previousButton.position(width, 100);
  previousButton.size(100, 100);
  
  actionButton = createButton("Action!");
  actionButton.mousePressed(action);
  actionButton.position(width, 300);
  actionButton.style('font-size', '80px');
  actionButton.style('background-color', '#007ba7');
  actionButton.size(400, 400);
}

function showPageIndex(){
  push();
  fill("black");
  textSize(20);
  text(pageIndex, 10, height);
  pop(); 
}

function nextPage(){
  if(pageIndex < pages.length- 1)
    pageIndex++;
  else
    pageIndex = 0;

  showPageIndex();
}

function previousPage(){
  if(pageIndex > 0)
    pageIndex--;
  else
    pageIndex = pages.length - 1;

  showPageIndex();
}

function action(){
  if(pages[pageIndex] != null)
    pages[pageIndex].action();
}

function draw() {
  if(pages[pageIndex] != null)
    pages[pageIndex].update();

  showPageIndex();
}