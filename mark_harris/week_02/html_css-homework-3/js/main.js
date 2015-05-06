
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
*/

var catWalkForever = function () {
  var currentLeft = parseInt(cat.style.left);
  var newLeft = currentLeft + 5;
  cat.style.left = newLeft + 'px';

  if(currentLeft > window.innerWidth) {
    cat.style.left = "0px";
  }
}

/*
  var width = window.innerWidth;
  //console.log(width);
  //var catLeft = parseInt(cat.style.left.slice(0,-2));

var x = 100;
  if(x < 300) {
    //alert("gone");
    console.log(x);
    x = x + 50;
  }
*/


//window.setInterval(catWalk, 40);
window.setInterval(catWalkForever, 40);
//console.log(window.innerWidth);









