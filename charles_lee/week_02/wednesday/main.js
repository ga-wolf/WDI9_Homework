var bossCat = document.getElementById("cat-walk");
bossCat.style.left = 0;
var catPos = parseInt(bossCat.style.left);
var counter = 0;
var speak = document.getElementById('catspeak');
bossCat.style.position = "absolute";
function walkFwdBossCat() {
  counter += 10;
  bossCat.style.left = counter + "px";
  
  if (counter > window.innerWidth) {
    bossCat.style.transform = "scaleX(-1)";
    window.clearInterval(fwdcat);
    speak.innerHTML+="You're a racist!"
    bTimer();
    
  }
}

function walkBackBossCat() {

  counter -= 10;
  bossCat.style.left = counter + "px";
  if (counter <= 0) {
    bossCat.style.transform = "scaleX(1)";
    window.clearInterval(backcat);
    speak.innerHTML+="You're a racist!"
    fTimer();
  }
}


var fwdcat;
var backcat;

function fTimer(){
	fwdcat = window.setInterval(walkFwdBossCat, 5);
}
function bTimer(){
	backcat = window.setInterval(walkBackBossCat, 5);
}

fTimer();