// What are the things I need to keep track of?

// We need whether it is X or 0 at the moment
// Where they have clicked

var currentPlayer = "Player2";
var movesArray = [
  [ "_", "_", "_" ],
  [ "_", "_", "_" ],
  [ "_", "_", "_" ]
]


var changePlayer = function () {
  console.log("Current Letter is: " + currentPlayer);
  if ( currentPlayer === "Player1" ) {
    currentPlayer = "Player2";
  } else {
    currentPlayer = "Player1";
  }

}

$("body").on("click", ".box", changePlayer);


$("body").on("click", ".box", function () {

  // Store the row value in a variable

  var row = $(this).attr("data-row");

  // Store the column value in a variable

  var column = $(this).attr("data-column");

  console.log( "Row: " + row );
  console.log( "Column: " + column );

  // Go into the moves array
movesArray[row][column] = currentPlayer;


    // Using the row value, access the current array in the main array
    // Using the column value, access the actual element in that array
    // Change the value of that to be equal to the current move

  $(this).addClass(currentPlayer);
  // debugger;
  checkIfWonVertical();
  checkIfWonHorizontal();
  checkIfWonDiagonal();
  draw();

});



function checkIfWonVertical(){

  for(var i = 0; i <= 2; i++){

    if (
       movesArray[0][i]=== currentPlayer && 
       movesArray[1][i]=== currentPlayer &&
       movesArray[2][i]=== currentPlayer
       ){

        // function for telling the winner that they won
      console.log("the winner is " + currentPlayer);
      sweetAlert({
        title: currentPlayer + " wins!",
        text: "Play again?",
        showConfirmButton: true,
        confirmButtonText: "sure!",
        showCancelButton: true,
        cancelButtonText: "no, thanks",
      },
      function(){
        location.reload(); 
      }
      );
      return true;
    }

  }
}

function checkIfWonHorizontal(){

  for(var i = 0; i <= 2; i++){

    if (
       movesArray[i][0]=== currentPlayer && 
       movesArray[i][1]=== currentPlayer &&
       movesArray[i][2]=== currentPlayer
       ){

        // function for telling the winner that they won
      console.log("the winner is " + currentPlayer);
      sweetAlert({
        title: currentPlayer + " wins!",
        text: "Play again?",
        showConfirmButton: true,
        confirmButtonText: "sure!",
        showCancelButton: true,
        cancelButtonText: "no, thanks"
      },
      function(){
        location.reload(); 
      }
      );
      return true;
    }

  }

}

function checkIfWonDiagonal() {
  var diagonalOne = movesArray[0][0]=== currentPlayer && movesArray[1][1]=== currentPlayer && movesArray[2][2]=== currentPlayer;
  var diagonalTwo = movesArray[0][2]=== currentPlayer && movesArray[1][1]=== currentPlayer && movesArray[2][0]=== currentPlayer;

  if ( diagonalOne || diagonalTwo ) {

    console.log("the winner is " + currentPlayer);
    sweetAlert({
      title: currentPlayer + " wins!",
      text: "Play again?",
      showConfirmButton: true,
      confirmButtonText: "sure!",
      showCancelButton: true,
      cancelButtonText: "no, thanks"
    },
    function(){
        location.reload(); 
      }
    );
    return true;
  }
}

function draw() {
  var flattenedArray = movesArray[0].concat( movesArray[1], movesArray[2]);
  var anyUnderscores = flattenedArray.indexOf("_") >= 0;
  var anyWins = checkIfWonDiagonal() || checkIfWonHorizontal() || checkIfWonVertical();

  console.log("Underscores? " + anyUnderscores);
  console.log("No Wins? " + !anyWins);

  if ( !anyUnderscores && !anyWins ) {
    sweetAlert({
      title: "Draw!",
      text: "Play again?",
      showConfirmButton: true,
      confirmButtonText: "sure!",
      showCancelButton: true,
      cancelButtonText: "no, thanks"
    },
    function(){
        location.reload(); 
      }
    );
  }
}
















