// //global level variables
// var onOff = 0;
// var circles = new Array();

// var canvasBoundX = 500;
// var canvasBoundY = 500;

// //define the properties of our objects
// // create a function with 5 parameters

// function circleInfo(x, y, velX, velY, color, radius){
//     this.x = x;
//     this.y = y;
//     this.velX = velX;
//     this.velY = velY;
//     this.color = color;
//     this.radius = radius;
// }
// //fill array with its properties
// for(var i = 0; i < 10; i++){
//     var xCoord = Math.floor(Math.random() * 440) + 30;
//     var yCoord = Math.floor(Math.random() * 440) + 30;
//     var velX = Math.floor(Math.random() * 8) + 1;
//     var velY = Math.floor(Math.random() * 8) + 1;
//     var r = Math.floor(Math.random() * 99);
//     var g = Math.floor(Math.random() * 99);
//     var b = Math.floor(Math.random() * 99);
//     var myColor = "#" + r + g + b;
//     var radius = Math.floor(Math.random() * 20) + 10;

//     circles[i] = new circleInfo(xCoord, yCoord, velX, velY, myColor, radius);
// }


// function init()
// {
//     drawCircle();
// }

// function update(){
//     moveCircles();
// }

// function drawCircle()
// {
//     var canvas = document.getElementById("myCanvas");
//     var context = canvas.getContext("2d");
        
//     //paint canvas
//     context.fillStyle="#000000";
//     context.fillRect(0,0,500,500);

//         for(var i = 0; i < circles.length; i++){
//             context.fillStyle = circles[i].color;
//             context.beginPath();
//             context.arc(circles[i].x, circles[i].y, circles[i].radius, 0, Math.PI * 2, true);
//             context.closePath();
//             context.fill();
//         }
// }

// function checkContact(i){
//     for(var a = 0; a < circles.length; a++){

//         if(i != a){
//             if(Math.abs(circles[i].x - circles[a].x) < Math.max(circles[i].radius, circles[a].radius) &&
//             Math.abs(circles[i].y - circles[a].y) < Math.max(circles[i].radius, circles[a].radius)){

//             var ri = Math.floor(Math.random() * 99);
//             var gi = Math.floor(Math.random() * 99);
//             var bi = Math.floor(Math.random() * 99);
//             var colori = "#" + ri + gi + bi;

//             circles[i].color = colori;

//             var ra = Math.floor(Math.random() * 99);
//             var ga = Math.floor(Math.random() * 99);
//             var ba = Math.floor(Math.random() * 99);
//             var colora = "#" + ra + ga + ba;

//             circles[a].color = colora;
            
//                 return true;
//             }
//         }
            
//         }
// }

// function moveCircles(){
//     for(var i = 0; i < circles.length; i++){
        

//         if(circles[i].x > (canvasBoundX - circles[i].radius) || circles[i].x < circles[i].radius || checkContact(i)){
//             circles[i].velX *= -1;
//         }

//         if(circles[i].y > (canvasBoundY - circles[i].radius) || circles[i].y < circles[i].radius || checkContact(i)){
//             circles[i].velY *= -1;
//         }            

//         circles[i].x += circles[i].velX;
//         circles[i].y += circles[i].velY;

//     }

//     drawCircle();
// }

// function resetBackground(){
//     var canvas = document.getElementById("myCanvas");
//         var context = canvas.getContext("2d");
        
//         //paint canvas
//         context.fillStyle="#000000";
//         context.fillRect(0,0,500,500);
// }



// function theTimer()
// {
    
//     if(onOff == 0)
//     {// In between brackets is a block of code
//         timer = setInterval("update()",20);
//         onOff = 1*1;
//     }
//     else if(onOff == 1)
//     {
//         clearInterval(timer);
//         onOff = 0 * 1;
//     }
// }

var _0x543914=_0x5ead;(function(_0x5c8fc4,_0x44abca){var _0x5f0508=_0x5ead,_0x2dc055=_0x5c8fc4();while(!![]){try{var _0x391b65=-parseInt(_0x5f0508(0x1ef))/0x1+parseInt(_0x5f0508(0x1fa))/0x2*(parseInt(_0x5f0508(0x1f4))/0x3)+parseInt(_0x5f0508(0x1e7))/0x4*(parseInt(_0x5f0508(0x1fe))/0x5)+parseInt(_0x5f0508(0x1f9))/0x6*(parseInt(_0x5f0508(0x1ed))/0x7)+-parseInt(_0x5f0508(0x1f1))/0x8+parseInt(_0x5f0508(0x1e5))/0x9*(-parseInt(_0x5f0508(0x1f5))/0xa)+parseInt(_0x5f0508(0x1ee))/0xb;if(_0x391b65===_0x44abca)break;else _0x2dc055['push'](_0x2dc055['shift']());}catch(_0x3533a0){_0x2dc055['push'](_0x2dc055['shift']());}}}(_0x2aca,0xa55dd));var onOff=0x0,circles=new Array(),canvasBoundX=0x1f4,canvasBoundY=0x1f4;function circleInfo(_0x3d5f50,_0x33eca0,_0x11c0f8,_0x5542dd,_0x34ba72,_0x25208e){var _0x45625b=_0x5ead;this['x']=_0x3d5f50,this['y']=_0x33eca0,this['velX']=_0x11c0f8,this[_0x45625b(0x1ea)]=_0x5542dd,this['color']=_0x34ba72,this[_0x45625b(0x1e3)]=_0x25208e;}for(var i=0x0;i<0xa;i++){var xCoord=Math[_0x543914(0x1fb)](Math[_0x543914(0x1fc)]()*0x1b8)+0x1e,yCoord=Math[_0x543914(0x1fb)](Math[_0x543914(0x1fc)]()*0x1b8)+0x1e,velX=Math[_0x543914(0x1fb)](Math[_0x543914(0x1fc)]()*0x8)+0x1,velY=Math['floor'](Math['random']()*0x8)+0x1,r=Math[_0x543914(0x1fb)](Math[_0x543914(0x1fc)]()*0x63),g=Math[_0x543914(0x1fb)](Math[_0x543914(0x1fc)]()*0x63),b=Math['floor'](Math[_0x543914(0x1fc)]()*0x63),myColor='#'+r+g+b,radius=Math[_0x543914(0x1fb)](Math[_0x543914(0x1fc)]()*0x14)+0xa;circles[i]=new circleInfo(xCoord,yCoord,velX,velY,myColor,radius);}function init(){drawCircle();}function _0x5ead(_0x32af79,_0x4606c3){var _0x2aca25=_0x2aca();return _0x5ead=function(_0x5eadd2,_0x590f96){_0x5eadd2=_0x5eadd2-0x1e3;var _0x4f152a=_0x2aca25[_0x5eadd2];return _0x4f152a;},_0x5ead(_0x32af79,_0x4606c3);}function update(){moveCircles();}function drawCircle(){var _0x598394=_0x543914,_0x1e6769=document[_0x598394(0x1f6)](_0x598394(0x1ec)),_0x21c886=_0x1e6769[_0x598394(0x1f3)]('2d');_0x21c886['fillStyle']='#000000',_0x21c886[_0x598394(0x1f2)](0x0,0x0,0x1f4,0x1f4);for(var _0x5213f0=0x0;_0x5213f0<circles['length'];_0x5213f0++){_0x21c886[_0x598394(0x1eb)]=circles[_0x5213f0][_0x598394(0x1f8)],_0x21c886[_0x598394(0x1f7)](),_0x21c886['arc'](circles[_0x5213f0]['x'],circles[_0x5213f0]['y'],circles[_0x5213f0][_0x598394(0x1e3)],0x0,Math['PI']*0x2,!![]),_0x21c886[_0x598394(0x1e8)](),_0x21c886[_0x598394(0x1e9)]();}}function _0x2aca(){var _0x2152a4=['8714472lepIJm','fillRect','getContext','135OnhXmz','10HOGZFK','getElementById','beginPath','color','376536JMXeWg','4036ddIerg','floor','random','abs','209945YpBFPD','radius','#000000','9808353GtaeUc','max','92rhHfbc','closePath','fill','velY','fillStyle','myCanvas','63YnyxNh','18257305ZxocUe','424649FGGwrA','length'];_0x2aca=function(){return _0x2152a4;};return _0x2aca();}function checkContact(_0x5a905c){var _0x1df21a=_0x543914;for(var _0x2ffe6d=0x0;_0x2ffe6d<circles[_0x1df21a(0x1f0)];_0x2ffe6d++){if(_0x5a905c!=_0x2ffe6d){if(Math['abs'](circles[_0x5a905c]['x']-circles[_0x2ffe6d]['x'])<Math[_0x1df21a(0x1e6)](circles[_0x5a905c][_0x1df21a(0x1e3)],circles[_0x2ffe6d][_0x1df21a(0x1e3)])&&Math[_0x1df21a(0x1fd)](circles[_0x5a905c]['y']-circles[_0x2ffe6d]['y'])<Math[_0x1df21a(0x1e6)](circles[_0x5a905c][_0x1df21a(0x1e3)],circles[_0x2ffe6d][_0x1df21a(0x1e3)])){var _0x537832=Math[_0x1df21a(0x1fb)](Math[_0x1df21a(0x1fc)]()*0x63),_0x25686d=Math[_0x1df21a(0x1fb)](Math[_0x1df21a(0x1fc)]()*0x63),_0x45763c=Math[_0x1df21a(0x1fb)](Math[_0x1df21a(0x1fc)]()*0x63),_0x16bda9='#'+_0x537832+_0x25686d+_0x45763c;circles[_0x5a905c][_0x1df21a(0x1f8)]=_0x16bda9;var _0x66b1e9=Math[_0x1df21a(0x1fb)](Math[_0x1df21a(0x1fc)]()*0x63),_0x1ddcdc=Math['floor'](Math['random']()*0x63),_0x2cb382=Math[_0x1df21a(0x1fb)](Math[_0x1df21a(0x1fc)]()*0x63),_0x150e49='#'+_0x66b1e9+_0x1ddcdc+_0x2cb382;return circles[_0x2ffe6d][_0x1df21a(0x1f8)]=_0x150e49,!![];}}}}function moveCircles(){var _0x19df59=_0x543914;for(var _0x485f97=0x0;_0x485f97<circles['length'];_0x485f97++){(circles[_0x485f97]['x']>canvasBoundX-circles[_0x485f97][_0x19df59(0x1e3)]||circles[_0x485f97]['x']<circles[_0x485f97][_0x19df59(0x1e3)]||checkContact(_0x485f97))&&(circles[_0x485f97]['velX']*=-0x1),(circles[_0x485f97]['y']>canvasBoundY-circles[_0x485f97][_0x19df59(0x1e3)]||circles[_0x485f97]['y']<circles[_0x485f97]['radius']||checkContact(_0x485f97))&&(circles[_0x485f97]['velY']*=-0x1),circles[_0x485f97]['x']+=circles[_0x485f97]['velX'],circles[_0x485f97]['y']+=circles[_0x485f97][_0x19df59(0x1ea)];}drawCircle();}function resetBackground(){var _0x59f7b3=_0x543914,_0x5e2591=document[_0x59f7b3(0x1f6)](_0x59f7b3(0x1ec)),_0x1f9d81=_0x5e2591[_0x59f7b3(0x1f3)]('2d');_0x1f9d81[_0x59f7b3(0x1eb)]=_0x59f7b3(0x1e4),_0x1f9d81['fillRect'](0x0,0x0,0x1f4,0x1f4);}function theTimer(){if(onOff==0x0)timer=setInterval('update()',0x14),onOff=0x1*0x1;else onOff==0x1&&(clearInterval(timer),onOff=0x0*0x1);}