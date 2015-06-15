class MoonsController < ApplicationController

  def index
    @moons = Moon.all.sort_by { |a| (a.radius.to_i) }
    radii = Moon.all.map { |moon| moon["radius"].to_f }
    @max = radii.max.ceil
    @min = radii.min.ceil
  end

  def create
    moon = Moon.create moon_params
    redirect_to moon
  end

  def new
    @moon = Moon.new
  end

  def edit
    @moon = Moon.find params[:id]
  end

  def show
    @moon = Moon.find params[:id]
  end

  def update
    moon = Moon.find params[:id]
    moon.update moon_params
    redirect_to moon
  end

  def destroy
    moon = Moon.find params[:id]
    moon.destroy
    redirect_to moons_path
  end

  private
  def moon_params
    params.require(:moon).permit(:name, :orbit, :mass, :radius, :image, :planet)
  end

end
