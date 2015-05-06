
var cat = document.getElementById("catPic");
cat.style.top = '0px';
cat.style.left = '0px';
cat.style.width = "296px";
cat.style.height = "296px";

var catWalk = function () {
  var newTop = parseInt(cat.style.top) + 1;
  cat.style.top = newTop + 'px';

  var newLeft = parseInt(cat.style.left) + 5;
  cat.style.left = newLeft + 'px';

  var newWidth = parseInt(cat.style.width) + 1;
  //cat.style.width = newWidth + 'px';

  var newHeight = parseInt(cat.style.height) + 1;
  //cat.style.height = newHeight + 'px';


}

window.setInterval(catWalk, 40);









