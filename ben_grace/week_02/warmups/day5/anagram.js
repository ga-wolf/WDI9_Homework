// Given "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".

// Write a javascript file that solves this problem!

// console.log('check')

// ///


// var mainWord = "listen"

// var 



// anagram = function(word, word2, word3){
//   debugger;
//   var wordOne = word;
//   // var wordTwo = word2.split()
//   // var wordThree = word3.split()

//   for (var i = 0; i < mainWord.length; i++) {
//     if(wordOne[i])
//   }
// }



////
//Jacks///
//////////

var Anagram = {
  //

  returnValidAnagrams: function (word, wordsToTest) {
    console.log("Word:" + word)
    console.log("Words to test" + wordsToTest)
  },
  sortAlphabetically: function(wordToSort) {
    return wordToSort.split('').sort()
  },
  arraysEqual: function() {}

}

Anagram.returnValidAnagrams( 'jack', ['ackj', 'kcaj', 'wolf'] );