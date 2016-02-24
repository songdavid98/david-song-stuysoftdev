console.log("hello");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var startbutton = document.getElementById("start");
var radius = 1;
var growing = 1;

var run = function(e) {
    context.clearRect(0, 0, canvas.width, canvas.height);  
    console.log("clear");             
    drawCircle();
    window.requestAnimationFrame(run);
}

var drawCircle = function(e) { 
    context.beginPath();
    context.arc(250, 250, radius, 0, 2 * Math.PI);
    context.fill();
    
    if (radius >= 250 || radius <= 0)  {
	growing *= -1;
	if (radius >= 250) {              
	    context.fillStyle = "blue";  
	}                              
	else {                          
	    context.fillStyle = "red";
	}
    }
    radius += growing
    console.log("radius is: " + radius);
}
var start = function() {
    console.log("started");
    run();
}
startbutton.addEventListener('click', start);
