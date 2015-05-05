// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function(string) {

  var result="";
  for(var i = string.length; i >= 0 ; i--)
  {
    result +=string[i]
  }

  return result;
}

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

var findLongestWord = function(words){

  var longestWord="";

  for(var i = 0 ; i < words.length -1 ; i++ ) {

      if ( words[i].length >  words[i+1].length && words[i].length > longestWord.length) {

        longestWord = words[i];

      } else if (words[i+1].length > longestWord.length ){

        longestWord = words[i+1];

      }


  }


  return longestWord ;

}

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

var filterLongWords = function(words , x) {

  var filteredWords ="" ;
  for(var i = 0 ; i < words.length -1 ; i++ ) {

    words[i].length > x ? filteredWords += ", "+words[i]  : filteredWords +="" ;

  }

  return filteredWords;

}


myWords = ['Reena' ,'How are you ' ,'stupendious horrendous' , 'Welcome' , '1232143253' , 'WOW'  ,'Hello'] ;

console.log(' reverse of ' + myWords[1] + ' is ' + reverseString(myWords[1]) );
console.log(' Longest Word in  the array  [' + myWords + '  ] is ' + findLongestWord(myWords) );
console.log('  Words that match the length are ' + filterLongWords(myWords ,5) );

