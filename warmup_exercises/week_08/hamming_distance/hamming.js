// This is a function that generates an Object-like thing
// To use it we run - var something = new Nucleotide( something );
var Nucleotide = function ( nucleotide ) {

  // Because this function generates an object, we can add keys and values like the following:
  // We prefix it with "this" because we want to add the key and property to an instance of the Nucleotide "class"
  this.nucleotide = nucleotide;

  // Again, we prefix it with "this" because we want to call it on instances of this constructor
  this.hammingDistance = function ( other_nucleotide ) {

    // Make a starting point with the difference variable, and for readability, store the current instance's nucleotide as nucleotide
    var difference = 0,
        nucleotide = this.nucleotide;

    // Iterate through each character of the first string and store a number as i
    for ( var i = 0; i < nucleotide.length; i += 1 ) {

      // Check if the current letter of the two strings passed in are the same
      if (  nucleotide[i] !== other_nucleotide[i]  ) {

        // If they aren't, add one to difference
        difference += 1;
      }
    }

    console.log( "Nucleotide one was ", nucleotide, ". Nucleotide two was ", other_nucleotide );
    console.log( "Difference is ", difference );
    return difference;
  }

}

// This creates our instances
var nucleotide_one = new Nucleotide( "GAGCCTACTAACGGGAT" );
var nucleotide_two = new Nucleotide( "CATCGTAATGACGGCCT" );

// This calls the hammingDistance function, passing in nucleotide_two's nucleotide string (which is stored as other_nucleotide)
nucleotide_one.hammingDistance( nucleotide_two.nucleotide );