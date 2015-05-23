# Serge Responds

# Serge answers 'Sure.' if you ask him a question.

# He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

# He says 'Fine. Be that way!' if you address him without actually saying anything.

# He answers 'Whatever.' to anything else.

# What do you need to do?

# Do it in Ruby.
# Make sure you use classes and try to use some instance variables
# If you have flown through it, try and figure out how to call methods on the class itself
# require 'pry'

# class Serge

#   def ask_serge_nothing
#     puts "What do you want?"
#     user_input = gets.chomp
#     if user_input == ""
#       puts "Fine. be that way!"
#     end
#   end

#   def ask_serge_question
#     puts "What do you want?"
#     user_input = gets.chomp
#     if user_input.include? '?'
#       puts "Sure"
#     end
#   end 
#   binding.pry
# Serge.question

# end

# binding.pry

# ask_serge_question

####Jacks Version######

#Speak Method
#Methods that determine whether:
  #The person is quizicle
  # Silent
  # Loud

require 'pry'

class Serge
  # attr_accessor :statement
  # def initialize statement
  #   @statement = statement
  # end

  def speak ( statement )
    @statement = statement

    case
    when quizzical?
      puts "sure"
    when silent?
      puts "fine be that way"
    when loud?
      puts"Woah calm down!"
    else
      puts "Whatever"
    end
      

    # puts"Sure." if quizzical?
    # puts"Fine, be that way." if silent?
    # puts"Woah, calm down!" if loud?

  end

  def quizzical?
    @statement.strip.end_with?( '?' )
    # binding.pry
  end

  def silent?
    @statement.strip.empty?
  end

  def loud?
    (@statement == @statement.upcase) && !@statement.strip.empty?
  end

end

serge = Serge.new

# serge.speak( "THIS IS CAPITALS" )

binding.pry



