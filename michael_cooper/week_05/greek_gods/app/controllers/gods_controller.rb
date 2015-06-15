class GodsController < ApplicationController

  def index
    @gods = God.all
  end

  def create
  end

  def new
    God.create god_params
    redirect_to gods_path
  end

  def show
    @god = God.find params[:id]
  end

  def edit
    @god = God.find params[:id]
  end

  def update
    god = God.find params[:id]
    god.update god_params
    redirect_to gods_path
  end

  def delete
    god = God.find params[:id]
    god.destroy
    redirect_to gods_path
  end
  
  private
  def god_params
    params.require(:god).permit(:name, :image, :description, :faction, :symbol, :children)
  end

end