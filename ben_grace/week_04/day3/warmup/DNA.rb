# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.

# Shortest intro to biochemistry EVAR:

# twigs are to birds nests as
# nucleotides are to DNA and RNA as
# amino acids are to proteins as
# sugar is to starch as
# oh crap lipids
# I'm not going to talk about lipids because they're crazy complex.

# So back to nucleotides.

# There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.

# There are no other nucleotides.

# Make sure that you validate it has nucleotides!

# Find how many of each nucleotides are in a string that you pass in to a function

require 'pry'

$nucleotide_count_a = 0
$nucleotide_count_c = 0
$nucleotide_count_g = 0
$nucleotide_count_t = 0
$nucleotide_total = 0

def is_there_nucleotides string
  string.downcase.split("").each do |letter|
    if letter == "a"
      $nucleotide_count_a += 1 
      $nucleotide_total += 1 
    end
    if letter == "c"
      $nucleotide_count_c += 1  
      $nucleotide_total += 1
    end
    if letter == "g"
      $nucleotide_count_g += 1 
      $nucleotide_total += 1 
    end
    if letter == "t"
      $nucleotide_count_t += 1 
      $nucleotide_total += 1    
    end
  end
  # binding.pry
end

is_there_nucleotides 'aabbGGaaTTtCCcccdfgjkdfglkcs'

p "There is #{$nucleotide_count_a} A nucleotides"
p "There is #{$nucleotide_count_c} C nucleotides"
p "There is #{$nucleotide_count_g} G nucleotides"
p "There is #{$nucleotide_count_t} T nucleotides"
p "For a total of #{$nucleotide_total} nucleotides"

######
#Jacks version#
######


def valid_nucleotide? char
  %W[ A T C G U ].include? char
end

def count char
  if valid_nucleotide? nucleotide, char
    nucleotide.count char
  else
    puts "Ain't no nucleotides"
    0
  end
  puts " The nucleotide is #{nucleotide} and the char is #{char}"
  0
end

def nucleotide_counts  nucleotide 

  {

    :a => count ( nucleotide "A" ),
    :t => count ( nucleotide "T" ),
    :c => count ( nucleotide "C" ),
    :g => count ( nucleotide "G" )

  }
  binding.pry
end

puts nucleotide_counts 'ACGT'








