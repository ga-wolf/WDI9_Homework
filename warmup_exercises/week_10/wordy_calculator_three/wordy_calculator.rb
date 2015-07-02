# Initialize
# Answer
# Too Complicated
# Matches
# Pattern
# Operation
# Number
# Chain

class WordProblem
  def initialize( question )
    @question = question
  end

  def answer
    if matches.nil?
      raise ArgumentError.new( "Sorry, there are no matches." )
    end
    @answer = number(1).send( operation(2), number(3) )
    unless chain.nil?
      @answer = @answer.send( operation(5), number(6) )
    end
    @answer
  end

  private
  def matches
    @matches = @question.match( pattern )
    binding.pry
  end

  def pattern
    operation = "(plus|minus|multiplied by|divided by)"
    /What is (-?\d+) #{operation} (-?\d+)( #{operation} (-?\d+))?\?/
  end

  def operation( num )
    case @matches[ num ]
      when "plus" then :+
      when "minus" then :-
      when "multiplied by" then :*
      when "divided by" then :/
    end
  end

  def number( num )
    @matches[ num ].to_i
  end

  def chain
    @matches[4]
  end
end