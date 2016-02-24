console.log("hello");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var startbutton = document.getElementById("start");
var radius = 1;
var growing = 1;

var run = function(e) {
    context.clearRect(0, 0, canvas.width, canvas.height);    //it doesn't clear?
    console.log("clear");                 //this works
    context.clearRect(0, 0, 500, 500);    //why?
    
    drawCircle();
    window.requestAnimationFrame(run);
}

var drawCircle = function(e) {
    context.clearRect(0, 0, 500, 500);     //still gets ignored
    context.beginPath();
    context.arc(250, 250, radius, 0, 2 * Math.PI);
    context.fill();
    
    if (radius >= 250 || radius <= 0)  {
	growing *= -1;
	if (radius >= 250) {              //this
	    context.fillStyle = "blue";   //only
	}                                 //changes
	else {                            //the
	    context.fillStyle = "red";    //color, for testing
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
