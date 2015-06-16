
var Nucleotide = function ( nucleotide ) {
  this.nucleotide = nucleotide;

  this.hammingDistance = function ( other_nucleotide ) {
    var difference = 0,
        nucleotide = this.nucleotide;

    for ( var i = 0; i < nucleotide.length; i += 1 ) {
      if (  nucleotide[i] !== other_nucleotide[i]  ) {
        difference += 1;
      }
    }

    console.log( "Nucleotide one was ", nucleotide, ". Nucleotide two was ", other_nucleotide );
    console.log( "Difference is ", difference );

    return difference;
  }

}
var nucleotide_one = new Nucleotide( "GAGCCTACTAACGGGAT" );
var nucleotide_two = new Nucleotide( "CATCGTAATGACGGCCT" );other_nucleotide)
nucleotide_one.hammingDistance( nucleotide_two.nucleotide );