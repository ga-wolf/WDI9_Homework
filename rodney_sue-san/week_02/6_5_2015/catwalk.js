var cat1 = document.getElementById('cat1');
var superman = document.getElementById('superman');
var backTrees = document.getElementById('backGroundTrees');
var ball = document.getElementById('ball');
var lights = document.getElementById('discoLights');
var danceCrew = document.getElementById('danceCrew');
var mouseRain = document.getElementById('mouseRain');
var walkLeft;         //set interval
var walkRight;        //set interval
var danceCat;         //set interval
var smoker;           //set interval
var directionR = true;
var oldImg = cat1.src;
var newImg = "http://vignette2.wikia.nocookie.net/uncyclopedia/images/2/21/Dance_cat.gif";
var count = 0;
var smokeCount = 0;
var ballMove = 0;

var audioBg = new Audio('http://www.global-journey.com/MP3-Samples/Free-25/Tinkerbells-Dance.mp3');
audioBg.play();


var audio = new Audio('http://remix.freakonomix.com/remixes/1209/IAINTAFRAIDOFNOGHOST.mp3');
audio.muted = true;
audio.play(); //play audio but is muted. Dont want to play from start
catFactory(); //creates my 4 dancing cats


danceCrew.style.visibility = "hidden"; //hides my 4 dancing cats


for (var i = 0; i < 90; i++) {
  var puff = document.createElement("i"); //adding back ground trees
  puff.className = "fa fa-tree tree4";
  backTrees.appendChild(puff);
}


cat1.style.position = 'absolute';
cat1.style.top = "20px";
cat1.style.left = "0px";
cat1.style.width = '10px';
cat1.style.height = '10px';



//---------------------------------------------walk right start------------------------------

var catwalk = function() {
  var oldSize = parseFloat(cat1.style.width);
  var newSize = oldSize + 1;

  var oldTop = parseFloat(cat1.style.top);
  var newTop = oldTop + 0.1;

  var oldLeft = parseFloat(cat1.style.left);

  var oldRight = parseFloat(cat1.style.right);

  //to do add a boolean variable for the other && check

  if (oldLeft > (window.innerWidth / 2) && oldLeft < (window.innerWidth / 2) + 5) { //dance yet?
    directionR = true;
    clearInterval(walkRight);
    danceTime();

  }

  if (oldLeft > 210) {
    var newLeft = oldLeft + (5);
  } else if (oldLeft > 80) {        //walking speed increases as he gets bigger
    var newLeft = oldLeft + (3);
  } else {
    var newLeft = oldLeft + (1.5);
  }


  if (oldLeft < window.innerWidth) {       //keep walking until past end of screen
    cat1.style.width = newSize + 'px';
    cat1.style.height = newSize + 'px';
    cat1.style.top = newTop + 'px';
    cat1.style.left = newLeft + 'px';
  } else {
    clearInterval(walkRight);                 //stops walking right
    cat1.className = "";
    cat1.className = "turnLeft";              //cat pic flipped by adding css class
    walkLeft = setInterval(catwalkOp, 100);   //start walking left
  }


};
//----------------------------------------walk right end--------------------------------------




//---------------------------------------walk left start-------------------------------------

var catwalkOp = function() {                      
  var oldSize = parseFloat(cat1.style.width);
  var newSize = oldSize - 1;

  var oldTop = parseFloat(cat1.style.top);
  var newTop = oldTop - 0.1;

  var oldLeft = parseFloat(cat1.style.left);

  var oldRight = parseFloat(cat1.style.right);





  if (oldLeft < (window.innerWidth / 2) && oldLeft > (window.innerWidth / 2) - 5) { //cat should dance yet?
    directionR = false;
    clearInterval(walkLeft);
    danceTime();
  }

  if (oldLeft > 210) {
    var newLeft = oldLeft - (5);
  } else if (oldLeft > 80) { //walk speed
    var newLeft = oldLeft - (3);
  } else {
    var newLeft = oldLeft - (1.5);
  }


  if (oldLeft > 0) {
    cat1.style.width = newSize + 'px';
    cat1.style.height = newSize + 'px';
    cat1.style.top = newTop + 'px';
    cat1.style.left = newLeft + 'px'; //should turn around?
  } else {
    clearInterval(walkLeft);
    walkRight = setInterval(catwalk, 100);
    cat1.className = "";
    cat1.className = "turnRight";
  }

}; 
//------------------------------------------walk left end-----------------------------------



//should have used timeout for smoke instead of setInterval
var danceTime = function() {

  smokeScreen();
  ballShow(true);
  cat1.src = newImg;
  danceCat = setInterval(danceTimer, 500);    
  smoker = setInterval(smokeRemove, 500);     
  lights.style.background = randomRGBA(); //initial disco light change visual thing
  audioBg.muted = true;
  audio.muted = false;
  danceCrew.style.visibility = "visible";
};



var ballShow = function(show) {
  if (show) {
    ball.style.top = "-20px";
  } else {
    ball.style.top = "-400px";
  }
};

var smokeScreen = function() {
  superman.style.background = "#EAF0F7";        //colors the div to hide the cat completely
  var puff = document.createElement("img");
  puff.className = "smoke";
  var puffLink = "http://www.zweifuss.ca/ibuki/cloud.gif";
  puff.setAttribute("src", puffLink);
  superman.appendChild(puff);
};

var smokeRemove = function() {
  smokeCount++;

  if (smokeCount === 1) {

    superman.style.background = "";
    var smokeImg = superman.getElementsByTagName('img')[0];
    smokeCount = 0;

    smokeImg.remove();
    clearInterval(smoker);
  }
};



var danceTimer = function() {

  lights.style.background = randomRGBA(); //changes background color each time
  count++;

  if (count > 20) {
    count = 0;
    smokeScreen();
    ballShow(false);

    cat1.src = oldImg;
    smoker = setInterval(smokeRemove, 500);
    audio.muted = true;
    audioBg.muted = false;

    danceCrew.style.visibility = "hidden";
    lights.style.background = ""; //gets rid of flashing disco light

    if (directionR) { //which way to go after dancing

      clearInterval(danceCat);
      walkRight = setInterval(catwalk, 100);

    } else {

      clearInterval(danceCat);
      walkLeft = setInterval(catwalkOp, 100);
    }
  }
};

function catFactory() {

  for (var i = 0; i < 4; i++) {
    var puff = document.createElement("img");
    puff.className = "danceCrewCats";

    if (i === 0 || i === 3) {
      var puffLink = "http://media.giphy.com/media/67j0Iy0UzvBG8/giphy.gif";

    } else {
      var puffLink = "http://vignette2.wikia.nocookie.net/uncyclopedia/images/2/21/Dance_cat.gif";
    }

    puff.setAttribute("src", puffLink);
    danceCrew.appendChild(puff);
  }
};



walkRight = setInterval(catwalk, 100);
