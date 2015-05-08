var blackCat = document.getElementById("walkingCat")
var percent = 0
var timer = null;
var walkRight;
var walkLeft;

var walkR = function() {
  walkRight = setInterval(function() {
    percent++;
    blackCat.style.left = percent + "%";
    console.log(percent)
    if (percent === 70) {
      clearInterval(walkRight);
      blackCat.style.transform = "scale(-1,1)"
      walkLeft = setInterval(function() {
        percent--;
        blackCat.style.left = percent + "%";
        console.log(percent)
        if (percent === 0) {
          clearInterval(walkLeft);
          blackCat.style.transform = "scale(1,1)"
          walkR();
        }
      }, 100)
    }
  }, 100)
}

var dance = function() {
  blackCat.src = "http://www.netanimations.net/animatedkitten-15.gif";
  blackCat.style.length = "296px";
  blackCat.style.height = "296px";
}

var explode = function() {
  blackCat.src = "http://rs517.pbsrc.com/albums/u333/PhotoPun/explosion.gif~c200"
  blackCat.style.length = "296px"
  blackCat.style.height = "296px"
  document.getElementById('boom').play();
}

var countD;


var countdownTimer = function() {
  var ct = document.getElementById('count')
  ct.innerHTML = 5;
  
  countD = setInterval(function(){
    if (ct.innerHTML == 0)
      { clearInterval(countD) 
        explode();
      }
    else {
    ct.innerHTML-= 1}
    },1000
  )
}







var cancelTimer = function () {
  var ct = document.getElementById('count')
  ct.innerHTML = 5
  console.log("mouse out")
  clearInterval(countD);
  clearTimeout(explode);
}





var walk = function() {
  blackCat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  blackCat.style.length = "296px";
  blackCat.style.height = "296px";
}

var startAnimation = function() {
  walkR();
}

function stopAnimation() {
  clearInterval(walkRight);
  clearInterval(walkLeft);
}






blackCat.addEventListener("mouseover", countdownTimer);
blackCat.addEventListener("mouseover", dance);
blackCat.addEventListener("mouseout", walk);
blackCat.addEventListener("mouseout", cancelTimer);
blackCat.addEventListener("click", explode);
blackCat.addEventListener("click", boomSound);
  // function init() {
  //   balls = document.getElementById('ball-container').getElementsByTagName('img');
  //   for (var i=balls.length; i--;) {
  //     initBall(balls[i]);
  //   }
  //   getWindowCoords();
  //   startAnimation();
  //   document.onmousedown = mouseDown;
  // }

// getWindowCoords = (navigator.userAgent.toLowerCase().indexOf('opera')>0||navigator.appVersion.toLowerCase().indexOf('safari')!=-1)?function() {
//   canvasX = window.innerWidth;
//   canvasY = window.innerHeight;
// }:function() {
//   canvasX = document.documentElement.clientWidth||document.body.clientWidth||document.body.scrollWidth;
//   canvasY = document.documentElement.clientHeight||document.body.clientHeight||document.body.scrollHeight;
// }

// window.onresize = getWindowCoords;
// window.onload = init;

// // ]]>


// // The Cat Walk

// // Who needs Milan when you have JavaScript?

// // Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

// // Create a new Javascript file and link to it with a script tag at the bottom.
// // Create a variable to store a reference to the img.
// // Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// // Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// // Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// // Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// // Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// // Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
