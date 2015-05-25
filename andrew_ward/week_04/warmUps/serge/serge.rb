# Serge Responds

# Serge answers 'Sure.' if you ask him a question.

# He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

# He says 'Fine. Be that way!' if you address him without actually saying anything.

# He answers 'Whatever.' to anything else.

# What do you need to do?

# Do it in Ruby.
# Make sure you use classes and try to use some instance variables
# If you have flown through it, try and figure out how to call methods on the class itself

require 'pry'
class Serge

  def speak statement
    @statement = statement

    case
    when quizzical?
      puts "Sure."
    when loud?
      puts "Woah, calm down!"
    when silent?
      "Fine. Be that way!"
    else
      "Whatever."
    end


  end

  def quizzical?
    @statement.strip.end_with?("?")

  end

  def silent?
    @statement.strip.empty?

  end

  def loud?
    (@statement == @statement.upcase) && !silent?
  end

  # attr_accessor :question, :empty, :angry, :nothing

  # def initialize question, empty, angry, nothing
  #   @question = question
  #   @empty = empty
  #   @angry = angry
  #   @nothing = nothing
  # end

  # def talk_to_serge string
  #   if (string[-1] == "?")
  #     puts "Sure."
  #   elsif (string == "")
  #     puts "Fine. Be that way!"
  #   elsif (string == string.upcase)
  #     puts "Woah, chill out!"
  #   else
  #     puts "Whatever."
  #   end

  # end
end

binding.pry

serge = Serge.new
serge.speak ("")



