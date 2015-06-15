class Client
  attr_reader :name, :children, :age, :pets

  def initialize name, children, age
    @name = name
    @children = children
    @age = age
    @pets = []
  end

  def to_s
    "#{@name.upcase} - #{@age}yo with #{children} children and #{pets.length} pets"
  end

end