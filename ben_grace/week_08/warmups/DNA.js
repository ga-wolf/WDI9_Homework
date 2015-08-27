// var count = 0

// var hammingDistance = function (firstStrand, secondStrand) {

//   for (var i = 0; i < firstStrand.length; i++) {
//       if(firstStrand[i] !== secondStrand[i]){
//         count += 1
//       };
//   };
//   console.log(count)
// } 

// hammingDistance('CATCGTAATGACGGCCT', 'GAGCCTACTAACGGGAT');



//Jacks.

// Have a function that generates a Nucleotide Object
//We need to store a necleotide string( for access purposes )
//we need to define a hammingDistance function

var Nucleotide = function ( nucleotide ) {
  this.nucleotide = nucleotide;

  this.hammingDistance = function ( other_nucleotide ) {
    // Return a difference between 2 strings
    var difference = 0,
      nucleotide = this.nucleotide;

    // For loop - this should run once for every character in the string
    for (var i = 0; i < nucleotide.length; i+=1) {
      // console.log( "Nucleotide One's current letter:", nucleotide[i], i );
      // console.log( "Nucleotide Two's current letter:", nucleotide[i], i );
      if (nucleotide[i] !== other_nucleotide[i] ){
        difference += 1;
      };
    };
    console.log("Difference is: " + difference)

    return difference
  };
};

var nucleotide_one = new Nucleotide ("CATCGTAATGACGGCCT")

var nucleotide_two = new Nucleotide ("GAGCCTACTAACGGGAT")

nucleotide_one.hammingDistance( "GAGCCTACTAACGGGAT" )

