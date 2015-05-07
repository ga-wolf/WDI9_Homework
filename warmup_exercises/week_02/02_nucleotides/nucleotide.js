// Create an object (when used in this way, it is often called a namespace).
var Nucleotides = {

  testValidNucleotide: function () { return true; },

  countIndividualNucleotide: function ( string, character ) {
    var nucleotideCount = 0;
    for ( var i = 0; i < string.length; i++ ) {
      if ( character === string[i] ) {
        nucleotideCount += 1;
      }
    }
    return nucleotideCount;
  },

  returnNucleotideCounts: function ( string ) {
    var nucleotideCounts = {
      'A' : Nucleotides.countIndividualNucleotide( string, "A" ),
      'C' : Nucleotides.countIndividualNucleotide( string, "C" ),
      'G' : Nucleotides.countIndividualNucleotide( string, "G" ),
      'T' : Nucleotides.countIndividualNucleotide( string, "T" )
    }

    return nucleotideCounts;
  }

}

console.log( Nucleotides.countIndividualNucleotide( "JACK", "A" ) );

console.log( Nucleotides.returnNucleotideCounts( "ACDGHTINKSNKNCHGIS" ) );

