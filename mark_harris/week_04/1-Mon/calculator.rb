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


require "pry"

def main_menu
  puts "[1] - Basic Maths"
  puts "[2] - Advanced Maths"
  puts "[q] - Quit"
end

def basic_menu
  puts "[1] - Addition"
  puts "[2] - Subtract"
  puts "[3] - Multiply"
  puts "[4] - Divide"
end

def adv_menu
  puts "[1] - Power"
  puts "[2] - Square Root"
end



def fetch_input(prompt)
  print prompt
  gets.chomp  
end

def fetch_number(prompt)
  print prompt
  gets.to_f         # allow decimal numbers
end



def add(a, b)
  a + b
end

def subtract(a, b)
  a - b
end

def multiply(a, b)
  a * b
end

def divide(a, b)
  a / b
end

def power(a, b)
  a ** b
end

def sqr_root(a)
  Math.sqrt(a)
end


main_menu
user_choice = fetch_input "Please enter your selection: "
until user_choice == "q"
  
  user_choice_2 = 0
  user_choice_3 = 0

  case user_choice
  when "1"
    basic_menu
    user_choice_2 = fetch_input "Please enter your selection: "
  when "2"
    adv_menu
    user_choice_3 = fetch_input "Please enter your selection: "
  end

  case user_choice_2
  when "1"
    num1 = fetch_number "Enter the 1st number: "
    num2 = fetch_number "Enter the 2nd number: "
    puts "#{num1} + #{num2} = #{ add(num1, num2) } \n\n"

  when "2"
    num1 = fetch_number "Enter the 1st number: "
    num2 = fetch_number "Enter the 2nd number: "
    puts "#{num1} - #{num2} = #{ subtract(num1, num2) } \n\n"

  when "3"
    num1 = fetch_number "Enter the 1st number: "
    num2 = fetch_number "Enter the 2nd number: "
    puts "#{num1} x #{num2} = #{ multiply(num1, num2) } \n\n"

  when "4"
    num1 = fetch_number "Enter the 1st number: "
    num2 = fetch_number "Enter the 2nd number: "
    puts "#{num1} / #{num2} = #{ divide(num1, num2) } \n\n"
  end

  case user_choice_3
  when "1"
    num1 = fetch_number "Enter the 1st number: "
    num2 = fetch_number "Enter the 2nd number: "
    puts "#{num1} ** #{num2} = #{ power(num1, num2) } \n\n"

  when "2"
    num1 = fetch_number "Enter the number: "
    puts "Square root of #{num1} = #{ sqr_root(num1) } \n\n"

  end

    main_menu
    user_choice = fetch_input "Please enter your selection: "
end




