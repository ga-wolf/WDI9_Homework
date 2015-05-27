# # Simple Dreadul Calculator
# Calculator
# Explanation

# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:

# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1

# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2

# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Phase 3

# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality
# 


def main_menu
  puts "[a] - add"
  puts "[s] - substract"
  puts "[m] - multiply"
  puts "[d] - divide"
  puts "[sq] - square"
  puts "[cu] - cubed"
  puts "[sqr] - squareRoot"
  puts "[q] - quit"
end

def fetch_input(prompt)
  puts prompt
  gets.chomp #implicit return
end

def fetch_number(prompt)
  puts prompt
  gets.to_f
end

user_choice = 's'


until user_choice == 'q'
  main_menu
  user_choice = fetch_input("Choose a function")

  case user_choice
  when "a"
    first_number = fetch_number("First number")
    second_number = fetch_number("to be added with:")
    puts "#{first_number} plus #{second_number} is:"
    puts first_number + second_number
  when "s"
    first_number = fetch_number("First number")
    second_number = fetch_number("to be substracted by:")
    puts "#{first_number} substract #{second_number} is:"
    puts first_number - second_number
  when "m"
    first_number = fetch_number("First number")
    second_number = fetch_number("to be multiplied with:")
    puts "#{first_number} multiplied by #{second_number} is:"
    puts first_number * second_number
  when "d"
    first_number = fetch_number("First number")
    second_number = fetch_number("to be divided by:")
    puts "#{first_number} divided by #{second_number} is:"
    puts first_number / second_number
  when "sq"
    first_number = fetch_number("What would you like to Square?")
    puts "The square of #{first_number} is:"
    puts first_number ** 2
  when "cu"
    first_number = fetch_number("What would you like to cube?")
    puts "The cube of #{first_number} is:"
    puts first_number ** 3
  when "sqr"
    first_number = fetch_number("What number would you like the square root of?")
    puts "The square root of #{first_number} is:"
    puts first_number ** 0.5  
  end
end

puts "Thank you for using Calc"









