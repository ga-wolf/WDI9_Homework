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


#simple dreadful calculator
require 'pry'
require "cmath"


def main_menu
  puts "[q] - quit"
  puts "[+] - add"
  puts "[-] - subtract"
  puts "[*] - multiply"
  puts "[/] - divide"
  puts "[^] - exponent"
  puts "[~] - root"
  puts "[#] - trig menu"
end

def trig_menu
  puts "[q] - quit"
  puts "[b] - back"
  puts "[s] - sine"
  puts "[c] - cosine"
  puts "[t] - tangent"
  puts "[si] - inverse sine"
  puts "[ci] - inverse cosine"
  puts "[ti] - inverse tangent"
end

def fetch_input(prompt)
  print prompt
  gets.chomp #implicit return again
end

def fetch_number(prompt)
  print prompt
  gets.to_f #allow decimal input
end

number1 = "Please input the first number: "
number2 = "Please input the second number: "
degree = "Please input the angle in radians: "
opposite = "Please input the opposite side: "
adjacent = "Please input the adjacent side: "
hypot = "Please input the hypotenuse: "


main_menu
user_choice = fetch_input "Please enter your selection: "
until user_choice == 'q'
  case user_choice
  when '+'
    n1 = fetch_number number1
    n2 = fetch_number number2
    puts "#{n1} plus #{n2} = #{ n1 + n2 }"
  when '-'
    n1 = fetch_number number1
    n2 = fetch_number number2
    puts "#{n1} minus #{n2} = #{ n1 - n2 }"
  when '*'
    n1 = fetch_number number1
    n2 = fetch_number number2
    puts "#{n1} times #{n2} = #{ n1 * n2 }"
  when '/'
    n1 = fetch_number number1
    n2 = fetch_number number2
    puts "#{n1} divided by #{n2} = #{ n1 / n2 }"
  when '^'
    n1 = fetch_number number1
    n2 = fetch_number number2
    puts "#{n1} to the power of #{n2} = #{ n1 ** n2 }"
  when '~'
    n1 = fetch_number number1
    n2 = fetch_number number2
    puts "#{n1} to the root factor of #{n2} = #{ n1 ** (1 / n2) }"
  when '#'
    trig_menu
  when 'b'
    main_menu
  when 'si'
    n1 = fetch_number opposite
    n2 = fetch_number hypot
    puts "The inverse sine of #{n1} / #{n2} = #{ CMath.asin(n1 / n2) } radians."
  when 'ci'
    n1 = fetch_number adjacent
    n2 = fetch_number hypot
    puts "The inverse cosine of #{n1} / #{n2} = #{ CMath.acos(n1 / n2) } radians."
  when 'ti'
    n1 = fetch_number opposite
    n2 = fetch_number adjacent
    puts "The inverse tangent of #{n1} / #{n2} = #{ CMath.atan(n1 / n2) } radians."
  when 's'
    n1 = fetch_number degree
    puts "The sine of #{n1} radians = #{ CMath.sin(n1) }."
  when 'c'
    n1 = fetch_number degree
    puts "The cosine of #{n1} radians = #{ CMath.cos(n1) }."
  when 't'
    n1 = fetch_number degree
    puts "The tangent of #{n1} radians = #{ CMath.tan(n1) }."
  end
  main_menu
  user_choice = fetch_input "Please enter your selection: "
end

"Thank you for using dreadful calculator!"