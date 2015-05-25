require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

$secret_number = 0

get '/' do
 
  erb :home
end

get '/games/magic8' do

  erb :magic8
end

get '/games/secret' do
  secret_n
  erb :secret
end

def secret_n

    $secret_number = rand(1..100)

end

post '/games/secret' do
 
  number = params['number'].to_i

  if number == $secret_number
    redirect to('/games/secret/win')
  elsif number > $secret_number
    redirect to('/games/secret/lower')
  else
    redirect to('/games/secret/higher')
  end

end


get '/games/secret/:guess' do

      @down_arrow = "hide"
      @up_arrow = "hide"
      @result = "Guess Again!"


  case params[:guess]
    when 'win'
      @result = "You guessed correctly! <span class='snumguess'>#{$secret_number}</span> is the secret number!"
      secret_n
    when 'lower'
      @down_arrow = "blink"
  
    when 'higher'
      @up_arrow = "blink"
    end

  erb :secret2
end

get '/games/secret2' do
  @result = 'Guess Again!'
  @down_arrow = "hide"
  @up_arrow = "hide"
  erb :secret2
end


get '/games/rps' do

erb :rps
  
end


get '/games/rps2' do

erb :rps2
  
end



get '/games/rps/:throw' do
  case params[:throw]
   when "rock"
      details = rps_cpu('rock')
      @result = details.first
      @cpu_pic = details.last
    erb :rock
   when "paper"
      details = rps_cpu('paper')
      @result = details.first
      @cpu_pic = details.last
    erb :paper
   when "scissors"
      details = rps_cpu('scissors')
      @result = details.first
      @cpu_pic = details.last
    erb :scissors
  end
end


get "/games/magic8/eight" do
  yn = rand(1..2)
  @answer =""

    if yn == 1 #yes

        @answer = quote_me("yes")
    else

        @answer = quote_me("no")
    end

  erb :magic8answer

end







get "/games/magic8/cookie" do

   @answer = quote_me("fortune")


  erb :magic8answer
end


def quote_me(table)

        max = db_query "SELECT COUNT(*) FROM #{ table }"
        max = max.first[0]

        number = rand(1..max)


        quote = db_query "SELECT * FROM #{ table } WHERE id = #{ number }"
        


        quote.first[1]

end









def rps_cpu(pick)
  out = []
  result= "You Win!"
  cpu=""
  cpu_picture =""
  case rand(1..3)
    when 1
    cpu_picture = "/rock.png"
    cpu = "rock"
    when 2
    cpu_picture = "/paper.png"
    cpu = "paper"
    when 3
    cpu_picture = "/scissors.png"
    cpu = "scissors"
  end

  if pick == cpu
    result = "Its a draw"
  elsif pick == "rock" && cpu == "scissors"
   
  elsif pick == "paper" && cpu == "rock"
    
  elsif pick == "scissors" && cpu == "paper"
    
  else
    result = "You Loose!"
  end

  out << result
  out << cpu_picture

end


def db_query(sql)
  db = SQLite3::Database.new 'maingame.db'


  db.results_as_hash = true

  result = db.execute sql

  db.close

  result
end


