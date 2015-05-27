require 'pry'

def valid_nucleotide?( char )
  %W[ A T C G U ].include? char
end

def count( nucleotide, char )
  if valid_nucleotide? char
    nucleotide.count char
  else 
    0
  end
end

def nucleotide_counts( nucleotide )
  {

    :a => count( nucleotide, "A" ),
    :t => count( nucleotide, "T" ),
    :c => count( nucleotide, "C" ),
    :g => count( nucleotide, "G" )

  }
end

puts nucleotide_counts "ATCAAAAAATTTA"





