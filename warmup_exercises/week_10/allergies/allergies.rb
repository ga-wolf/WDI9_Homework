require 'pry'
class Allergies
  ALLERGENS = {
    1 => 'eggs',
    2 => 'peanuts',
    4 => 'shellfish',
    8 => 'strawberries',
    16 => 'tomatoes',
    32 => 'chocolate',
    64 => 'pollen',
    128 => 'cats'
  }

  def initialize( score )
    @score = score
  end

  def list
    allergies = []
    ALLERGENS.each do |bitflag, allergen|
      if ( @score & bitflag ) > 0
        allergies << allergen
      end
    end
    allergies
  end

  def allergic_to?( allergen )
    list.include?( allergen )
  end

end