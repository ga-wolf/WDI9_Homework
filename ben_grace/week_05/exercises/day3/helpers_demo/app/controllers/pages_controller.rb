class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 234
    @large_number = 3248238
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a
    @person_count = 1
    @people_count = 15
    @story = 'A very very long long long like super long long time ago. There was some soup. Some delicious soup that was heaps soupy like extra extra soupy my god..'*15
  end

  def assets
  end

  def url
  end
end
