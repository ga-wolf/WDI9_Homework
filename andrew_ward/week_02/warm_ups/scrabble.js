// Letter Values

// You'll need these:

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// Examples

// "cabbage" should be scored as worth 14 points:

// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:

// 3 + 2*1 + 2*3 + 2 + 1
// = 3 + 2 + 6 + 3
// = 5 + 9
// = 14

/*  FIRST ATTEMPT THAT DIDN'T WORK
var letters = {
  '1': ['A','E','I','O','U','L','N','R','S','T'],
  '2': ['D','G'],
  '3': ['B','C','M','P'],
  '4': ['F','H','V','W','Y'],
  '5': ['K'],
  '8': ['J','X'],
  '10': ['Q','Z']
};

var pointTotal = function (str) {
  var points = 0;
  for (var i = 0; i < str.length; i++) {

    for (var q = 0; q < 11; q++) { // change string into array to remove a step

      for (var w = 0; w < letters.q.length; w++) {

      if (splitStr[i] === letters[q][w]) {

        points = points + 
      }
      }
    }
  }
};
*/

var group1 = { 
  letters: ['A','E','I','O','U','L','N','R','S','T'],
  value: 1
};
var group2 = {
  letters:  ['D','G'],
  value: 2
};
var group3 = {
  letters:  ['B','C','M','P'],
  value: 3
};
var group4 = {
  letters: ['F','H','V','W','Y'],
  value: 4
};
var group5 = {
  letters: ['K'],
  value: 5
};
var group8 = {
  letters:  ['J','X'],
  value: 8
};
var group10 = {
  letters: ['Q','Z'],
  value: 10
};



letters = [group1,group2,group3,group4,group5,group8,group10];

var scrabbleScore = function (str) {
  var score = 0; // total score
  str.toUpperCase(); // makes upper case to match letters in the objects
  for (var i = 0; i < str.length; i++) { // cycles through letters in string
    for (var x = 0; x < letters.length; x++) { // cycles through letters array
      for (var y = 0; y < letters[x].length; y++) { // cycles through letters key in objects within letters array
        if (str[i] === letters[x].y) {
          score = score + letters[x]['value'];
          console.log(score);
        }
      }
    }

  }
  return score;
};

var scrabble = function (str) {
  var score = 0; // score to return at end
  var word = str.toUpperCase(); // makes upper case to match
  for (var i = 0; i < str.length; i++) { // loops through word

  }
}




















