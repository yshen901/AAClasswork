# resources :users, only: [:create, :new, :show]
class UsersController < ApplicationController

  #creates an empty object
  #then we create a form, that takes in values
  #then when you click submit, you run the form action...post/create...
  #     that creates a new user using the values you put into the form as params
  def new
    @user = User.new
    render :new
  end


  #note: only use ID when ur looking for something
  #activated by the submit button on the new form
  #makes a new user using the parameters from the form
  def create
    @user = User.new(user_params)
    if @user.save
      log_in_user!(@user) #this method does: session[:session_token] = @user.reset_session_token!
      redirect_to user_url(@user.id)
    else
      redirect_to new_user_url #get these using rails routes
    end
  end

  #uses the id in the parameters hash (which you get from the wildcard) to find a user
  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private

  #params are taken from wildcards, query, and body
  #require makes it so only params in the user hash are looked at
  #permit whitelists specific key-value pairs in said user hash
  def user_params
    params.require(:users).permit(:email, :password)
  end
end
