let img;

function preload(){
  img = loadImage('avatar.jpg');
  img.loadPixels();
}

function setup() {
  createCanvas(img.width, img.height);
  background("black");
  
  img.loadPixels();
  imageToPixels(img, 7);
}

function draw() {}

function imageToPixels(image, resolution = 1){

  for(var heightIndex = 0; heightIndex < image.height; heightIndex+=resolution){
    
      for(var widthIndex = 0; widthIndex < image.width; widthIndex+=resolution){
        
        var x = widthIndex / resolution;
        var y = heightIndex / resolution;
        
        var currentTotalPixel = (heightIndex * image.width) + widthIndex;
        
        var r = image.pixels[currentTotalPixel * 4];
        var g = image.pixels[(currentTotalPixel * 4) + 1];
        var b = image.pixels[(currentTotalPixel * 4) + 2];
      
        drawPixel(widthIndex, heightIndex, r, g, b, resolution);
    
      }
  }

}

function drawPixel(x, y, r, g, b, size = 1){
  r = r;
  g = g;
  b = b;
  
  stroke(r, g, b);
  fill(r, g, b);
  rect(x, y, size, size);
}