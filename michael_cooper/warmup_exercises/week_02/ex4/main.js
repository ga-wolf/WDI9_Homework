// Given "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".

// Write a javascript file that solves this problem!

var anagramCheck = function(word, array) {
  var wordArray = word.split('');
  var checkArray = [];
  var result = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i].length === word.length) {
      checkArray = array[i].split('');
      if (checkArray.sort().join('') === wordArray.sort().join('')) {
        result.push(array[i])
      }
    }
  }
  return result;
}