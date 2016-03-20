//JAVASCRIPT

var info = [["alabama", 50], ["alaska", 28], ["arizona", 58], ["arkansas", 40], ["california", 172], ["colorado", 37], ["connecticut", 28], ["delaware", 16], ["florida", 99], ["georgia", 76], ["hawaii", 19], ["idaho", 32], ["illinois", 69], ["indiana", 57], ["iowa", 30], ["kansas", 40], ["kentucky", 45], ["louisiana", 46], ["maine", 23], ["maryland", 38], ["massachusetts", 42], ["michigan", 59], ["minnesota", 38], ["mississippi", 39], ["missouri", 52], ["montana", 27], ["nebraska", 36], ["nevada", 30], ["new hampshire", 23], ["new jersey", 51], ["new mexico", 24], ["new york", 95], ["north carolina", 72], ["north dakota", 28], ["ohio", 66], ["oklahoma", 43], ["oregon", 28], ["pennsylvania", 71], ["rhode island", 19], ["south carolina", 50], ["south dakota", 29], ["tennessee", 58], ["texas", 155], ["utah", 40], ["vermont", 16], ["virginia", 49], ["washington", 44], ["west virginia", 34], ["wisconsin", 42], ["wyoming", 29]];

d3.select(".chart")
  .selectAll("div")
    .data(info)
    .enter().append("div")
    .style("background-color", "pink")
    .style("width", function(d) { return d[1] * 10 + "px"; })
    .text(function(d) { return d[0] + ": " + d[1]; });
