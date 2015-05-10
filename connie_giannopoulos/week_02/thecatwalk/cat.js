console.log('helllloooookitty');

/*
Create a new Javascript file and link to it with a script tag at the bottom.
Create a variable to store a reference to the img.
Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
*/

// Cat moving from left to right. FOREVER.

var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';

var catWalkLeft = function() {
  var oldPos = parseInt(img.style.left);
  var newPos = (oldPos + 10).toString();
  img.style.left = newPos + 'px';

  if (parseInt(img.style.left) >= ((window.innerWidth - 296) / 2)) {
    window.clearInterval(catTimeLeft);
    img.src = 'https://media0.giphy.com/media/67j0Iy0UzvBG8/200.gif';
    danceTimer();
  } 
};

var catWalkLeft2 = function() {
  var oldPos = parseInt(img.style.left);
  var newPos = (oldPos + 10).toString();
  img.style.left = newPos + 'px';

  if (parseInt(img.style.left) >= (window.innerWidth - 296)) {
    window.clearInterval(catTimeLeft2);
    img.style.transform = 'scale(-1,1)';
    cTimeRight();
  } 
};


var catWalkRight = function() {
  var oldPos = parseInt(img.style.left);
  var newPos = (oldPos - 10).toString();
  img.style.left = newPos + 'px';

  if (parseInt(img.style.left) <= 0) {
    window.clearInterval(catTimeRight);
    img.style.transform = 'scale(1,1)';

    cTimeLeft();
  } 
};

var catTimeLeft;
var catTimeLeft2;
var catTimeRight;
var kittyDance;

var cTimeLeft = function() {
  catTimeLeft = setInterval(catWalkLeft, 80);
};

var danceTimer = function() {
  kittyDance = setTimeout(cTimeLeft2 ,6000);
};

var cTimeLeft2 = function() {
  img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
  catTimeLeft2 = setInterval(catWalkLeft2, 120);
};

var cTimeRight = function() {
  catTimeRight = setInterval(catWalkRight, 120);
};


cTimeLeft();












