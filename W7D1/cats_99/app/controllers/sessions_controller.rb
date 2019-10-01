class SessionsController < ApplicationController
  def new
    render :new
  end 

  def create
    # verify username and password.
    @user = User.find_by_credentials(
      params[:user][:user_name], 
      params[:user][:password] 
    ) 
    if @user 
      session[:session_token] = @user.reset_session_token!
      redirect_to cats_url
    else
      render json: "Invalid Login", status: 402
    end 
  end
end
