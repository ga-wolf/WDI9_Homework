var Anagram = {
  returnValidAnagrams: function ( word, wordsToTest ) {
    var validWords = [];
    var sortedMainWord = this.sortAlphabetically( word );
    for ( var i = 0; i < wordsToTest.length; i += 1 ) {
      var currentWord = wordsToTest[i];
      var sortedCurrentWord = this.sortAlphabetically( currentWord );
      var isEqual = this.arraysEqual( sortedMainWord, sortedCurrentWord );
      if ( isEqual ) {
        validWords.push( currentWord );
      }
    }
    return validWords;
  },

  sortAlphabetically: function ( wordToSort ) {
    return wordToSort.split('').sort();
  },

  arraysEqual: function ( mainWord, currentWord ) {
    if ( mainWord.join() === currentWord.join() ) {
      return true;
    }
  }
}

var returnedValidWords = Anagram.returnValidAnagrams( "jack", ["ackj", "kcaj", "wolf"] );
console.log( "Valid words: " + returnedValidWords );



