

def valid_nucleotide? char

  %W[A T C G U].include? char

end

def count nucleotide, char

  if valid_nucleotide? char
    nucleotide.count char
  else
    puts "nup"
    0
  end

  # puts "The nucleotide is #{nucleotide} and the char is #{char} "
end

def nucleotides_count nucleotide

  {
    :a => count(nucleotide,"A"),
    :t => count(nucleotide, "T"),
    :c => count(nucleotide,"C"),
    :g => count(nucleotide,"G")
  }
end

puts nucleotides_count "ACTGAAA"