# YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)[@symbol].lastTrade

require 'sinatra'
require 'sinatra/reloader'
require 'YahooFinance'

# get '/calc' do
#   @x = params[:x].to_f
#   @y = params[:y].to_f

get '/calc' do
  @symbol = params[:symbol]

  if !@symbol.empty?
  @last_trade = YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)[@symbol].lastTrade
  @name = YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)[@symbol].name
  # when 'AAPL' then YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)[@symbol].lastTrade
  # end
  end
  erb :calc

end

# get '/calc/multiply/:x/:y' do
#   @result = params[:x].to_f * params[:y].to_f
#   erb :calc
# end

# get 'calc/add/:x/:y' do
#   @result = params[:x].to_f + params[:y].to_f
#   erb :calc
# end