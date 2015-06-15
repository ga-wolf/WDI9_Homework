class PagesController < ApplicationController
  def landing
  end

  def time
    time = Time.now
    render :text => time
  end

  def uptime
    uptime = `uptime`.chomp
    render :text => uptime
  end

  def random
    # sleep 2
    @random = Random.rand(1..255)
    render :text => @random 
  end

  def info
    # sleep 1
    time = Time.now
    random = Random.rand(1..255)
    uptime = `uptime`.chomp
    info = {
      :time => time,
      :random => random,
      :uptime => uptime,
      :brother => %w{Groucho Harpo Chico Zeppo}.sample

    }

    render :text => info.to_json
  end
end
