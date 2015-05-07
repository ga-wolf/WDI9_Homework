console.log('howdy yall!')

var walkincat = document.getElementById('walkincat');
walkincat.style.left = '-300px';
var wingmen = document.getElementsByClassName('wingman');
wingmen[0].style.left = '-1800px';
wingmen[1].style.left = '-1800px';
wingmen[1].style.top = '400px';
wingmen[0].style.top = '0px';
wingmen[0].style.width = '50%';
wingmen[1].style.width = '50%';
var leadcat = document.getElementById('leadcat');
leadcat.style.left = '-1900px';
leadcat.style.top = '200px';
leadcat.style.width = '55%'

var oddEven = 2;

var walker = function () {
  var walkleft = parseInt(walkincat.style.left);
  walkincat.setAttribute('width', walkincat.width+1);


  var walkFore = function (walkleft) {
  //walking back
    walkincat.style.left = walkleft + 2 + 'px';
  }
    
  //reset on right
  var walkForeSet = function (walkleft) {
    walkincat.setAttribute('width', 296);
    walkincat.style.transform = "scaleX(-1)";
    oddEven += 1;
  }
  
  //walking forward
  var walkAft = function (walkleft) {
    walkincat.style.left = walkleft - 4 + 'px';
  }

  
  var walkAftSet = function (walkleft) {
    //reset on left
    walkincat.setAttribute('width', 296);
    walkincat.style.transform = "scaleX(1)";
    oddEven += 1;
    walkincat.style.left = -296 + 'px';
    return walkleft
  }

  if ( (walkleft < window.innerWidth) && ((oddEven % 2) === 0) ) {
    walkFore(walkleft);
  } else if ( (walkleft >= window.innerWidth) && ((oddEven % 2) === 0) ) {
    walkForeSet(walkleft);
  } else if ( (walkleft > -1000) && ((oddEven % 2) !== 0) ) {
    walkAft(walkleft);
  } else if ( (walkleft <= window.innerWidth) && ((oddEven % 2) !== 0) ){
    walkAftSet(walkleft);
  }

  var walkwing = parseInt(wingmen[0].style.left);
  if (walkwing < 500) {
    wingmen[0].style.left = walklead + 2 + 'px';
    wingmen[1].style.left = walklead + 2 + 'px';
  }

  var walklead = parseInt(leadcat.style.left);
  if (walklead < 400) {
    leadcat.style.left = walklead + 3 + 'px';
  }
}



window.setInterval(walker, 16);




// Exercises: Animation
// The Cat Walk

// Who needs Milan when you have JavaScript?

// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>

//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">

//  </body>
// </html>
// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.