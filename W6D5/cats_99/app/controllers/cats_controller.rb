class CatsController < ApplicationController
  def index
    # keep it simple, list cats and link to the show pages
    @cats = Cat.all
    render :index # implied. 
  end

  def show 
    @cat = Cat.find_by(id: params[:id])
    if @cat
      render :show
    else
      render json: "Imaginary cats aren't real", status: 418
    end
  end

  def new
    @cat = Cat.new
    render :new
  end

  def edit 
    @cat = Cat.find_by(id: params[:id]) 
    render :edit
  end

  private
  
  def cat_params
    params.require(:cat).permit(:birth_date, :color, :name, :sex, :description)
  end
end
