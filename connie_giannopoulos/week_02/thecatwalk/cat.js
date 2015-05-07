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

var catWalk = function() {
  var oldPos = parseInt(img.style.left, 10);
  var newPos = (oldPos + 10).toString();
  img.style.left = newPos + 'px';
};

setInterval(catWalk, 120);

// Made the kitty walk a little slower, now kitty has a bounce in its step. GANGSTA.



