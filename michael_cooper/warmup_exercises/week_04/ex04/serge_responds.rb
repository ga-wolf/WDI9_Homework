require 'pry'
class Serge
  def speak
    @statement = get_string "Enter something for Serge to respond to:"

    case
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

  def get_string prompt
    puts prompt
    gets.chomp
  end

  def quizzical?
    @statement.strip.end_with? "?"
  end

  def silent?
    @statement.strip.empty?
  end

  def loud?
    ( @statement == @statement.upcase ) && !@statement.strip.empty?
  end
end

serge = Serge.new

binding.pry