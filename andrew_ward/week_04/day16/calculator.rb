# Simple & Dreadful Calculator

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

require 'pry'

def main_menu
  puts "[q] - Quit"
  puts "[a] - Add"
  puts "[s] - Subtract"
  puts "[m] - Multiply"
  puts "[d] - Divide"
  puts "[e] - Exponent"
  puts "[sq] - Square root"
end

def fetch_input(prompt)
  print prompt
  gets.chomp
end

def fetch_number (prompt)
  print prompt
  gets.to_f # allow decimal input
end

def add (a,b) # a
  a + b
end

def subtract (a,b) # s
  a - b
end

def multiply (a,b) # m
  a * b
end

def divide (a,b) # d
  a / b
end

def exponent(a,b) # e
  a**b
end

def sq_root (a) # sq
  Math.sqrt(a)
end





main_menu
user_choice = fetch_input "Please enter your selection: "

until user_choice == 'q'
   # my code goes here ...

  if user_choice == 'a'
    puts "ADD"
    num1 = fetch_number "First number?: "
    num2 = fetch_number "Second number?: "
    puts add(num1,num2)
  elsif user_choice =='s'
    puts "SUBTRACT"
    num1 = fetch_number "First number?: "
    num2 = fetch_number "Second number?: "
    puts subtract(num1,num2)
  elsif user_choice == 'm'
    puts "MULTIPLY"
    num1 = fetch_number "First number?: "
    num2 = fetch_number "Second number?: "
    puts multiply(num1,num2)
  elsif user_choice == 'd'
    puts "DIVIDE"
    num1 = fetch_number "Number to be divided: "
    num2 = fetch_number "What it is being divided by: "
    puts divide(num1,num2)
  elsif user_choice == 'e'
    puts "EXPONENT"
    num1 = fetch_number "Number being multiplied: "
    num2 = fetch_number "The exponential factor: "
    puts exponent(num1,num2)
  elsif user_choice == 'sq'
    puts "SQUARE ROOT"
    num1 = fetch_number "Square root of this number?: "
    puts sq_root(num1)
  end

   main_menu
   user_choice = fetch_input "Please enter your selection: "
end

puts "Thank you for using this Dreadful Calculator."


