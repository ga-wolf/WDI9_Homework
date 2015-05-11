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



var infiniLoop = function() {
  walkincat.setAttribute('width', walkincat.width+1);
  var walkleft = parseInt(walkincat.style.left);
  var backFor = 1;
  //walking forward
  if ( (walkleft < window.innerWidth) && (backFor % 2 !== 0) ) {
    walkincat.style.left = walkleft + 2 + 'px';
  //walking back
  } else if ( (walkleft > -301) && (backFor % 2 === 0) ) {
    walkincat.style.left = walkleft - 2 + 'px';
  //reset on right
  } else if (walkleft === window.innerWidth) {
    walkincat.setAttribute('width', 296);
    walkincat.setAttribute('src',"file:///Users/werd119/Homework/WDI9_Homework/drew_showalter/week_02/wednesday/images/cat-walk-back.gif");
    walkincat.style.left = walkleft + 2 + 'px';
    console.log('turnin back to the left')
    backFor++
  //reset on left
  } else if (walkleft === -301) {
    walkincat.setAttribute('width', 296);
    walkincat.setAttribute('src',"file:///Users/werd119/Homework/WDI9_Homework/drew_showalter/week_02/wednesday/images/cat-walk.gif");
    walkincat.style.left = walkleft - 2 + 'px';
    console.log('turnin back to the right');
    backFor++
  }

  var walkwing = parseInt(wingmen[0].style.left);
  if (walkwing < 1000) {
    wingmen[0].style.left = walklead + 2 + 'px';
    wingmen[1].style.left = walklead + 2 + 'px';
  }

  var walklead = parseInt(leadcat.style.left);
  if (walklead < 900) {
    leadcat.style.left = walklead + 3 + 'px';
  }


    
  console.log(walkleft)
}


//window.setInterval(infiniLoop, 16);




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