
var cat = document.getElementById("catPic");
cat.style.left = '0px';
var direction = "right";

// Decide which way the cat is going
var controller = function() {
  window.clearInterval(timer);
  cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";

  if(direction === "right") {
    cat.className = "right-cat";
    timer = window.setInterval(catWalkRight, 40);
  } else {
    cat.className = "left-cat";
    timer = window.setInterval(catWalkLeft, 40);
  }
}

// Set the cat walking to the right
var catWalkRight = function () {
  
  var currentLeft = parseInt(cat.style.left);
  var newLeft = currentLeft + 5;
  cat.style.left = newLeft + 'px';
  
  // Dance at the halfway point
  var half = (parseInt(window.innerWidth) / 2 );
  if(currentLeft === half) {
    catDance();
  }

  // Turn the cat around
  if(currentLeft > window.innerWidth) {
    direction = "left";
    controller();
  } //
}


// Set the cat walking to the left
var catWalkLeft = function () {
  
  var currentLeft = parseInt(cat.style.left);
  var newLeft = currentLeft - 5;
  cat.style.left = newLeft + 'px';
  
  // Dance at the halfway point
  var half = window.innerWidth / 2;
  if(currentLeft === half) {
    catDance();
  }

  // Turn the cat around
  if(currentLeft < 0-cat.width) {
    direction = "right";
    controller();
  }
}


// Make the cat dance
var catDance = function () {

  // Change the cat image
  window.clearInterval(timer);
  cat.src = "images/dancing-cat.gif";

  // Decide where to go next
  window.setTimeout(controller, 10000); 
}


var timer = window.setInterval(catWalkRight, 40);










