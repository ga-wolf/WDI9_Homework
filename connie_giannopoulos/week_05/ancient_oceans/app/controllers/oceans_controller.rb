class OceansController < ApplicationController
  
  def index
    @oceans = Ocean.all
  end

  def new
  end

  def create
  Ocean.create ocean_params
  redirect_to oceans_path
  end

  def show
    @ocean = Ocean.find params[:id]
  end


  def destroy
    ocean = Ocean.find params[:id]
    ocean.destroy
    redirect_to oceans_path
  end


  def edit
    @ocean = Ocean.find params[:id]
  end

  def update
    ocean = Ocean.find params[:id]
    ocean.update ocean_params
    redirect_to oceans_path
  end

  private
  def ocean_params # Rails 4 Params White Listing
    params.require(:ocean).permit(:name, :image, :depth, :location, :climate, :life_forms, :time_period)
  end

end


