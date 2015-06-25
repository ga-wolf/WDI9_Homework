require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'

get '/stock' do
 @symbol = params[:symbol]

  if @symbol
    stock_data = YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)[@symbol]
    @result = stock_data.lastTrade if stock_data
  end
  erb :stock
end

