var catImage = document.getElementById('catimage');

catImage.style.left = '0px';

var catWalkLeft1 = function() {
  var oldLeft = parseInt(catImage.style.left);
  var newLeft = oldLeft + 10;
  catImage.style.left = newLeft + 'px';
  if (parseInt(catImage.style.left) >= ((window.innerWidth - 296) / 2)) {
    window.clearInterval(leftTimer);
    catImage.src = 'http://media.giphy.com/media/mKB2CVnHchGhy/giphy.gif';
    dTimer();
  }
}

var catDance = function() {
  lTimer2();
}

var catWalkLeft2 = function() {
  window.clearInterval(danceTimer);
  var oldLeft = parseInt(catImage.style.left);
  var newLeft = oldLeft + 10;
  catImage.style.left = newLeft + 'px';
  if (parseInt(catImage.style.left) >= (window.innerWidth - 296)) {
    window.clearInterval(leftTimer2);
    catImage.style.transform = 'scale(-1,1)';
    rTimer();
  }
}


var catWalkRight = function() {
  var oldRight = parseInt(catImage.style.left);
  var newRight = oldRight - 10;
  catImage.style.left = newRight + 'px';
  if (parseInt(catImage.style.left) <= 0) {
    window.clearInterval(rightTimer);
    catImage.style.transform = 'scale(1,1)';
    lTimer();
  }
}

var leftTimer;
var leftTimer2;
var rightTimer;
var danceTimer;

var lTimer = function() {
  leftTimer = window.setInterval(catWalkLeft1, 40);
}

var lTimer2 = function() {
  catImage.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  leftTimer2 = window.setInterval(catWalkLeft2, 40)
}

var rTimer = function() {
  rightTimer = window.setInterval(catWalkRight, 40);
}

var dTimer = function() {
  danceTimer = window.setTimeout(catDance, 3000);
}

lTimer();
