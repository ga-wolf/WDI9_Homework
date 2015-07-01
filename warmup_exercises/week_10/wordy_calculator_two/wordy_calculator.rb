# We need our class
  # We need a initialize method
    # It needs to declare an instance variable
  # We need an answer method
    # Checks to see if there are any matches ( maybe that would be good in its own method )
    # Sort out which operation it is ( in another method )
    # Figure out the answer
    # Return it
require 'pry'
class WordProblem
  def initialize( question )
    @question = question
  end

  def answer
    if matches.nil?
      raise ArgumentError.new( "Sorry, there are no matches." )
    end
    @answer = @matches[1].to_i.send( operation, @matches[3].to_i )
  end

  def matches
    @matches = @question.match( /What is (-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)\?/ )
  end

  def operation
    case @matches[2]
      when "plus" then :+
      when "minus" then :-
      when "multiplied by" then :*
      when "divided by" then :/
    end
  end
end