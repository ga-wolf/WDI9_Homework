// DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

// Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.

// Shortest intro to biochemistry EVAR:

// twigs are to birds nests as
// nucleotides are to DNA and RNA as
// amino acids are to proteins as
// sugar is to starch as
// oh crap lipids
// I'm not going to talk about lipids because they're crazy complex.

// So back to nucleotides.

// There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.

// There are no other nucleotides.

// Make sure that you validate it has nucleotides!

var dna = {};
var rna = {};

var dnaTides = function(str) {
    dna = {};
    str = str.toUpperCase();
    dna.A = (str.match(/([A])/g)||[]).length;
    dna.C = (str.match(/([C])/g)||[]).length;
    dna.G = (str.match(/([G])/g)||[]).length;
    dna.T = (str.match(/([T])/g)||[]).length;
    var count = dna.A + dna.C + dna.G + dna.T;
    return ('Total count for DNA nucleotides is ' + count);
}

var rnaTides = function(str) {
    rna = {};
    str = str.toUpperCase();
    rna.A = (str.match(/([A])/g)||[]).length;
    rna.C = (str.match(/([C])/g)||[]).length;
    rna.G = (str.match(/([G])/g)||[]).length;
    rna.U = (str.match(/([U])/g)||[]).length;
    var count = rna.A + rna.C + rna.G + rna.U;
    return ('Total count for RNA nucleotides is ' + count);
}