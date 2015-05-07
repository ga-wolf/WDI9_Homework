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
// Add a script tag at the bottom of the page, where you'll put all your code.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah! 

var img = document.getElementsByTagName('img')[0];

img.style.position = 'absolute';
img.style.left = '-170px';

var catWalk = function (){
  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + 10;
  img.style.left = newLeft + 'px';
  if (newLeft > 1300)  {
    img.style.left = '-170px';
  }
}

setInterval(catWalk, 400);
