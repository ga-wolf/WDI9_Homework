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
  puts "------------Main Menu----------------"
  puts "[q] - quit"
  puts "[b] - basic calculator"
  puts "[a] - advanced calculator"
  puts "-------------------------------------"

end

def calc_basic

  user_choice = ""

  until user_choice == "b"
    puts "--------Basic Calculator--------------"
    puts "[a] addition"
    puts "[s] subtraction"
    puts "[m] multiplication"
    puts "[d] division"
    puts ""
    puts "[b] back to main menu"
    puts "--------------------------------------"


    user_choice = fetch_input "Please enter your selection: "

    choices(user_choice)
  end

end





def calc_advanced
  user_choice = ""

  until user_choice == "b"
    puts "---------Advanced Calculator-----------"
    puts "[e] exponents"
    puts "[s] square roots"
    puts "[a] addition"
    puts "[s] subtraction"
    puts "[m] multiplication"
    puts "[d] division"
    puts ""
    puts "[b] back to main menu"
    puts "---------------------------------------"

    user_choice = fetch_input "Please enter your selection: "

    choices(user_choice)
  end

end



def choices(user_choice)
  case user_choice 
    when 'a'
      puts ">Addition<"
      num1 = fetch_number "Please enter first number: "
      num2 = fetch_number "Please enter second number: "
      addition(num1, num2)
      gets
    when 's'
      puts ">Subtraction<"
      num1 = fetch_number "Please enter base number: "
      num2 = fetch_number "Please enter amount to subtract: "
      subtraction(num1, num2)
      gets
    when 'm'
      puts ">multiplication<"
      num1 = fetch_number "Please enter first number: "
      num2 = fetch_number "Please enter second number: "
      multiplication(num1, num2)
      gets
    when 'd'
      puts ">Division<"
      num1 = fetch_number "Please enter base number: "
      num2 = fetch_number "Please enter amount to divide by: "
      division(num1, num2)
      gets
    when 'e'
      puts ">Exponents<"
      num1 = fetch_number "Please enter base number: "
      num2 = fetch_number "Please enter exponent: "
      exponent(num1, num2)
      gets
    when 's'
      puts ">Square Root<"
      num1 = fetch_number "Number to be square rooted: "
      square_root(num1)
      gets
    end
end


def fetch_input(prompt)
    print prompt
    gets.chomp
end


def fetch_number(prompt)
  print prompt
  gets.to_f
end

def addition(num1, num2)
  answer = num1+num2
  puts "---------------------------------------"
  puts "#{ num1 } + #{ num2 } is: #{ answer }" 
  puts "---------------------------------------"
end

def subtraction(num1, num2)
  answer = num1-num2
  puts "---------------------------------------"
  puts "#{ num1 } - #{ num2 } is: #{ answer }" 
  puts "---------------------------------------"
end

def multiplication(num1, num2)
  answer = num1 * num2
  puts "---------------------------------------"
  puts "#{ num1 } x #{ num2 } is: #{ answer }" 
  puts "---------------------------------------"
end

def division(num1, num2)
  answer = num1 / num2
  puts "---------------------------------------"
  puts "#{ num1 } / #{ num2 } is: #{ answer }" 
  puts "---------------------------------------"
end

def exponent(num1, num2)
  answer = num1**num2
  puts "---------------------------------------"
  puts "#{ num1 } to the power of #{ num2 } is: #{ answer }" 
  puts "---------------------------------------"
end

def square_root(num1)
  answer = Math.sqrt(num1)
  puts "---------------------------------------"
  puts "Square root of #{ num1 } is: #{ answer }" 
  puts "---------------------------------------"
end






main_menu
user_choice = fetch_input "Please enter your selection: "

until user_choice == 'q'
  case user_choice
  when 'b'
    calc_basic
  when 'a'
    calc_advanced
  end


  main_menu
  user_choice = fetch_input "Please enter your selection: "

end


