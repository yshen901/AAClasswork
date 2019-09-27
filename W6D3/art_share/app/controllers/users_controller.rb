class UsersController < ApplicationController
  def index
    if params.has_key?(:username)
      users = User.find_by(username: params[:username])
    else
      users = User.all
    end

    if users
      render json: users 
    else
      render plain: "No users found"
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user 
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    if user
      user.destroy
      render json: user 
    else
      render plain: "User doesn't exist", status: :unprocessable_entity
    end
  end

  def show
    user = User.find(params[:id])
    if user
      render json: user
    else
      render plain: "User doesn't exist", status: :unprocessable_entity
    end
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:username) #####????
  end
end