//JAVASCRIPT

var info = [1, 2, 3];

d3.select(".chart")
  .selectAll("div")
    .data(info)
    .enter().append("div")
    .style("background-color", "pink")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });
