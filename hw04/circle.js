console.log("hello david");

var startbutton = document.getElementById("start");
var stopbutton = document.getElementById("stop");
var clearbutton = document.getElementById("clear");

var CX = 250;
var CY = 250;
var circle;
var radius = 1;
var growing = 1;

var setup = function() {
    radius = 1;
    growing = 1;
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", CX);
    circle.setAttribute("cy", CY);
    svg.appendChild(circle);
};

var svg = document.getElementById("svg1");


var drawCircle = function(e) {
    if (radius >= 250 || radius <= 0)  {
	growing *= -1;
    }
    radius += growing;
    circle.setAttribute("r", radius);
};

var interval = 0;
var start = function start() {
    clear();
    setup();
    interval = setInterval(drawCircle, 16);
};
var stop = function stop() {
    clearInterval(interval);
};
var clear = function clear() {
    stop();
    while (svg.hasChildNodes()) {
	svg.removeChild(svg.firstChild);
    }
};
startbutton.addEventListener('click', start);
stopbutton.addEventListener('click', stop);
clearbutton.addEventListener('click', clear);
