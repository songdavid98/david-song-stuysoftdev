console.log("hello, david");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var startbutton = document.getElementById("start");
var stopbutton = document.getElementById("stop");
var rectW = 50;
var rectH = 20;
var rectX = 100;
var rectY = 50;
var xdir = 1;
var ydir = 1;
var frameid = 0;

var run = function(e) {
    context.clearRect(0, 0, canvas.width, canvas.height);  
    console.log("clear");             
    drawRect();
    frameid = window.requestAnimationFrame(run);
};

var drawRect = function(e) { 
    context.beginPath();
    context.fillRect(rectX, rectY, rectW, rectH);
    if (rectX <= 0 || rectX >= canvas.width - rectW) {
	xdir *= -1;
    }
    if (rectY <= 0 || rectY >= canvas.height - rectH) {
	ydir *= -1;
    }
    rectX += xdir;
    rectY += ydir;
};
var start = function() {
    stop();
    console.log("started");
    run();
}
var stop = function() {
    window.cancelAnimationFrame(frameid);
}
startbutton.addEventListener('click', start);
stopbutton.addEventListener('click', stop);
