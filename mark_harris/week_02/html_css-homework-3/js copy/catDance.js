
// Grab the elements on the page
var cat = document.getElementById("catPic");
var body = document.getElementsByTagName("body")[0];
var wrap = document.getElementById("wrapper");
var cDrop = document.getElementById("curtain-drop");
var cLeft = document.getElementById("curtain-left");
var cRight = document.getElementById("curtain-right");
var stage = document.getElementById("bottom");
var disco = document.getElementById("disco-ball");
var partySong = document.getElementById('partySong');

cat.style.left = '0px';
var direction = "right";

// Set the cat walking to the right
var catWalkRight = function () {
  
  var displacement = (direction === "right") ? 5 : -5;
  var currentLeft = parseInt(cat.style.left);
  var newLeft = currentLeft + displacement;
  cat.style.left = newLeft + 'px';
  
  // Dance at the halfway point
  var halfway = Math.ceil(((window.innerWidth/2)-148)/displacement)*displacement;
  if(currentLeft === halfway) {
    window.clearInterval(timer);
    catDance();
  }

  // Turn the cat around at right edge
  if(currentLeft > window.innerWidth) {
    window.clearInterval(timer);
    direction = "left";
    cat.className = "left-cat";
    timer = window.setInterval(catWalkRight, 40);
  }

  // Turn the cat around at left edge
  if(currentLeft < 0-cat.width) {
    window.clearInterval(timer);
    direction = "right";
    cat.className = "right-cat";
    timer = window.setInterval(catWalkRight, 40);
  }
}


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



// Make the dancing cat scene
var catDance = function() {
  setStage();
  window.clearInterval(timer);
  window.setTimeout(makeDancingCat, 1000);
  window.setTimeout(openCurtains, 1000);  
  window.setTimeout(startParty, 1500);
  window.setTimeout(endParty, 9000);
  window.setTimeout(closeCurtains, 9000);
  window.setTimeout(removeStage, 10000);
  window.setTimeout(keepWalking, 10000); 
}

var keepWalking = function() {
  cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  timer = window.setInterval(catWalkRight, 40);
}

var makeDancingCat = function() {
  cat.src = "images/dancing-cat.gif";
}

var openCurtains = function() {
  cLeft.style.left = "-600px";
  cRight.style.right = "-600px";
  wrap.style.border = "2px solid #323232";
};

var closeCurtains = function() {
  cLeft.style.left = "0px";
  cRight.style.right = "0px";
};

var startParty = function() {
  disco.style.opacity = "1";
  timer = window.setInterval(discoLights, 200);
  partySong.play();
};

var discoLights = function () {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  wrap.style.backgroundColor = color;
}

var endParty = function() {
  disco.style.opacity = "0";
  window.clearInterval(timer);
};

var setStage = function() {
  cDrop.style.top = "0px";
  stage.style.opacity = "1";
  cLeft.style.top = "0px";
  cRight.style.top = "0px";
};

var removeStage = function() {
  cDrop.style.top = "-900px";
  stage.style.opacity = "0";
  cLeft.style.top = "-900px";
  cRight.style.top = "-900px";
  wrap.style.backgroundColor = body.style.backgroundColor;
  wrap.style.border = "none";
  partySong.pause();
};


removeStage();
var timer = window.setInterval(catWalkRight, 40);










