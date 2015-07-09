// Creating a factory of robots
function createRobot() {
  var x = 0,
      y = 0,
      dir;

  // Through the DOM, we create a robot div with a class of robot. Then append it to the page
  var bender = document.createElement('div');
  bender.className = 'robot';
  document.body.appendChild(bender);

  // We put the start position of the robot into function, this way we can move him around changing the x or y coordinates. Because they are 0's by default when we call on moveBender it will be a base position.
  var moveBender = function() {
    bender.style.top = (window.innerHeight / 2 + y * 40 - 20) + 'px';
    bender.style.left = (window.innerWidth / 2 + x * 40 - 20) + 'px';
    bender.innerHTML = "x:" + x + "y:" + y;
  }

  moveBender();

  // The turn function is quite simple, but if you want to give some animation for turning diffrent side you can do the check here and add things that happens on change
  var turn = function(direction) {
    dir = direction;
  }

  // Our change position function
  var advance = function(step) {
    // Our step parameter is not a compulsory, if we leave it blank it'll assign it to 1 by default, but if we pass in any number it'll make that amounth of moves.
    step = step || 1;
    if (dir === "up") {
      y = y - step;
    } else if (dir === "down") {
      y = y + step;
    } else if (dir === "left") {
      x = x - step;
    } else if (dir === "right") {
      x = x + step;
    }

    // After our coordinates changed we call on our move function and root change the position, according to changed x or y.
    moveBender();

  }

  // We can return a block of elements or function from our factory. Where is key: function structure.
  return {
    turn: turn,
    advance: advance,
    left: function() {
      turn('left');
      advance();
    }
  }
}

var robot = createRobot();
// We can create as many robots as we want and give him different tasks etc. That is why we call it a factory.
var robot1 = createRobot();