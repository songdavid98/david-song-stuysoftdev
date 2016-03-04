console.log("hello david");

var startbutton = document.getElementById("start");
var stopbutton = document.getElementById("stop");
var clearbutton = document.getElementById("clear");
var svg = document.getElementById("svg1");

var img;
var setup = function setup() {

};

var interval = 0;
var start = function start() {
    clear();
    setup();
    interval = setInterval(bounce, 16);
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
