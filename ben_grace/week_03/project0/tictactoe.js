$(document).ready(function() {

  ///////////////////
  //Begin Vairables//
  ///////////////////

  //Sets the input for currentMove
  var currentMove = 'X';

  //Squares turned into variables
  var $squareOne = $('#one');
  var $squareTwo = $('#two');
  var $squareThree = $('#three');
  var $squareFour = $('#four');
  var $squareFive = $('#five');
  var $squareSix = $('#six');
  var $squareSeven = $('#seven');
  var $squareEight = $('#eight');
  var $squareNine = $('#nine');

  //Keeps track of the number of moves to determine the switchMove function
  var moveCounter = 0;

  ///////////////////
  //Begin functions//
  ///////////////////

  //Switches moves between X and O
  var switchMove = function() {
    if (moveCounter % 2 !== 0) {
      currentMove = "O";
    } else {
      currentMove = "X";
    };
  };

  //Checks the winning values for all the squares(Long and chunky will try and do with arrays if I can work it out)
  var evaluateWinner = function() {
    //squareOne Winning options...
    if (($squareOne.text() === "X") && ($squareTwo.text() === "X") && ($squareThree.text() === "X")) {
      $('#one, #two, #three').addClass('winningSquares').fadeIn(5000)
      $('boardAndInstructions').addClass('bodyWinner');
      $('#winnerHidden').show('puff');
      return true;
    }
    if (($squareOne.text() === "O") && ($squareTwo.text() === "O") && ($squareThree.text() === "O")) {
      $('#one, #two, #three').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareOne.text() === "X") && ($squareFour.text() === "X") && ($squareSeven.text() === "X")) {
      $('#one, #four, #seven').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareOne.text() === "O") && ($squareFour.text() === "O") && ($squareSeven.text() === "O")) {
      $('#one, #four, #seven').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareOne.text() === "X") && ($squareFive.text() === "X") && ($squareNine.text() === "X")) {
      $('#one, #five, #nine').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareOne.text() === "O") && ($squareFive.text() === "O") && ($squareNine.text() === "O")) {
      $('#one, #five, #nine').addClass('winningSquares').fadeIn(5000)
      return true;
    }

    //squareTwo Winning options...

    if (($squareFive.text() === "X") && ($squareTwo.text() === "X") && ($squareEight.text() === "X")) {
      $('#five, #two, #eight').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareFive.text() === "O") && ($squareTwo.text() === "O") && ($squareEight.text() === "O")) {
      $('#five, #two, #eight').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareFive.text() === "X") && ($squareFour.text() === "X") && ($squareSix.text() === "X")) {
      $('#five, #four, #six').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareFive.text() === "O") && ($squareFour.text() === "O") && ($squareSix.text() === "O")) {
      $('#five, #four, #six').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareFive.text() === "X") && ($squareThree.text() === "X") && ($squareSeven.text() === "X")) {
      $('#five, #three, #seven').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareFive.text() === "O") && ($squareThree.text() === "O") && ($squareSeven.text() === "O")) {
      $('#five, #three, #seven').addClass('winningSquares').fadeIn(5000)
      return true;
    }

    //squareThree Winning options...

    if (($squareNine.text() === "X") && ($squareThree.text() === "X") && ($squareSix.text() === "X")) {
      $('#nine, #three, #six').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareNine.text() === "O") && ($squareThree.text() === "O") && ($squareSix.text() === "O")) {
      $('#nine, #three, #six').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareNine.text() === "X") && ($squareFive.text() === "X") && ($squareOne.text() === "X")) {
      $('#nine, #five, #one').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareNine.text() === "O") && ($squareFive.text() === "O") && ($squareOne.text() === "O")) {
      $('#nine, #five, #one').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareNine.text() === "X") && ($squareSeven.text() === "X") && ($squareEight.text() === "X")) {
      $('#nine, #seven, #eight').addClass('winningSquares').fadeIn(5000)
      return true;
    }
    if (($squareNine.text() === "O") && ($squareSeven.text() === "O") && ($squareEight.text() === "O")) {
      $('#nine, #seven, #eight').addClass('winningSquares').fadeIn(5000)
      return true;
    }
  }

  var getWinner = function() {
    if (evaluateWinner()) {
      $('boardAndInstructions').addClass('bodyWinner');
      $('#winnerHidden').show('puff');
      $('#winnerHidden h1').text(currentMove + ' Wins!');
      $('.square').off();
    } else if (moveCounter === 9) {
      $('#winnerHidden h1').text("It's a Draw!")
      $('#winnerHidden').show('puff')
    }
  };

  //This is the main function that is called for the click Event. It takes in all the other functions.
  var playerMove = function() {
    switchMove()
    $(this).html(currentMove);
    moveCounter++
    getWinner()
    console.log(moveCounter)
    console.log('check')
  };

  //Removes all of the winningSquares classes to reset for the next game
  var clearBoard = function(){
    $squareOne.text("").removeClass('winningSquares');
    $squareTwo.text("").removeClass('winningSquares');
    $squareThree.text("").removeClass('winningSquares');
    $squareFour.text("").removeClass('winningSquares');
    $squareFive.text("").removeClass('winningSquares');
    $squareSix.text("").removeClass('winningSquares');
    $squareSeven.text("").removeClass('winningSquares');
    $squareSeven.text("").removeClass('winningSquares');
    $squareEight.text("").removeClass('winningSquares');
    $squareNine.text("").removeClass('winningSquares');
  };

  //Click event that runs the game.
  $('.square').one('click', playerMove)

  //Click event to bring up the instructions page
  $('#instruct h2').on('click', function(){
    console.log('instruct click is firing')
    $('#instructHidden').show('puff')
    $('#boardAndInstructions').hide('puff')
  });

  //Click event to hide the instructions and bring up play page
  $('#instructHidden h2').on('click', function(){
    console.log('instructions click is firing')
    $('#instructHidden').hide('puff')
    $('#boardAndInstructions').show('puff')
  });

  //This will reset all the squares and have the game run again.
  $('#reset').on('click', function(){
    console.log('Reset is firing')
    $('#winnerHidden').hide();
    clearBoard()
    $('.square').one('click', playerMove)
    moveCounter = 0
  });

  $('#theme').on('click', function(){
    $('#sytleSheet').setAttribute('href' 'styles/chooseStyles.css')

  });






});
