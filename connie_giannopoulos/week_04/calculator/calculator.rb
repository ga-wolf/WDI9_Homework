# Calculator.

require 'pry'

def main_menu 
  puts "[q] - quit"
  puts "[+] - add"
  puts "[-] - minus"
  puts "[/] - divide"
  puts "[*] - multiply"
  puts "[sq] - square root"
  puts "[**] - exponent"
end

def fetch_input(prompt)
  print prompt
  gets.chomp
end

def fetch_number(prompt)
  print prompt
  gets.to_f # floating point
end

# Calculator Functions
# Basic Arithmetic
def add(num1, num2)
  num1 + num2
end

def minus(num1, num2)
  num1 - num2
end

def divide(num1, num2)
  num1 / num2
end

def multiply(num1, num2)
  num1 * num2
end

# Advanced Calculator
def square_root(num1)
  Math.sqrt(num1)
end

def pow(num1, num2)
  num1 ** num2
end

main_menu
user_choice = fetch_input "Please enter your selecion: "

until user_choice == 'q'

  # Basic
  if user_choice == '+'
    num1 = fetch_number "Whats the 1st num? "
    num2 = fetch_number "Whats the 2nd num? "
    puts "The result is #{add(num1, num2)}"
  end

  if user_choice == '-'
    num1 = fetch_number "Whats the 1st num? "
    num2 = fetch_number "Whats the 2nd num? "
    puts "The result is #{minus(num1, num2)}"
  end

  if user_choice == '/'
    num1 = fetch_number "Whats the 1st num? "
    num2 = fetch_number "Whats the 2nd num? "
    puts "The result is #{divide(num1, num2)}"
  end

  if user_choice == '*'
    num1 = fetch_number "Whats the 1st num? "
    num2 = fetch_number "Whats the 2nd num? "
    puts "The result is #{multiply(num1, num2)}"
  end

  # Advanced
  if user_choice == 'sq'
    num1 = fetch_number "What's the number you want the square root of? "
    puts "The result is #{square_root(num1)}"
  end

  if user_choice == '**'
    num1 = fetch_number "Whats the 1st num? "
    num2 = fetch_number "Whats the 2nd num? "
    puts "The result is #{pow(num1, num2)}"
  end

  main_menu
  user_choice = fetch_input "Please enter your selecion: "
  
end

puts "Thank you for using the best calculator in the universe."