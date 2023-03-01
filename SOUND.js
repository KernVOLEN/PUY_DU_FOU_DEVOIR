
var G21 = document.getElementById("G21");
function eagle(){
  var audio = new Audio("SON/AIGLE.mp3");
  audio.play();
}
G21.addEventListener("mousedown", eagle);

var ROMA = document.getElementById("G22");
function VICTIS(){
  var audio = new Audio("SON/ROME.mp3");
  audio.play();
}
ROMA.addEventListener("mousedown", VICTIS);

var mou = document.getElementById("D21");
function bullet(){
  var audio = new Audio("SON/BULLET.mp3");
  audio.play();
}
mou.addEventListener("mousedown", bullet);

var BOUM = document.getElementById("D22");
function war(){
  var audio = new Audio("SON/BOMB.mp3");
  audio.play();
}
BOUM.addEventListener("mousedown", war);
