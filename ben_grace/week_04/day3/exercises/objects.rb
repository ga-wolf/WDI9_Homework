# oop = object orientated programming



groucho = {
  :instrument => 'guitar',
  :vice => 'cigars'
}

harpo = {
  :instrument => 'harp',
  :vice => 'mutism'
}

chico = {
  :instrument => 'piano',
  :vice => 'hijinx'
}

######## Alternate ########

vices = {
  :groucho => 'cigars',
  :harpo => 'mutism',
  :chico => 'hijinx'
}

instruments = {
  :groucho => 'guitar',
  :harpo => 'harp',
  :chico => 'piano'
}

def plays(hash)#The h refers to the hash the method is going to use
  hash.each do |brother, instrument|
    puts "#{brother} plays the #{instrument}."
  end
end

# def enjoys(hash)

plays(instruments)#This grabs the instruments hash and runs the play method on it


##### JS object way of doing things ####

# groucho = Object.new
# def groucho.vice
#   'cigars'
# end

# def groucho.instrument
#   'guitar'
# end

# def groucho.play
#   "Groucho plays the #{ instrument }."
# end

# def groucho.enjoy
#   "Groucho enjoys #{ vice }."
# end

# def groucho.act
#   "Look at me everyone, I am acting"
# end

# harpo = Object.new

# def harpo.vice
#   "mutism"
# end

# def harpo.intrusment
#   "harp"
# end

# def harpo.play
#   "harpo play's the #{ instrument }."
# end

# def harpo.enjoy
#   "harpo enjoys #{ vice }"
# end

# def harpo.act
#   "Look at me everyone I am acting without speaking"
# end

######## Factory ##########

class MarxBrother
  #ruby will setup these getters and setters automatically for you.
  attr_accessor :name, :vice, :instrument
  #Not working need to find out why
  def initialize(name, instrument, vice) #this automatically sets up default information for the selected class
    @name = name
    @instrument = instrument
    @vice = vice
  end

  # def name=(name)
  #   @name = name
  # end

  # def name
  #   @name
  # end

  # def vice=(vice) # setter
  #   @vice = vice
  # end

  # def vice # getter
  #   @vice
  # end

  # def instrument=(instrument)
  #   @instrument = instrument
  # end

  # def instrument
  #   @instrument
  # end

  def play
    "#{ @name } plays the #{ @instrument }"
  end

  def enjoy
    "#{ @name } enjoys the #{ @vice }"
  end

  def acting
    "Look at me everyone, I'm acting..."
  end

end



require 'pry'
binding.pry