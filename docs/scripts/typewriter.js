var i = 0;
var text = 'Pythogon Hub'
var speed = 100

function typewriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += text.charAt(i);
    i++;
    setTimeout(typewriter, speed);
  }
}
