def show_menu
  puts 'BASIC FUNCTIONALITY:'
  puts '[+]  Addition'
  puts '[-]  Subtraction'
  puts '[*]  Multiplication'
  puts '[/]  Division'
  puts ''
  puts 'ADVANCED FUNCTIONALITY:'
  puts '[^]  Exponent'
  puts '[s]  Square Root'
  puts ''
  puts '[q]  Quit Program'
end

def get_string(msg)
  print msg
  gets.chomp.downcase
end

def get_float(msg)
  get_string(msg).to_f
end 

def addition
  num1 = get_float 'Number 1: '
  num2 = get_float 'Number 2: '

  puts num1 + num2
end

def subtraction
  num1 = get_float 'Number 1: '
  num2 = get_float 'Number 2: '

  puts num1 - num2
end

def multiplication
  num1 = get_float 'Number 1: '
  num2 = get_float 'Number 2: '

  puts num1 * num2
end

def division
  num1 = get_float 'Number 1: '
  num2 = get_float 'Number 2: '

  puts num1 / num2
end

def exponent
  base = get_float 'Number: '
  exponent = get_float 'Exponent: '

  puts base ** exponent
end

def square_root
  num = get_float 'Number: '

  puts Math.sqrt num
end

def main
  selection = '!'
  show_menu

  while selection != 'q'
    selection = get_string 'Please Select An Option: '

    case selection
    when '+'
      addition
    when '-'
      subtraction
    when '*'
      multiplication
    when '/'
      division
    when '^'
      exponent
    when 's'
      square_root
    end
    
  end
end

main