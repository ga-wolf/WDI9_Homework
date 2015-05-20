# Write a program that converts a number to a string per the following rules:

# If the number contains 3 as a prime factor, output 'Pling'. If the number contains 5 as a prime factor, output 'Plang'. If the number contains 7 as a prime factor, output 'Plong'.

# If the number does not contain 3, 5, or 7 as a prime factor, simply return the string representation of the number itself.

# E.g.

# The prime factors of 28 are [2, 2, 7].

# # => "Plong"
# The prime factors of 1755 are [3, 3, 3, 5, 13].

# # => "PlingPlang"
# The prime factors of 34 are [2, 17].

# # => "34"

# require 'pry'

# puts "choose a number"
# num = gets.to_i

#   if(num % 3 == 0)
#     puts "pling"
#   if(num % 5 == 0)
#     puts "plang"
#   if(num % 7 == 0)
#   end

def fetch_number
  print"What is your number: "
  gets.to_i
end

def divisible_by_three? number
  number % 3 == 0
end

def divisible_by_five? number
  number % 5 == 0
end

def divisible_by_seven? number
  number % 7 == 0
end

def convert_string
  number = fetch_number

  not_divisible = !divisible_by_three?(number) && !divisible_by_five?(number) && !divisible_by_seven?(number)

  if not_divisible || number < 3
    return number.to_i
  end

  string = ""
  string += "pling" if divisible_by_three? number
  string += "plang" if divisible_by_five? number
  string += "plong" if divisible_by_seven? number
  string
end

puts convert_string





