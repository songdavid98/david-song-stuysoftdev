//JAVASCRIPT

var info = [[1, "iowa"], [2, "new hampshire"], [3, "south carolina"]];

d3.select(".chart")
  .selectAll("div")
    .data(info)
    .enter().append("div")
    .style("background-color", "pink")
    .style("width", function(d) { return d[0] * 10 + "px"; })
    .text(function(d) { return d[1] + ": " + d[0]; });
