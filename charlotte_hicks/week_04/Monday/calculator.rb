require "pry"

def main_menu
  puts "Main Menu"
  puts "[q] - quit"
  puts "[a] - add"
  puts "[m] - multiply"
  puts "[s] - subtract"
  puts "[d] - divide"
  puts "[e] - exponent"
  puts "[r] - square root"
end

def fetch_input(prompt)
  print prompt
  gets.chomp #implicit return  
end

def fetch_number(prompt)
  print prompt
  gets.to_f
end

def add(num1, num2)
  num1 + num2
end

def multiply(num1, num2)
  num1 * num2
end

def subtract(num1, num2)
  num1 - num2
end

def divide(num1, num2)
  num1 / num2
end

def exponent(num1, num2)
  num1 ** num2
end

def square_root(num)
  Math.sqrt(num)
end
main_menu
user_choice = fetch_input "Please enter your selection: "


until user_choice == 'q'
  if user_choice == 'a'
    print "What is the first number you would like to add?: "
    num1 = gets.to_f
    print "What is the second number you would like to add?: "
    num2 = gets.to_f
    puts add(num1, num2)

  elsif user_choice == 'm'
    print "What is the first number you would like to multiply?: "
    num1 = gets.to_f
    print "What is the second number you would like to multiply?: "
    num2 = gets.to_f
    puts multiply(num1, num2)

  elsif user_choice == 's'
    print "What is the number you would like to subtract from?: "
    num1 = gets.to_f
    print "How much would you like to subtract from it?: "
    num2 = gets.to_f
    puts subtract(num1, num2)

  elsif user_choice == 'd'
    print "What is the number you would like to divide?: "
    num1 = gets.to_f
    print "How much would you like to divide it by?: "
    num2 = gets.to_f
    puts divide(num1, num2)

  elsif user_choice == 'e'
    print "What is your base number?: "
    num1 = gets.to_f
    print "What is the exponent?: "
    num2 = gets.to_f
    puts exponent(num1, num2)

  elsif user_choice == 'r'
    print "What number would you like to find the square root of?: "
    num = gets.to_f
    puts square_root(num)

  end
  main_menu
  user_choice = fetch_input "Please enter your selection: "
end

puts "Thank you for using this calculator"