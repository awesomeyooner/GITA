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
  nextButton.position(0, 0);
  
  previousButton = createButton("Previous");
  previousButton.mousePressed(previousPage);
  previousButton.position(0, 20);
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
  pages[pageIndex].update();
}