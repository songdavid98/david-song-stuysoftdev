//JAVASCRIPT
console.log("hello david");
var info = [["alabama", 50], ["alaska", 28], ["arizona", 58], ["arkansas", 40], ["california", 172], ["colorado", 37], ["connecticut", 28], ["delaware", 16], ["florida", 99], ["georgia", 76], ["hawaii", 19], ["idaho", 32], ["illinois", 69], ["indiana", 57], ["iowa", 30], ["kansas", 40], ["kentucky", 45], ["louisiana", 46], ["maine", 23], ["maryland", 38], ["massachusetts", 42], ["michigan", 59], ["minnesota", 38], ["mississippi", 39], ["missouri", 52], ["montana", 27], ["nebraska", 36], ["nevada", 30], ["new hampshire", 23], ["new jersey", 51], ["new mexico", 24], ["new york", 95], ["north carolina", 72], ["north dakota", 28], ["ohio", 66], ["oklahoma", 43], ["oregon", 28], ["pennsylvania", 71], ["rhode island", 19], ["south carolina", 50], ["south dakota", 29], ["tennessee", 58], ["texas", 155], ["utah", 40], ["vermont", 16], ["virginia", 49], ["washington", 44], ["west virginia", 34], ["wisconsin", 42], ["wyoming", 29]];

var republican = [["alabama", 50], ["alaska", 28], ["arizona", 58], ["arkansas", 40], ["california", 172], ["colorado", 37], ["connecticut", 28], ["delaware", 16], ["florida", 99], ["georgia", 76], ["hawaii", 19], ["idaho", 32], ["illinois", 69], ["indiana", 57], ["iowa", 30], ["kansas", 40], ["kentucky", 45], ["louisiana", 46], ["maine", 23], ["maryland", 38], ["massachusetts", 42], ["michigan", 59], ["minnesota", 38], ["mississippi", 39], ["missouri", 52], ["montana", 27], ["nebraska", 36], ["nevada", 30], ["new hampshire", 23], ["new jersey", 51], ["new mexico", 24], ["new york", 95], ["north carolina", 72], ["north dakota", 28], ["ohio", 66], ["oklahoma", 43], ["oregon", 28], ["pennsylvania", 71], ["rhode island", 19], ["south carolina", 50], ["south dakota", 29], ["tennessee", 58], ["texas", 155], ["utah", 40], ["vermont", 16], ["virginia", 49], ["washington", 44], ["west virginia", 34], ["wisconsin", 42], ["wyoming", 29]];

var democrat = [["alabama", 58], ["alaska", 18], ["arizona", 75], ["arkansas", 37], ["california", 476], ["colorado", 77], ["connecticut", 65], ["delaware", 27], ["florida", 238], ["georgia", 112], ["hawaii", 31], ["idaho", 24], ["illinois", 190], ["indiana", 79], ["iowa", 54], ["kansas", 37], ["kentucky", 53], ["louisiana", 61], ["maine", 30], ["maryland", 105], ["massachusetts", 121], ["michigan", 152], ["minnesota", 94], ["mississippi", 41], ["missouri", 88], ["montana", 22], ["nebraska", 31], ["nevada", 39], ["new hampshire", 32], ["new jersey", 126], ["new mexico", 38], ["new york", 277], ["north carolina", 120], ["north dakota", 19], ["ohio", 165], ["oklahoma", 42], ["oregon", 64], ["pennsylvania", 181], ["rhode island", 31], ["south carolina", 57], ["south dakota", 20], ["tennessee", 77], ["texas", 237], ["utah", 28], ["vermont", 23], ["virginia", 112], ["washington", 102], ["west virginia", 35], ["wisconsin", 89], ["wyoming", 17]];


var repub = true;

var showChart = function() {
    console.log("showChart");
    d3.select(".chart")
	.selectAll("div")
	.data(info)
	.enter().append("div")
	.transition()
	.duration(750)
	.style("background-color", "pink")
	.style("width", function(d) { return sc(d[1]) + "px"; })
	.text(function(d) { return d[0] + ": " + d[1]; });
};

var switchParty = function () {
    console.log("switchparty");

    
    if (repub == true) {
	repub = false;
	info = democrat;
    }
    else {
	repub = true;
	info = republican;
    }
    showChart();
};
var buttonswitch = document.getElementById("switch");
buttonswitch.addEventListener("click", switchParty);

var sc = d3.scale.linear()
    .domain( [0, 50] )
    .range( [0, 172] );

showChart();
