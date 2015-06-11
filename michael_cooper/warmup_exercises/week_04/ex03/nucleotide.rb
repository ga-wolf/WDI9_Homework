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

# def nucleotides dna_string
#   nt_count = 0
#   count_A = 0
#   count_C = 0
#   count_G = 0
#   count_T = 0
#   count_U = 0
#   dna_string = dna_string.upcase
#   dna_string.each_char { |char| 
#     if (char == 'A' || 'C' || 'G' || 'T' || 'U') 
#       nt_count += 1
#     end
#     case char
#     when 'A'
#       count_A += 1
#     when 'C'
#       count_C += 1
#     when 'G'
#       count_G += 1
#     when 'T'
#       count_T += 1
#     when 'U'
#       count_U += 1
#     end
#   }
#     print "There are #{nt_count} nucleotides in the string #{dna_string} \n"
#     print "A: #{count_A}, C: #{count_C}, G: #{count_G}, T: #{count_T}, U: #{count_U}"
# end

# binding.pry


def valid_nucleotide? char
  %W[ A T C G U ].include? char
end

def count nucleotide, char
  if valid_nucleotide? char
    nucleotide.count char
  else
    puts "Sorry, that nucleotide is missing #{char}"
    0
  end
end

def nucleotide_counts nucleotide
  {
    :a => count(nucleotide, "A"),
    :t => count(nucleotide, "T"),
    :c => count(nucleotide, "C"),
    :g => count(nucleotide, "G")
  }
end

puts nucleotide_counts "ATCT"
