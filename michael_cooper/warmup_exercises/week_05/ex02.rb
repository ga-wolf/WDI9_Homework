# When robots come off the factory floor, they have no name.

# The first time you boot them up, a random name is generated, such as RX837 or BC811.

# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gets a new name.

# For bonus points

# Did you get the tests passing and the code clean? If you want to, these are some additional things you could try:

# Random names means a risk of collisions. Make sure the same name is never used twice. Feel free to introduce additional tests.
# Then please share your thoughts in a comment on the submission. Did this experiment make the code better? Worse? Did you learn anything from it?

require 'pry'

class Robot
  attr_reader :name

  def initialize
    generate_name
    puts @name
  end

  def generate_name
    @name = prefix + suffix.to_s
  end

  def prefix
    alpha = ('A'..'Z').to_a
    alpha.sample(2).join()
  end

  def suffix
    Random.rand(100 ... 999).to_i
  end

  def reset
    generate_name
  end
end
binding.pry
robot = Robot.new


