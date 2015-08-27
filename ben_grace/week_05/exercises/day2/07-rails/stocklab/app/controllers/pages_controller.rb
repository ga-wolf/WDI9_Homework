class PagesController < ApplicationController

  def calc
    # raise params.inspect
      @symbol = params[:symbol]

        if @symbol && !@symbol.empty?
        @last_trade = YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)[@symbol].lastTrade
        @name = YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)[@symbol].name
        # when 'AAPL' then YahooFinance::get_quotes(YahooFinance::StandardQuote, @symbol)[@symbol].lastTrade
        # end
        end
    end
end