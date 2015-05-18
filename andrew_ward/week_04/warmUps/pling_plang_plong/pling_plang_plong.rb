# Pling Plang Plong
# Write a program that converts a number to a string per the following rules:

# If the number contains 3 as a prime factor, output 'Pling'. If the number contains 5 as a prime factor, output 'Plang'. If the number contains 7 as a prime factor, output 'Plong'.

# If the number does not contain 3, 5, or 7 as a prime factor, simply return the string representation of the number itself.



def pling_plang_plong (num)

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


puts "Please select a number"
number = gets.to_i

puts pling_plang_plong(number)