class RocketsController < ApplicationController

  def index
    @rockets = Rocket.all
  end

  def new
  end

  def create
    Rocket.create rocket_params
    redirect_to rockets_path
  end

  def show
    @rocket = Rocket.find params[:id]
  end

  def destroy
    rocket = Rocket.find params[:id]
    rocket.destroy
    redirect_to rockets_path
  end

  def edit
    @rocket = Rocket.find params[:id]
  end

  def update
    rocket = Rocket.find params[:id]
    rocket.update rocket_params
    redirect_to rockets_path
  end

  private #added in rails 4, controversial. BLINDLY COPY/PASTE YOU INQUISITIVE CUNT!
  #rails 4 params whitelisting
  def rocket_params
    params.require(:rocket).permit(:name, :designer, :image, :year, :thrust, :mass, :height, :delV, :crew, :payload, :cost, :description)
  end
end