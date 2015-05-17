var cat = document.getElementsByTagName('img')[0];
var direction = 'right';

var walk = function() {
  var left = parseInt(cat.style.left) || 0;
  var right = parseInt(cat.style.left) + parseInt(cat.width);

  if (direction === 'right') {

    left++;
    cat.style.left = left + 'px';

    if (right === window.innerWidth) {
      direction = 'left';
    }

  } else if (direction === 'left') {

    left--;
    cat.style.left = left + 'px';

    if (!left)
      clearInterval(timer);

  }

}

var timer = setInterval(walk, 10);