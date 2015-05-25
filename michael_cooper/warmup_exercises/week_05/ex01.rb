# You'll need these:

# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Examples

# "cabbage" should be scored as worth 14 points:

# 3 points for C
# 1 point for A, twice
# 3 points for B, twice
# 2 points for G
# 1 point for E
# And to total:

# 3 + 2*1 + 2*3 + 2 + 1
# = 3 + 2 + 6 + 3
# = 5 + 9
# = 14

class Scrabble
  attr_accessor :letter_key

  @letter_key = {
    :one => "A, E, I, O, U, L, N, R, S, T".split(', '),
    :two => "D, G".split(', '),
    :three => "B, C, M, P".split(', '),
    :four => "F, H, V, W, Y".split(', '),
    :five => ["K"],
    :eight => "J, X".split(', '),
    :ten => "Q, Z".split(', ')
  }

  def get_word prompt
    puts prompt
    gets.chomp
  end

  # def valid_word? word

  def play
    word = (get_word "Please enter a word").upcase
    total = 0
    # if valid_word? word
    word.chars.each do |char|
      case char
        when *@letter_key[:one]
          total += 1
        when *@letter_key[:two]
          total += 2
        when *@letter_key[:three]
          total += 3
        when *@letter_key[:four] 
          total += 4
        when *@letter_key[:five]
          total += 5
        when *@letter_key[:eight]
          total += 8
        when *@letter_key[:ten]
          total += 10
      end
    end
    puts "Total score is #{total}"
    puts "thankyou"
  end
end

scrabble = Scrabble.new
scrabble.play