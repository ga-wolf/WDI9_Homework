class Crypto

  attr_reader :phrase

  def initialize(phrase)
    @phrase = phrase
  end

  def normalize_plaintext
    phrase.gsub(/[^0-9a-zA-Z]/, "").downcase
  end

  def size
    Math.sqrt(normalize_plaintext.length).ceil
  end

  def plaintext_segments
    normalize_plaintext.scan(/.{1,#{size}}/)
  end

  #plaintext_segments[0].zip plaintext_segments[1..-1]
  #clean up nil value

  def ciphertext
    cipher_text = []
    plaintext_segments.each do |segment|
      segment.chars.each_with_index do |letter, i|
        cipher_text[i] ||= []
        cipher_text[i] << letter
      end
    end
    cipher_text.join
  end

  def normalize_ciphertext
    ciphertext.scan(/.{1,5}/).join(" ")
  end

end