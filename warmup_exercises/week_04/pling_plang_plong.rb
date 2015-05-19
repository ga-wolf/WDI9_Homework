 # Need to receive a value from the user
 # Test if divisible by 3
 # Test if divisible by 5
 # Test if divisible by 7
 # Work with the string

def fetch_number
  print "What is your number? " # Will print this text and allow you to type in next to it
  gets.to_i # Will ask for a user input and then turn it into an integer (will also return)
end

def divisible_by_three? number 
  # When a method returns true or false, it is convention to have the question mark at the end
  # Remember that there are optional parentheses - def divisible_by_three?( number )
  number % 3 == 0
end

def divisible_by_five? number
  number % 5 == 0
end

def divisible_by_seven? number
  number % 7 == 0
end

def convert_string 
  number = fetch_number # Call the fetch_number method and store whatever is returned as number

  # 



  not_divisible = divisible_by_three?(number) && divisible_by_five?(number) && divisible_by_seven?(number)

  if not_divisible || number < 3
    return number.to_i
  end

  string = ""
  string += "Pling" if divisible_by_three? number
  string += "Plang" if divisible_by_five? number
  string += "Plong" if divisible_by_seven? number
  string
end

puts convert_string








