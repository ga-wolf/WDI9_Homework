
/***********************************************

  Grab all the different elements on the page

***********************************************/

var cat = document.getElementById("catPic");
var body = document.getElementsByTagName("body")[0];
var wrap = document.getElementById("wrapper");
var cDrop = document.getElementById("curtain-drop");
var cLeft = document.getElementById("curtain-left");
var cRight = document.getElementById("curtain-right");
var stage = document.getElementById("stage");
var disco = document.getElementById("disco-ball");

var partySong = document.getElementById('partySong');

var crowd = document.getElementById('crowd');
var paw1 = document.getElementById('paw1');
var paw2 = document.getElementById('paw2');
var paw3 = document.getElementById('paw3');
var paw4 = document.getElementById('paw4');
var paw5 = document.getElementById('paw5');
var paw6 = document.getElementById('paw6');



/***********************************************

  Make the cat walk across the page

***********************************************/

// Set the starting position and direction of the cat
cat.style.left = '0px';
var direction = "right";

// 
var catWalk = function () {
  
  // Decide the amount the image moves depending on the direction
  var displacement = (direction === "right") ? 5 : -5;

  // Calculate the new value for the image's LEFT style
  var currentLeft = parseInt(cat.style.left);
  var newLeft = currentLeft + displacement;
  cat.style.left = newLeft + 'px';
  
  // Make the cat dance at the halfway point
  // The maths makes sure the halfway point is a multiple of the displacement
  //    so that the condition can be met
  var halfway = Math.ceil(((window.innerWidth/2)-(cat.width/2))/displacement)*displacement;
  if(currentLeft === halfway) {
    window.clearInterval(timer);
    catDance();
  }

  // Turn the cat around at right edge of the screen
  if(currentLeft > window.innerWidth) {
    window.clearInterval(timer);                    // Stop the current animation
    direction = "left";                             // Set the direction
    cat.className = "left-cat";                     // Change the image orientation
    timer = window.setInterval(catWalkRight, 40);   // Start the new animation
  }

  // Turn the cat around at left edge of the screen
  if(currentLeft < 0-cat.width) {
    window.clearInterval(timer);                    // Stop the current animation
    direction = "right";                            // Set the direction
    cat.className = "right-cat";                    // Change the image orientation
    timer = window.setInterval(catWalk, 40);        // Start the new animation
  }
};



/*************************************************

██████╗  █████╗ ██████╗ ████████╗██╗   ██╗██╗██╗
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝╚██╗ ██╔╝██║██║
██████╔╝███████║██████╔╝   ██║    ╚████╔╝ ██║██║
██╔═══╝ ██╔══██║██╔══██╗   ██║     ╚██╔╝  ╚═╝╚═╝
██║     ██║  ██║██║  ██║   ██║      ██║   ██╗██╗
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚═╝╚═╝
                                                

████████╗██╗███╗   ███╗███████╗██╗██╗
╚══██╔══╝██║████╗ ████║██╔════╝██║██║
   ██║   ██║██╔████╔██║█████╗  ██║██║
   ██║   ██║██║╚██╔╝██║██╔══╝  ╚═╝╚═╝
   ██║   ██║██║ ╚═╝ ██║███████╗██╗██╗
   ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝╚═╝╚═╝
                                     
*************************************************/

// Control the timings for the dancing cat scene
var catDance = function() {
  setStage();
  window.clearInterval(timer);
  window.setTimeout(makeDancingCat, 1000);
  window.setTimeout(openCurtains, 1000);  
  window.setTimeout(startDiscoBall, 1500);
  window.setTimeout(startCrowd, 2500);
  window.setTimeout(endDiscoBall, 9000);
  window.setTimeout(closeCurtains, 9000);
  window.setTimeout(removeStage, 10000);
  window.setTimeout(keepWalking, 10000); 
};

// Move the curtains and stage onto the screen
var setStage = function() {
  cDrop.style.top = "0px";
  cLeft.style.top = "0px";
  cRight.style.top = "0px";
  stage.style.opacity = "1";
};

// Change the cat image to the dancing cat
var makeDancingCat = function() {
  cat.src = "images/dancing-cat.gif";
};

// Slide the curtains apart
var openCurtains = function() {
  cLeft.style.left = "-600px";
  cRight.style.right = "-600px";
  wrap.style.border = "2px solid #323232";
};

// Make the disco ball appear, start the lights & music
var startDiscoBall = function() {
  disco.style.opacity = "1";
  timer = window.setInterval(discoLights, 200);
  partySong.play();
};

// Create a random HEX colour and change the wrapper background-color
var discoLights = function () {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  wrap.style.backgroundColor = color;
};

// Slide the crowd div onto the screen
var startCrowd = function() {
  crowd.style.bottom = "0px";
};

// Make the disco ball disapear
// Stop the background-color change by stopping the timer
var endDiscoBall = function() {
  disco.style.opacity = "0";
  window.clearInterval(timer);
};

// Slide the curtains back onto the screen
var closeCurtains = function() {
  cLeft.style.left = "0px";
  cRight.style.right = "0px";
};

// Make the stage, curtains & crowd disapear
// Set the background-color to the body's colour
// Pause the music 
var removeStage = function() {
  cDrop.style.top = "-900px";
  cLeft.style.top = "-900px";
  cRight.style.top = "-900px";
  stage.style.opacity = "0";
  crowd.style.bottom = "-400px";
  wrap.style.backgroundColor = body.style.backgroundColor;
  wrap.style.border = "none";
  partySong.pause();
};

// Reset the cat image and start it walking again
var keepWalking = function() {
  cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  timer = window.setInterval(catWalk, 40);
};



/***********************************************

  Control the waving hands:

  2 timers are used so that the pairs of paws move at different times

  - A setInterval calls the 1st transformation function
  - That function calls a single instance of the 2nd transformation
    function to move the paws the oposite direction
  - The paws wave continuosly and the containing div is slid
    up and down the page to make them appear/disapear

***********************************************/

var wave1_1 = function() {
  paw1.style.transform = "rotate(20deg)";
  paw2.style.transform = "rotate(-20deg)";
  paw5.style.transform = "rotate(20deg)";
  paw6.style.transform = "rotate(-20deg)";
  
  window.setTimeout(wave1_2, 500);
};

var wave1_2 = function() {
  paw1.style.transform = "rotate(-20deg)";
  paw2.style.transform = "rotate(20deg)";
  paw5.style.transform = "rotate(-20deg)";
  paw6.style.transform = "rotate(20deg)";
};

var wave2_1 = function() {
  paw3.style.transform = "rotate(-30deg)";
  paw4.style.transform = "rotate(15deg)";

  window.setTimeout(wave2_2, 400);
};

var wave2_2 = function() {
  paw3.style.transform = "rotate(30deg)";
  paw4.style.transform = "rotate(-15deg)";
};



/***********************************************

  Start the animation:

***********************************************/

// clear the screen of all the stage elements
removeStage();

// start the cat walking
var timer = window.setInterval(catWalk, 40);

// start the 2 waving paw actions
var timer1 = window.setInterval(wave1_1, 1000);
var timer2 = window.setInterval(wave2_1, 850);










