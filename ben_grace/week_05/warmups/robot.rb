require 'pry'

class Robot 

  def initialize
    generate_name
  end

  def generate_name
    puts "generate name was called"
    @name = "#{ prefix }#{ suffix }"
    puts "Name: #{@name}"
  end

  def prefix
    #alphabet .sample(num) will select two things randomly from the array. The amount depends on the num enetered
    #Generates random letters bewteen A and Z
    alphabet = ( 'A'..'Z' ).to_a
    alphabet.sample( 2 ).join( '' )

  end

  def suffix
    Random.rand(100 .. 999).to_s #this will return 3 random numbers
  end

  def reset
    generate_name
  end

end


robot = Robot.new
robot.reset
