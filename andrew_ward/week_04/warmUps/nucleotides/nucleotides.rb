# There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.

# There are no other nucleotides.

# Make sure that you validate it has nucleotides!

# Find how many of each nucleotides are in a string that you pass in to a function

require "rainbow"

nucleotides = {:A => 0, :C => 0, :G => 0, :T => 0, :U => 0}

def nucleotide_detector string, nucleotides

  string.each_char do |char|
    nucleotides.each do |key,val|
      if char.to_sym == key
        nucleotides[key] += 1
      end
    end
  end

  total_nucleotides = 0

  nucleotides.each do |key,val|
    total_nucleotides += nucleotides[key]
  end

  puts Rainbow("There are #{total_nucleotides} nucleotides in total.").green
  puts Rainbow(nucleotides).cyan
end

print Rainbow("What string would you like to check for nucleotides? ").red
str = gets.chomp.upcase

nucleotide_detector str, nucleotides



