var nextButton;
var previousButton;

var pageIndex = 0;
var totalPages = 6;

var pages = new Array();

pages = [
  new Title()
];

function setup() {
  createCanvas(750, 700);
  angleMode(DEGREES);
  
  nextButton = createButton("Next");
  nextButton.mousePressed(nextPage);
  nextButton.position(width, 0);
  nextButton.size(100, 100);
  
  previousButton = createButton("Previous");
  previousButton.mousePressed(previousPage);
  previousButton.position(width, 100);
  previousButton.size(100, 100);
}

function showPageIndex(){
  push();
  fill("black");
  textSize(20);
  text(pageIndex, 0, height);
  pop(); 
}

function nextPage(){
  if(pageIndex < totalPages - 1)
    pageIndex++;
  else
    pageIndex = 0;
}

function previousPage(){
  if(pageIndex > 0)
    pageIndex--;
  else
    pageIndex = totalPages - 1;
}

function draw() {
  if(pages[pageIndex] != null)
    pages[pageIndex].update();

  showPageIndex();
}