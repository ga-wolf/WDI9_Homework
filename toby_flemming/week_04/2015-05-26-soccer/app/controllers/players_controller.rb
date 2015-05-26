class PlayersController < ApplicationController

  def index
    @players = Player.all
  end

  def show
    @player = Player.find params[:id]
  end

  def new
  end

  def create
    Player.create player_params
    redirect_to players_path
  end

  private
  def player_params
    params.require(:player).permit(:first_name, :last_name, :age, :height, :weight, :position, :foot)
  end

end