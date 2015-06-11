# Write a program that converts a number to a string per the following rules:

# If the number contains 3 as a prime factor, output 'Pling'. If the number contains 5 as a prime factor, output 'Plang'. If the number contains 7 as a prime factor, output 'Plong'.

# If the number does not contain 3, 5, or 7 as a prime factor, simply return the string representation of the number itself.

require 'pry'

def fetch_number
  print "What is your number? "
  num = gets.to_i
end

def pling_plang_plong
  num = fetch_number
  num.times do |i|
    result = ""
    if i % 3.0 == 0
      result += "Pling"
    end
    if i % 5.0 == 0
      result += "Plang"
    end
    if i % 7.0 == 0
      result += "Plong"
    end
    unless result == ""
      puts result 
    else 
      puts i
    end
  end
end

binding.pry