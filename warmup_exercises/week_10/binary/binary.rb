class Binary
  attr_accessor :digits
  def initialize( string )
    # Run the validate method upon the string
    # Reverse the characters, and turn it into an array
    # Use the collect method to turn each element into an integer
    #   This is really powerful
    @digits = validate( string ).reverse.chars.collect( &:to_i )
  end

  def to_decimal
    # Go through each thing in the array and store the index
    # But also use the reduce method - this a way of collapsing (or reducing) an array (or collection) of values into a single thing.  We pass in a starting point here (which is zero, but doesn't have to be)
    # We have used parallel assignment behind the scenes, but the brackets in the parameter box is a thing called destructuring array assignment
    #   The reason we had to use this is because we changed methods.  The each_with_index method's parameters were never stored, so they were stored as an array in the second parameter slot in the reduce methods parameter box
    #   Stems from here - http://www.linuxtopia.org/online_books/programming_books/ruby_tutorial/Ruby_Expressions_Parallel_Assignment.html
    #   Worth having a look here - http://stackoverflow.com/questions/16405417/ruby-inject-with-index-and-brackets
    @digits.each_with_index.reduce( 0 ) do |sum, ( el, index )|
      sum + ( el * ( 2 ** index ))
    end
  end

  private
  def validate( string )
    # Checks to see if there is anything other than 0s or 1s
    #   The ^ is an important value in Regexp, it says else
    # Luckily, the match method returns true or false
    #   This means we can use a ternary conditional ( more or less a compressed if statement )
    #   After the question mark, there are two things
    #     The one on the left is for the true case
    #     The one on the right is for the false case
    string.match( /[^01]/ ) ? "0" : string
  end

end