
var cat = document.getElementById("catPic");
cat.style.top = '0px';
cat.style.left = '0px';
//cat.style.width = "296px";
//cat.style.height = "296px";
/*

var catWalk = function () {
  var newTop = parseInt(cat.style.top) + 1;
  //cat.style.top = newTop + 'px';

  var newLeft = parseInt(cat.style.left) + 5;
  cat.style.left = newLeft + 'px';

  var newWidth = parseInt(cat.style.width) + 1;
  //cat.style.width = newWidth + 'px';

  var newHeight = parseInt(cat.style.height) + 1;
  //cat.style.height = newHeight + 'px';
}

var catWalkForever = function () {
  var currentLeft = parseInt(cat.style.left);
  var newLeft = currentLeft + 5;
  cat.style.left = newLeft + 'px';

  if(currentLeft > window.innerWidth) {
    cat.style.left = "0px";
  }
}
*/

// Set the cat walking to the right
var trappedCatRight = function () {
  var currentLeft = parseInt(cat.style.left);
  var newLeft = currentLeft + 5;
  cat.style.left = newLeft + 'px';

  if(currentLeft > window.innerWidth) {
    window.clearInterval(timer1);
    timer1 = window.setInterval(trappedCatLeft, 40);
    cat.className = "left-cat";
  } 
}

// Set the cat walking to the left
var trappedCatLeft = function () {
  var currentLeft = parseInt(cat.style.left);
  var newLeft = currentLeft - 5;
  cat.style.left = newLeft + 'px';

  if(currentLeft < 0-cat.width) {
    window.clearInterval(timer1);
    timer1 = window.setInterval(trappedCatRight, 40);
    cat.className = "right-cat";
  } 
}


//window.setInterval(catWalk, 40);
//window.setInterval(catWalkForever, 40);
var timer1 = window.setInterval(trappedCatRight, 40);









