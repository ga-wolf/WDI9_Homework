# What are the requirements? #

# We need something an initialize method ( initialize )
# We need a name method ( generate_name )
# We need something to generate the letters ( prefix )
# We need something to generate the numbers ( suffix )
# We need a reset method ( that just calls the name method ) ( reset )

class Robot
  def initialize
    generate_name
  end

  def generate_name
    @name = "#{ prefix }#{ suffix }"
    puts "Name: #{ @name }"
  end

  def prefix
    alphabet = ( 'A' .. 'Z' ).to_a  # Generate the letters array
    alphabet.sample( 2 ).join( '' ) # 2 Random letters between A and Z
  end

  def suffix
    Random.rand( 100 .. 999 )  # 3 Random numbers
  end

  def reset
    generate_name
  end
end

robot = Robot.new
robot.reset










