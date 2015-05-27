class RiversController < ApplicationController

  def index
    @rivers = River.all
  end

  def new
  end

  def create
    River.create river_params
    redirect_to rivers_path
  end

  def show
    @river = River.find params[:id]
  end

  def edit
    @river = River.find params[:id]
  end

  def destroy
    river = River.find params[:id]
    river.destroy
    redirect_to rivers_path
  end


  def update
    river = River.find params[:id]
    river.update river_params
    redirect_to rivers_path
  end




  private #can not be called from routes only can be called from inside this controller
  def river_params #Rails 4 params white listing
    params.require(:river).permit(:name, :image, :mouth, :source, :location, :length, :width)
  end


end