require 'pry'
require 'pry-byebug'
# Speak method
# methods that determine whether:
#   the person is quizzical
#   silent
#   and loud

class Serge
  def self.speak statement
    Serge.new.speak statement
  end

  def speak( statement )
    @statement = statement

    case true
    when quizzical?
      puts "Sure."
    when silent?
      puts "Fine, be that way."
    when loud?
      puts "Woah, calm down."
    else
      puts "Whatever."
    end

  end

  def quizzical?
    @statement.strip.end_with?( "?" )
  end

  def silent?
    @statement.strip.empty?
  end

  def loud?
    ( @statement == @statement.upcase ) && !silent?
  end
end


serge = Serge.new
serge.speak( "" )

# Serge.speak "WHATHTHK"