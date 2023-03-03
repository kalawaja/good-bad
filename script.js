// We define the necessary variables for the graph
var canvas = document.getElementById("graph");
var context = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var zero = height / 2;

// We make basic settings for the chart
context.lineWidth = 2;
context.strokeStyle = "#000";
context.moveTo(0, zero);
context.lineTo(width, zero);
context.stroke();

// We define the necessary variables for functionality
var goodButton = document.getElementById("good-button");
var badButton = document.getElementById("bad-button");
var goodColor = "green";
var badColor = "red";
var goodData = [];
var badData = [];

// When the buttons are clicked, we add data and draw the graphs
goodButton.addEventListener("click", function() {
  goodData.push(Math.random() * height / 2);
  drawGraph();
});

badButton.addEventListener("click", function() {
  badData.push(Math.random() * height / 2 * -1);
  drawGraph();
});

// Drawing the graphs
function drawGraph() {
  context.clearRect(0, 0, width, height);
  context.lineWidth = 2;

// Drawing a graph for "Good" data
  context.beginPath();
  context.strokeStyle = goodColor;
  context.moveTo(0, zero);
  for (var i = 0; i < goodData.length; i++) {
    context.lineTo(i * (width / (goodData.length - 1)), zero - goodData[i]);
  }
  context.stroke();

// Drawing a graph for "Bad" data
  context.beginPath();
  context.strokeStyle = badColor;
  context.moveTo(0, zero);
  for (var i = 0; i < badData.length; i++) {
    context.lineTo(i * (width / (badData.length - 1)), zero - badData[i]);
  }
  context.stroke();
}
