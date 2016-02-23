var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var clearbutton = document.getElementById("clear");
var clear = function(e) {
    e.preventDefault();
    context.clearRect(0, 0, 500, 500);
    context.closePath();
    context.beginPath();
    //context.moveTo(e.offsetX, e.offsetY);
}

var drawDot = function(e) {
    e.preventDefault();
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(e.offsetX, e.offsetY, 5, 0 , 2 * Math.PI);
    context.fill();
    context.moveTo(e.offsetX, e.offsetY);
}

clearbutton.addEventListener("click", clear);
canvas.addEventListener("click", drawDot);
