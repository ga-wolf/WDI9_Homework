$(document).ready(function() {

  //creates the variables used in the tic-tac-toe program
  var inputMat = [0,0,0,0,0,0,0,0,0];
  //sets up the css used in the jQuery constructor.
  var $box = $('<div class="box"></div>');
  $box.css({width: '196px',
    height: '196px',
    display: 'inline-block',
    'background-color': 'rgba(0,0,0,0.8)',
    margin: '2px',
    fontSize: '150px',
    textAlign: 'center',
    float: 'left',
    'z-index': 5,
    color: 'white'
  });
  var $container = $('<div class="container"></div>')
  $container.css({
    'max-width': '600px',
    margin: '0 auto'
  });

  //sets up the board with 9 squares, and sets the 4 cardinal boxes as darker
  var setupBoard = function () {
    $('body').append($container);
    for (var i = 0 ; i < inputMat.length ; i++ ) {
      $('.container').append($box.clone());
      $('.box').last().addClass(' ' + i);
    }
    $('.container .box:even').css('background-color', 'rgba(0,0,0,0.6)');
  }

  //does fun animation on click
  var animateImage = function () {
    currentTween = TweenMax.to( ".box", 0.02, {
      'background-color': 'white',
      repeat: 1,
      yoyo: true,
      ease: Bounce.easeOut
    } );
  }

  //event handler for user selections
  var userSelect = function () {
    //this gets the class atribute of the clicked square
    var fullclass = $(this).attr('class');

    //if the clicked square already contains an x or an o, then it doesn't allow the user to click the square
    if (Math.abs(inputMat[parseInt(fullclass[4])]) === 1) {
      console.log("you can't click there")
    } else {
      $(this).html('X');
      //console.log(fullclass);
      inputMat[parseInt(fullclass[4])] = 1;
      //console.log(fullclass[4]);
      if (checkWin(1)) {
        console.log('player wins');
        winScreen(1);
      } else if (summa === 9) {
        console.log('tie')
        winScreen(0);
      } else {
        computerSelect();
      }
    }
  }

  var compuRand = function () {
    //finds a blank square to move on
    var randEight = Math.round(Math.random() * 8);
    if ((inputMat[randEight] === 1) || (inputMat[randEight] === -1)) {
      return compuRand();
    } else {
      return randEight;
    }
  }

  //used to find whether or not all the squares have been selected
  var summa = function (arra) {
    var sum = 0;
    arra.forEach( function(val) {
      sum += Math.abs(val);
    })
    return sum;
  }

  //computer selects a square directly after the user, utilizing random chance
  var computerSelect = function () {
    if (summa(inputMat) === 9) {
      console.log('tie')
    } else {
      var rand = compuRand();
      var boxString = '.' + rand;
      $('.container').find(boxString).html('O');
      inputMat[rand] = -1;
      if (checkWin(-1)) {
        console.log('computer wins');
        winScreen(-1);
      } else if (summa === 9) {
        console.log('tie');
        winScreen(0);
      }
    } 
  }

  //you don't need to check this conditional, these aren't the conditionals you're looking for
  var checkWin = function (x) {
    if ( ((inputMat[0] === x) && (inputMat[1] === x) && (inputMat[2] === x)) || ((inputMat[3] === x) && (inputMat[4] === x) && (inputMat[5] === x)) || ((inputMat[6] === x) && (inputMat[7] === x) && (inputMat[8] === x)) || ((inputMat[0] === x) && (inputMat[3] === x) && (inputMat[6] === x)) || ((inputMat[1] === x) && (inputMat[4] === x) && (inputMat[7] === x)) || ((inputMat[2] === x) && (inputMat[5] === x) && (inputMat[8] === x)) || ((inputMat[0] === x) && (inputMat[4] === x) && (inputMat[8] === x)) || ((inputMat[2] === x) && (inputMat[4] === x) && (inputMat[6] === x)) ) {
      return true;
    } else {
      return false;
    }
  }

  //overlays over the game a click-blocking box, and tells the user whether they've won or lost
  var winScreen = function(xx) {
    var $overlay = $('<div></div>').addClass('overlay');
    $overlay.css({width: '600px',
      height: '600px',
      'background-color': 'rgba(0,0,0,.4)',
      position: 'absolute',
      'z-index': 6,
      textAlign: 'center',
      color: 'white'
    });

    //jQuery box constructor
    $('.container').append($overlay)
    if (xx === 1) {
      $('.overlay').html("You Win (or, more likely, barely avoided losing)! You get to live")
    } else if (xx === -1) {
      $('.overlay').html("You lost to a random computer, you die... And are dumb.")
    } else {
      $('.overlay').html("You tied! Woo!.")
    }
  }

  //sets up the jQuery board
  setupBoard();

  //runs click handler
  $('.container').on('click', '.box', userSelect);
  //runs animation on click
  $('.container').on('click', '.box', animateImage);


});