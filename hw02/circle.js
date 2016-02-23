console.log("hello");

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var startbutton = document.getElementById("start");

var radius = 1;
var run = function(e) {
    requestAnimationFrame(run);    
    context.clearRect(0, 0, 500, 500);
    console.log("test");
    context.clearRect(0, 0, 500, 500);
    drawCircle();
}
var growing = 1;

var drawCircle = function(e) {
    context.clearRect(0, 0, 500, 500);
    context.arc(250, 250, radius, 0, 2 * Math.PI);
    context.fill();
    if (radius >= 100 || radius <= 0)  {
	growing *= -1;
    }
    radius += growing
    console.log(radius);
}

var start = function() {
    console.log("started");
    run();
}
startbutton.addEventListener('click', start);
