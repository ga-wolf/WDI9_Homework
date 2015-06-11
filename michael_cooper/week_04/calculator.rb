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
  puts "[A] - Addition"
  puts "[S] - Subtraction"
  puts "[M] - Multiplication"
  puts "[D] - Division"
  puts "[ADV] - Advanced Options"
  puts "[Q] - Quit"
end

def advanced_menu
  puts "[S] - Square Root of a number"
  puts "[R] - Return to default menu"
  advanced_calcs
end

def advanced_calcs
  adv_selection = fetch_input "Please enter your selection "
  until adv_selection.upcase == 'R'
    if adv_selection.upcase == 'S'
      num1 = fetch_number "Please enter the number "
      puts "The square root of #{num1} is #{Math.sqrt(num1)}"
    end
  advanced_menu
  adv_selection = "Please enter your selection"
  end
  main_menu
  basic_calcs
end

def fetch_input(prompt)
  print prompt
  gets.chomp #Implicit return
end

def fetch_number(prompt)
  print prompt
  gets.to_f
end

main_menu
basic_calcs

def basic_calcs
  user_choice = fetch_input "Please enter your selection: "
  until user_choice.upcase == 'Q'
    if user_choice.upcase == 'A'
      num1 = fetch_number "Please enter the first number:"
      num2 = fetch_number "Please enter the second number:"
      puts "#{num1} + #{num2} is equal to #{num1 + num2}"
    elsif user_choice.upcase == 'M'
      num1 = fetch_number "Please enter the first number:"
      num2 = fetch_number "Please enter the second number:"
      puts "#{num1} * #{num2} is equal to #{num1 * num2}"
    elsif user_choice.upcase == 'S'
      num1 = fetch_number "Please enter the first number:"
      num2 = fetch_number "Please enter the second number:"
      puts "#{num1} - #{num2} is equal to #{num1 - num2}"
    elsif user_choice.upcase == 'D'
      num1 = fetch_number "Please enter the first number:"
      num2 = fetch_number "Please enter the second number:"
      puts "#{num1} / #{num2} is equal to #{num1 / num2}"
    elsif user_choice.upcase == 'ADV'
      advanced_menu
      advanced_calcs
    end
    main_menu
  end
end

puts "Thank you for using this piece of trash"
