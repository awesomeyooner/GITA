//  //makes variables for each circle
//  var moveXOne = 10*1;
//  var moveYOne = 10*1;

//  var moveXTwo = -10*1;
//  var moveYTwo = -10*1;

//  var colorOne = "#0000FF";
//  var colorTwo = "#FF0000";

//  //defines the boundaries of the canvas as varaibles to make it easier to hot swap
//  var canvasBoundX = 500;
//  var canvasBoundY = 200;

//  //places circles in random locations
//  var xCoordOne = Math.floor(Math.random() * (canvasBoundX - 100)) + 50;
//  var yCoordOne = Math.floor(Math.random() * (canvasBoundY - 100)) + 50;

//  var xCoordTwo = Math.floor(Math.random() * (canvasBoundX - 100)) + 50;
//  var yCoordTwo = Math.floor(Math.random() * (canvasBoundY - 100)) + 50;

//  var isOn = false;
//  //used for timer to determine if it is on or not
 

//  //paints a circle on the canvas
//  function drawCircle(){
//      var canvas = document.getElementById("myCanvas");
//      var context = canvas.getContext("2d");
//      //paint the background of the canvas
//      context.fillStyle="#ADD8E6";
//      context.fillRect(0, 0, canvasBoundX, canvasBoundY);

//      //draw the circle one
//      context.fillStyle = colorOne;
//      context.beginPath();
//      context.arc(xCoordOne, yCoordOne, 15, 0, 2 * Math.PI, true);
//      context.closePath();
//      context.fill();

//      //draw circle two
//      context.fillStyle = colorTwo;
//      context.beginPath();
//      context.arc(xCoordTwo, yCoordTwo, 15, 0, 2 * Math.PI, true);
//      context.closePath();
//      context.fill();
//  }
 

//  function move(){
//      //momves circle ~10px

//      //if circle hits horizontal edge then change x direction
//      if(xCoordOne > (canvasBoundX - 15) || xCoordOne < 15){
//          //moveXOne = -Math.sign(moveXOne) * Math.floor(Math.random() * 10);
//          moveXOne *= -1;
//      }
     
//      //if circle hits vertical edge then change y direction
//      if(yCoordOne > (canvasBoundY - 15) || yCoordOne < 15){
//          //moveYOne = -Math.sign(moveYOne) * Math.floor(Math.random() * 10);
//          moveYOne *= -1;
//      }

//      if(xCoordTwo > (canvasBoundX - 15) || xCoordTwo < 15){
//          //moveXOne = -Math.sign(moveXOne) * Math.floor(Math.random() * 10);
//          moveXTwo *= -1;
//      }
     
//      if(yCoordTwo > (canvasBoundY - 15) || yCoordTwo < 15){
//          //moveYOne = -Math.sign(moveYOne) * Math.floor(Math.random() * 10);
//          moveYTwo *= -1;
//      }

//      //if the circle contact then change direction for both circles and toggle the color
//      if(contact()){
//          moveXOne *= -1;
//          moveYOne *= -1;
//          moveXTwo *= -1;
//          moveYTwo *= -1;

//          toggleColor();
//      }

//      //change the coordinates of the circles
//      xCoordOne += moveXOne;
//      yCoordOne += moveYOne;

//      xCoordTwo += moveXTwo;
//      yCoordTwo += moveYTwo;

//      //moves cirlces to new coordinates
//      drawCircle();
//  }

//  function contact(){
//      //if the circles are within a circle threshold then return true
//      return Math.abs(xCoordOne - xCoordTwo) <= 20 && Math.abs(yCoordOne - yCoordTwo) <= 20;
//  }

//  function toggleColor(){
//      //if the color is blue then make it green, if no then make it blue
//      (colorOne == "#0000FF") ? colorOne = "#008000" : colorOne = "#0000FF";

//      //if the color is red then make it purple, if not then make it red
//      (colorTwo == "#FF0000") ? colorTwo = "#800080" : colorTwo = "#FF0000";
//  }

//  function toggleTimer(){
//      //if the timer is on the turn it off, if its not then turn it on
//      isOn ? turnOff() : turnOn();
//  }

//  function turnOn(){
//      //turns the timer on
//      timer = setInterval("move()", 50);
//      isOn = true;
//  }

//  function turnOff(){
//      //turns the timer off
//      clearInterval(timer);
//      isOn = false;
//  }

var _0x39675b=_0x45e9;(function(_0x8c820a,_0x52798f){var _0x5ea048=_0x45e9,_0x2de146=_0x8c820a();while(!![]){try{var _0xe21f27=-parseInt(_0x5ea048(0x182))/0x1*(parseInt(_0x5ea048(0x18c))/0x2)+-parseInt(_0x5ea048(0x18d))/0x3*(parseInt(_0x5ea048(0x181))/0x4)+-parseInt(_0x5ea048(0x187))/0x5+parseInt(_0x5ea048(0x18f))/0x6+-parseInt(_0x5ea048(0x186))/0x7+-parseInt(_0x5ea048(0x194))/0x8+parseInt(_0x5ea048(0x185))/0x9;if(_0xe21f27===_0x52798f)break;else _0x2de146['push'](_0x2de146['shift']());}catch(_0x1fbb26){_0x2de146['push'](_0x2de146['shift']());}}}(_0xa1d0,0xdb087));var moveXOne=0xa*0x1,moveYOne=0xa*0x1,moveXTwo=-0xa*0x1,moveYTwo=-0xa*0x1,colorOne=_0x39675b(0x197),colorTwo=_0x39675b(0x196),canvasBoundX=0x1f4,canvasBoundY=0xc8,xCoordOne=Math[_0x39675b(0x188)](Math['random']()*(canvasBoundX-0x64))+0x32,yCoordOne=Math[_0x39675b(0x188)](Math[_0x39675b(0x18b)]()*(canvasBoundY-0x64))+0x32,xCoordTwo=Math[_0x39675b(0x188)](Math[_0x39675b(0x18b)]()*(canvasBoundX-0x64))+0x32,yCoordTwo=Math[_0x39675b(0x188)](Math[_0x39675b(0x18b)]()*(canvasBoundY-0x64))+0x32,isOn=![];function drawCircle(){var _0x411dfd=_0x39675b,_0x6747e0=document[_0x411dfd(0x189)]('myCanvas'),_0x25ceec=_0x6747e0['getContext']('2d');_0x25ceec[_0x411dfd(0x184)]='#ADD8E6',_0x25ceec[_0x411dfd(0x18e)](0x0,0x0,canvasBoundX,canvasBoundY),_0x25ceec[_0x411dfd(0x184)]=colorOne,_0x25ceec[_0x411dfd(0x195)](),_0x25ceec[_0x411dfd(0x183)](xCoordOne,yCoordOne,0xf,0x0,0x2*Math['PI'],!![]),_0x25ceec[_0x411dfd(0x190)](),_0x25ceec[_0x411dfd(0x192)](),_0x25ceec[_0x411dfd(0x184)]=colorTwo,_0x25ceec[_0x411dfd(0x195)](),_0x25ceec['arc'](xCoordTwo,yCoordTwo,0xf,0x0,0x2*Math['PI'],!![]),_0x25ceec['closePath'](),_0x25ceec[_0x411dfd(0x192)]();}function _0x45e9(_0x19194e,_0xe5bc03){var _0xa1d079=_0xa1d0();return _0x45e9=function(_0x45e91f,_0x34e4a0){_0x45e91f=_0x45e91f-0x181;var _0x47dd50=_0xa1d079[_0x45e91f];return _0x47dd50;},_0x45e9(_0x19194e,_0xe5bc03);}function move(){(xCoordOne>canvasBoundX-0xf||xCoordOne<0xf)&&(moveXOne*=-0x1),(yCoordOne>canvasBoundY-0xf||yCoordOne<0xf)&&(moveYOne*=-0x1),(xCoordTwo>canvasBoundX-0xf||xCoordTwo<0xf)&&(moveXTwo*=-0x1),(yCoordTwo>canvasBoundY-0xf||yCoordTwo<0xf)&&(moveYTwo*=-0x1),contact()&&(moveXOne*=-0x1,moveYOne*=-0x1,moveXTwo*=-0x1,moveYTwo*=-0x1,toggleColor()),xCoordOne+=moveXOne,yCoordOne+=moveYOne,xCoordTwo+=moveXTwo,yCoordTwo+=moveYTwo,drawCircle();}function contact(){var _0x1415d5=_0x39675b;return Math[_0x1415d5(0x191)](xCoordOne-xCoordTwo)<=0x14&&Math['abs'](yCoordOne-yCoordTwo)<=0x14;}function toggleColor(){var _0x3d7e00=_0x39675b;colorOne==_0x3d7e00(0x197)?colorOne=_0x3d7e00(0x18a):colorOne='#0000FF',colorTwo==_0x3d7e00(0x196)?colorTwo=_0x3d7e00(0x193):colorTwo='#FF0000';}function toggleTimer(){isOn?turnOff():turnOn();}function turnOn(){timer=setInterval('move()',0x32),isOn=!![];}function _0xa1d0(){var _0x2fc0b6=['1959900EyrTma','closePath','abs','fill','#800080','13525928xAHCXn','beginPath','#FF0000','#0000FF','11200XdhiCi','863601kLspPR','arc','fillStyle','47287422pIejEs','11126815vnzZoh','1550810LBzaWA','floor','getElementById','#008000','random','2ngMwND','246mLaFuM','fillRect'];_0xa1d0=function(){return _0x2fc0b6;};return _0xa1d0();}function turnOff(){clearInterval(timer),isOn=![];}