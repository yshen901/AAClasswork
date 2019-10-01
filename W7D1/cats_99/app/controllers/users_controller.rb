class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end
  def create
    # check if it can be saved
    @user = User.new(user_params)
    if @user.save # 
      # login(@user)
      redirect_to users_url
    else 
      render :new, status: 422 # render again, same page so previous input still there
    end
  end

  private
  def user_params 
    params.require(:user).permit(:user_name, :password)
  end
end
