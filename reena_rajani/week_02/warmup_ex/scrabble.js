// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10

// "cabbage" should be scored as worth 14 points:

// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E

var scrabblepoint  = {
  1 : ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' ] ,
  2 : ['D','G'] ,
  3 : ['B', 'C', 'M', 'P' ] ,
  4 : ['F', 'H', 'V', 'W', 'Y' ] ,
  5 : ['K' ] ,
  8 : ['J', 'X'] ,
  10 :[ 'Q', 'Z' ]

}

var letsPlayScrabble =  function (string) {

  var  aChar ; 
  var  result =0 ;

  for(i=0 ;i < string.length ; i++) {

    achar = string[i].toUpperCase();
    result += parseInt( getPoint(achar) ) ;

  } 

  console.log('result is : ' + result);


}


 var getPoint  = function (achar) {
    
    var point = 0 ;

     scrabblepoint[1].indexOf(achar) !== -1 ? point = 1 : point = point ;
     scrabblepoint[2].indexOf(achar) !== -1 ? point = 2 : point = point ;
     scrabblepoint[3].indexOf(achar) !== -1 ? point = 3 : point = point ;
     scrabblepoint[4].indexOf(achar) !== -1 ? point = 4 : point = point ;
     scrabblepoint[5].indexOf(achar) !== -1 ? point = 5 : point = point ;
     scrabblepoint[8].indexOf(achar) !== -1 ? point = 8 : point = point ;
     scrabblepoint[10].indexOf(achar) !== -1 ? point = 10 : point = point ; 

     return point ; 

 }

 letsPlayScrabble("Cabbage") ;