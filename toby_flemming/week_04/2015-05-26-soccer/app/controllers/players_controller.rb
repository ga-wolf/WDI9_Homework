class PlayersController < ApplicationController

  def index
    @players = Player.all
  end

  def show
    @player = Player.find params[:id]
  end

  def new
    @player = Player.new
  end

  def edit
    @player = Player.find params[:id]
  end

  def create
    Player.create player_params
    redirect_to players_path
  end

  def update
    id = params[:id]
    player = Player.find id
    player.update player_params
    redirect_to player_path(id)
  end

  def destroy
    player = Player.find params[:id]
    player.destroy
    redirect_to players_path
  end

  private
  def player_params
    params.require(:player).permit(:first_name, :last_name, :age, :height, :weight, :position, :foot)
  end

end