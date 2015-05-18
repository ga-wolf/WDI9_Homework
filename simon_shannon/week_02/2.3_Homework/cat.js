console.log('hello world');

var cat = document.getElementsByTagName('img')[0];
cat.style.left = 0 + 'px';

//var screenStop = parseInt(window.innerWidth) + 'px'

moveKittyForward = function() {

  cat.style.left = parseInt(cat.style.left) + 10 + 'px';
    if (cat.style.left === '1190px') {
        cat.style.left = '0px';
  }
}

  var kittyIsMoving = setInterval(moveKittyForward, 60);