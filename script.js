// Grafik için gerekli değişkenleri tanımlıyoruz
var canvas = document.getElementById("graph");
var context = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var zero = height / 2;

// Grafik için temel ayarları yapıyoruz
context.lineWidth = 2;
context.strokeStyle = "#000";
context.moveTo(0, zero);
context.lineTo(width, zero);
context.stroke();

// İşlevsellik için gerekli değişkenleri tanımlıyoruz
var goodButton = document.getElementById("good-button");
var badButton = document.getElementById("bad-button");
var goodColor = "green";
var badColor = "red";
var goodData = [];
var badData = [];

// Butonlara tıklanınca veri ekliyoruz ve grafikleri çizdiriyoruz
goodButton.addEventListener("click", function() {
  goodData.push(Math.random() * height / 2);
  drawGraph();
});

badButton.addEventListener("click", function() {
  badData.push(Math.random() * height / 2 * -1);
  drawGraph();
});

// Grafikleri çizdiriyoruz
function drawGraph() {
  context.clearRect(0, 0, width, height);
  context.lineWidth = 2;

  // Good verileri için grafik çizdiriyoruz
  context.beginPath();
  context.strokeStyle = goodColor;
  context.moveTo(0, zero);
  for (var i = 0; i < goodData.length; i++) {
    context.lineTo(i * (width / (goodData.length - 1)), zero - goodData[i]);
  }
  context.stroke();

  // Bad verileri için grafik çizdiriyoruz
  context.beginPath();
  context.strokeStyle = badColor;
  context.moveTo(0, zero);
  for (var i = 0; i < badData.length; i++) {
    context.lineTo(i * (width / (badData.length - 1)), zero - badData[i]);
  }
  context.stroke();
}
