class Animal
  attr_accessor :name, :age, :gender, :species, :toys

  def initialize(name, age, gender, species, toys=[])
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = toys
  end

  def toys?
    @toys.length
  end

  def detail_info?
    "#{@name}, #{@age}, #{@gender}, #{@species}, #{@toys}"
  end

end

