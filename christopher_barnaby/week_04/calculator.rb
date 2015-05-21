#Simple calculator

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



def main_menu       #Doesn't need anything passed into it, so no arguments. 

  puts "[a] - addition"
  puts "[s] - subtraction"
  puts "[m] - multiplication"
  puts "[d] - division"
  puts "[r] - square root"
  puts "[e] - exponentiation"
  puts "[home] - main menu"
  puts "[q] - quit"
end

def fetch_input(prompt)   #Any time we want text input from the user, we can use this function
  print prompt  
  gets.downcase.chomp    #Implicit return - takes whatever the user inputs, chomps it, returns it
end

def fetch_number(prompt)
  print prompt
  gets.to_f     #Will parse the data entered by the user as a floating point number.
end 

def add(a,b)
  a+b
end

def subtraction(a,b)
  a-b
end

def multiplication(a,b)
  a*b
end

def division(a,b)
  a/b
end

def square_root(a)
  Math.sqrt(a)
end

def exponentiation(a,b)
  a**b
end



main_menu
user_choice = fetch_input("Please enter your selection: ")
until user_choice == "q"

  if user_choice == "a"
    puts "Addition"
    num1 = fetch_number "Enter the augend: "
    num2 = fetch_number "Enter the addend: "
    puts "The sum of #{num1} and #{num2} is #{add(num1, num2)}"
  elsif user_choice == "s"
    puts "Subtraction"
    num1 = fetch_number "Enter the minuend: "
    num2 = fetch_number "Enter the subtrahend: "
    puts "The difference between #{num1} and #{num2} is #{subtraction(num1, num2)}"
  elsif user_choice == "m"
    puts "Multiplication"
    num1 = fetch_number "Enter your multiplicand: "
    num2 = fetch_number "Enter your multiplier: "
    puts "The product of #{num1} and #{num2} is #{multiplication(num1, num2)}"
  elsif user_choice == "d"
    puts "Division"
    num1 = fetch_number "Enter the dividend: "
    num2 = fetch_number "Enter the divisor: "
    puts "The quotient of #{num1} and #{num2} is #{division(num1, num2)}"
  elsif user_choice == "r"
    puts "Square root"
    num = "Enter the radicand: "
    puts "The square root of #{num} is #{square_root(num)}"
  elsif user_choice == "e"
    puts "Exponentiation"
    num1 = fetch_number "Enter the base: "
    num2 = fetch_number "Enter the exponent: "
    puts "The power of base #{num1} and exponent #{num2} is #{exponentiation(num1, num2)}"
  end
  main_menu
  user_choice = fetch_input("Please enter your selection: ")
end

puts "Thanks for quitting, asshole. What, you think you're better than me? Mr 'I don't need to calculate shit anymore'?"

