class PlanetsController < ApplicationController
  def index
    #runs through all the planets and puts them in @planets
    @planets = Planet.all
  end

  def new
  end

  def create
    Planet.create planet_params
    redirect_to planets_path
  end

  def show
    @planet = Planet.find params[:id]
  end

  def destroy
    planet = Planet.find params[:id]
    planet.destroy
    redirect_to planets_path
  end

  def edit
    @planet = Planet.find params[:id]
  end

  def update
    planet = Planet.find params[:id]
    planet.update planet_params
    redirect_to planets_path
  end

  private
  def planet_params #rails 4 white listing. White list basically the opposite of blackballing something.
    params.require(:planet).permit(:name, :image, :orbit, :diameter, :mass, :moons)
  end


end