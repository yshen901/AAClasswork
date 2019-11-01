# post request: $.ajax({method: "POST", url: "/api/session", data: {user:{username: 'asdf', password: "asdfasdf"}}}).then(()=> console.log("yay"));
# USE SINGULAR?!
class Api::SessionController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create 
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password]
    )

    if @user
      login!(@user)
      
      #must specify api/users/show because the show page is under another controller
      render 'api/users/show' 
    else
      render json: ["Wrong password/username"], status: 401
    end
       
  end

  def destroy
    if current_user
      logout!
      render json: { message: "Logout successful" }
    else
      render json: "No one is logged in", status: 404
    end
  end
end
