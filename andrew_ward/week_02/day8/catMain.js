// Create a new Javascript file and link to it with a script tag at the bottom. X
// Create a variable to store a reference to the img. X
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

var body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = "url('http://vignette3.wikia.nocookie.net/wolvesofthebeyond/images/2/2d/GrassyPlain.jpg/revision/latest?cb=20130629040836')";
body.style.backgroundSize = ('cover');

// CAT 1

var walkinCat = document.getElementById('walkinCat');
  walkinCat.style.position = 'absolute';
  walkinCat.style.top = '90px';
  walkinCat.style.left = '-20px';
  walkinCat.style.width = '20px';

var catWalk = function () { // main cat who rides cloud

  var oldLeft = parseInt(walkinCat.style.left);
  var newLeft = oldLeft + 1;
  walkinCat.style.left = newLeft + 'px'; 

  var oldWid = parseInt(walkinCat.style.width);
  var newWid = oldWid + 1;
  walkinCat.style.width = newWid + 'px';

  if (newLeft >= 960) {
    walkinCat.style.left = '-20px';
    walkinCat.style.width = '20px';
  }
};

setInterval(catWalk, 50);

// CLOUD

var $cloud = $('#cloud');
$cloud.css({"width":'70px','left':'-65px','top':"90px",'position':'absolute'});

var cloudMove = function () { // cloud that main cat rides upon
  
  var cloud = document.getElementById('cloud');
  var oldLeft = parseInt(cloud.style.left);
  var newLeft = oldLeft + 1;
  cloud.style.left = newLeft + 'px'; 

  var oldWid = parseInt(cloud.style.width);
  var newWid = oldWid + 1;
  cloud.style.width = newWid + 'px';

  var oldTop = parseInt(cloud.style.top);
  var newTop = oldTop + 1;
  cloud.style.top = newTop + 'px';

    // if (cloud.style.height > 150) {
    //   $('#cloud').hide();
    // }

  if (newLeft > 960) {
    cloud.style.left = '-20px';
    cloud.style.width = '70px';
    cloud.style.top = '90px';
    // $('#cloud').show();
  }
};
setInterval(cloudMove, 50);

// CAT 2

var walkinCat2 = document.getElementById('walkinCat2');
walkinCat2.style.position = 'absolute';
walkinCat2.style.top = '200px';
walkinCat2.style.left = '-20px';
walkinCat2.style.height = '40px';
var right = true;

var catWalk2 = function () { // cat that runs back and forth on the screen

  var leftAmount = parseInt(walkinCat2.style.left);

  
  if (leftAmount < -70) {
    right = true;
  } else if (leftAmount > 1300) {
    right = false;
  }

  if (right === true) { // move right
  var oldLeft = parseInt(walkinCat2.style.left);
  var newLeft = oldLeft + 10;
  walkinCat2.style.left = newLeft + 'px';
  $('#walkinCat2').removeClass('cat2Backwards');
  } else { 
    // format to do it without jquery

    $('#walkinCat2').addClass('cat2Backwards');
    $('#walkincat2').attr('transform','scaleX(-1)');
    $('#walkincat2').attr('filter','flipH');
    var oldLeft = parseInt(walkinCat2.style.left);
    newLeft = oldLeft - 20;
    walkinCat2.style.left = newLeft + 'px';
  }

  // if (500 > newLeft > 700) {
  //   var img = document.getElementById('walkinCat2');
  //   img.src = "http://www.netanimations.net/cute-cat-kitten-skiing-animated-gif-picture.gif"
  // }
};
setInterval(catWalk2,50);


// amazing horse
$('#horse').css({'position':'absolute','top':'110px','left':'450px','height':'70px'});

var horseTurn = function () {
  $("#horse").toggleClass('horseBackwards');
};
setInterval(horseTurn,600);

// dancing banana
$('#banana').css({'position':'absolute','top':'20px','right':'40px','height':'55px'});
    
var bananaGrow = function () {

  var bananaHeight = $('#banana').attr('height');
  $("#banana").animate({height: "300px"});
  $('#banana').animate({height: '55px'});
}
setInterval(bananaGrow,900);






































