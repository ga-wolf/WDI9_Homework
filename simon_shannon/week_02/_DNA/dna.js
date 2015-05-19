var DNA = ['a', 'c', 'g', 'u']
var jumble = ["_"];
var count = 0;

var result = function() {
  for (var x = 0, x <jumble.length, x++) {
    if jumble[x] === DNA.letter[0];
    var count += 1;
    console.log("DNA.letter")
  }
} 

console.log("There are " + count + "neowhatevers in your jumble");

//test if it was a valid nucleotide
//returns a count of a single letter in a string

//that returns an object with all of the counts



var Nucleotides = {
  countIndividualNucleotide: function ( string, character ) {
    var nucleotideCount = 0;
    for(var i = 0, i < string.length; i++) {
      if (character === sting[i]) {
        nucleotideCount += 1;
      }  
    }
  
  return nucleotideCount;

  returnNucleotideCounts: function ( string ) {
    return {
      'A' : (nucleotides.countIndividualNucleotide( "JACK", "A")
      'C' : (nucleotides.countIndividualNucleotide( "JACK", "C")
      'G' : (nucleotides.countIndividualNucleotide( "JACK", "G")
    }
  }

console.log (nucleotides.countIndividualNucleotide( "JACK", "A"));
