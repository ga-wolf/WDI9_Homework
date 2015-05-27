class Client
  attr_accessor :name, :age, :gender, :kids, :pets

  def initialize(name, age, gender, kids)
    @name = name
    @age = age
    @gender = gender
    @kids = kids
    @pets = []
  end

  def pets?
    @pets.length
  end

  def detail_info?
    "#{@name}, #{@gender}, #{@age}, kids: #{@kids}, pets: #{@pets}"
  end

end