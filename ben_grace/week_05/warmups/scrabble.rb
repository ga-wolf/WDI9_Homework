# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10

# require 'pry'

# class Scrabble
#   @group1 = 'A, E, I, O, U, L, N, R, S, T'.split(', ')
#   @group2 = 'D, G'.split(', ')
#   @group3 = 'B, C, M, P'.split(', ')
#   @group4 = 'F, H, V, W, Y'.split(', ')
#   @group5 = 'K'.split(', ')
#   @group6 = 'J, X'.split(', ')
#   @group7 = 'Q, Z'.split(', ')

#   @score = 0



#   def player_word word
#     @word = word
#     print 'What is your word'
#     word = gets.chomp.upcase
#     binding.pry
#   end

#   def contain_group1?
#     @group1.each do |letter|
#       if @word.include?(letter)
#         @score += 1
#       end
#     end
#   end

#   binding.pry

# end

#Jacks solution


class Scrabble

  attr_accessor :word

  def initialize word
    @word = word.downcase
    score
  end

  def scores
    {
     "a" => 1, "b" => 3, "c" => 3, "d" => 2, "e" => 1,
     "f" => 4, "g" => 2, "h" => 4, "i" => 1, "j" => 8,
     "k" => 5, "l" => 1, "m" => 3, "n" => 1, "o" => 1,
     "p" => 3, "q" => 10, "r" => 1, "s" =>1, "t" => 1,
     "u" => 1, "v" => 4, "w" => 4, "x" => 8, "y" => 4,
     "z" => 10
   }
  end

  def score
    sum = 0
    @word .chars.each do |character|
      puts "Character: #{ character}"
      sum += scores[character]
    end
    puts "The sum is #{ sum }"
  end
    #make an array of all the letters
    #use an each loop to itterate through them and get a score that particular letter
    #return the sum of all the scores
  end

  scrabble = Scrabble.new "soup"





