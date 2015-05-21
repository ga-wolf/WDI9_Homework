#simple calculator

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


#this is the menu the user chooses from
def main_menu
	puts "[a] - addition"
	puts "[s] - subtraction"
	puts "[m] - multiplication"
	puts "[d] - divison"
	puts "[exp] - exponent"
	puts "[sqrt] - square root"
	puts "[q] - quit"
end

################################
#this grabs input from the user
def fetch_input(prompt)
	print prompt
	gets.chomp #implicit return again
end

#this grabs numerical input from the user
def fetch_number(prompt)
	print prompt
	gets.to_f #allow decimal input
end
################################

################################
## CALCULATION FUNCTIONS/METHODS #######

#addition function
def addition(a,b)
	a + b
end

#subtraction function
def subtraction(a,b)
	a - b
end

#multiplication function
def multiplication(a,b)
	a * b
end

#division function
def division(a,b)
	a / b
end

#exponent function
def exponent(a,b)
	a ** b
end

#square_root function
def square_root(a)
	Math.sqrt(a)
end
################################

#### MAIN PROGRAM #############

main_menu #outputs main menu
user_choice = fetch_input "Please enter your selection: "

until user_choice == "q" # q quits the calculator, until that happens keep cycling the user for a selection
	if user_choice == "a"# user selects addition
		num1 = fetch_number "What is the first number you want to add to: " #grabs the 1st number to input
		num2 = fetch_number "What is the second number you want to add: " #grabs the 2nd number to input
		puts "The result equals: #{addition(num1,num2)}" # throws the input into the additon function and puts the result.
	end

	if user_choice == "s"
		num1 = fetch_number "What is the first number you want to subtract from: "
		num2 = fetch_number "What is the second number you want to subtract: "
		puts "The result equals: #{subtraction(num1,num2)}"
	end

	if user_choice == "m"
		num1 = fetch_number "What is the first number you want to multiply: "
		num2 = fetch_number "What is the second number you want to multiply by: "
		puts "The result equals: #{multiplication(num1,num2)}"
	end

	if user_choice == "d"
		num1 = fetch_number "What is the first number you want to divide: "
		num2 = fetch_number "What is the second number you want to divide by: "
		puts "The result equals: #{division(num1,num2)}"
	end


	if user_choice == "exp"
		num1 = fetch_number "What is the number you want to exponentially multiply: "
		num2 = fetch_number "By how much: "
		puts "The result equals: #{exponent(num1,num2)}"
	end

	if user_choice == "sqrt"
		num = fetch_number "What is the number you want to find the square root of: "
		puts "The result equals: #{square_root(num)}"
	end


	main_menu
	user_choice = fetch_input "Please enter your selection: "
end

puts "Thanks for using my calculator" # if q is selected, then the program comes out of the loop and ends with this line.