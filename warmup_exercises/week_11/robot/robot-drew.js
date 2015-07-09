// Robot Simulator
// The robot factory manufactures robots that have three possible movements:

// turn right
// turn left
// advance
// The robot factory's test facility has a simulator which can take a string of letters and feed this into a robot as instructions.

// Requirements (DO THIS IN JAVASCRIPT)
// Draw a grid on the page - like a chess board - 8 x 8
// Have a function to change the fake robots orientation - north, south, east, west
// Have a function to advance one step
// Don't worry about testing, just make it look decent.
// You can use jQuery and what ever other libraries you want

// robot = new Robot({ name: "Wolf" });
// robot.turn( "right" );
// robot.turn( "left" );
// robot.advance();
// Extra Credit

// Error handling - don't let it go off the board
// Animations
// Advance a few steps at a time
// Pass in a series of instructions
// Bring the pretty
// You could have a look at this library

// Source
// Inspired somewhat by an interview question at a famous company.
var robot;

$('document').ready(function() {
  function createRobot() {
    var x = 0,
        y = 0,
        dir;

    var bender = document.createElement('div');
    bender.className = 'robot'
    document.body.appendChild(bender);

    var moveBender = function() {
      bender.style.top = (window.innerHeight / 2 + y * 40 - 20) + 'px';
      bender.style.left = (window.innerWidth / 2 + x * 40 - 20) + 'px';
      bender.innerHTML = ("x: " + x + ", y: " + y);
    }

    moveBender();

    var turn = function(direction) {
      dir = direction;
    }

    var advance = function(step) {
      step = step || 1;

      if (dir === 'up') {
        y = y - step;
      } else if (dir === 'down') {
        y = y + step;
      } else if (dir === 'left') {
        x = x - step;
      } else if (dir === 'right') {
        x = x + step;
      }

      var checkBounds = function(posVar) {
        //write a function to check if the Math.abs(positionx && y) is less than than 4
      };

      moveBender();
    }

    return {
      turn: turn,
      advance: advance,
      left: function() {
        turn('left');
        advance();
      },
      right: function() {
        turn('right');
        advance();
      },
      up: function() {
        turn('up');
        advance();
      },
      down: function() {
        turn('down');
        advance();
      }
    }
  }

  robot = createRobot();

  // This uses the mousetrap library found here -https://craig.is/killing/mice
  Mousetrap.bind(['up', 'w'], robot.up);
  Mousetrap.bind(['down', 's'], robot.down);
  Mousetrap.bind(['left', 'a'], robot.left);
  Mousetrap.bind(['right', 'd'], robot.right);

});