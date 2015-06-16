require 'pry'
class Nucleotide
  attr_reader :nucleotide
  def initialize( nucleotide )
    @nucleotide = nucleotide
  end

  def hamming_distance( other_nucleotide )
    difference = 0
    nucleotide.each_char.with_index do |char, index|
      if char != other_nucleotide[ index ]
        difference += 1
      end
    end
    difference
  end

end

nucleotide_one = Nucleotide.new( "GAGCCTACTAACGGGAT" )
nucleotide_two = Nucleotide.new( "CATCGTAATGACGGCCT" )

puts nucleotide_one.hamming_distance( nucleotide_two.nucleotide )