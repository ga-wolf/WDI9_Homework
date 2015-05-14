var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '-250px';
var catWalk = function() {
  var initialPosition = parseInt(img.style.left); //the start position of the cat
  var newPosition = initialPosition + 1; //how much the cat moves
  img.style.left = newPosition + 'px';


//when the cat walks off the screen this returns it to its original position
if (newPosition > window.innerWidth){
          img.style.left = '-250px';
}
};
window.setInterval(catWalk, 20); //speed
