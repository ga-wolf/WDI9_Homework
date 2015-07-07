class Phone
  attr_reader :phone_number

  def initialize(phone_number)
    @phone_number = phone_number
  end

  def number
    number = phone_number.gsub(/[^0-9]/, "")
    normalize(number)
  end

  def area_code
    number[0..2]
  end

  def exchange_code
    number[3..5]
  end

  def user_number
    number[6..9]
  end

  def to_s
    "(#{area_code}) #{exchange_code}-#{user_number}"
  end

  private
  def normalize(number)
    if valid?(number)
      number[/(\d{10}\z)/]
    else
      "0000000000"
    end
  end

  def valid?(number)
    return true if number.length == 10
    return true if number.length == 11 && number.start_with?("1")
    false
  end
end