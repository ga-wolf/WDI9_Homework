class PlanetsController < ApplicationController
  def index
    @planets = Planet.all.sort_by { |a| (a.radius.to_i) }
    radii = Planet.all.map { |planet| planet["radius"].to_f }
    @max = radii.max.ceil
    @min = radii.min.ceil
  end

  def create
    planet = Planet.create planet_params
    redirect_to planet
  end

  def new
    @planet = Planet.new
  end

  def edit
    @planet = Planet.find params[:id]
  end

  def show
    radii = Moon.all.map { |moon| moon["radius"].to_f }
    @min = radii.min.ceil
    @planet = Planet.find params[:id]
    @max = @planet.radius.to_f.ceil
    @moons = Moon.all
  end

  def update
    planet = Planet.find params[:id]
    planet.update planet_params
    redirect_to planet
  end

  def destroy
    planet = Planet.find params[:id]
    planet.destroy
    redirect_to planets_path
  end

  private
  def planet_params
    params.require(:planet).permit(:name, :orbit, :mass, :radius, :image)
  end

end
