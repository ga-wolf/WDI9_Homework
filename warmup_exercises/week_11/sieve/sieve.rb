# We need our class
#   In that we need an initialize method
#   A primes method - this just calls the calculate method
#   A calculate method that is private
#     We make an array of every number between 2 and the limit passed in
#     We start with an empty array
#     We need a loop
#       Gets the current number
#       Pushes it into the primes array
#       Rejects any number that is divisible by the current number
#       Returns the primes

class Sieve
  attr_reader :limit
  def initialize( limit )
    @limit = limit
  end

  def primes
    @primes = calculate
  end

  private
  def calculate
    numbers = (2..@limit).to_a
    primes = []
    until numbers.empty?
      target = numbers.shift # numbers[0]
      primes << target
      numbers.reject! { |i| i % target == 0 }
    end
    primes
  end
end