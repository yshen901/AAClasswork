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
    # debugger
    render :edit
  end

  def create
    @cat = Cat.create(cat_params)
    if @cat.save
      redirect_to cats_url
    else
      render json: @cat.errors.full_messages, status: 402
    end
  end

  def destroy
    @cat = Cat.find_by(id: params[:id])
    if @cat
      @cat.delete
      redirect_to cats_url
    else
      render json: @cat.errors.full_messages, status: 418
    end

  end

  def update
    @cat = Cat.find_by(id: params[:id])
    if @cat
      @cat.update(cat_params)
      redirect_to cats_url
    else
      render json: @cat.errors.full_messages, status: 402
    end
  end

  private
  
  def cat_params
    params.require(:cat).permit(:birth_date, :color, :name, :sex, :description)
  end
end
