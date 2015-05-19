# Pling Plang Plong
# Write a program that converts a number to a string per the following rules:

# If the number contains 3 as a prime factor, output 'Pling'. If the number contains 5 as a prime factor, output 'Plang'. If the number contains 7 as a prime factor, output 'Plong'.

# If the number does not contain 3, 5, or 7 as a prime factor, simply return the string representation of the number itself.

## My solution

def pling_plang_plong num

  if num % 3 == 0
    print "Pling "
  end

  if num % 5 == 0
    print "Plang "
  end

  if num % 7 == 0
    print "Plong "
  end

  if ((num % 7 != 0 && num % 5 != 0) && num % 3 != 0)
    return num.to_s
  end
end

print "Please choose a number: "
number = gets.to_i

puts pling_plang_plong(number)

## Jack's solution - uses implicit return. More readable

def fetch_number
  print "Please choose a number: "
  gets.to_i
end

def divisible_by_three? number
  number % 3 == 0
end

def disible_by_five? number
  number % 5 == 0
end

def divisible_by_seven? number
  number % 7 == 0
end

def convert_string
  number = fetch_number
  string = ""
  string += "Pling " if divisible_by_three? number
  string += "Plang " if disible_by_five? number
  string += "Plong " if divisible_by_seven? number

  string
end

puts convert_string