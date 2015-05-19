#simple calculator for arithmatics n shit 
require 'pry'

#prompt the user for operations 
def main_menu()
	puts "Please choose from the following: 
	[b] = basic_func
	[ex] = extended_func
	[q] = quit"
end
def basic_func()
	puts "Please choose from the following: 
	[a] = addition
	[s] = subtraction
	[m] = multiplication
	[d] = division"
end
def extended_func()
	puts "Please choose from the following:
	[e] = exponent
	[sq] = square root"
end
def fetch_input(prompt)
	print prompt
	gets.chomp #implicit return
end

def get_num(prompt)
	print prompt 
	gets.to_f
end
def addition()
	a = get_num "What's the first number?"
	b = get_num "What's the second number?"
	result = a + b
end

def subtraction()
	a = get_num "What's the first number?"
	b = get_num "What's the second number?"
	result = a - b
end

def divide ()
	a = get_num "What's the first number?"
	b = get_num "What's the second number?"	
	result = a/b	
end	 

def multiply ()
	a = get_num "What's the first number?"
	b = get_num "What's the second number?"
	result = a*b
end 

def exponent ()
	a = get_num "What's the first number?"
	b = get_num "What's the second number?"	
	result = a**b
end

def sqRoot ()
	a = get_num "What's the number you want the square root of?"
	result = Math.sqrt(a)
end
main_menu 
user_choice = fetch_input "Please choose your operation: "

until user_choice == 'q'
	#code goes here 
	if user_choice == 'b'
		basic_func
		user_choice = fetch_input "please enter your selection"
		case user_choice 
		when 'a'
			p "The result of your equation is #{addition}"
		when 's'
			p "The result of your equation is #{subtraction}"
		when 'd'
			p "The result of your equation is #{divide}"
		when 'm'
			p "The result of your equation is #{multiply}"
		when 'e'
			p "The result of your equation is #{exponent}"
		when 'sq'
			p "The result of your equation is #{sqRoot}"
		else 
			"This choice does not exist"
		end
	elsif user_choice == 'ex'
		extended_func
		user_choice = fetch_input "please enter your selection"
		case user_choice 
		when 'a'
			p "The result of your equation is #{addition}"
		when 's'
			p "The result of your equation is #{subtraction}"
		when 'd'
			p "The result of your equation is #{divide}"
		when 'm'
			p "The result of your equation is #{multiply}"
		when 'e'
			p "The result of your equation is #{exponent}"
		when 'sq'
			p "The result of your equation is #{sqRoot}"
		else 
			"This choice does not exist"
		end
	end
	main_menu 
	user_choice = fetch_input "please enter your selection"
end

puts "We hope you're slightly less bad at math now, have a nice day."
binding.pry #equivalent to debugger in JS
