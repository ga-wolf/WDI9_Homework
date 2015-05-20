require 'pry'

def main_menu
  puts "[q] - quit"
  puts "[a] - add"
  puts "[m] - multiply"
  puts "[d] - divide"
  puts "[min] - minus"
  puts "[sqr] - square"
  puts "[exp] - exponent"
  puts "[sqroot] - square root"
  puts "[f] - functionality"
end

def fetch_input(prompt)
  print prompt
  gets.chomp #implicit return
end

def fetch_number(prompt)
  print prompt
  gets.to_f #floating point allows decimal points
end

def add(a, b)
  a + b
end

def multiply(a, b)
  a * b
end

def divide(a, b)
  a / b
  if b == 0
    return "you broke everything!"
  end
end

def minus(a, b)
  a - b
end

def square(a)
  a * a
end

def exponent(a, b)
  a ** b
end

def sqr_root(a)
  Math.sqrt(a)
end








main_menu
user_choice = fetch_input "please enter your selection: "

until user_choice == 'q'
  #put code in here

  if user_choice == 'a'
    num1 = fetch_number 'Enter your first number: '
    num2 = fetch_number 'Enter your second number: '
    puts add(num1, num2)
  end

  if user_choice == 'm'
    num1 = fetch_number 'Enter your first number: '
    num2 = fetch_number 'Enter your second number: '
    puts multiply(num1, num2)
  end

  if user_choice == 'min'
    num1 = fetch_number 'Enter your first number: '
    num2 = fetch_number 'Enter your second number: '
    puts minus(num1, num2)
  end

  if user_choice == 'd'
    num1 = fetch_number 'Enter your first number: '
    num2 = fetch_number 'Enter your second number: '
    puts divide(num1, num2)
  end

  if user_choice == 'sqr'
    num1 = fetch_number 'Enter your first number: '
    puts square(num1)
  end

  if user_choice == 'exp'
    num1 = fetch_number 'Enter your first number: '
    num2 = fetch_number 'Enter your second number: '
    puts exponent(num1, num2)
  end

  if user_choice == 'sqroot'
    num1 = fetch_number 'Enter your first number: '
    puts sqr_root(num1)
  end

  if user_choice == 'f'
    puts "[add] - Will describe add functionality"
    puts "[multiply] - Will describe multiply functionality"
    puts "[minus] - Will describe minus functionality"
    puts "[divide] - Will describe divide functionality"
    puts "[square] - Will describe square functionality"
    puts "[exponent] - Will describe exponent functionality"
    puts "[square root] - Will describe square root functionality"
  end

  if user_choice == 'add'
      puts "This will add the first number to the second number"
  end

  if user_choice == 'multiply'
      puts "This will multiply two numbers together"
  end

  if user_choice == 'minus'
      puts "This will minus the first number from the second number"
  end

  if user_choice == 'divide'
      puts "This will divide the first number from the second number"
  end

  if user_choice == 'square'
      puts "This will return the square of the inputted number"
  end

  if user_choice == 'exponent'
      puts "This will square, cube, something a number. I Don't know man play with it and find out."
  end

  if user_choice == 'square root'
      puts "This will return the square root of the inputted number"
  end

  main_menu
  user_choice = fetch_input "please enter your selection: "
end